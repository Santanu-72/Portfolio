# 🎨 Portfolio Customization Guide

Complete instructions for personalizing your Data Analyst portfolio website with the premium hero section.

## 📝 Table of Contents
1. [Text & Content](#text--content)
2. [Hero Section](#hero-section)
3. [Colors & Theme](#colors--theme)
4. [Images & Media](#images--media)
5. [Projects & Skills](#projects--skills)
6. [Advanced Customizations](#advanced-customizations)

---

## 📝 Text & Content

### Your Name
**File:** `index.html`

Find and replace all instances of "Santanu Jana":
- Line 62: Hero section headline (main name in large text)
- Line 70: About section name reference
- Line 90: Navbar logo
- Line 490: Footer name
- Line 10: Title tag

**Quick Replace:** 
1. Press `Ctrl+H` (or `Cmd+H` on Mac)
2. Find: `Santanu Jana`
3. Replace with: `Your Name`
4. Click "Replace All"

### Professional Title & Skills
**File:** `index.html` - Line 67

Current structure shows your title with skill badges:
```html
<div class="hero-subheadline">
    <span class="sub-prefix">Data Analyst</span>
    <div class="skills-badges">
        <span class="skill-badge">SQL</span>
        <span class="skill-badge">Python</span>
        <span class="skill-badge">Power BI</span>
        <span class="skill-badge">BI</span>
    </div>
</div>
```

Customize your title and skills:
- Change "Data Analyst" to your primary title
- Update skill badges to match your expertise (e.g., Python, SQL, Tableau, Excel)
- Keep 3-4 most important skills for visual balance

### Dynamic Typing Animation
**File:** `script.js` - Line 25

The typing animation cycles through these messages:
```javascript
const typingTexts = [
    'Transforming Data Into Decisions',
    'Building Insight-Driven Solutions',
    'Turning Raw Data Into Business Value',
    'Data Storytelling Through Analytics'
];
```

Customize with your own messages (4 recommended):
- Keep them action-oriented and impactful
- 30-60 characters each for best display
- Examples:
  - "Unlocking Insights From Data"
  - "Driving Business Growth Through Analytics"
  - "Making Data Accessible & Actionable"
  - "Solving Problems With Data"

### Professional Intro
**File:** `index.html` - Line 75

Current:
```html
<p class="hero-intro">
    Aspiring Data Analyst focused on transforming complex datasets into meaningful business insights through analytics, visualization, and problem-solving.
</p>
```

Update with 1-2 sentences about yourself, keeping it concise and recruiter-focused.

### Email Address
**File:** `index.html` - Search for email contacts and replace with your email:
- Contact section
- Footer

### LinkedIn Profile
**File:** `index.html` - Search for LinkedIn URLs and replace:
- Contact section
- Footer social links

Format: `linkedin.com/in/yourprofileurl`

### GitHub Profile
**File:** `index.html` - Search for GitHub URLs and replace:
- Contact section
- Footer social links
- All project links

---

## 🎯 Hero Section

The new premium hero is a two-column layout with cinematic animations.

### Left Column - Main Content

**Live Badge** (Line ~55)
```html
<div class="live-badge" id="live-badge">
    <span class="pulse-dot"></span>
    <span class="badge-text">Learning • Building • Analyzing</span>
</div>
```
Customize the badge text to represent your current focus.

**Main Headline** (Line ~61)
```html
<h1 class="hero-headline" id="hero-headline">
    <span class="headline-word">Santanu</span>
    <span class="headline-word">Jana</span>
</h1>
```
Split your name into first/last names for the cinematic reveal animation.

**Skill Badges** (Line ~67)
Already covered above - customize to match your skills.

**Typing Animation** (Line ~72)
Uses the typing texts from script.js (see above).

**Professional Intro** (Line ~75)
Brief description of your professional focus.

**CTA Buttons** (Line ~81)
Three call-to-action buttons:
1. "Explore Projects" - Links to projects section
2. "Download Resume" - Links to assets/resume.pdf
3. "Contact Me" - Links to contact section

Each button has:
- Icon (Font Awesome)
- Text label
- Glow hover effect
- Premium glass styling

### Right Column - Analytics Dashboard

**Floating Analytics Cards** (Line ~100-135)

The right side displays 4 animated metric cards:

1. **Revenue Growth Card**
   - Shows animated percentage (24.8%)
   - Icon: Arrow trend up
   - Customize by editing data-target="248"

2. **SQL Expertise Card**
   - Shows "Advanced Queries" text
   - Icon: Database
   - Keep as-is or update text

3. **Dashboard Insights Card**
   - Shows "Power BI Master" text
   - Icon: Chart bar
   - Customize tech focus

4. **Data Accuracy Card**
   - Shows animated percentage (98.7%)
   - Icon: Check circle
   - Customize by editing data-target="987"

**Customize Cards:**

To update metric values:
```html
<p class="card-value" data-target="248">0</p>
```
Change `248` to your target number (displayed as 24.8%).

To update card text:
```html
<p class="card-value-text">Advanced Queries</p>
```

### Background Effects

**Gradient Mesh** - Animated color shift in background
- Controlled by CSS in style.css (~line 345-350)
- Creates soft, glowing effect

**Particles** - Floating data-like particles
- Controlled by script.js createParticles() function
- Creates ambient motion in background

**Light Beams** - Soft vertical light effects
- Adds cinematic depth
- CSS animations control the flow

**Grid Overlay** - Subtle analytics dashboard grid
- Fades in/out with pulsing animation
- Reinforces data analyst theme

---

## 🎨 Colors & Theme

### Primary Color (Main Accent)
**File:** `style.css` - Line 10

Current: `--primary-color: #00d4ff;`

Popular choices:
- **Cyan**: `#00d4ff` (Current - Professional)
- **Blue**: `#0099ff` (Trust)
- **Purple**: `#8c5cf6` (Creative)
- **Green**: `#00ff88` (Success)
- **Pink**: `#ff006e` (Modern)
- **Orange**: `#ff6b35` (Energy)

Find and replace all instances:
1. Open `style.css`
2. Line 10: `--primary-color`
3. Line 11: `--primary-dark` (darker shade of primary)

### Secondary Color (Accent)
**File:** `style.css` - Line 12

Current: `--secondary-color: #8c5cf6;`

Pairs well with primary color for gradients.

### Dark Background
**File:** `style.css` - Line 14

Current: `--bg-dark: #0f0f1e;`

Customize to match your color scheme:
- **Very Dark**: `#0a0a0f`
- **Dark Blue**: `#0f1530`
- **Dark Purple**: `#1a0f2e`

### Test Your Color Scheme
1. Update colors in CSS
2. Save and refresh browser
3. Use Chrome DevTools to test different colors
4. Check contrast for readability

### Create a Color Palette
Use online tools:
- [Coolors.co](https://coolors.co/) - Generate palettes
- [Color Hunt](https://colorhunt.co/) - Pre-made palettes
- [Adobe Color](https://color.adobe.com/) - Advanced picker

---

## 🖼️ Images & Media

### Profile Picture
**File:** `assets/images/profile.jpg`

**Specifications:**
- **Format**: JPG or PNG
- **Size**: 400x400 pixels (square)
- **File Size**: < 200KB
- **Style**: Professional headshot, neutral background

**Update in HTML** - Line 180:
```html
<img src="assets/images/profile.jpg" alt="Your Name" 
     onerror="this.src='https://via.placeholder.com/400x400/1a1a2e/00d4ff?text=YourName'">
```

Replace `Your Name` in both places.

### Project Images
**Files:** `assets/images/project1.jpg` through `project4.jpg`

**Specifications:**
- **Format**: JPG or PNG
- **Size**: 800x600 pixels (4:3 ratio) or 600x400
- **File Size**: < 300KB each
- **Content**: Project screenshot or mockup

**Image Locations in HTML:**
- Project 1: Line 395
- Project 2: Line 440
- Project 3: Line 485
- Project 4: Line 530

### Optimize Images
1. **TinyPNG** - Compress images (tinypng.com)
2. **ImageOptim** - Batch optimization
3. **Squoosh** - Google's image converter
4. **FileSize**: Aim for < 200KB per image

### Fallback Images
If image doesn't load, a placeholder appears automatically thanks to `onerror` attribute.

---

## 🚀 Projects & Skills

### Update Project Information

**File:** `index.html` - Lines 390-540

Each project has:
1. **Project Image** (optional)
2. **Project Title**
3. **Description**
4. **Tech Stack** (badges)
5. **Links** (GitHub, Live Demo)

#### Example Project Structure:
```html
<div class="project-card" data-category="python">
    <div class="project-image">
        <img src="assets/images/project1.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span class="tech-badge">Technology</span>
        </div>
        <div class="project-buttons">
            <a href="github-url" class="btn">GitHub</a>
            <a href="demo-url" class="btn">Demo</a>
        </div>
    </div>
</div>
```

### Add a New Project

1. **Copy** existing project card
2. **Paste** after the last project
3. **Update:**
   - `data-category` (python, sql, powerbi, or other)
   - Image path
   - Title
   - Description
   - Tech badges (add/remove as needed)
   - GitHub link
   - Demo link

4. **Update CSS** if adding new category:
   ```javascript
   // In script.js, add to filter buttons if new category
   <button class="filter-btn" data-filter="newcategory">New</button>
   ```

### Skills & Proficiency

**File:** `index.html` - Lines 220-290

**Update Skill Percentage:**
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Python</span>
        <span class="skill-percentage">85%</span>  <!-- Change this -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>  <!-- And this -->
    </div>
</div>
```

**Add New Skill:**
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percentage">XX%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="XX"></div>
    </div>
</div>
```

### Add New Skill Category

1. Add in HTML:
```html
<div class="skill-category glass-card">
    <h3 class="category-title">
        <span class="category-icon">🎯</span>
        New Category
    </h3>
    <!-- Add skills here -->
</div>
```

2. Adjust grid columns in CSS if needed (usually auto-scales)

---

## 📚 Certifications & Timeline

**File:** `index.html` - Lines 590-650

**Update Timeline Entry:**
```html
<div class="timeline-item">
    <div class="timeline-marker">
        <div class="marker-icon">✓</div>  <!-- Change icon -->
    </div>
    <div class="timeline-content">
        <h3>Certification Name</h3>  <!-- Your cert -->
        <p class="timeline-subtitle">Subtitle</p>
        <p class="timeline-description">Description</p>
        <span class="timeline-date">Year</span>  <!-- Update year -->
    </div>
</div>
```

**Timeline Icons:**
- ✓ = Completed
- 🎓 = Education
- 📜 = Certificate
- 🏆 = Award
- ★ = Achievement

---

## 💼 Experience Section

**File:** `index.html` - Lines 660-700

**Update Experience:**
```html
<div class="experience-card">
    <div class="exp-header">
        <h4>Job Title</h4>
        <span class="exp-date">Year - Present</span>
    </div>
    <p class="exp-company">Company Name</p>
    <p class="exp-description">Job description</p>
    <ul class="exp-highlights">
        <li><i class="fas fa-check"></i> Achievement 1</li>
        <li><i class="fas fa-check"></i> Achievement 2</li>
    </ul>
</div>
```

---

## 🎯 Advanced Customizations

### Change Font

**File:** `style.css` - Lines 24-26

Current fonts:
- Primary: 'Poppins'
- Secondary: 'Montserrat'
- Code: 'Fira Code'

**Google Fonts Alternatives:**
```css
/* In style.css */
@import url('https://fonts.googleapis.com/css2?family=[FONT_NAME]:wght@[WEIGHTS]&display=swap');

--font-primary: '[FONT_NAME]', sans-serif;
```

Popular choices:
- **Elegant**: Playfair Display, Lora, Merriweather
- **Modern**: Inter, Raleway, Outfit
- **Friendly**: Quicksand, Nunito, Comfortaa

### Add Custom Animations

**File:** `style.css` - Add new keyframes

Example - Pulse animation:
```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.my-element {
    animation: pulse 2s infinite;
}
```

### Modify Animation Speed

**File:** `script.js`

Change transition durations:
```javascript
// Line 120 - Typing speed
setTimeout(type, 100);  // ms between characters

// Line 95 - Form submission delay
setTimeout(() => { ... }, 1500);  // 1.5 seconds
```

**File:** `style.css`

CSS animation durations:
```css
--transition-fast: 0.2s ease;      /* Hover effects */
--transition-normal: 0.3s ease;    /* Default */
--transition-slow: 0.5s ease;      /* Dramatic */
```

### Add Gradient Backgrounds

**File:** `style.css` - Add to sections

Example:
```css
.your-section {
    background: linear-gradient(
        135deg, 
        rgba(0, 212, 255, 0.1) 0%, 
        rgba(140, 92, 246, 0.1) 100%
    );
}
```

### Modify Hover Effects

**File:** `style.css`

Example - Card hover:
```css
.project-card:hover {
    transform: translateY(-10px);  /* How far to move */
    box-shadow: var(--shadow-xl);  /* Shadow size */
}
```

Adjust `translateY` value or add `translateX` for different directions.

### Sticky Navigation Options

**File:** `style.css` - Line 115

Current: `position: fixed;`

Alternatives:
- `sticky` - Stays until parent scrolls past
- `relative` - Normal positioning
- `absolute` - For fixed positioning within parent

### Container Width

**File:** `style.css` - Line 19

Current: `--container-width: 1200px;`

Adjust for more/less whitespace:
- Wider: `1400px` or `1600px`
- Narrower: `900px` or `1000px`

---

## 🧪 Testing Your Changes

### Before Deploying

1. **Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile sizes (320px, 768px, 1024px)

2. **Functionality Check**
   - All links work
   - Form validates and submits
   - Theme toggle works
   - Mobile menu opens/closes

3. **Visual Review**
   - Colors look good
   - Text is readable
   - Images are properly sized
   - No broken links

4. **Performance Check**
   - Page loads in < 3 seconds
   - No console errors (F12)
   - Images optimized

### Browser Console (F12)
Look for red errors - they indicate problems to fix.

---

## 🚀 Tips for Best Results

1. **Keep it Consistent** - Use same fonts, spacing, colors throughout
2. **Test Thoroughly** - Check desktop, tablet, mobile
3. **Optimize Images** - Large images slow down page
4. **Use Descriptive Text** - Help recruiters understand your projects
5. **Include Metrics** - "Analyzed 50K records" is better than "Data analysis"
6. **Link Everything** - GitHub, LinkedIn, portfolio links should work
7. **Regular Updates** - Add new projects and skills as you learn
8. **Back Up Changes** - Save versions before major changes

---

## 📞 Common Issues & Solutions

### Colors Not Changing
- Clear browser cache (Ctrl+Shift+R)
- Check you're editing the right CSS file
- Make sure no conflicting inline styles

### Images Not Showing
- Verify file exists in `assets/images/`
- Check file name spelling (case-sensitive on servers)
- Use relative paths: `assets/images/name.jpg`

### Animations Too Slow/Fast
- Adjust `animation-duration` in CSS
- Reduce `setTimeout` values in JavaScript
- Test on different devices

### Mobile Menu Not Working
- Verify hamburger button has `id="hamburger"`
- Check nav menu has `id="nav-menu"`
- Clear cache and hard refresh

### Text Overflowing
- Reduce font size
- Increase container width
- Use shorter text
- Add line breaks

---

**Happy customizing! 🎉**

For more help, refer to the main README.md file.
