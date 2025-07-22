# chatGPT-electron
Simple ChatGPT (https://chatgpt.com) of OpenAI (https://openai.com) builded with electron for desktop app.

## Installation
### From AppImage
Download the AppImage from Release page [here](https://github.com/alb-soul/chatGPT-electron/releases)

Give executable permission
```bash
chmod +x <nama_file>.AppImage
```
Then run it
```bash
./<nama_file>.AppImage
```

### From Source
*Tools : NodeJS and NPM, install both first if you don't have yet

Clone this repository

```bash
git clone https://github.com/alb-soul/chatGPT-electron.git
```
Build the project
```bash
cd chatGPT-electron
npm install
```
Try it first if you want
```bash
npm run start
```
Build the project to generate AppImage
```bash
npm run build
```
Go to dist directory then run it
```bash
cd dist
./<nama_file>.AppImage
```

## Make available on menu
For making the app appears on menu, we must create desktop application file
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

Create chatgpt directory in /opt/ then copy the AppImage file into this folder
```bash
sudo mkdir -p /opt/chatgpt
```

```bash
sudo update-desktop-database
```
Then you will see that ChatGPT app will be available on menu
