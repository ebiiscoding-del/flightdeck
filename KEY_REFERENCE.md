# FlightDeck — Key Verification & Conflict Reference

Living document. Update this every time a new special key gets tested,
or a new conflict gets discovered/resolved. Check this BEFORE adding
any binding that uses a special (non-letter/digit) key to a new layout.

## Special key constants — hardware-verified status

| Constant | Status | Evidence |
|---|---|---|
| `KEY_PAGE_UP` | ✅ GOOD | Confirmed via Alt Ref + in MSFS |
| `KEY_PAGE_DOWN` | ✅ GOOD | Confirmed via Alt Ref - in MSFS |
| `KEY_INSERT` | ❌ BAD | Confirmed — produces same output as `'5'` on this ESP32-S3's USB HID stack |
| `KEY_DELETE` | ❓ UNTESTED | High risk — adjacent to confirmed-bad KEY_INSERT |
| `KEY_HOME` | ❓ UNTESTED | High risk — adjacent to confirmed-bad KEY_INSERT |
| `KEY_END` | ❓ UNTESTED | High risk — adjacent to confirmed-bad KEY_INSERT |
| `KEY_F1`–`KEY_F12` | ❓ UNTESTED | Used by several AP mode buttons — verify before trusting |
| `KEY_UP/DOWN/LEFT/RIGHT` | ❓ UNTESTED | Used by camera controls |
| `KEY_KP0`–`KEY_KP9`, `KEY_KP_*` | ❓ UNTESTED | Used by flight control direct-key bindings |
| `KEY_NUM_SLASH`, `KEY_NUM_ASTERISK` | ❓ UNTESTED | Used by brake bindings |
| `KEY_TAB`, `KEY_RETURN`, `KEY_PAUSE`, `KEY_BACKSPACE` | ❓ UNTESTED | Used sparingly |

**Rule of thumb:** plain letter/digit keys (`'a'`, `'1'`, etc.) with modifiers
have been reliable throughout (AP Master = Ctrl+1 works fine). The risk is
specifically concentrated in the "special" navigation-cluster and function
keys. When in doubt, prefer a modifier + letter combo over a special key —
verify via `find_free_combo.py` and confirm it's not already an MSFS default
for something else via Search-by-Input before shipping it in a layout.

## How to test an unverified key

1. Wire it to a temporary push button in any layout (bypasses gestures entirely)
2. Tap it while watching MSFS: Controls → Search by Input
3. Confirm the *correct* command lights up — not a mismatched one
4. Update this table with the result

## Fixed conflicts

| Combo | Was | Fix |
|---|---|---|
| `Alt+P` | Pushback vs Toggle Fuel Pump (both live on C172 panel) | Moved Fuel Pump to `Ctrl+Alt+Q` — **requires manual MSFS bind** |
| `Ctrl+Insert`/`Ctrl+Delete` | Heading Bug inc/dec (KEY_INSERT bug + MSFS ships unbound) | Moved to `Ctrl+Alt+PageUp`/`Ctrl+Alt+PageDown` — **requires manual MSFS bind** |

## Dormant conflicts (not currently active, but will break if BOTH sides ever appear in the same layout)

These share a key combo. Currently only one side is exposed on the C172
panel, so there's no active collision — but adding the other side to any
future aircraft layout (or a shared/default layout) would break both.

| Combo | Binding A | Binding B |
|---|---|---|
| Ctrl+F2 | AP Altitude Hold | Prop Pitch Dec |
| Ctrl+F3 | AP Approach Hold | Prop Pitch Inc |
| Ctrl+PageUp | Alt Ref + | Drone Attach Next |
| Ctrl+PageDown | Alt Ref - | Drone Attach Prev |
| (no mod) V | Flaps Up | Display Map |
| (no mod) L | Aileron Trim R | Toggle Interior Lights |
| (no mod) K | Elevator Trim Up | Load Next Custom Camera |
| (no mod) O | Rudder Trim R | Toggle Strobes |
| (no mod) F | Throttle - | Fixed Camera Reset |
| Ctrl+Y | Mixture Rich | Cond Lever Hi Idle |
| Ctrl+H | Mixture Lean | Cond Lever Cut Off |
| (no mod) H | Cond Lever - | Toggle Anti Ice |
| Alt+1 | Flight Assistant | Load Custom Camera 1 |
| Alt+N | Next Flt Phase | Toggle Nav Light |

**Before building any new aircraft layout:** cross-check its planned widget
list against this table. If a layout would expose both sides of any row
above, resolve it the same way we fixed Alt+P — move one side to a free
combo via `find_free_combo.py`, and note whether it now needs a manual
MSFS bind (only true default-bound combos work without one).

## Tools

- `audit_layout.py <actions.json> <layout.js>` — full correctness check
  against the live device (indices exist, no same-index rotaries, labels
  semantically match)
- `find_free_combo.py <firmware.ino>` — lists genuinely unused combos
  before you add a new binding
