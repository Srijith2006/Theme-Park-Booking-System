const { app, BrowserWindow, screen, ipcMain, Menu, dialog } = require('electron');
const path = require('path');

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize; 

  const win = new BrowserWindow({
    width: width,
    height: height,
    icon:path.join(__dirname, 'Screenshot_2025-03-14_102537-removebg-preview.ico'),
    webPreferences:{
      nodeIntegration:false,
      contextIsolation: true,
      preload: path.join(__dirname,'preload.js')
    },
    frame: true, 
    show: false,
  });

  win.loadFile('index.html');
  win.once("ready-to-show", () => {
    win.show(); 
  });
  createMenu(win);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Home', click: () => win.loadFile('index.html') },
    
    { type: 'separator' },
    { label: 'Reload Page', role: 'reload' },
    { label: 'Inspect Element', click: () => win.webContents.openDevTools({ mode: 'detach' }) },
    { type: 'separator' },
    { label: 'Cut', role: 'cut' },
    { label: 'Copy', role: 'copy' },
    { label: 'Paste', role: 'paste' }
  ]);
  
  // Show the context menu when right-clicking
  win.webContents.on('context-menu', (event, params) => {
    contextMenu.popup({ window: win });
  });
  
};
function createMenu(win) {
  const template = [
      {
          label: 'File',
          submenu: [
              {
                  label: 'Open File',
                  accelerator: 'CmdOrCtrl+O',
                  click: async () => {
                      const { canceled, filePaths } = await dialog.showOpenDialog({
                          properties: ['openFile']
                      });
                      if (!canceled) {
                          win.webContents.send('file-opened', filePaths[0]);
                      }
                  }
              },
              { type: 'separator' },
              {
                  label: 'Exit',
                  accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Alt+F4',
                  click: () => app.quit()
              }
          ]
      },
      {
          label: 'Edit',
          submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            }
        ]
      },
      {
        label: 'View',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'toggleDevTools'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetZoom'
            },
            {
                role: 'zoomIn'
            },
            {
                role: 'zoomOut'
            },
            {
                type: 'separator'
            },
            {
                role: 'toggleFullscreen'
            }
        ]
      },
      {
        label: 'Help',
        submenu: [
            {
                label: 'About',
                click: () => {
                    dialog.showMessageBox(win, {
                        title: 'About',
                        message: 'Electron Menu Demo App',
                        detail: 'Version 1.0.0\nA simple demonstration of native menus in Electron.'
                    });
                }
            }
        ]
      }
    ]
    if (process.platform === 'darwin') {
      template.unshift({
          label: app.name,
          submenu: [
              { role: 'about' },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideOthers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' }
          ]
      });
  }
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
  app.quit()
})