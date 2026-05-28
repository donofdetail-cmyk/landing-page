import sharp from 'sharp';
import fs from 'fs';

async function optimizeImages() {
  const files = [
    'public/porsche-911-foam-wash-detailing-reno.jpg',
    'public/classic-truck-car-show-reno.jpg',
    'public/range-rover-headlight-restoration.jpg'
  ];

  for (const file of files) {
    if (fs.existsSync(file)) {
      const webpFile = file.replace('.jpg', '.webp');
      console.log(`Optimizing ${file}...`);
      
      await sharp(file)
        .resize(1000, 1000, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpFile);
        
      fs.unlinkSync(file); // Delete the original large JPG
      console.log(`Saved as ${webpFile}`);
    }
  }
}

optimizeImages().catch(console.error);
