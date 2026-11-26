# 🚀 Vercel Deployment Guide

Follow these simple steps to deploy **CodeQuest: The Lost Kingdom** on [Vercel](https://vercel.com):

### Step 1: Push Project to Git
Initialize and push your project to GitHub or GitLab:
```bash
git init
git add .
git commit -m "Initial commit of CodeQuest: The Lost Kingdom"
git remote add origin https://github.com/YOUR_USERNAME/codequest.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** -> **Project**.
3. Select your `codequest` repository and click **Import**.

### Step 3: Project Configuration
- **Framework Preset:** Vite
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Step 4: Deploy
Click **Deploy**. Vercel will build the production bundle in ~1 minute.

> Note: The included `vercel.json` already contains the necessary single-page rewrite rules and WebAssembly cross-origin headers.
