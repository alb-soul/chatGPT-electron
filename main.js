const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'gpt.png'),  // Menambahkan ikon aplikasi
    autoHideMenuBar: true,  // Menyembunyikan menu bar
  });

  win.loadURL('https://chatgpt.com');

  // Menangani ketika jendela ditutup
  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

// Menangani kapan semua jendela ditutup
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
