@echo off
title MobileSync Pro Desktop Launcher
cd /d "%~dp0"

if exist "dist\win-unpacked\MobileSync Pro.exe" (
    start "" "dist\win-unpacked\MobileSync Pro.exe"
) else (
    npm start
)
