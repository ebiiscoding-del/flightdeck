// FlightDeck Aircraft Layout: Cessna 172 Skyhawk
// Fixed-gear, fixed-pitch-prop, single-engine trainer.
// No spoilers, no autothrottle, no cowl flap lever, no gear switch.

window.AIRCRAFT_LAYOUT = {
  aircraft: "Cessna 172 Skyhawk",
  id: "cessna-172",

  CATS: ['Autopilot','Flight Ctrl','Engine','Instruments','Brakes','Lights','Radio','Tools'],
  ABBR: ['AP','FLT','ENG','INST','BRK','LGT','RADIO','TOOL'],
  CAT_C: ['#67d4ff','#6dffad','#ffbd59','#8ec5ff','#ff8a65','#ffe082','#7fd9c4','#90caf9'],
  CAT_DESC: [
    'KAP-140 style single axis autopilot',
    'Flaps and trim — fixed gear, no spoilers',
    'Fixed-pitch prop, carbureted Lycoming',
    'Basic six-pack instruments',
    'Toe brakes and parking brake',
    'Nav, beacon, strobe, landing, taxi',
    'NAV/COM stack and transponder',
    'Ground ops and checklist'
  ],

  PANELS: [
    // ── AUTOPILOT (KAP-140 style: HDG, NAV, APR, ALT, no VS/glideslope autothrottle) ──
    function(){ return [
      mkAnn(0,'AP MASTER',true,'ON'),
      mkAnn(6,'HDG',true,'SEL'),
      mkAnn(3,'ALT',true,'HOLD'),
      mkAnn(8,'NAV',true,'ARM'),
      mkAnn(4,'APR',true,'ARM'),
      mkAnn(9,'V/S',true,'HOLD'),
      mkPush(15,'ALT REF +','\u2b06'),
      mkPush(16,'ALT REF -','\u2b07'),
      mkAnn(1,'AP DISC',false,'DISC'),
    ];},

    // ── FLIGHT CONTROLS (flaps 0/10/20/30, elevator trim wheel, no spoilers/gear) ──
    function(){ return [
      mkPush(24,'FLAPS UP','\u2b06'),
      mkPush(25,'FLAPS DN','\u2b07'),
      mkPush(26,'FLAPS RETR','\u21d1'),
      mkPush(27,'FLAPS EXT','\u21d3'),
      mkRotary(36,37,'ELEV TRIM','#6dffad'),
    ];},

    // ── ENGINE (Lycoming O-320: mixture, throttle, carb heat via cowl toggle, magnetos, master switches) ──
    function(){ return [
      mkSlider(42,43,'THROTTLE','#ffbd59'),
      mkSlider(46,47,'MIXTURE','#ffbd59'),
      mkAnn(111,'BAT MASTER',true,'ON'),
      mkAnn(110,'ALT MASTER',true,'ON'),
      mkAnn(112,'BAT+ALT',true,'ON'),
      mkPush(116,'MAG BOTH','\u26a1'),
      mkPush(117,'MAG LEFT','\u21d0'),
      mkPush(119,'MAG RIGHT','\u21d2'),
      mkPush(118,'MAG OFF','\u25cb'),
      mkPush(120,'MAG START','\u25b6'),
      mkAnn(121,'IGNITION',true,'ON'),
      mkAnn(108,'CARB/ANTI-ICE',true,'ON'),
      mkAnn(109,'PITOT HEAT',true,'ON'),
      mkPush(123,'FUEL BOTH','\u25b2'),
      mkPush(124,'FUEL OFF','\u25bc'),
    ];},

    // ── INSTRUMENTS ──
    function(){ return [
      mkPush(59,'SET BARO','\u25cf'),
      mkRotary(239,240,'HDG BUG','#8ec5ff'),
      mkRotary(236,235,'VOR OBS','#ffe082'),
      mkPush(67,'XPDR','\u2708'),
    ];},

    // ── BRAKES (toe brakes + parking brake — no autobrake) ──
    function(){ return [
      mkGuard(70,'PARK BRAKE',true),
      mkPush(95,'LEFT BRAKE','\u25c4'),
      mkPush(96,'RIGHT BRAKE','\u25ba'),
    ];},

    // ── LIGHTS (nav, beacon, strobe, landing, taxi — no logo/wing lights on 172) ──
    function(){ return [
      mkAnn(212,'NAV LIGHT',true,'ON'),
      mkAnn(211,'BEACON',true,'ON'),
      mkAnn(210,'STROBES',true,'ON'),
      mkAnn(209,'LANDING LGT',true,'ON'),
      mkAnn(213,'TAXI LIGHT',true,'ON'),
      mkAnn(214,'INT LIGHTS',true,'ON'),
    ];},

    // ── RADIO (single COM/NAV stack, no dual redundancy needed) ──
    function(){ return [
      mkPush(229,'COM RADIO','\u25cf'),
      mkPush(230,'COM1 STDBY','\u25cf'),
      mkAnn(231,'COM1 SWAP',true,'ON'),
      mkRotary(233,232,'NAV1 FREQ','#7fd9c4'),
      mkAnn(234,'NAV1 SWAP',true,'ON'),
      mkPush(237,'SET XPDR','\u25cf'),
    ];},

    // ── TOOLS (ground ops) ──
    function(){ return [
      mkAnn(76,'PUSHBACK',true,'ON'),
      mkPush(216,'CHECKLIST','\u2713'),
      mkAnn(77,'FLIGHT ASST',true,'ON'),
    ];}
  ],

  EXTRA_PANELS: []
};
