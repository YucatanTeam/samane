const {app, BrowserWindow} = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('login_page.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
 
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {

  if (mainWindow === null) createWindow()
})
