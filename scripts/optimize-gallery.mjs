import sharp from 'sharp';
import fs from 'fs';

async function optimizeImages() {
  const files = [
    'public/porsche-911-foam-wash-detailing-reno.webp',
    'public/classic-truck-car-show-reno.webp',
    'public/range-rover-headlight-restoration.webp'
  ];

  for (const file of files) {
    if (fs.existsSync(file)) {
      const tempFile = file.replace('.webp', '-temp.webp');
      console.log(`Shrinking ${file}...`);
      
      await sharp(file)
        .resize(750, 750, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 65 })
        .toFile(tempFile);
        
      fs.unlinkSync(file); // Delete original
      fs.renameSync(tempFile, file); // Replace with shrunken version
      console.log(`Saved smaller version over ${file}`);
    }
  }
}

optimizeImages().catch(console.error);
