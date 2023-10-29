const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

async function handleDirPath() {
  return __dirname
}

async function handleResolvePath() {
  return path.resolve('.')
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('dir', handleDirPath)
  ipcMain.handle('resolve', handleResolvePath)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
