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
    readDistance: function () { var v = Math.floor(Math.random() * 200); consoleLog('Distance: ' + v + 'cm', 'info'); return v; },
    readLight: function () { var v = Math.floor(Math.random() * 1024); consoleLog('Light: ' + v, 'info'); return v; },
    readTemperature: function () { var v = (20 + Math.random() * 15).toFixed(1); consoleLog('Temperature: ' + v + 'C', 'info'); return parseFloat(v); },
    isButtonPressed: function (b) { var v = Math.random() > 0.5; consoleLog('Button ' + b + ': ' + (v ? 'pressed' : 'not pressed'), 'info'); return v; },
    lineDetected: function (p) { var v = Math.random() > 0.5; consoleLog('Line (' + p + '): ' + (v ? 'detected' : 'not detected'), 'info'); return v; }
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
