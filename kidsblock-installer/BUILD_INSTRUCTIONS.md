# AARNAITAI ROBO - Build Instructions

## Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- Windows 10/11 (for building Windows installer)

## Quick Start (Development)

```bash
cd kidsblock-installer
npm install
npm start
```

This launches the AARNAITAI ROBO application in development mode.

## Build Windows Installer (.exe)

```bash
cd kidsblock-installer
npm install
npm run build
```

The installer will be created in `kidsblock-installer/dist/` as:
- `AARNAITAI_ROBO Setup 1.0.0.exe` (NSIS installer)

### Build Options
- `npm run build` - Creates full NSIS installer (.exe)
- `npm run build:dir` - Creates unpacked app directory (for testing)

## App Icon
To use a custom `.ico` file for the Windows installer:
1. Convert `assets/icon.svg` to `assets/icon.ico` (256x256px recommended)
2. Use an online converter or ImageMagick: `magick convert icon.svg icon.ico`

## Project Structure

```
kidsblock-installer/
  package.json          - Electron & build configuration
  src/
    main.js             - Electron main process
    preload.js          - Secure IPC bridge
    index.html          - App UI with Blockly workspace
    styles.css          - Dark theme styles
    custom-blocks.js    - Custom robot/sensor/display blocks
    app.js              - App logic (workspace, code gen, console)
  assets/
    icon.svg            - App icon (SVG source)
  build/                - Build resources
  dist/                 - Output directory (generated)
```

## Features
- Drag-and-drop block programming (powered by Google Blockly)
- 8 block categories: Logic, Loops, Math, Text, Variables, Functions, Lists + custom
- 4 custom categories: Robot, Sensors, Display, Animation
- Real-time JavaScript & Python code generation
- Built-in console with simulated robot execution
- Save/load projects as .arobo files
- Export code as .js or .py files
- Interactive tutorial for beginners
- Dark-themed, kid-friendly interface
