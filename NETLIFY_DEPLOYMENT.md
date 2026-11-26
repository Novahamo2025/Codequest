# 🌐 Netlify Deployment Guide

Follow these steps to deploy **CodeQuest: The Lost Kingdom** on [Netlify](https://www.netlify.com/):

### Method 1: Git-Connected Deployment
1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click **Add new site** -> **Import an existing project**.
3. Choose your Git provider (GitHub, GitLab, Bitbucket) and authorize.
4. Select the `codequest` repository.
5. In the build settings:
   - **Base directory:** Leave blank (defaults to root)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy codequest**.

### Method 2: Manual Drag & Drop
If you prefer deploying without Git:
1. Run `npm run build` locally to generate the `dist` folder.
2. In the Netlify dashboard, navigate to **Sites**.
3. Drag and drop the `dist/` directory into the upload box.
4. Netlify will immediately deploy your site with a live URL.

> Note: The included `netlify.toml` handles routing rewrites and Pyodide WebAssembly security headers automatically.
