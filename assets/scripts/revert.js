const fs = require('fs');

const files = [
  'index.html',
  'about/index.html',
  'projects/index.html',
  'contact/index.html',
  'blog/index.html'
];

const target = `                      o.jsxs("div", {
                        style: { display: "inline-flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "12px" },
                        children: [
                          o.jsx("h2", {
                            className: "section-title",
                            style: { marginBottom: "4px" },
                            children: "About Me",
                          }),
                          o.jsx("svg", {
                            width: "120",
                            height: "12",
                            viewBox: "0 0 120 12",
                            children: o.jsx("path", {
                              d: "M0 6 Q 15 0, 30 6 T 60 6 T 90 6 T 120 6",
                              fill: "none",
                              stroke: "var(--md-sys-color-primary)",
                              strokeWidth: "3",
                              strokeLinecap: "round",
                              style: {
                                strokeDasharray: "200",
                                strokeDashoffset: "200",
                                animation: "drawCurlyLine 1.5s ease-out forwards 0.5s"
                              }
                            })
                          }),
                          o.jsx("style", {
                            children: "@keyframes drawCurlyLine { to { stroke-dashoffset: 0; } }"
                          })
                        ]
                      }),`;

const replacement = `                      o.jsx("h2", {
                        className: "section-title",
                        children: "About Me",
                      }),`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Reverted ' + file);
    } else {
      console.log('Target not found in ' + file);
    }
  }
});
