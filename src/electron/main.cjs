const { app, BrowserWindow } = require('electron');
const serve = require('electron-serve');

const serveURL = serve({ directory: '.' })
const port = process.env.PORT || 5173;
const dev = !app.isPackaged;

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })

    if (dev) {
      win.loadURL(`http://localhost:${port}`)
    } else {
      serveURL(win)
    }
  
    // win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
  })