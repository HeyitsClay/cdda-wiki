@echo off
echo ==========================================
echo   CDDA Wiki - GitHub Push Script
echo ==========================================
echo.

REM Check if remote is already set
git remote -v >nul 2>&1
if %errorlevel% == 0 (
    echo Remote repository already configured.
    goto :push
)

echo To push this wiki to GitHub:
echo.
echo 1. Create a new repository on GitHub (without README)
echo    Go to: https://github.com/new
echo.
echo 2. Copy the repository URL (e.g., https://github.com/YOURNAME/cdda-wiki.git)
echo.
set /p REPO_URL="Enter your GitHub repo URL: "

echo.
echo Adding remote...
git remote add origin %REPO_URL%

:push
echo.
echo Pushing to GitHub...
git push -u origin master

if %errorlevel% == 0 (
    echo.
    echo ==========================================
    echo   SUCCESS! Wiki pushed to GitHub!
    echo ==========================================
    echo.
    git remote -v
) else (
    echo.
    echo Push failed. Make sure:
    echo - You've created the repo on GitHub
    echo - The URL is correct
    echo - You're logged into git
    echo.
    echo To login: git config --global user.name "Your Name"
    echo           git config --global user.email "your@email.com"
)

pause
