const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, 'content', 'blog');
const OUTPUT_DIR = path.join(__dirname, 'assets', 'blog');
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

files.forEach(file => {
  const filePath = path.join(CONTENT_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter and markdown
  const { data, content } = matter(fileContent);
  const htmlContent = marked.parse(content);

  // Fallbacks if frontmatter is missing
  const title = data.title || 'Untitled Post';
  const description = data.description || '';
  const date = data.date || 'Unknown Date';
  const readTime = data.readTime || '';
  const category = data.category || 'Blog';

  // Replace placeholders in template
  let finalHtml = templateHtml
    .replace('{{TITLE}}', title)
    .replace('{{TITLE}}', title) // In case title appears twice (head and body)
    .replace('{{DESCRIPTION}}', description)
    .replace('{{DATE}}', date)
    .replace('{{READ_TIME}}', readTime)
    .replace('{{CATEGORY}}', category)
    .replace('{{CONTENT}}', htmlContent);

  // Write the output file
  const outputFileName = file.replace('.mdx', '.html').replace('.md', '.html');
  const outputPath = path.join(OUTPUT_DIR, outputFileName);

  fs.writeFileSync(outputPath, finalHtml, 'utf-8');
  console.log(`\u2705 Built: ${outputFileName}`);
});

console.log('Blog build complete!');
