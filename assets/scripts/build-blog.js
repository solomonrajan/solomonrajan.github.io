const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '..', 'blog', 'content');
const OUTPUT_DIR = path.join(__dirname, '..', 'blog');
const TEMPLATE_PATH = path.join(OUTPUT_DIR, 'template.html');

// Read the template
const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Ensure content directory exists
if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

// Get all .mdx files
const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.mdx') || file.endsWith('.md'));

console.log(`Found ${files.length} markdown posts to build...`);

const escapeHtml = (str) => {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

files.forEach(file => {
  const filePath = path.join(CONTENT_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter and markdown with JS evaluation explicitly disabled for security
  const { data, content } = matter(fileContent, {
    engines: {
      js: () => {
        throw new Error(`JavaScript front-matter evaluation is disabled for security: ${file}`);
      }
    }
  });
  const htmlContent = marked.parse(content);

  // Fallbacks with HTML escaping for metadata placeholders
  const title = escapeHtml(data.title || 'Untitled Post');
  const description = escapeHtml(data.description || '');
  const date = escapeHtml(data.date || 'Unknown Date');
  const readTime = escapeHtml(data.readTime || '');
  const category = escapeHtml(data.category || 'Blog');

  // Replace placeholders in template
  let finalHtml = templateHtml
    .replaceAll('{{TITLE}}', title)
    .replaceAll('{{DESCRIPTION}}', description)
    .replaceAll('{{DATE}}', date)
    .replaceAll('{{READ_TIME}}', readTime)
    .replaceAll('{{CATEGORY}}', category)
    .replaceAll('{{CONTENT}}', htmlContent);

  // Write the output file
  const outputFileName = file.replace('.mdx', '.html').replace('.md', '.html');
  const outputPath = path.join(OUTPUT_DIR, outputFileName);

  fs.writeFileSync(outputPath, finalHtml, 'utf-8');
  console.log(`\u2705 Built: ${outputFileName}`);
});

console.log('Blog build complete!');
