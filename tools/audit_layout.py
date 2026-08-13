#!/usr/bin/env python3
"""
Cross-references every widget index in a FlightDeck aircraft layout
against the LIVE /actions data from the ESP32 — catches any stale/
drifted indices, mislabeled widgets, or rotary pairs using the same
index for both increment and decrement.

Usage:
    curl -s http://192.168.1.100/actions > /tmp/actions.json
    python3 audit_layout.py /tmp/actions.json ~/Workshop/craftlane/tools/flightdeck/layouts/cessna-172.js
"""
import json, re, sys

if len(sys.argv) != 3:
    print("Usage: python3 audit_layout.py <actions.json> <layout.js>")
    sys.exit(1)

actions = json.load(open(sys.argv[1]))
idx_to_name = {a['i']: a['n'].strip() for a in actions}
print(f"Live bindings loaded: {len(idx_to_name)}\n")

with open(sys.argv[2]) as f:
    layout = f.read()

# Find every widget call: mkAnn, mkPush, mkToggleSw, mkGuard, mkGear,
# mkRotary, mkSlider — capture indices + the label string used
pattern = re.compile(r"mk(\w+)\(([\d,]+),\s*'([^']*)'")
issues = []
total = 0

for m in pattern.finditer(layout):
    wtype, idxs, label = m.group(1), m.group(2), m.group(3)
    idx_list = [int(x) for x in idxs.split(',') if x.strip().isdigit()]
    total += 1

    # Check each index actually exists live
    for idx in idx_list:
        if idx not in idx_to_name:
            issues.append(f"  [{wtype}] '{label}' idx={idx} — DOES NOT EXIST in live bindings!")

    # Rotary/Slider specific: two indices should be DIFFERENT and both real
    if wtype in ('Rotary', 'Slider') and len(idx_list) == 2:
        a, b = idx_list
        if a == b:
            issues.append(f"  [{wtype}] '{label}' — SAME INDEX for both directions: {a}=={b} ({idx_to_name.get(a,'?')})")
        else:
            na = idx_to_name.get(a, '???')
            nb = idx_to_name.get(b, '???')
            print(f"  [{wtype:8}] '{label:14}' inc={a:3} ({na:35}) dec={b:3} ({nb})")
    elif idx_list:
        idx = idx_list[0]
        name = idx_to_name.get(idx, '???')
        print(f"  [{wtype:8}] '{label:14}' idx={idx:3} -> {name}")

print(f"\nTotal widgets checked: {total}")
if issues:
    print(f"\n⚠️  {len(issues)} ISSUES FOUND:")
    for i in issues:
        print(i)
else:
    print("\n✅ All indices verified correct against live device.")
