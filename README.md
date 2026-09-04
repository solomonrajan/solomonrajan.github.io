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

- [About the Author](#-about-the-author)
- [Design Language & Aesthetics](#-design-language--aesthetics)
- [Technical Stack & Apps Used](#-technical-stack--apps-used)
- [Automation & GitHub Workflows](#-automation--github-workflows)
- [How to Run & Build Locally](#-how-to-run--build-locally)
- [How to Edit & Update Content](#-how-to-edit--update-content)
- [Forking, Contributing, & Credits](#-forking-contributing--credits)
- [Credits & Acknowledgments](#-credits--acknowledgments)
- [Licensing](#-licensing)

---

## 📖 About the Author

I am a dedicated HR professional and Labour Welfare Officer based in Kottayam, Kerala, India. My expertise spans across:
- **Contract Labour Management**
- **Payroll Administration**
- **Employee Welfare Strategies**
- **Statutory Labour Compliance**

---

## 🎨 Design Language & Aesthetics

This project is meticulously crafted using **Google's Material Design 3 (M3)** specifications, focusing on readability, dynamic color, and responsive geometry.

### 1. Typography & Fonts
- **Inter:** Used for general body text and clean UI legibility.
- **Google Sans Flex:** Used for headers, display text, and branding.
- **Google Material Symbols (Rounded):** Used for iconography across navigation, cards, and buttons.

### 2. Color Palettes & Dynamic Theming
The website features a zero-config, native JavaScript theme engine (`assets/js/theme.js`) that automatically adapts to the user's operating system preference using the `prefers-color-scheme` media query. 

| System Role   | Light Theme | Dark Theme | Usage                                         |
| :------------ | :---------- | :--------- | :-------------------------------------------- |
| **Primary**   | `#915500`   | `#FFB951`  | Primary actions, branding, key accents        |
| **Secondary** | `#6D5D3E`   | `#DAC49F`  | Auxiliary highlights, tags, and status states |
| **Surface**   | `#FDF7EC`   | `#17130A`  | Backdrops, container fills, and cards         |

### 3. UI Elements
- **Cards & Grids:** Content is organized using elevated Material 3 surface containers.
- **Micro-Animations:** CSS transitions (`380ms ease`) are applied to hovering, theme switching, and modal dialogs.
- **Modals:** A custom modal engine is used to dynamically inject HTML content (such as the changelog timeline) without navigating away from the page.

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
