import sharp from 'sharp';
import fs from 'fs';

const svg = `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="140" height="140" fill="#F0EDE8" rx="30" />
  <g transform="translate(20, 20)">
    <path fill="#1A1A1A" fill-rule="evenodd" clip-rule="evenodd" d="M 0 25 L 25 12.5 L 25 87.5 L 0 75 Z M 8 30 L 17 25.5 L 17 74.5 L 8 70 Z" />
    <path fill="#1A1A1A" fill-rule="evenodd" clip-rule="evenodd" d="M 50 0 L 67 8.5 L 67 91.5 L 50 100 L 33 91.5 L 33 8.5 Z M 50 9 L 59 13.5 L 59 86.5 L 50 91 L 41 86.5 L 41 13.5 Z" />
    <path fill="#1A1A1A" d="M 75 87.5 L 75 12.5 L 83 16.5 L 92 47.5 L 92 21 L 100 25 L 100 75 L 92 79 L 83 43.8 L 83 83.5 Z" />
  </g>
</svg>`;

const buffer = Buffer.from(svg);

async function generate() {
  await sharp(buffer).resize(16, 16).png().toFile('public/favicon-16.png');
  await sharp(buffer).resize(32, 32).png().toFile('public/favicon-32.png');
  await sharp(buffer).resize(192, 192).png().toFile('public/favicon-192.png');
  await sharp(buffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(buffer).resize(512, 512).png().toFile('public/logo.png');
  await sharp(buffer).resize(512, 512).webp().toFile('public/logo.webp');
  
  await sharp(buffer).resize(1200, 630, {
    fit: 'contain',
    background: { r: 240, g: 237, b: 232, alpha: 1 }
  }).png().toFile('public/og-image-v2.png');
  
  // favicon.ico
  fs.copyFileSync('public/favicon-32.png', 'public/favicon.ico');
  
  console.log('Favicons and logos updated!');
}

generate().catch(console.error);
