import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const orig = content;
  
  // Make main H1s perfectly fluid on mobile (up to the sm breakpoint)
  content = content.replace(/text-5xl sm:text-7xl/g, 'text-[11.5vw] sm:text-7xl');
  content = content.replace(/text-5xl sm:text-8xl/g, 'text-[12vw] sm:text-8xl');
  
  // Make H2s fluid
  content = content.replace(/text-5xl md:text-7xl/g, 'text-[10vw] md:text-7xl');
  
  if (orig !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated sizes in ${file}`);
    changedFiles++;
  }
}

console.log(`Done. Updated ${changedFiles} files.`);
