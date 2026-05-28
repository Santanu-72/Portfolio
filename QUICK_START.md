# 🚀 Quick Start - 5 Minute Premium Hero Setup Guide

Get your premium portfolio hero section personalized in 5 minutes!

---

## 🎯 The Absolute Must-Do Items

### 1. Your Name (1 minute)
**File:** `index.html`

Update hero headline (line ~62-63):
- First name (line 62)
- Last name (line 63)

Quick method:
- Press `Ctrl+H` (Find & Replace)
- Find: `Santanu`
- Replace with: **YOUR FIRST NAME**
- Find: `Jana`
- Replace with: **YOUR LAST NAME**
- Click "Replace All" (for footer, etc.)

### 2. Your Skills (1 minute)
**File:** `index.html` - Line ~67-71

Update skill badges in hero:
```html
<span class="skill-badge">SQL</span>
<span class="skill-badge">Python</span>
<span class="skill-badge">Power BI</span>
<span class="skill-badge">BI</span>
```

Replace with your top 4 skills (e.g., Python, SQL, Tableau, Excel).

### 3. Your Typing Messages (1 minute)
**File:** `script.js` - Line ~25

Replace the 4 typing animation messages:
```javascript
const typingTexts = [
    'Your Message 1',      // ~30-50 characters
    'Your Message 2',      // ~30-50 characters
    'Your Message 3',      // ~30-50 characters
    'Your Message 4'       // ~30-50 characters
];
```

Examples:
- "Transforming Data Into Decisions"
- "Building Insight-Driven Solutions"
- "Turning Raw Data Into Business Value"
- "Data Storytelling Through Analytics"

### 4. Your Professional Intro (1 minute)
**File:** `index.html` - Line ~75

Update hero intro text (1-2 sentences about yourself).

### 5. Your Contact Info (1 minute)
**File:** `index.html`
- Press `Ctrl+H` (Find & Replace)
- Find: `santannu947@gmail.com`
- Replace with: **YOUR EMAIL**
- Find: `linkedin.com/in/santanujana-`
- Replace with: **YOUR LINKEDIN**
- Find: `github.com/Santanu-72`
- Replace with: **YOUR GITHUB**
- Click "Replace All"

---

## 🚀 Run Your Portfolio Locally

### Best Method: Live Server (Recommended)
1. Open `index.html` in VS Code
2. Right-click → "Open with Live Server"
3. Visit `http://localhost:5500`
4. Changes auto-refresh!

### Alternative: Python
```bash
cd "d:\My Website"
python -m http.server 8000
# Visit http://localhost:8000
```

### Alternative: Node.js
```bash
npm install -g http-server
http-server
# Visit http://localhost:8080
```

---

## 📋 Hero Section Quick Reference

**Your Customizable Elements:**

| Element | Location | What to Change |
|---------|----------|---|
| First Name | Line 62 | "Santanu" → Your first name |
| Last Name | Line 63 | "Jana" → Your last name |
| Title | Line 67 | "Data Analyst" → Your title |
| Skills 1-4 | Lines 68-71 | Update to your skills |
| Typing Msg 1-4 | script.js:25 | Your 4 key messages |
| Professional Intro | Line 75 | About yourself (1-2 sentences) |
| Revenue % | Line 102 | data-target="248" → Your number |
| Accuracy % | Line 125 | data-target="987" → Your number |

---

## 📝 Quick Text Replacements Summary

Use **Find & Replace** (`Ctrl+H`) for:

| Find | Replace With |
|------|---|
| `Santanu Jana` | Your Name |
| `Data Analyst \| SQL \| Python \| Power BI \| BI` | Your Title + Skills |
| `santannu947@gmail.com` | Your Email |
| `linkedin.com/in/santanujana-` | Your LinkedIn |
| `github.com/Santanu-72` | Your GitHub |

---

## 🎨 Optional Customizations

### Metrics Cards (Hero Right Side)
**File:** `index.html` - Lines 100-135

1. **Revenue Growth Card** (Line 102)
   - Change `data-target="248"` to your metric (displayed as 24.8%)

2. **SQL Card** (Line 115)
   - Change "Advanced Queries" text

3. **Power BI Card** (Line 123)
   - Change "Power BI Master" text

4. **Data Accuracy Card** (Line 131)
   - Change `data-target="987"` to your metric (displayed as 98.7%)

### Live Badge Text
**File:** `index.html` - Line ~55
```html
<span class="badge-text">Learning • Building • Analyzing</span>
```
Customize to your focus: "Coding • Analyzing • Shipping" or similar.

---

## ✅ Quick Checklist

- [ ] Updated hero name (first & last)
- [ ] Updated skill badges (4 skills)
- [ ] Updated typing messages (4 messages)
- [ ] Updated professional intro
- [ ] Updated email address
- [ ] Updated GitHub URL
- [ ] Updated LinkedIn URL
- [ ] Updated metrics cards (optional)
- [ ] Portfolio opens in browser
- [ ] All text displays correctly

**You're done!** 🎉

Your premium hero section is now personalized. Continue with the full SETUP_CHECKLIST.md for complete portfolio customization (projects, images, resume, etc.).

---

## 🎬 See It In Action

1. Save all changes
2. Browser auto-refreshes (if using Live Server)
3. Scroll through hero section animations
4. Test dark/light theme toggle
5. Try responsive design (press F12 for device view)

Enjoy your premium portfolio! 🚀
    <h3>Amazon Prime EDA</h3>
    <p>Analyzed 10K+ titles to discover content trends</p>
    <span class="tech-badge">Python</span>
    <span class="tech-badge">Pandas</span>
    <a href="https://github.com/yourname/project1">GitHub</a>
    <a href="https://your-demo.com">Demo</a>
</div>
```

---

## 🖼️ Image Quick Guide

### File Sizes & Formats

| Image | Size | Format | Max Size |
|-------|------|--------|----------|
| Profile | 400×400 | JPG/PNG | 200 KB |
| Project 1 | 800×600 | JPG/PNG | 300 KB |
| Project 2 | 800×600 | JPG/PNG | 300 KB |
| Project 3 | 800×600 | JPG/PNG | 300 KB |
| Project 4 | 800×600 | JPG/PNG | 300 KB |

### Image Paths
- Profile: `assets/images/profile.jpg`
- Projects: `assets/images/project1.jpg` through `project4.jpg`
- Resume: `assets/resume.pdf`

---

## 🎨 Change Colors (Optional)

**File:** `style.css` - Lines 10-12

```css
--primary-color: #00d4ff;      /* Main accent - Change this */
--primary-dark: #0099cc;        /* Darker version of primary */
--secondary-color: #8c5cf6;     /* Secondary accent - Change this */
```

**Popular Colors:**
- Cyan (Professional): `#00d4ff`
- Blue (Trust): `#0099ff`
- Purple (Creative): `#8c5cf6`
- Green (Success): `#00ff88`
- Orange (Energy): `#ff6b35`

**Test:** Save → Refresh browser (Ctrl+R)

---

## ✅ Testing Checklist

Before sharing:

- [ ] All your info filled in
- [ ] Images added
- [ ] Resume PDF works
- [ ] Links work (tested in browser)
- [ ] Mobile view looks good (F12 → Toggle Device Toolbar)
- [ ] Theme toggle works (Moon icon)
- [ ] Project filter buttons work
- [ ] Form submits without errors
- [ ] No spelling mistakes

---

## 🚀 Deploy Online (Pick One)

### GitHub Pages (FREE)
1. Create GitHub repo: `yourusername.github.io`
2. Upload all files
3. Visit: `https://yourusername.github.io`

### Netlify (FREE)
1. Go to netlify.com
2. Drag & drop your folder
3. Site deployed instantly!

### Vercel (FREE)
1. Go to vercel.com
2. Import your GitHub repo
3. Auto-deploys on push

### Custom Domain
1. Buy domain (GoDaddy, Namecheap)
2. Point DNS to hosting
3. Upload files via FTP/SFTP

---

## 📞 File Customization Map

**"Where do I change...?"**

| What to Change | File | Location | How |
|---|---|---|---|
| Your Name | index.html | Everywhere | Find & Replace |
| Email | index.html | 2 places | Find & Replace |
| GitHub URL | index.html | 2 places | Find & Replace |
| LinkedIn URL | index.html | 2 places | Find & Replace |
| Projects | index.html | Lines 390-540 | Edit HTML directly |
| Skills | index.html | Lines 220-290 | Edit HTML directly |
| Colors | style.css | Lines 10-12 | Edit CSS variables |
| Fonts | style.css | Lines 24-26 | Change font names |

---

## 🐛 Quick Troubleshooting

### Images not showing?
- Check path: `assets/images/filename.jpg`
- Verify file exists
- Clear cache: Ctrl+Shift+R

### Styles not applying?
- Clear cache: Ctrl+Shift+R
- Check CSS file is loaded (F12 → Network)
- Refresh browser

### JavaScript not working?
- Open console: F12 → Console
- Check for red errors
- Verify script.js path is correct

### Links not working?
- Test in browser
- Check URL is complete (https://...)
- Verify GITHUB/DEMO links exist

---

## 📚 Need More Help?

- **Full Setup Guide**: Read `README.md`
- **Detailed Customization**: Read `CUSTOMIZATION.md`
- **Complete Checklist**: Read `SETUP_CHECKLIST.md`
- **Browser Console Help**: Press F12 for debugging
- **Local Server Issues**: Check terminal output

---

## 💡 Pro Tips

1. **Test on Phone** - Use your actual phone on same WiFi
2. **Ask for Feedback** - Show friends and get honest feedback
3. **Keep Resume Updated** - Sync with your portfolio
4. **Add Real Links** - Working GitHub links impress recruiters
5. **Update Regularly** - Add projects as you complete them
6. **Mobile First** - Always test mobile view
7. **Spell Check** - Typos hurt your credibility
8. **Professional Photos** - Good images matter!

---

## 🎯 5-Step Launch Plan

```
Day 1: Setup & Customize
  ↓
Day 2: Add Content (projects, images)
  ↓
Day 3: Test Everything
  ↓
Day 4: Deploy Online
  ↓
Day 5: Share with Recruiters!
```

---

## 🚀 You're Ready!

That's it! You've got:
✅ Professional portfolio website
✅ Mobile responsive design
✅ Dark/Light theme
✅ Interactive features
✅ Production-ready code

**Now go get that data analyst job! 🎉**

---

**Questions? Check the main README.md file for complete documentation.**
