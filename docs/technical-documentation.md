# Technical Documentation

## Project Overview
**Project Name:** Personal Portfolio Web Application  
**Purpose:** Showcase personal projects, skills, and contact information in a responsive, professional layout.  

---

## 1. File Structure
   assignment-1/
    ├── README.md
    ├── index.html
    ├── css/
    │ └── styles.css
    ├── js/
    │ └── script.js
    ├── assets/
    │ └── images/
    ├── docs/
    │ ├── ai-usage-report.md
    │ └── technical-documentation.md
    └── .gitignore

---

## 2. HTML Structure
- **Header:** Contains name, tagline, and navigation links (`About`, `Projects`, `Contact`).  
- **About Section:** Short intro paragraph and optional profile image.  
- **Projects Section:** Each project includes a title, description, and placeholder image.  
- **Contact Section:** Form with fields for Name, Email, and Message.  
- **Footer:** Contains email, GitHub link, and copyright.

---

## 3. CSS Structure
- **Reset / Global Styles:** Applied `margin: 0`, `padding: 0`, `box-sizing: border-box`.  
- **Typography & Layout:** Sans-serif fonts, consistent line-height, centered header text.  
- **Header & Nav:** Background color, flexbox nav layout, hover effects for links.  
- **Sections & Divs:** Background color, padding, margin, border-radius, box-shadow, hover effects.  
- **Form Fields:** Full-width inputs, focus effects, rounded borders.  
- **Footer:** Background color, padding, centered text.  
- **Responsive Design:** Media queries for tablets (max-width: 768px) and mobiles (max-width: 480px).

---

## 4. JavaScript
- **Greeting Function:** Shows dynamic greeting message based on current hour (`Good morning/afternoon/evening/night`).  
- **DOM Manipulation:** Targets the element with `id="greeting"` and updates text content.  
- **Animation:** CSS `@keyframes` slide-up applied to greeting message.

---

## 5. Responsive Design Approach
- Used **Flexbox** for layout and navigation.  
- Applied **media queries** to adjust padding, margin, font sizes, and layout for tablets and mobile screens.  
- Tested across multiple screen widths using browser DevTools.

---

## 6. Key Considerations
- **Accessibility:** Proper semantic HTML elements and focus states for form fields.  
- **Performance:** Optimized images (placeholder), minimized unnecessary margins/paddings.  
- **Maintainability:** Separate CSS and JS files, clear IDs and class names.  

---

## 7. Known Limitations
- Contact form does not have backend submission (HTML form only).  
- Placeholder images are used instead of real project screenshots.  
- Greeting animation is simple; could be enhanced with more advanced effects.  

---
