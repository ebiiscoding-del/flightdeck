#!/usr/bin/env python3
"""
Finds a genuinely unused key combo in the ESP32's binding table —
use this BEFORE adding a new binding or fixing a conflict, instead
of guessing and checking afterward.

Usage:
    python3 find_free_combo.py /path/to/msfs_panel_v28_clean.ino
"""
import re, sys

if len(sys.argv) != 2:
    print("Usage: python3 find_free_combo.py <firmware.ino>")
    sys.exit(1)

with open(sys.argv[1]) as f:
    content = f.read()

bind_start = content.find('static ToggleEntry g_toggles[]')
bind_end = content.rfind('\n};', bind_start, bind_start+300000)
table = content[bind_start:bind_end]
entries = re.findall(
    r'\{"([^"]+)",\s*"([^"]+)",\s*(true|false)\s*,\s*(true|false)\s*,\s*([^,]+),\s*([^\}]+)\}',
    table
)

def normalize_mod(mod): return '|'.join(sorted(mod.strip().split('|')))
def normalize_key(key): return key.strip().rstrip(',').strip()

used_combos = set()
for name, cat, tog, state, mod, key in entries:
    used_combos.add((normalize_mod(mod), normalize_key(key)))

print(f"Total bindings in table: {len(entries)}")
print(f"Total combos already used: {len(used_combos)}\n")

# Search combos in order of "cleanliness" — prefer single-mod letter
# combos (easy to remember, unlikely to collide) over exotic ones.
MOD_PRIORITY = [
    ('MOD_LCTRL|MOD_LALT', 'Ctrl+Alt'),
    ('MOD_LCTRL|MOD_LSHIFT', 'Ctrl+Shift'),
    ('MOD_LSHIFT|MOD_LALT', 'Shift+Alt'),
]

print("Free candidates (Ctrl+Alt / Ctrl+Shift / Shift+Alt + letter):\n")
found = []
for mod_val, mod_name in MOD_PRIORITY:
    for letter in 'qwertyuiopasdfghjklzxcvbnm':
        combo = (mod_val, f"'{letter}'")
        if combo not in used_combos:
            found.append(f"  {mod_name}+{letter.upper()}")
    if len(found) >= 15:
        break

for f in found[:15]:
    print(f)

print(f"\n{len(found)} free combos found. Pick any — none collide with the current table.")
print("Remember: verify it's ALSO free in MSFS's default keybind scheme")
print("before assuming it 'just works' without a manual bind.")
