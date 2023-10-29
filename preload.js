const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  dirPath: () => ipcRenderer.invoke('dir'),
  resolvePath: () => ipcRenderer.invoke('resolve'),
})
