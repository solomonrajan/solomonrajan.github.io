# <div align="center"><img src="https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/badge/default/48px.svg" width="96" alt="Material Icon"/><br>Solomon Rajan - Labour Relations Portfolio</div>

<div align="center">

[![GitHub Deployments](https://img.shields.io/github/deployments/solomonrajan/solomonrajan.github.io/github-pages?style=for-the-badge&logo=github&logoColor=white)](https://github.com/solomonrajan/solomonrajan.github.io/deployments)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/solomonrajan/solomonrajan.github.io?style=for-the-badge&logo=git&logoColor=white)](https://github.com/solomonrajan/solomonrajan.github.io/commits)
[![Code License: MIT](https://img.shields.io/badge/Code%20License-MIT-00B0FF?style=for-the-badge&logo=opensourceinitiative&logoColor=white&logoWidth=20)](#-licensing)

</div>

---

<p align="center">
  <b>The personal portfolio and professional blog of Solomon Rajan, a Certified Labour Welfare Officer.</b><br>
  Dedicated to fostering positive industrial relations, ensuring statutory labour compliance, and driving people-centric organizational growth.<br>
</p>

<div align="center">
  <kbd>✨ Material Design 3</kbd> &nbsp;•&nbsp; <kbd>📱 Responsive</kbd> &nbsp;•&nbsp; <kbd>🌗 Dynamic Theming</kbd> &nbsp;•&nbsp; <kbd>⚡ Native Web Tech</kbd>
</div>

---

## 📖 Table of Contents

| Section | Description |
| :--- | :--- |
| [📖 About the Author](#-about-the-author) | Professional background and expertise of Solomon Rajan. |
| [🎨 Design Language & Aesthetics](#-design-language--aesthetics) | Details on Material Design 3, typography, dynamic themes, and UI. |
| [💻 Technical Stack & Apps Used](#-technical-stack--apps-used) | Overview of the frontend technologies, hosting, and development tools. |
| [🏗️ Project Architecture & Blueprint](#%EF%B8%8F-project-architecture--blueprint) | Structural overview of the repository and data pipelines. |
| [⚙️ Automation & GitHub Workflows](#%EF%B8%8F-automation--github-workflows) | Information on GitHub Actions and automated changelog generation. |
| [🚀 How to Run & Build Locally](#-how-to-run--build-locally) | Instructions for cloning, serving, and testing the project locally. |
| [📝 How to Edit & Update Content](#-how-to-edit--update-content) | Guide to modifying text, creating blog posts, and updating the changelog. |
| [🤝 Forking, Contributing, & Credits](#-forking-contributing--credits) | Guidelines for forking the repository, attribution, and contributing. |
| [🙌 Credits & Acknowledgments](#-credits--acknowledgments) | Special thanks to tools, open-source projects, and resources utilized. |
| [📜 Licensing](#-licensing) | Dual-licensing information covering source code and personal content. |

---

## 📖 About the Author

I am a dedicated HR professional and Labour Welfare Officer based in Kottayam, Kerala, India. My expertise spans across:
- **Contract Labour Management**
- **Payroll Administration**
- **Employee Welfare Strategies**
- **Statutory Labour Compliance**

---

## 🎨 Design Language & Aesthetics

This project is meticulously crafted using a Strict Minimalist Google Dashboard aesthetic combined with **Google's Material Design 3 (M3)** specifications, focusing on readability, dynamic color, and responsive geometry.

### 1. Typography & Fonts
- **Google Sans Family:** `Google Sans`, `Google Sans Flex`, and `Roboto` are used for clean UI legibility, headers, and display text.
- **Monospace:** `Google Sans Code` or `JetBrains Mono` for inline code and blocks.
- **Text Sizing:** 
  - `h1`: 2.25rem (36px)
  - `h2`: 1.5rem (24px)
  - `h3`: 1.25rem (20px)
  - Paragraphs: 1rem (16px) with a `1.5` to `1.75` line-height.
- **Formatting:** Paragraphs (`<p>`) are globally set to `text-align: justify;`. Bold (`**` or `<b>`) and Italics (`*` or `<i>`) follow standard markdown/HTML conventions to emphasize text.

### 2. Color Palettes & Dynamic Theming
The website features a dynamic theme system supporting both light and dark modes based on system preferences.

| System Role   | Light Theme | Dark Theme |
| :------------ | :---------- | :--------- |
| **Primary (Blue)** | `#1a73e8`   | `#8ab4f8`  |
| **Background**| `#ffffff`   | `#202124`  |
| **Text Primary**| `#202124` | `#e8eaed`  |
| **Text Secondary**| `#5f6368`| `#9aa0a6`  |
| **Border**    | `#dadce0`   | `#3c4043`  |

### 3. UI Elements
- **Cards:** Content is organized using Google dashboard-style cards with a `24px` border-radius and a `1px solid` border.
- **Buttons:** Modern pill-shaped buttons with `24px` border-radius.
- **Micro-Animations:** Fluid transitions (`380ms cubic-bezier(0.2, 0, 0, 1)`) are applied to theme switching, hovering, and modals.

---

## 💻 Technical Stack & Apps Used

This website operates without any heavy frameworks, build steps, or package bundlers, ensuring lightning-fast load times.

- **Frontend Core:** Pure HTML5, CSS3, and Vanilla JavaScript (ES6+).
- **Hosting:** GitHub Pages.
- **Analytics:** Privacy-first tracking (Umami).
- **Development Tools & AI Apps:**
  - **Google Gemini & Google Antigravity IDE:** Used extensively for architectural planning, code generation, and iterative design refactoring.
  - **Microsoft VS Code:** The primary text editor for manual code adjustments.
  - **Git & GitHub:** Version control, CI/CD, and hosting.

---

## 🏗️ Project Architecture & Blueprint

Here is a structural overview of the repository's source code and compiled assets.

```text
/
├── .agents/                 # AI configuration and workspace rules
├── .github/                 # GitHub workflows (e.g., changelog generation)
├── assets/                  # Compiled output and static assets
│   ├── blog/                # Compiled HTML files for blog posts
│   │   └── template.html    # Template file used to inject markdown content
│   ├── css/                 # Stylesheets
│   │   ├── material-tokens.css # Design system tokens
│   │   ├── style.css        # Main stylesheet
│   │   └── old_style.css    # Legacy styles
│   ├── docs/                # Documents (e.g., resume PDF)
│   ├── images/              # Image assets (photos, icons)
│   ├── js/                  # JavaScript files (theme, interactivity)
│   ├── logos/               # Logo assets
│   ├── changelog.html       # Auto-generated changelog output
│   └── manifest.json        # PWA manifest
├── content/                 # Source content
│   └── blog/                # Markdown (.md / .mdx) blog posts
├── *.html                   # Core website pages (index, about, blog, etc.)
├── build-blog.js            # Node script that builds markdown to HTML
├── package.json             # NPM dependencies and scripts (`npm run build:blog`)
├── README.md                # Project overview and documentation
└── CHANGELOG.md             # Auto-generated changelog markdown
```

### Data Pipelines
- **Blog Content**: `content/blog/*.mdx` + `assets/blog/template.html` ➔ `node build-blog.js` ➔ `assets/blog/*.html`
- **Changelog Updates**: `git commits` ➔ `.github/workflows/changelog.yml` ➔ `CHANGELOG.md` & `assets/changelog.html`

---

## ⚙️ Automation & GitHub Workflows

The repository leverages **GitHub Actions** to fully automate administrative tasks, located in `.github/workflows/changelog.yml`:

1. **Conventional Changelog Parsing:** On every push to `main`, the action reads commit messages.
2. **Markdown Generation:** It generates standard `CHANGELOG.md` updates.
3. **HTML Compilation:** It utilizes `npx marked-cli` to instantly compile the markdown into a formatted HTML file (`assets/changelog.html`).
4. **Auto-Commit:** The action automatically commits the updated HTML file back to the repository, instantly updating the "Learn More" popup on the homepage without manual intervention.

---

## 🚀 How to Run & Build Locally

Because this project is built exclusively with native web technologies, there is **no build step** (no `npm run build` or Webpack required).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/solomonrajan/solomonrajan.github.io.git
   cd solomonrajan.github.io
   ```
2. **Serve locally:**
   You can simply open `index.html` directly in your browser. However, for the best experience (and to bypass local CORS restrictions for modals), run a lightweight HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. **View the site:** Navigate to `http://localhost:8000` in your web browser.

---

## 📝 How to Edit & Update Content

### Modifying Text or Layouts
All content is hardcoded directly into standard `.html` files. 
- Open the relevant file (e.g., `index.html`, `about.html`, `blog.html`).
- Edit the text inside the HTML tags (`<h1>`, `<p>`, etc.).
- Save and refresh your browser.

### Creating a Blog Post
1. Create a new markdown file (e.g., `my-new-post.mdx`) inside the `content/blog/` directory.
2. Add the required frontmatter at the top of the file:
   ```yaml
   ---
   title: "Your Post Title"
   description: "A short summary of the post."
   date: "YYYY-MM-DD"
   readTime: "5 min read"
   category: "Blog"
   ---
   ```
3. Write your blog content in markdown format below the frontmatter.
4. Run the build script to compile the markdown into HTML:
   ```bash
   npm run build:blog
   ```
5. The generated HTML will be saved in `assets/blog/` and will be accessible via your blog index.

### Updating the Changelog
To update the "Learn More" modal on the homepage:
1. Simply make your code edits.
2. Commit your changes using Conventional Commits syntax (e.g., `feat: added new blog post`).
3. Push to GitHub. The GitHub Action will handle generating both the `.md` and `.html` changelog files automatically!

*(Note: There is also a local rule located at `.agents/rules/changelog.md` guiding AI assistants on how to manually log highly stylized updates when requested).*

---

## 🤝 Forking, Contributing, & Credits

### How to Fork
If you love this design and want to use it as a foundation for your own portfolio:
1. Click the **Fork** button at the top right of this repository.
2. Clone your fork locally.
3. **Important:** Before publishing your fork, you must replace all personal information (names, photos, resume, social links, blog posts) with your own.

### How to Give Credit
If you fork and use this repository's codebase for your own site, please provide attribution in your footer or `README.md`:
> *"Design and architecture adapted from [Solomon Rajan's Portfolio](https://github.com/solomonrajan/solomonrajan.github.io)."*

### Contributing
Since this is a personal portfolio, direct feature pull requests are generally not accepted. However, if you spot a bug or accessibility issue, feel free to open an **Issue**!

---

## 🙌 Credits & Acknowledgments

- **Google Gemini & Antigravity Team:** For the AI-assisted pair-programming environment that accelerated development.
- **Google Material Design:** For the comprehensive design system, color science, and typography.
- **Tarikul Islam Anik:** For the [Animated Fluent Emojis](https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis) used throughout the site.
- **TriPSs / Conventional Changelog Action:** For powering the automated workflow pipeline.

---

## 📜 Licensing

This repository operates under a dual-licensing structure to protect personal content while keeping the code open-source:

- **Software & Source Code:** Licensed under the [MIT License](LICENSE). You are free to copy, modify, and distribute the structural HTML, CSS, and JavaScript.
- **Design, Prose, & Media:** [All Rights Reserved](COPYRIGHT.md). All written copy, blog posts, personal photographs, resumes, and customized UI designs belong exclusively to Solomon Rajan. You may not reuse or redistribute these personal assets without explicit permission.
