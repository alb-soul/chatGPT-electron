# chatGPT-electron
Simple ChatGPT (https://chatgpt.com) of OpenAI (https://openai.com) builded with electron for desktop app.

## Installation
There are 2 ways to install, (1) via packed package like .deb file (for Debian/Ubuntu/Mint and derivates) or .rpm (form RPM-bsaed distros) and (2) via AppImage. Download one of them from Release page [here](https://github.com/alb-soul/chatGPT-electron/releases/tag/v1.0.1)

#### Download the .deb file (for Debian/Ubuntu/Mint or derivates) then install it :
```bash
sudo dpkg -i chatgpt_1.0.1_amd64.deb
```

#### Download the .rpm file (for Red Hat/Fedora/RPM-based distros) then install it :
```bash
sudo dnf install ./chatgpt-1.0.1.x86_64.rpm
```
Or
#### Download the .AppImage app file from Release page [here](https://github.com/alb-soul/chatGPT-electron/releases/tag/v1.0.1)

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
