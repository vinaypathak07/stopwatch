import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import url from 'url';
import createMenu from './menu';

let mainWindow: Electron.BrowserWindow;

function createWindow(): void {
  createMenu();
  // Create the browser window.
  mainWindow = new BrowserWindow({
    center: true,
    darkTheme: true,
    height: 700,
    minHeight: 600,
    minWidth: 600,
    movable: true,
    show: false,
    title: 'Stopwatch',
    titleBarStyle: 'hidden',
    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      textAreasAreResizable: false,
    },
    width: 1000,
  });

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, '../index.html'));
  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '../public/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

app.on('activate', (event: Electron.Event, hasVisibleWindows: boolean) => {
  console.log(event, hasVisibleWindows);
});

app.setName('Stopwatch');
