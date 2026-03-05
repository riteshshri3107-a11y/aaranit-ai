// =============================================
// AARNAITAI ROBO - Main Application Logic
// =============================================

let workspace = null;
let currentFilePath = null;
let tutorialStep = 0;

// ===== Splash Screen =====
function closeSplash(action) {
  document.getElementById('splash-overlay').style.display = 'none';
  document.getElementById('app-container').classList.remove('hidden');
  initWorkspace();

  if (action === 'tutorial') {
    showTutorial();
  } else if (action === 'open') {
    // Trigger file open via menu
    if (window.electronAPI) {
      window.electronAPI.onLoadProject(() => {}); // noop, will be overridden
    }
  }
}

// ===== Tutorial =====
function showTutorial() {
  tutorialStep = 0;
  document.getElementById('tutorial-overlay').style.display = 'flex';
  updateTutorialUI();
}

function closeTutorial() {
  document.getElementById('tutorial-overlay').style.display = 'none';
}

function tutorialNav(direction) {
  tutorialStep += direction;
  tutorialStep = Math.max(0, Math.min(3, tutorialStep));
  updateTutorialUI();
}

function updateTutorialUI() {
  var steps = document.querySelectorAll('.tutorial-step');
  var dots = document.querySelectorAll('.dot');
  steps.forEach(function (s, i) {
    s.classList.toggle('active', i === tutorialStep);
  });
  dots.forEach(function (d, i) {
    d.classList.toggle('active', i === tutorialStep);
  });
  document.getElementById('tutorialPrev').disabled = tutorialStep === 0;
  document.getElementById('tutorialNext').disabled = tutorialStep === 3;
}

// ===== Initialize Blockly Workspace =====
function initWorkspace() {
  var toolbox = document.getElementById('toolbox');
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    theme: Blockly.Themes.Classic,
    grid: {
      spacing: 25,
      length: 3,
      colour: '#2a3050',
      snap: true
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
    },
    trashcan: true,
    move: {
      scrollbars: true,
      drag: true,
      wheel: true
    },
    renderer: 'zelos',
    sounds: true
  });

  // Add starter blocks
  var xml = '<xml>' +
    '<block type="text_print" x="50" y="50">' +
    '<value name="TEXT"><shadow type="text"><field name="TEXT">Hello AARNAITAI ROBO!</field></shadow></value>' +
    '</block>' +
    '</xml>';
  Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(xml), workspace);

  // Listen for workspace changes to update code
  workspace.addChangeListener(updateCodePreview);

  // Resize handler
  window.addEventListener('resize', function () {
    Blockly.svgResize(workspace);
  });

  // Initial code update
  updateCodePreview();
}

// ===== Code Generation & Preview =====
function updateCodePreview() {
  if (!workspace) return;
  var language = document.getElementById('codeLanguage').value;
  var code = '';
  try {
    if (language === 'python') {
      code = python.pythonGenerator.workspaceToCode(workspace);
    } else {
      code = javascript.javascriptGenerator.workspaceToCode(workspace);
    }
  } catch (e) {
    code = '// Error generating code: ' + e.message;
  }
  document.querySelector('#codeOutput code').textContent = code;
}

// ===== Console Output =====
function consoleLog(message, type) {
  type = type || 'log';
  var consoleEl = document.getElementById('consoleOutput');
  var line = document.createElement('div');
  line.className = 'console-line ' + type;
  line.textContent = message;
  consoleEl.appendChild(line);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

function clearConsole() {
  document.getElementById('consoleOutput').innerHTML = '';
}

// ===== Run Program =====
function runProgram() {
  clearConsole();
  consoleLog('[AARNAITAI ROBO] Running program...', 'info');

  var code = javascript.javascriptGenerator.workspaceToCode(workspace);

  // Create a sandboxed execution environment
  var robotSim = {
    moveForward: function (s) { consoleLog('Robot moves forward ' + s + ' steps'); },
    moveBackward: function (s) { consoleLog('Robot moves backward ' + s + ' steps'); },
    turnLeft: function (d) { consoleLog('Robot turns left ' + d + ' degrees'); },
    turnRight: function (d) { consoleLog('Robot turns right ' + d + ' degrees'); },
    stop: function () { consoleLog('Robot stopped'); },
    setSpeed: function (s) { consoleLog('Robot speed set to ' + s); },
    wait: function (s) { return new Promise(function (r) { setTimeout(r, s * 1000); }); }
  };

  var sensorSim = {
    // 3.1 LED Blink
    ledBlink: function (pin, delay) { consoleLog('LED pin ' + pin + ' blink (delay: ' + delay + 'ms)'); },
    // 3.2 Sound Sensor
    readSound: function () { var v = Math.floor(Math.random() * 4096); consoleLog('Sound level: ' + v, 'info'); return v; },
    // 3.3 PIR Motion
    pirMotionDetected: function () { var v = Math.random() > 0.5; consoleLog('PIR Motion: ' + (v ? 'detected' : 'none'), 'info'); return v; },
    // 3.4 Buzzer
    buzzerTone: function (freq, beat) { consoleLog('Buzzer tone: ' + freq + 'Hz, beat: ' + beat); },
    buzzerOff: function () { consoleLog('Buzzer OFF'); },
    // 3.5 Photoresistor
    readLight: function () { var v = Math.floor(Math.random() * 4096); consoleLog('Light: ' + v, 'info'); return v; },
    // 3.6 AD Button
    readADButton: function () { var vals = [0, 1024, 2048, 3072, 4095]; var v = vals[Math.floor(Math.random() * vals.length)]; consoleLog('AD Button: ' + v, 'info'); return v; },
    isButtonPressed: function (b) { var v = Math.random() > 0.5; consoleLog('Button ' + b + ': ' + (v ? 'pressed' : 'not pressed'), 'info'); return v; },
    // 3.7 Ultrasonic
    readDistance: function () { var v = Math.floor(Math.random() * 400); consoleLog('Distance: ' + v + 'cm', 'info'); return v; },
    // 3.8 RFID
    rfidRead: function () { var uid = 'UID-' + Math.random().toString(16).substr(2, 8).toUpperCase(); consoleLog('RFID Card: ' + uid, 'info'); return uid; },
    rfidDetected: function () { var v = Math.random() > 0.5; consoleLog('RFID: ' + (v ? 'card present' : 'no card'), 'info'); return v; },
    // 3.9 Servo
    servoSet: function (pin, angle) { consoleLog('Servo pin ' + pin + ' set to ' + angle + '°'); },
    // 3.10 Temperature & Humidity
    readTemperature: function () { var v = (20 + Math.random() * 15).toFixed(1); consoleLog('Temperature: ' + v + '°C', 'info'); return parseFloat(v); },
    readHumidity: function () { var v = (30 + Math.random() * 60).toFixed(1); consoleLog('Humidity: ' + v + '%', 'info'); return parseFloat(v); },
    // 3.11 Pressure
    readPressure: function () { var v = (980 + Math.random() * 60).toFixed(1); consoleLog('Pressure: ' + v + ' hPa', 'info'); return parseFloat(v); },
    readAltitude: function () { var v = (50 + Math.random() * 500).toFixed(1); consoleLog('Altitude: ' + v + 'm', 'info'); return parseFloat(v); },
    // 3.12 Compass / Geomagnetic
    readCompass: function () { var v = Math.floor(Math.random() * 360); consoleLog('Compass: ' + v + '°', 'info'); return v; },
    readMagnetic: function (axis) { var v = (-500 + Math.random() * 1000).toFixed(1); consoleLog('Magnetic ' + axis + ': ' + v, 'info'); return parseFloat(v); },
    // 3.13 Fan Motor
    fanControl: function (dir, speed) { consoleLog('Fan: ' + dir + ' speed=' + speed); },
    // 3.14 Servo 270
    servo270Set: function (angle) { consoleLog('270° Servo: ' + angle + '°'); },
    // 3.15 RGB LED
    rgbSet: function (idx, col) { consoleLog('RGB LED #' + idx + ' = ' + col); },
    rgbAll: function (col) { consoleLog('All RGB LEDs = ' + col); },
    rgbOff: function () { consoleLog('RGB LEDs OFF'); },
    // 3.16 OLED
    oledPrint: function (text, row) { consoleLog('OLED [row ' + row + ']: ' + text); },
    oledClear: function () { consoleLog('OLED cleared'); },
    // 3.17 IR Receiver
    irReceive: function () { var codes = ['0xFF00FF', '0xFF10EF', '0xFF38C7', '0xFF5AA5']; var v = codes[Math.floor(Math.random() * codes.length)]; consoleLog('IR received: ' + v, 'info'); return v; },
    // 3.18 IR Emitter
    irSend: function (code) { consoleLog('IR sent: ' + code); },
    // 3.19 Joystick
    joystickRead: function (axis) { var v = axis === 'BTN' ? (Math.random() > 0.5 ? 1 : 0) : Math.floor(Math.random() * 4096); consoleLog('Joystick ' + axis + ': ' + v, 'info'); return v; },
    // Digital/Analog I/O simulation
    digitalRead: function (pin) { var v = Math.random() > 0.5 ? 1 : 0; consoleLog('digitalRead(' + pin + ') = ' + v, 'info'); return v; },
    digitalWrite: function (pin, val) { consoleLog('digitalWrite(' + pin + ', ' + val + ')'); },
    analogRead: function (pin) { var v = Math.floor(Math.random() * 4096); consoleLog('analogRead(' + pin + ') = ' + v, 'info'); return v; },
    analogWrite: function (pin, val) { consoleLog('analogWrite(' + pin + ', ' + val + ')'); },
    wait: function (s) { consoleLog('wait ' + s + 's'); return new Promise(function (r) { setTimeout(r, s * 1000); }); },
    // 3.20 Acceleration
    accelRead: function (axis) { var v = (-2 + Math.random() * 4).toFixed(2); consoleLog('Accel ' + axis + ': ' + v + 'g', 'info'); return parseFloat(v); },
    // 3.21 Potentiometer
    readPotentiometer: function () { var v = Math.floor(Math.random() * 4096); consoleLog('Potentiometer: ' + v, 'info'); return v; },
    // 3.22 Reed Switch
    reedSwitchDetected: function () { var v = Math.random() > 0.5; consoleLog('Reed Switch: ' + (v ? 'magnet detected' : 'no magnet'), 'info'); return v; },
    // 3.23 Hall Sensor
    readHall: function () { var v = Math.floor(Math.random() * 4096); consoleLog('Hall Sensor: ' + v, 'info'); return v; },
    // 3.24 Flame Sensor
    readFlame: function () { var v = Math.floor(Math.random() * 4096); consoleLog('Flame level: ' + v, 'info'); return v; },
    flameDetected: function () { var v = Math.random() > 0.7; consoleLog('Flame: ' + (v ? 'DETECTED!' : 'none'), v ? 'warn' : 'info'); return v; },
    // 3.25 Steam/Water
    readSteam: function () { var v = Math.floor(Math.random() * 4096); consoleLog('Steam/Water: ' + v, 'info'); return v; },
    // 3.26 UV Sensor
    readUV: function () { var v = Math.floor(Math.random() * 16); consoleLog('UV Index: ' + v, 'info'); return v; },
    // 3.27 Traffic Light
    trafficLight: function (color, state) { consoleLog('Traffic ' + color + ': ' + state); },
    // 3.28 Relay
    relay: function (state) { consoleLog('Relay: ' + state); },
    // 3.29 Button Module
    buttonModulePressed: function () { var v = Math.random() > 0.5; consoleLog('Button Module: ' + (v ? 'pressed' : 'released'), 'info'); return v; },
    // 3.30 Tilt Sensor
    tiltDetected: function () { var v = Math.random() > 0.5; consoleLog('Tilt: ' + (v ? 'tilted' : 'level'), 'info'); return v; },
    // 3.31 Obstacle Avoidance
    obstacleDetected: function () { var v = Math.random() > 0.5; consoleLog('Obstacle: ' + (v ? 'detected' : 'clear'), 'info'); return v; },
    // 3.32 Line Tracking
    lineDetected: function (p) { var v = Math.random() > 0.5; consoleLog('Line (' + p + '): ' + (v ? 'detected' : 'not detected'), 'info'); return v; },
    // 3.33 WiFi
    wifiConnect: function (ssid, pass) { consoleLog('WiFi connecting to: ' + ssid + '...'); consoleLog('WiFi connected! IP: 192.168.1.' + Math.floor(Math.random() * 254 + 1), 'info'); },
    wifiConnected: function () { consoleLog('WiFi: connected', 'info'); return true; },
    // 3.34 WiFi Display
    wifiSendData: function (key, val) { consoleLog('WiFi Send: ' + key + ' = ' + val); },
    // 3.35 WiFi Control
    wifiReceive: function () { var cmds = ['LED_ON', 'LED_OFF', 'FAN_ON', 'BUZZ']; var v = cmds[Math.floor(Math.random() * cmds.length)]; consoleLog('WiFi received: ' + v, 'info'); return v; },
    // 3.36 Smart Home
    smartHomeMode: function (mode) { consoleLog('Smart Home mode: ' + mode); },
    // 3.37 Weather Station
    weatherRead: function (param) {
      var vals = { TEMP: (20 + Math.random() * 15).toFixed(1), HUMIDITY: (30 + Math.random() * 60).toFixed(1), PRESSURE: (980 + Math.random() * 60).toFixed(1), UV: Math.floor(Math.random() * 16), ALT: (50 + Math.random() * 500).toFixed(1) };
      var v = parseFloat(vals[param]) || 0; consoleLog('Weather ' + param + ': ' + v, 'info'); return v;
    },
    // 3.38 Robot Car
    robotCar: function (action, speed) { consoleLog('Robot Car: ' + action + ' speed=' + speed); }
  };

  var displaySim = {
    showText: function (t) { consoleLog('Display: ' + t); },
    clear: function () { consoleLog('Display cleared'); },
    setColor: function (c) { consoleLog('Display color: ' + c); }
  };

  var ledSim = {
    on: function (p, c) { consoleLog('LED ' + p + ' ON (color: ' + c + ')'); },
    off: function (p) { consoleLog('LED ' + p + ' OFF'); }
  };

  var audioSim = {
    playSound: function (s) { consoleLog('Playing sound: ' + s); }
  };

  var animSim = {
    createSprite: function (t) {
      consoleLog('Created sprite: ' + t);
      return {
        moveTo: function (x, y) { consoleLog('Sprite moves to (' + x + ', ' + y + ')'); },
        setCostume: function (c) { consoleLog('Sprite costume: ' + c); },
        say: function (t) { consoleLog('Sprite says: ' + t); }
      };
    },
    wait: function (s) { return new Promise(function (r) { setTimeout(r, s * 1000); }); }
  };

  // Override window.alert for text_prompt blocks
  var originalAlert = window.alert;

  try {
    // Replace print statements
    var execCode = code.replace(/window\.alert\(/g, '_print(');

    var fn = new Function(
      'robot', 'sensor', 'display', 'led', 'audio', 'animation', '_print',
      '"use strict";\n' + execCode
    );
    fn(robotSim, sensorSim, displaySim, ledSim, audioSim, animSim, function (msg) {
      consoleLog(String(msg));
    });

    consoleLog('[AARNAITAI ROBO] Program finished.', 'info');
  } catch (e) {
    consoleLog('Error: ' + e.message, 'error');
  }
}

// ===== Save / Load Project =====
function getProjectData() {
  var xml = Blockly.Xml.workspaceToDom(workspace);
  return JSON.stringify({
    version: '1.0.0',
    app: 'AARNAITAI_ROBO',
    blocks: Blockly.Xml.domToText(xml)
  }, null, 2);
}

function loadProjectData(data) {
  try {
    var project = JSON.parse(data);
    workspace.clear();
    var xml = Blockly.utils.xml.textToDom(project.blocks);
    Blockly.Xml.domToWorkspace(xml, workspace);
    consoleLog('[AARNAITAI ROBO] Project loaded successfully.', 'info');
  } catch (e) {
    consoleLog('Error loading project: ' + e.message, 'error');
  }
}

async function saveProject(saveAs) {
  var data = getProjectData();
  if (window.electronAPI) {
    var result = await window.electronAPI.saveFile({
      content: data,
      filePath: saveAs ? null : currentFilePath
    });
    if (result) {
      currentFilePath = result;
      consoleLog('[AARNAITAI ROBO] Project saved.', 'info');
    }
  } else {
    // Fallback: download as file
    var blob = new Blob([data], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'project.arobo';
    a.click();
    URL.revokeObjectURL(a.href);
    consoleLog('[AARNAITAI ROBO] Project downloaded.', 'info');
  }
}

async function exportCode(language) {
  var code = '';
  var ext = '';
  var typeName = '';
  if (language === 'python') {
    code = python.pythonGenerator.workspaceToCode(workspace);
    ext = 'py';
    typeName = 'Python Files';
  } else {
    code = javascript.javascriptGenerator.workspaceToCode(workspace);
    ext = 'js';
    typeName = 'JavaScript Files';
  }

  if (window.electronAPI) {
    await window.electronAPI.exportFile({ content: code, extension: ext, typeName: typeName });
    consoleLog('[AARNAITAI ROBO] Code exported as .' + ext, 'info');
  } else {
    var blob = new Blob([code], { type: 'text/plain' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'program.' + ext;
    a.click();
    URL.revokeObjectURL(a.href);
  }
}

// ===== Study Material =====
function showStudy() {
  document.getElementById('study-overlay').style.display = 'flex';
}

function closeStudy() {
  document.getElementById('study-overlay').style.display = 'none';
}

function filterStudy() {
  var query = document.getElementById('studySearch').value.toLowerCase();
  var cards = document.querySelectorAll('.study-card');
  cards.forEach(function (card) {
    var tags = (card.getAttribute('data-tags') || '').toLowerCase();
    var text = card.textContent.toLowerCase();
    var match = !query || tags.indexOf(query) !== -1 || text.indexOf(query) !== -1;
    card.classList.toggle('hidden', !match);
  });
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', function () {
  // Toolbar buttons
  document.getElementById('runBtn').addEventListener('click', runProgram);
  document.getElementById('stopBtn').addEventListener('click', function () {
    consoleLog('[AARNAITAI ROBO] Program stopped.', 'warn');
  });
  document.getElementById('undoBtn').addEventListener('click', function () {
    if (workspace) workspace.undo(false);
  });
  document.getElementById('redoBtn').addEventListener('click', function () {
    if (workspace) workspace.undo(true);
  });
  document.getElementById('clearConsole').addEventListener('click', clearConsole);
  document.getElementById('helpBtn').addEventListener('click', showTutorial);
  document.getElementById('studyBtn').addEventListener('click', showStudy);

  // Code panel toggle
  document.getElementById('toggleCode').addEventListener('click', function () {
    var panel = document.getElementById('code-panel');
    panel.classList.toggle('collapsed');
    setTimeout(function () { Blockly.svgResize(workspace); }, 310);
  });

  document.getElementById('codePanelToggle').addEventListener('click', function () {
    var panel = document.getElementById('code-panel');
    panel.classList.add('collapsed');
    setTimeout(function () { Blockly.svgResize(workspace); }, 310);
  });

  // Language selector
  document.getElementById('codeLanguage').addEventListener('change', updateCodePreview);

  // Keyboard shortcut
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F5') {
      e.preventDefault();
      runProgram();
    }
  });

  // Electron IPC listeners
  if (window.electronAPI) {
    window.electronAPI.onMenuAction(function (action) {
      switch (action) {
        case 'new':
          if (workspace) {
            workspace.clear();
            currentFilePath = null;
            clearConsole();
            consoleLog('[AARNAITAI ROBO] New project created.', 'info');
          }
          break;
        case 'save':
          saveProject(false);
          break;
        case 'save-as':
          saveProject(true);
          break;
        case 'export-js':
          exportCode('javascript');
          break;
        case 'export-python':
          exportCode('python');
          break;
        case 'undo':
          if (workspace) workspace.undo(false);
          break;
        case 'redo':
          if (workspace) workspace.undo(true);
          break;
        case 'tutorial':
          showTutorial();
          break;
      }
    });

    window.electronAPI.onLoadProject(function (data) {
      loadProjectData(data);
    });
  }
});
