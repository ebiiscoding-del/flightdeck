// FlightDeck Aircraft Layout Template
// Copy this file, rename to your-aircraft-id.js, edit, then:
//   1. Add an entry to manifest.json
//   2. Commit + push to your GitHub repo
//   3. Select it in the panel's aircraft picker
//
// idx values reference the FIXED binding table on the ESP32 (see /actions
// endpoint for the full list). These never change per aircraft -- only
// which widgets you show, and how they're grouped, changes here.
//
// Widget factories available (same as firmware):
//   mkAnn(idx, label, isToggle, onText)
//   mkPush(idx, label, icon)
//   mkToggleSw(idx, label)
//   mkGuard(idx, label, isToggle)
//   mkGear(idx)
//   mkRotary(incIdx, decIdx, label, color)
//   mkSlider(upIdx, downIdx, label, color)

window.AIRCRAFT_LAYOUT = {
  aircraft: "My Aircraft Name",
  id: "my-aircraft-id",

  CATS: ['Autopilot','Flt Ctrl','Engine'],
  ABBR: ['AP','FLT','ENG'],
  CAT_C: ['#67d4ff','#6dffad','#ffbd59'],
  CAT_DESC: ['Autopilot controls','Flight controls','Engine controls'],

  PANELS: [
    function(){ return [
      mkAnn(0,'AP MASTER',true,'CMD'),
      mkRotary(17,18,'IAS REF','#67d4ff'),
    ];},
    function(){ return [
      mkGear(31),
      mkAnn(28,'SPOILERS',true,'ARM'),
    ];},
    function(){ return [
      mkSlider(42,43,'THROTTLE','#ffbd59'),
    ];}
  ],

  EXTRA_PANELS: []
};
