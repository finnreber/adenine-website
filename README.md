# 💕 Our Little Website

A private, password-protected static site hosted on GitHub Pages.

## Files

```
index.html          ← date password page
home.html           ← home page (add sections here)
static/
  css/style.css
  js/login.js       ← password check + date formatter
```

## 🚀 Deploy to GitHub Pages (5 minutes)

### 1. Create a GitHub repo

Go to [github.com/new](https://github.com/new) and create a **private** repo (private keeps the code hidden, but the Pages URL will still work for anyone you share it with).

### 2. Push the files

```bash
git init
git add .
git commit -m "💕 first commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings → Pages**
3. Under "Branch", select `main` and folder `/root`
4. Click **Save**

After ~60 seconds your site is live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

Share that link and the date `12/01/25` with her!

## ✏️ Adding more to the home page

Edit `home.html` — swap out the placeholder cards with real content whenever you're ready.
