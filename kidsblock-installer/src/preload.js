const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveFile: (data) => ipcRenderer.invoke('save-file', data),
  exportFile: (data) => ipcRenderer.invoke('export-file', data),
  onMenuAction: (callback) => ipcRenderer.on('menu-action', (event, action) => callback(action)),
  onLoadProject: (callback) => ipcRenderer.on('load-project', (event, data) => callback(data))
});
