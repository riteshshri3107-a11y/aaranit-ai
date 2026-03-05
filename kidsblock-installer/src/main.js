const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

// Allow audio/speech to play without user gesture restrictions
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'AARNAITAI ROBO',
    icon: path.join(__dirname, '..', 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Project',
          accelerator: 'CmdOrCtrl+N',
          click: () => mainWindow.webContents.send('menu-action', 'new')
        },
        {
          label: 'Open Project...',
          accelerator: 'CmdOrCtrl+O',
          click: () => openProject()
        },
        {
          label: 'Save Project',
          accelerator: 'CmdOrCtrl+S',
          click: () => saveProject()
        },
        {
          label: 'Save As...',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => saveProjectAs()
        },
        { type: 'separator' },
        {
          label: 'Export as JavaScript',
          click: () => mainWindow.webContents.send('menu-action', 'export-js')
        },
        {
          label: 'Export as Python',
          click: () => mainWindow.webContents.send('menu-action', 'export-python')
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'CmdOrCtrl+Z',
          click: () => mainWindow.webContents.send('menu-action', 'undo')
        },
        {
          label: 'Redo',
          accelerator: 'CmdOrCtrl+Y',
          click: () => mainWindow.webContents.send('menu-action', 'redo')
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { role: 'resetZoom' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { type: 'separator' },
        { role: 'toggleDevTools', accelerator: 'F12' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About AARNAITAI ROBO',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About AARNAITAI ROBO',
              message: 'AARNAITAI ROBO v1.0.0',
              detail: 'Block-based programming environment for kids and teens.\nLearn coding through drag-and-drop blocks!\n\nBuilt by AARNAIT AI'
            });
          }
        },
        {
          label: 'Tutorial',
          click: () => mainWindow.webContents.send('menu-action', 'tutorial')
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

async function openProject() {
  const result = await dialog.showOpenDialog(mainWindow, {
    filters: [{ name: 'AARNAITAI ROBO Project', extensions: ['arobo'] }],
    properties: ['openFile']
  });
  if (!result.canceled && result.filePaths.length > 0) {
    const data = fs.readFileSync(result.filePaths[0], 'utf-8');
    mainWindow.webContents.send('load-project', data);
  }
}

async function saveProject() {
  mainWindow.webContents.send('menu-action', 'save');
}

async function saveProjectAs() {
  mainWindow.webContents.send('menu-action', 'save-as');
}

ipcMain.handle('save-file', async (event, { content, filePath }) => {
  if (filePath) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return filePath;
  }
  const result = await dialog.showSaveDialog(mainWindow, {
    filters: [{ name: 'AARNAITAI ROBO Project', extensions: ['arobo'] }]
  });
  if (!result.canceled) {
    fs.writeFileSync(result.filePath, content, 'utf-8');
    return result.filePath;
  }
  return null;
});

ipcMain.handle('export-file', async (event, { content, extension, typeName }) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    filters: [{ name: typeName, extensions: [extension] }]
  });
  if (!result.canceled) {
    fs.writeFileSync(result.filePath, content, 'utf-8');
    return result.filePath;
  }
  return null;
});

app.whenReady().then(async () => {
  // Clear cache to ensure latest source files are loaded
  const { session } = require('electron');
  await session.defaultSession.clearCache();
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
