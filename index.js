const {app, BrowserWindow} = require ('electron')

function CreateWindow()
{
    let win = new BrowserWindow
    (
        {
            width: 900,
            height: 600,
            center: true,
            webPreferences: {
                nodeIntegration: true
            }
        }
    )
    win.loadFile('index.html');
}

app.on('ready', CreateWindow);