// =============================================
// AARNAITAI ROBO - Main Application Logic
// =============================================

let workspace = null;
let currentFilePath = null;
let tutorialStep = 0;
let audioCtx = null;
let ttsReady = false;
let ttsVoices = [];

// ===== Audio Engine (global, initialized once) =====
function initAudio() {
  // Init Web Audio API
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.warn('AudioContext not available:', e);
  }

  // Init Text-to-Speech
  if ('speechSynthesis' in window) {
    var loadVoices = function () {
      ttsVoices = window.speechSynthesis.getVoices();
      if (ttsVoices.length > 0) ttsReady = true;
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
    // Force TTS engine to wake up
    var warmup = new SpeechSynthesisUtterance('');
    warmup.volume = 0;
    window.speechSynthesis.speak(warmup);
  }
}

function speakText(msg) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(String(msg));
    utterance.rate = 1.0;
    utterance.pitch = 1.2;
    utterance.volume = 1.0;
    if (ttsVoices.length > 0) {
      utterance.voice = ttsVoices.find(function (v) { return v.lang.startsWith('en'); }) || ttsVoices[0];
    }
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('TTS error:', e);
  }
}

function playTone(freq, durationMs) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + (durationMs / 1000));
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + (durationMs / 1000));
  } catch (e) {
    console.warn('Tone error:', e);
  }
}

function playBeep() {
  playTone(800, 150);
}

// ===== Splash Screen =====
function closeSplash(action) {
  document.getElementById('splash-overlay').style.display = 'none';
  document.getElementById('app-container').classList.remove('hidden');
  initAudio();
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

  // Ensure proper sizing after injection
  Blockly.svgResize(workspace);

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

  // --- Sensor Simulators ---
  var sensorSim = {
    readSoundLevel: function () { var v = Math.floor(Math.random() * 1024); consoleLog('Sound level: ' + v, 'info'); return v; },
    motionDetected: function (pin) { var v = Math.random() > 0.5; consoleLog('Motion (pin ' + pin + '): ' + (v ? 'detected' : 'none'), 'info'); return v; },
    ultrasonicDistance: function (trig, echo) { var v = Math.floor(Math.random() * 200); consoleLog('Ultrasonic (trig:' + trig + ' echo:' + echo + '): ' + v + 'cm', 'info'); return v; },
    readTemperature: function (pin, unit) { var v = unit === 'F' ? (68 + Math.random() * 27).toFixed(1) : (20 + Math.random() * 15).toFixed(1); consoleLog('Temperature (' + pin + '): ' + v + (unit || 'C'), 'info'); return parseFloat(v); },
    readHumidity: function (pin) { var v = (30 + Math.random() * 50).toFixed(1); consoleLog('Humidity (' + pin + '): ' + v + '%', 'info'); return parseFloat(v); },
    compassHeading: function () { var v = Math.floor(Math.random() * 360); consoleLog('Compass heading: ' + v + ' degrees', 'info'); return v; },
    compassDirection: function () { var dirs = ['N','NE','E','SE','S','SW','W','NW']; var d = dirs[Math.floor(Math.random() * dirs.length)]; consoleLog('Compass direction: ' + d, 'info'); return d; },
    // Legacy compatibility
    readDistance: function () { return sensorSim.ultrasonicDistance(9, 8); },
    readLight: function () { var v = Math.floor(Math.random() * 1024); consoleLog('Light: ' + v, 'info'); return v; },
    isButtonPressed: function (b) { var v = Math.random() > 0.5; consoleLog('Button ' + b + ': ' + (v ? 'pressed' : 'not pressed'), 'info'); return v; },
    lineDetected: function (p) { var v = Math.random() > 0.5; consoleLog('Line (' + p + '): ' + (v ? 'detected' : 'not detected'), 'info'); return v; }
  };

  // --- Actuator Simulators ---
  var ledSim = {
    on: function (pin, color) { consoleLog('LED pin ' + pin + ' ON' + (color ? ' (color: ' + color + ')' : '')); },
    off: function (pin) { consoleLog('LED pin ' + pin + ' OFF'); },
    blink: function (pin, delay) { consoleLog('LED pin ' + pin + ' blinking (' + delay + 'ms)'); }
  };

  var servoSim = {
    setAngle: function (pin, angle) { consoleLog('Servo pin ' + pin + ' -> ' + angle + ' degrees'); },
    sweep: function (pin, from, to, speed) { consoleLog('Servo pin ' + pin + ' sweep ' + from + '-' + to + ' (speed: ' + speed + ')'); }
  };

  var motorSim = {
    run: function (motor, dir, speed) { consoleLog('Motor ' + motor + ' ' + dir + ' (speed: ' + speed + ')'); },
    stop: function (motor) { consoleLog('Motor ' + motor + ' stopped'); }
  };

  var rgbLedSim = {
    setColor: function (pin, r, g, b) { consoleLog('RGB LED pin ' + pin + ' -> R:' + r + ' G:' + g + ' B:' + b); },
    setHex: function (color) { consoleLog('RGB LED color: ' + color); },
    off: function () { consoleLog('RGB LED off'); }
  };

  var oledSim = {
    print: function (text, row) { consoleLog('OLED [row ' + row + ']: ' + text); },
    clear: function () { consoleLog('OLED display cleared'); },
    draw: function (shape, x, y, size) { consoleLog('OLED draw ' + shape + ' at (' + x + ',' + y + ') size ' + size); }
  };

  var buzzerSim = {
    tone: function (pin, freq, dur) {
      consoleLog('Buzzer pin ' + pin + ': ' + freq + 'Hz for ' + dur + 'ms');
      playTone(freq, dur);
    },
    off: function (pin) { consoleLog('Buzzer pin ' + pin + ' off'); }
  };

  // --- Event Simulators ---
  var eventsSim = {
    onButtonPress: function (btn, cb) { consoleLog('[Event] Registered: button ' + btn + ' press', 'info'); cb(); },
    onSensorTrigger: function (trigger, cb) { consoleLog('[Event] Registered: sensor ' + trigger, 'info'); cb(); },
    every: function (secs, cb) { consoleLog('[Event] Registered: every ' + secs + 's', 'info'); cb(); },
    broadcast: function (msg) { consoleLog('[Event] Broadcast: ' + msg, 'info'); },
    onReceive: function (msg, cb) { consoleLog('[Event] Registered: on receive "' + msg + '"', 'info'); cb(); },
    onDoorOpen: function (cb) { consoleLog('[Event] Registered: door open', 'info'); cb(); },
    onDoorClose: function (cb) { consoleLog('[Event] Registered: door close', 'info'); cb(); }
  };

  // --- Hardware Simulators ---
  var hardwareSim = {
    pinMode: function (pin, mode) { consoleLog('Pin ' + pin + ' set to ' + mode); },
    digitalWrite: function (pin, val) { consoleLog('Digital write pin ' + pin + ' = ' + val); },
    digitalRead: function (pin) { var v = Math.round(Math.random()); consoleLog('Digital read pin ' + pin + ' = ' + v, 'info'); return v; },
    analogWrite: function (pin, val) { consoleLog('Analog write pin ' + pin + ' = ' + val); },
    analogRead: function (pin) { var v = Math.floor(Math.random() * 1024); consoleLog('Analog read pin ' + pin + ' = ' + v, 'info'); return v; }
  };

  var serialSim = {
    println: function (msg) { consoleLog('[Serial] ' + msg); }
  };

  // --- Legacy Simulators ---
  var robotSim = {
    moveForward: function (s) { consoleLog('Robot moves forward ' + s + ' steps'); },
    moveBackward: function (s) { consoleLog('Robot moves backward ' + s + ' steps'); },
    turnLeft: function (d) { consoleLog('Robot turns left ' + d + ' degrees'); },
    turnRight: function (d) { consoleLog('Robot turns right ' + d + ' degrees'); },
    stop: function () { consoleLog('Robot stopped'); },
    setSpeed: function (s) { consoleLog('Robot speed set to ' + s); },
    wait: function (s) { return new Promise(function (r) { setTimeout(r, s * 1000); }); }
  };

  var displaySim = {
    showText: function (t) { consoleLog('Display: ' + t); },
    clear: function () { consoleLog('Display cleared'); },
    setColor: function (c) { consoleLog('Display color: ' + c); }
  };

  var audioSim = {
    playSound: function (s) { consoleLog('Playing sound: ' + s); playBeep(); }
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

  // --- Utility functions ---
  function mapValue(val, fl, fh, tl, th) {
    return Math.round((val - fl) * (th - tl) / (fh - fl) + tl);
  }

  function delayFn(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  // Resume audio context (needs user gesture - Run button click counts)
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  try {
    // Replace print statements
    var execCode = code.replace(/window\.alert\(/g, '_print(');

    var fn = new Function(
      'robot', 'sensor', 'led', 'servo', 'motor', 'rgbLed', 'oled', 'buzzer',
      'events', 'hardware', 'Serial', 'display', 'audio', 'animation',
      'map', 'delay', '_print', '_speak', '_playTone',
      '"use strict";\n' + execCode
    );
    fn(
      robotSim, sensorSim, ledSim, servoSim, motorSim, rgbLedSim, oledSim, buzzerSim,
      eventsSim, hardwareSim, serialSim, displaySim, audioSim, animSim,
      mapValue, delayFn,
      function (msg) { consoleLog(String(msg)); speakText(msg); },
      speakText, playTone
    );

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
