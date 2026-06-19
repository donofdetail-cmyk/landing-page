import sharp from 'sharp';

async function optimize() {
  try {
    await sharp('public/logan-don-of-detail.jpg')
      .resize(1200)
      .webp({ quality: 80 })
      .toFile('public/logan-don-of-detail.webp');
    console.log('Image optimized successfully');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimize();
