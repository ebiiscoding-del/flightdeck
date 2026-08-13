// FlightDeck Aircraft Layout: DEFAULT
// This is the fallback layout, embedded in firmware and mirrored here
// for reference. All aircraft-specific layouts follow this same shape.
//
// idx values reference the fixed binding table on the ESP32 — these
// never change per aircraft. Only which widgets appear, and how they're
// arranged, changes.
//
// Refreshed to match the current 241-binding firmware (includes the
// Increase/Decrease Heading Bug bindings at [239]/[240]).

window.AIRCRAFT_LAYOUT = {
  aircraft: "Default (All Controls)",
  id: "default",

  CATS: ['Autopilot','Flt Ctrl','Engine','Instr','Brakes','Lights','Tools','Comms','FMS','Camera','Misc','Radio'],
  ABBR: ['AP','FLT','ENG','INST','BRK','LGT','TOOL','COM','FMS','CAM','MISC','RADIO'],
  CAT_C: ['#4fc3f7','#6dffad','#ffbd59','#8ec5ff','#ff8a65','#ffe082','#b0bec5','#90caf9','#67d4ff','#c080ff','#ff9060','#7fd9c4'],
  CAT_DESC: ['Autopilot modes and reference controls','Original flight control commands','Original engine controls','Original instrument controls','Original brake controls','Original light controls','Original simulator tools','Original ATC and communication controls','FMS style page','Camera and View Controls','Fuel Lights Misc','NAV, COM, VOR and transponder radios'],

  PANELS: [

  function(){ return [
    mkAnn(0,'AP Master',true,'CMD'),
    mkAnn(21,'Arm Auto Throttle',true,'ARM'),
    mkAnn(1,'AP Disengage',false,'DISC'),
    mkAnn(6,'AP Heading Hold',true,'SEL'),
    mkAnn(3,'AP Altitude Hold',true,'HOLD'),
    mkAnn(2,'AP Airspeed Hold',true,'HOLD'),
    mkAnn(9,'AP VS Hold',true,'HOLD'),
    mkAnn(4,'AP Approach Hold',true,'APPR'),
    mkAnn(5,'AP Attitude Hold',true,'HOLD'),
    mkAnn(10,'AP Flt Lvl Change',true,'FLCH'),
    mkAnn(11,'AP Localizer Hold',true,'LOC'),
    mkAnn(12,'AP Mach Hold',true,'MACH'),
    mkAnn(8,'AP NAV1 Hold',true,'NAV'),
    mkAnn(13,'AP Wing Leveler',true,'LVL'),
    mkAnn(7,'AP N1 Hold',true,'N1')
  ,
    mkRotary(17,18,'Airspeed Ref','#67d4ff'),
    mkRotary(15,16,'Alt Ref','#8ec5ff',100),
    mkRotary(19,20,'VS/N1 Ref','#6dffad'),
    mkAnn(22,'AT Disconnect',false,'DISC'),
    mkAnn(23,'AT to GA',false,'SEND'),
    mkAnn(14,'Set N1 Ref',false,'SEND')
  ,
    mkPush(16,'ALT REF -','\u25cf'),
    mkPush(18,'AIRSPEED RE','\u25cf'),
    mkPush(20,'VS/N1 REF -','\u25cf'),
    mkPush(179,'AP OFF','\u25cf'),
    mkAnn(180,'AP ON',true,'ON'),
    mkAnn(181,'TOGGLE FLIG',true,'ON'),
    mkAnn(182,'TOGGLE YAW',true,'ON'),
    mkAnn(183,'TOGGLE AVIO',true,'ON'),
];},
  function(){ return [
    mkPush(24,'Flaps Up','\u2b06'),
    mkPush(25,'Flaps Down','\u2b07'),
    mkPush(26,'Flaps Retract','\u2b06\u2b06'),
    mkPush(27,'Flaps Extend','\u2b07\u2b07'),
    mkAnn(28,'Spoilers Arm',true,'ARM'),
    mkRotary(29,30,'Spoilers','#6dffad'),
    mkGear(31),
    mkAnn(32,'Water Rudder',true,'EXT'),
    mkAnn(33,'AutoRudder',true,'ON'),
    mkRotary(34,35,'Aileron Trim','#6dffad'),
    mkRotary(36,37,'Elevator Trim','#8ec5ff'),
    mkRotary(38,39,'Rudder Trim','#ffbd59')
  ,
    mkPush(30,'SPOILERS -','\u25cf'),
    mkPush(35,'AILERON TRI','\u25cf'),
    mkPush(37,'ELEVATOR TR','\u25cf'),
    mkPush(39,'RUDDER TRIM','\u25cf'),
    mkPush(188,'AILERON LEF','\u25cf'),
    mkPush(189,'AILERON RIG','\u25cf'),
    mkPush(190,'CENTER AILE','\u25cf'),
    mkPush(191,'ELEVATOR DO','\u25cf'),
    mkPush(192,'ELEVATOR UP','\u25cf'),
    mkAnn(193,'TOGGLE WATE',true,'ON'),
    mkPush(194,'RUDDER LEFT','\u25cf'),
    mkPush(195,'RUDDER RIGH','\u25cf'),
    mkPush(196,'FLAPS DEC','\u25cf'),
    mkPush(197,'FLAPS INC','\u25cf'),
    mkPush(198,'FLAPS EXTEN','\u25cf'),
    mkPush(199,'FLAPS RETRA','\u25cf'),
    mkAnn(200,'TOGGLE SPOI',true,'ON'),
    mkPush(201,'AILERON TRI','\u25cf'),
    mkPush(202,'AILERON TRI','\u25cf'),
    mkPush(203,'RUDDER TRIM','\u25cf'),
    mkPush(204,'RUDDER TRIM','\u25cf'),
    mkPush(205,'ELEV TRIM D','\u25cf'),
    mkPush(206,'ELEV TRIM U','\u25cf'),
    mkPush(207,'GEAR DOWN','\u25cf'),
    mkAnn(208,'TAIL WHEEL',true,'ON')];},
  function(){ return [
    mkGuard(40,'Auto Start Engine',false),
    mkGuard(41,'Engine Autostop',false),
    mkSlider(42,43,'Throttle','#ffbd59'),
    mkPush(44,'Throttle Nxt Detent','\u2295'),
    mkPush(45,'Throttle Prv Detent','\u2296'),
    mkSlider(46,47,'Mixture','#6dffad'),
    mkSlider(48,49,'Prop Pitch','#8ec5ff'),
    mkPush(50,'Prop Pitch Hi','\u2b06'),
    mkPush(51,'Prop Pitch Lo','\u2b07'),
    mkSlider(52,53,'Cond Lever','#ffbd59'),
    mkPush(54,'Cond Lever Hi Idle','\u25b2'),
    mkPush(55,'Cond Lever Cut Off','\u25a0')
  ,
    mkPush(43,'THROTTLE -','\u25cf'),
    mkPush(47,'MIXTURE LEA','\u25cf'),
    mkPush(49,'PROP PITCH','\u25cf'),
    mkPush(53,'COND LEVER','\u25cf'),
    mkAnn(108,'TOGGLE ANTI',true,'ON'),
    mkAnn(109,'TOGGLE PITO',true,'ON'),
    mkAnn(110,'TOGGLE MAST',true,'ON'),
    mkAnn(111,'TOGGLE MAST',true,'ON'),
    mkAnn(112,'TOGGLE MAST',true,'ON'),
    mkPush(113,'SELECT ENGI','\u25cf'),
    mkPush(114,'INCREASE CO','\u25cf'),
    mkPush(115,'DECREASE CO','\u25cf'),
    mkPush(116,'MAGNETO BOT','\u25cf'),
    mkPush(117,'MAGNETO LEF','\u25cf'),
    mkPush(118,'MAGNETO OFF','\u25cf'),
    mkPush(119,'MAGNETO RIG','\u25cf'),
    mkPush(120,'MAGNETO STA','\u25cf'),
    mkAnn(121,'TOGGLE MAST',true,'ON'),
    mkPush(217,'MIXTURE DEC','\u25cf'),
    mkPush(218,'MIXTURE INC','\u25cf'),
    mkPush(219,'MIXTURE LEA','\u25cf'),
    mkPush(220,'MIXTURE RIC','\u25cf'),
    mkPush(221,'PROP PITCH','\u25cf'),
    mkPush(222,'PROP PITCH','\u25cf'),
    mkPush(223,'PROP PITCH','\u25cf'),
    mkPush(224,'PROP PITCH','\u25cf'),
    mkPush(225,'THROTTLE CU','\u25cf'),
    mkPush(226,'THROTTLE DE','\u25cf'),
    mkPush(227,'THROTTLE IN','\u25cf')];},
  function(){ return [
    mkToggleSw(56,'Battery/Alternator'),
    mkToggleSw(57,'Avionics Master'),
    mkPush(58,'Set Altimeter','\u25cf'),
    mkPush(59,'Set Magnetos','\u26a1'),
    mkPush(60,'Set NAV1','\u2315'),
    mkRotary(61,61,'Heading Bug','#67d4ff'),
    mkRotary(62,62,'Altitude Bug','#8ec5ff'),
    mkRotary(63,63,'Airspeed Bug','#ffbd59'),
    mkRotary(64,64,'VSI Bug','#6dffad'),
    mkRotary(65,65,'VOR OBS','#ffcf74'),
    mkPush(66,'ADF','\ud83d\udcfb'),
    mkPush(67,'Transponder','\u2708'),
    mkToggleSw(68,'G Limiter'),
    mkToggleSw(69,'Delegate Copilot')
  ];},
  function(){ return [
    mkGuard(70,'Parking Brakes',true),
    mkPush(71,'Brakes','\u26d4'),
    mkPush(95,'Left Brake','\u25c4'),
    mkPush(96,'Right Brake','\u25ba')
  ,
    mkPush(184,'BRAKES KEY','\u25cf'),
    mkPush(185,'LEFT BRAKE','\u25cf'),
    mkPush(186,'RIGHT BRAKE','\u25cf'),
    mkAnn(187,'PARKING BRA',true,'ON')];},
  function(){ return [
    mkToggleSw(72,'All Lights'),
    mkToggleSw(73,'Flashlight')
  ,
    mkAnn(209,'LANDING LIG',true,'ON'),
    mkAnn(210,'TOGGLE STRO',true,'ON'),
    mkAnn(211,'TOGGLE BEAC',true,'ON'),
    mkAnn(212,'TOGGLE NAV',true,'ON'),
    mkAnn(213,'TOGGLE TAXI',true,'ON'),
    mkAnn(214,'TOGGLE INTE',true,'ON')];},
  function(){ return [
    mkToggleSw(74,'Active Pause'),
    mkToggleSw(75,'Toggle EFB'),
    mkToggleSw(76,'Pushback'),
    mkToggleSw(77,'Flight Assistant'),
    mkRotary(78,78,'Sim Rate','#b0bec5'),
    mkPush(79,'Back to Fly','\u25b6'),
    mkPush(82,'Back on Track','\u21ba'),
    mkToggleSw(80,'Taxi Ribbon'),
    mkToggleSw(81,'Landing Ribbon'),
    mkToggleSw(97,'Nameplates'),
    mkToggleSw(98,'Toggle CFD'),
    mkToggleSw(99,'3D Thermals'),
    mkPush(100,'Screen Narrator','\ud83d\udde3'),
    mkPush(101,'Next Flt Phase','\u23ed')
  ,
    mkAnn(215,'TOGGLE ACTI',true,'ON'),
    mkPush(216,'DISPLAY CHE','\u25cf')];},
  function(){ return {
    _type:'cdu',
    top:[
      mkToggleSw(83,'ATC Panel'),
      mkPush(84,'ATC Quick Reply','\u2709')
    ],
    keys:[
      mkCDU(86,'1'), mkCDU(87,'2'), mkCDU(88,'3'),
      mkCDU(89,'4'), mkCDU(90,'5'), mkCDU(91,'6'),
      mkCDU(92,'7'), mkCDU(93,'8'), mkCDU(94,'9'),
      mkCDUDummy('*'), mkCDU(85,'0'), mkCDUDummy('#')
    ]
  };}

,
  /* 9: FMS */
  function(){
    var wrap = document.createElement('div');
    wrap.className = 'fms-wrap';
    wrap.style.cssText = 'display:flex;flex-direction:column;height:100%;background:#141618;overflow:hidden';

    /* Mode strip */
    var modeStrip = document.createElement('div');
    modeStrip.style.cssText = 'display:flex;gap:4px;padding:3px 5px;background:linear-gradient(180deg,#172028,#0d1218);border-bottom:1px solid #050709;flex-shrink:0';
    var modes = ['ROUTE','NAV','COM','XPDR','PERF'];
    var activeMode = 0;
    var fmsDB = {
      ROUTE:{label:'ROUTE ENTRY',rows:[
        {lbl:'ORIGIN',val:'',hint:'ICAO'},
        {lbl:'DEST',  val:'',hint:'ICAO'},
        {lbl:'ROUTE', val:'',hint:'DCT/AWY'},
        {lbl:'CRZ FL',val:'',hint:'FL350'}
      ]},
      NAV:{label:'NAV FREQ',rows:[
        {lbl:'NAV1 ACT', val:'108.00',hint:'MHz'},
        {lbl:'NAV1 STBY',val:'',      hint:'MHz'},
        {lbl:'NAV2 ACT', val:'110.50',hint:'MHz'},
        {lbl:'NAV2 STBY',val:'',      hint:'MHz'}
      ]},
      COM:{label:'COM FREQ',rows:[
        {lbl:'COM1 ACT', val:'121.500',hint:'MHz'},
        {lbl:'COM1 STBY',val:'',       hint:'MHz'},
        {lbl:'COM2 ACT', val:'122.800',hint:'MHz'},
        {lbl:'COM2 STBY',val:'',       hint:'MHz'}
      ]},
      XPDR:{label:'TRANSPONDER',rows:[
        {lbl:'SQUAWK',  val:'2000',hint:'____'},
        {lbl:'MODE',    val:'ALT', hint:''},
        {lbl:'IDENT',   val:'',   hint:'EXEC=SEND'},
        {lbl:'ALT RPT', val:'ON', hint:''}
      ]},
      PERF:{label:'PERFORMANCE',rows:[
        {lbl:'COST IDX',val:'',hint:'0-999'},
        {lbl:'CRZ SPD', val:'',hint:'KTS'},
        {lbl:'RESERVES',val:'',hint:'KG'},
        {lbl:'WIND',    val:'',hint:'ddd/ss'}
      ]}
    };
    var fmsScratch = '';

    modes.forEach(function(m, mi){
      var btn = document.createElement('div');
      btn.style.cssText = 'flex:1;height:18px;border-radius:3px;cursor:pointer;font-size:7px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;font-family:system-ui;transition:.1s;border:1px solid #0a1020;' + (mi===0?'background:linear-gradient(#102634,#071019);color:#67d4ff;border-color:#1c5a75':'background:linear-gradient(#19212a,#10161d);color:#557181');
      btn.textContent = m;
      btn.onclick = (function(mi2, m2, btnEl){
        return function(){
          modeStrip.querySelectorAll('div').forEach(function(b){
            b.style.background='linear-gradient(#19212a,#10161d)';
            b.style.color='#557181'; b.style.borderColor='#0a1020';
          });
          btnEl.style.background='linear-gradient(#102634,#071019)';
          btnEl.style.color='#67d4ff'; btnEl.style.borderColor='#1c5a75';
          activeMode = mi2;
          renderFMS();
        };
      })(mi, m, btn);
      modeStrip.appendChild(btn);
    });
    wrap.appendChild(modeStrip);

    /* Screen */
    var screen = document.createElement('div');
    screen.style.cssText = 'background:linear-gradient(180deg,#071014,#030608);padding:3px 6px;border-bottom:1px solid #050709;flex-shrink:0;position:relative;max-height:76px;overflow:hidden';
    wrap.appendChild(screen);

    /* LSK area */
    var lskArea = document.createElement('div');
    lskArea.style.cssText = 'display:flex;flex:.75;min-height:0;background:#121920';
    wrap.appendChild(lskArea);

    var lskBtnsL = document.createElement('div');
    lskBtnsL.style.cssText = 'display:flex;flex-direction:column;gap:2px;padding:3px 2px;width:30px;flex-shrink:0';
    var lskBtnsR = lskBtnsL.cloneNode(false);
    var lskRows = document.createElement('div');
    lskRows.style.cssText = 'flex:1;padding:2px 3px;display:flex;flex-direction:column;gap:1px';

    [0,1,2,3].forEach(function(i){
      var bl = document.createElement('div');
      bl.style.cssText = 'flex:1;background:linear-gradient(#202a34,#111820);border:1px solid #070b10;border-radius:3px;cursor:pointer;color:#67d4ff;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;transition:.07s';
      bl.textContent = String.fromCharCode(9664)+(i+1);
      bl.onclick = function(){ lskTapFMS(i); };
      lskBtnsL.appendChild(bl);
      var br = bl.cloneNode(false);
      br.textContent = (i+1)+String.fromCharCode(9654);
      br.onclick = function(){ lskTapFMS(i); };
      lskBtnsR.appendChild(br);
    });

    lskArea.appendChild(lskBtnsL);
    lskArea.appendChild(lskRows);
    lskArea.appendChild(lskBtnsR);

    /* Keyboard */
    var kbd = document.createElement('div');
    kbd.style.cssText = 'background:linear-gradient(180deg,#172028,#0d1218);padding:7px 6px 8px;border-top:1px solid #050709;flex-shrink:0;box-shadow:0 -8px 18px rgba(0,0,0,.28)';

    var kRows = [
      ['A','B','C','D','E','F','G','H','I','J'],
      ['K','L','M','N','O','P','Q','R','S','T'],
      ['U','V','W','X','Y','Z','/','.','⌫','CLR'],
      ['1','2','3','4','5','6','7','8','9','0'],
      ['SPC','+/-','EXEC']
    ];
    var numKeys = new Set(['1','2','3','4','5','6','7','8','9','0']);
    var specKeys = {'⌫':'del','CLR':'clr','SPC':'sp','EXEC':'exec','+/-':'fn'};

    kRows.forEach(function(row){
      var rowEl = document.createElement('div');
      rowEl.style.cssText = 'display:flex;gap:4px;margin-bottom:4px;justify-content:center';
      row.forEach(function(k){
        var btn = document.createElement('div');
        var isNum = numKeys.has(k);
        var spec = specKeys[k];
        var w = spec==='sp'?'flex:2.2;max-width:none' : spec==='exec'?'flex:1.7;max-width:none' : spec==='fn'?'flex:1.35;max-width:none' : 'flex:1;max-width:48px';
        var bg = spec==='exec'?'linear-gradient(#0a2010,#041008)':'linear-gradient(#1e2228,#131418)';
        var col = spec==='exec'?'#00e848' : isNum?'#ff8c00' : spec==='⌫'?'#c03020' : spec==='clr'?'#206840' : '#8ab0c0';
        var bc = spec==='exec'?'#0a2810':'#060809';
        btn.style.cssText = w+';height:42px;min-width:0;background:'+bg+';border:1px solid '+bc+';border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:'+col+';font-size:'+(isNum?'17':'14')+'px;font-weight:900;font-family:Courier New,monospace;box-shadow:0 3px 0 #040506,0 0 0 1px rgba(255,255,255,.04);transition:.05s;position:relative;touch-action:manipulation';
        btn.textContent = k==='SPC'?'SPC' : k;
        btn.onclick = (function(key, sp){
          return function(){
            click();
            if(key==='⌫'){ fmsScratch=fmsScratch.slice(0,-1); }
            else if(key==='CLR'){ fmsScratch=''; }
            else if(key==='SPC'){ fmsScratch+=' '; }
            else if(key==='EXEC'){ execFMS(); return; }
            else if(key==='+/-'){ fmsScratch+='+'; }
            else { fmsScratch+=key; }
            renderFMS();
          };
        })(k);
        rowEl.appendChild(btn);
      });
      kbd.appendChild(rowEl);
    });
    wrap.appendChild(kbd);

    function renderFMS(){
      var d = fmsDB[modes[activeMode]];
      screen.innerHTML = '';
      /* scanline overlay */
      var scan = document.createElement('div');
      scan.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(180deg,transparent 0px,transparent 11px,rgba(0,40,0,.08) 11px,rgba(0,40,0,.08) 12px);pointer-events:none;z-index:1';
      screen.appendChild(scan);
      /* mode label */
      var hdr = document.createElement('div');
      hdr.style.cssText = 'display:flex;justify-content:space-between;margin-bottom:1px;position:relative;z-index:2';
      hdr.innerHTML = '<span style="font-size:7px;letter-spacing:1.6px;color:#6dffad;text-transform:uppercase;font-family:Courier New">'+d.label+'</span><span style="font-size:7px;color:#658575;letter-spacing:1px">1/1</span>';
      screen.appendChild(hdr);
      /* scratchpad */
      var sp = document.createElement('div');
      sp.style.cssText = 'font-size:11px;font-weight:800;letter-spacing:2px;color:#ffbd59;min-height:17px;display:flex;align-items:center;border-bottom:1px solid rgba(109,255,173,.14);padding-bottom:1px;margin-bottom:2px;position:relative;z-index:2;font-family:Courier New;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
      sp.innerHTML = (fmsScratch||'') + '<span style="display:inline-block;width:6px;height:10px;background:#ffbd59;margin-left:1px;animation:blink 1s step-end infinite;vertical-align:middle;flex-shrink:0"></span>';
      screen.appendChild(sp);
      /* top 2 fields */
      var grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:2px;position:relative;z-index:2';
      d.rows.slice(0,2).forEach(function(r){
        var c = document.createElement('div');
        c.style.cssText = 'background:rgba(103,212,255,.04);border:1px solid rgba(103,212,255,.10);border-radius:2px;padding:1px 3px;cursor:pointer;min-height:24px';
        c.innerHTML = '<div style="font-size:5px;color:#7fb2c9;letter-spacing:1.1px;text-transform:uppercase;font-family:system-ui">'
          +r.lbl+'</div><div style="font-size:8px;font-weight:800;letter-spacing:1.4px;color:'
          +(r.val?'#6dffad':'#395047')+';font-family:Courier New">'+(r.val||r.hint)+'</div>';
        c.onclick=(function(row){return function(){ lskSelectFMS(row); };})(r);
        grid.appendChild(c);
      });
      screen.appendChild(grid);
      /* LSK rows */
      lskRows.innerHTML='';
      d.rows.forEach(function(r){
        var row=document.createElement('div');
        row.style.cssText='display:flex;align-items:center;gap:4px;padding:1px 3px;flex:1;border-bottom:1px solid #0a0e12;cursor:pointer;min-height:0';
        row.innerHTML='<div style="font-size:6px;color:#3aa88b;letter-spacing:.8px;text-transform:uppercase;min-width:56px;font-family:system-ui;font-weight:800">'+r.lbl+'</div>'
          +'<div style="font-size:9px;font-weight:800;letter-spacing:1.5px;color:'+(r.val?'#67d4ff':'#395047')+';font-family:Courier New;flex:1">'+(r.val||r.hint)+'</div>';
        row.onclick=(function(row){return function(){ lskSelectFMS(row); };})(r);
        lskRows.appendChild(row);
      });
    }

    function lskSelectFMS(row){
      if(fmsScratch){ row.val=fmsScratch; fmsScratch=''; }
      renderFMS();
    }
    function lskTapFMS(i){
      var rows=fmsDB[modes[activeMode]].rows;
      if(i<rows.length) lskSelectFMS(rows[i]);
    }
    function execFMS(){
      if(!fmsScratch) return;
      var rows=fmsDB[modes[activeMode]].rows;
      for(var i=0;i<rows.length;i++){
        if(!rows[i].val){ rows[i].val=fmsScratch; fmsScratch=''; renderFMS(); return; }
      }
      fmsScratch=''; renderFMS();
    }

    renderFMS();
    return {_type:'custom', el:wrap};
  }
  ],

  EXTRA_PANELS: [

  function(){
    var wrap = document.createElement('div');
    wrap.className = 'seg-wrap';
    var segs = [
      {name:'Camera Modes', widgets:[
        mkAnn(126,'SLEW MODE',true,'ON'),
        mkPush(127,'COCKPIT','\u21c6'),
        mkAnn(128,'DRONE',true,'ON'),
        mkAnn(160,'SMART CAM',true,'ON')
      ]},{name:'Custom Cameras', widgets:[
        mkPush(129,'CAM 0','\u25cf'),
        mkPush(130,'CAM 1','\u25cf'),
        mkPush(131,'CAM 2','\u25cf'),
        mkPush(132,'CAM 3','\u25cf'),
        mkPush(133,'CAM 4','\u25cf'),
        mkPush(134,'CAM 5','\u25cf'),
        mkPush(135,'CAM 6','\u25cf'),
        mkPush(136,'CAM 7','\u25cf'),
        mkPush(137,'CAM 8','\u25cf'),
        mkPush(138,'CAM 9','\u25cf'),
        mkPush(139,'CAM NEXT','\u23ed'),
        mkPush(140,'CAM PREV','\u23ee')
      ]},{name:'Save Cameras', widgets:[
        mkPush(141,'SV CAM 0','\u25cf'),
        mkPush(142,'SV CAM 1','\u25cf'),
        mkPush(143,'SV CAM 2','\u25cf'),
        mkPush(144,'SV CAM 3','\u25cf'),
        mkPush(145,'SV CAM 4','\u25cf'),
        mkPush(146,'SV CAM 5','\u25cf'),
        mkPush(147,'SV CAM 6','\u25cf'),
        mkPush(148,'SV CAM 7','\u25cf'),
        mkPush(149,'SV CAM 8','\u25cf'),
        mkPush(150,'SV CAM 9','\u25cf')
      ]},{name:'Cockpit View', widgets:[
        mkPush(151,'VIEW DOWN','\u2b07'),
        mkPush(152,'VIEW UP','\u2b06'),
        mkPush(153,'VIEW LEFT','\u25c4'),
        mkPush(154,'VIEW RIGHT','\u25ba'),
        mkPush(155,'QV UP','\u2191'),
        mkPush(156,'QV REAR','\u2193'),
        mkPush(157,'QV RIGHT','\u25ba'),
        mkPush(158,'QV LEFT','\u25c4'),
        mkPush(159,'QV CYCLE','\u21ba')
      ]},{name:'Drone Control', widgets:[
        mkPush(161,'DRN TARGET','\u25cf'),
        mkPush(162,'DRN ZOOM+','\u2b06'),
        mkPush(163,'DRN ZOOM-','\u2b07'),
        mkPush(164,'DRN ATT+','\u25ba'),
        mkPush(165,'DRN ATT-','\u25c4')
      ]},{name:'Fixed Cameras', widgets:[
        mkPush(166,'FX CAM 1','\u25cf'),
        mkPush(167,'FX CAM 2','\u25cf'),
        mkPush(168,'FX CAM 3','\u25cf'),
        mkPush(169,'FX CAM 4','\u25cf'),
        mkPush(170,'FX CAM 5','\u25cf'),
        mkPush(171,'FX CAM 6','\u25cf'),
        mkPush(172,'FX CAM 7','\u25cf'),
        mkPush(173,'FX CAM 8','\u25cf'),
        mkPush(174,'FX CAM 9','\u25cf'),
        mkPush(175,'FX CAM 10','\u25cf'),
        mkPush(176,'FC RESET','\u21ba'),
        mkPush(177,'FC PREV','\u25c4'),
        mkPush(178,'FC NEXT','\u25ba')
      ]}
    ];
    segs.forEach(function(seg){
      var h = document.createElement('div');
      h.className = 'seg-header';
      h.textContent = seg.name;
      wrap.appendChild(h);
      var g = document.createElement('div');
      g.className = 'seg-grid';
      seg.widgets.forEach(function(w){ g.appendChild(w); });
      wrap.appendChild(g);
    });
    return {_type:'custom', el:wrap};
  },
  function(){ return [
    mkAnn(102,'FUEL PUMP',true,'ON'),
    mkPush(104,'REQ FUEL','\u26fd'),
    mkAnn(122,'FUEL DUMP',true,'ON'),
    mkPush(123,'FUEL 1 ALL','\u25b2'),
    mkPush(124,'FUEL 1 OFF','\u25bc'),
    mkAnn(125,'ALL FUEL',true,'ON'),
    mkAnn(108,'ANTI ICE',true,'ON'),
    mkAnn(109,'PITOT HEAT',true,'ON'),
    mkAnn(110,'ALT MSTR',true,'ON'),
    mkAnn(111,'BAT MSTR',true,'ON'),
    mkAnn(112,'BAT+ALT',true,'ON'),
    mkAnn(121,'MASTER IGN',true,'ON'),
    mkAnn(103,'PUSHBACK',true,'ON'),
    mkPush(105,'NAVLOG','\u25a6'),
    mkPush(106,'MAP','\u25a6'),
    mkAnn(209,'LANDING LGT',true,'ON'),
    mkAnn(210,'STROBES',true,'ON'),
    mkAnn(211,'BEACON',true,'ON'),
    mkAnn(212,'NAV LIGHT',true,'ON'),
    mkAnn(213,'TAXI LGT',true,'ON'),
    mkAnn(214,'INT LIGHTS',true,'ON'),
    mkAnn(102,'TOGGLE FUEL',true,'ON'),
    mkAnn(103,'TOGGLE PUSH',true,'ON'),
    mkPush(104,'REQUEST FUE','\u25cf'),
    mkPush(105,'DISPLAY NAV','\u25cf'),
    mkPush(106,'DISPLAY MAP','\u25cf'),
    mkAnn(107,'TOGGLE DELE',true,'ON'),
    mkAnn(122,'TOGGLE FUEL',true,'ON'),
    mkPush(123,'FUEL SELECT','\u25cf'),
    mkPush(124,'FUEL SELECT','\u25cf'),
    mkAnn(125,'TOGGLE ALL',true,'ON'),
  ];},
  function(){ return [
    mkPush(228,'ADF RADIO','\u25cf'),
    mkPush(229,'COM RADIO','\u25cf'),
    mkPush(230,'COM1 STDBY','\u25cf'),
    mkAnn(231,'COM1 SWAP',true,'ON'),
    mkRotary(233,232,'NAV1 FREQ','#67d4ff'),
    mkAnn(234,'NAV1 SWAP',true,'ON'),
    mkRotary(236,235,'VOR1 OBS','#8ec5ff'),
    mkPush(237,'SET XPDR','\u25cf'),
    mkPush(238,'FREQ SWAP','\u25cf'),
  ];}

  ]
};
