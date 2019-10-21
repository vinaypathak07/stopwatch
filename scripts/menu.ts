/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { app, Menu } from 'electron';

export default function createMenu(): void {
  const isMac = process.platform === 'darwin';
  // @ts-ignore
  const isDev = process.env !== 'production';
  // @ts-ignore
  const template: Electron.MenuItemConstructorOptions[] = [
    ...(isMac
      ? [
          {
            role: 'appMenu',
            label: app.getName(),
            submenu: [
              { role: 'about' },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideothers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit', label: `Quit ${app.getName()}` },
            ],
          },
        ]
      : []),
    {
      label: 'File',
      role: 'fileMenu',
      submenu: [{ label: 'New Task' }, isMac ? { role: 'close' } : { role: 'quit' }],
    },
    {
      label: 'Edit',
      role: 'editMenu',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac
          ? [{ role: 'pasteAndMatchStyle' }, { role: 'delete' }, { role: 'selectAll' }]
          : [{ role: 'delete' }, { type: 'separator' }, { role: 'selectAll' }]),
      ],
    },
    {
      label: 'View',
      role: 'viewMenu',
      submenu: [
        ...(isDev
          ? [
              { role: 'reload' },
              { role: 'forcereload' },
              { role: 'toggledevtools' },
              { type: 'separator' },
            ]
          : []),
        { label: 'Normal View', accelerator: 'CmdOrCtrl+1' },
        { label: 'Minimized View', accelerator: 'CmdOrCtrl+2' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac
          ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }]
          : [{ role: 'close' }]),
      ],
    },
    {
      role: 'help',
      label: 'Help',
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
