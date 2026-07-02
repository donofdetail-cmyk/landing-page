/**
 * generate-og-images.mjs - Produce 1200x630 Open Graph images from real work
 * photos so shared links show the relevant service instead of one generic card.
 *
 * Run manually after adding/replacing a source photo:
 *   node scripts/generate-og-images.mjs
 *
 * Outputs are committed to public/ (they change rarely; no need to regenerate
 * every build). Pages without a matching photo keep og-image-v2.png.
 */

import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const JOBS = [
  { src: 'land-rover-ceramic-coating.webp', out: 'og-ceramic-coating.jpg' },
  { src: 'classic-truck-car-show-reno.webp', out: 'og-paint-correction.jpg' },
  { src: 'porsche-911-foam-wash-detailing-reno.webp', out: 'og-auto-detailing.jpg' },
  { src: 'logan-don-of-detail.webp', out: 'og-about.jpg' },
];

for (const job of JOBS) {
  const src = resolve(ROOT, 'public', job.src);
  const out = resolve(ROOT, 'public', job.out);
  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(`  ✅ ${job.out}`);
}
