var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    height: 1000,
    resizable: true,
    title: 'j5/electron template',
    width: 1440,
	frame: false
  });

  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});