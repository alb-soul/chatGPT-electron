# chatGPT-electron
Simple ChatGPT (https://chatgpt.com) of OpenAI (https://openai.com) builded with electron for desktop app.

## Installation
Download the AppImage app file from Release page [here](https://github.com/alb-soul/chatGPT-electron/releases/tag/v1.0.1)

Give executable permission
```bash
chmod +x ChatGPT.Electron-1.0.1.AppImage
```
Make available on menu
```bash
sudo mkdir -p /opt/chatgpt
sudo cp ChatGPT.Electron-1.0.1.AppImage /opt/chatgpt/chatgpt.AppImage
```
```bash
sudo nano /usr/share/applications/chatgpt.desktop
```
Then write with the following below
```bash
[Desktop Entry]
Name=ChatGPT
Exec=/opt/chatgpt/chatgpt.AppImage
Icon=chatgpt
Type=Application
Categories=Utility;
Terminal=false
```
Ctrl+x then y then Enter to save it and exit

Update desktop database
```bash
sudo update-desktop-database
```
Then you will see that ChatGPT app will be available on menu
