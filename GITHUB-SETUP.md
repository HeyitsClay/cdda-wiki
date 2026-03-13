# GitHub Setup Instructions

The git repository is already initialized and committed locally. Here's how to push it to GitHub:

## Option 1: Using the Push Script (Easiest)

1. **Double-click `PUSH-TO-GITHUB.bat`**
2. Follow the prompts
3. Done!

## Option 2: Manual Steps

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Enter repository name: `cdda-wiki` (or any name you prefer)
3. **Important:** Do NOT initialize with README (we already have one)
4. Click "Create repository"

### Step 2: Push Your Code
Copy and paste these commands in the cdda-wiki folder:

```bash
# Add your GitHub repo as the remote
git remote add origin https://github.com/YOUR-USERNAME/cdda-wiki.git

# Push to GitHub
git push -u origin master
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages (Optional - for free hosting)

To host the wiki as a free website:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select **master** branch and **/ (root)** folder
6. Click **Save**
7. Wait 1-2 minutes
8. Your wiki will be live at: `https://YOUR-USERNAME.github.io/cdda-wiki/`

## Git Configuration (if needed)

If git asks for your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Repository Contents

Your repository includes:
- ✅ Complete wiki with 16+ sections
- ✅ Search functionality
- ✅ Dark theme styling
- ✅ Mobile responsive design
- ✅ All interlinked content

## Need Help?

If you get stuck:
- GitHub's guide: https://docs.github.com/en/get-started/quickstart
- Or run: `git help` in this folder
