// optimize-images.js
// Pokretanje:  npm install sharp --save-dev
//              node optimize-images.js
//
// Pravi responsive verzije about slika:
//   about-2.webp (2640x3216, 1.7MB)  →  800w (~60KB) + 1200w (~110KB)
//   about-1.webp (633KB)             →  800w + 1200w
// Originali se NE brišu — nove verzije dobijaju sufiks.

import sharp from 'sharp';
import { existsSync } from 'fs';

const IMAGES_DIR = './public/images'; // prilagodi ako je drugačije

const jobs = [
  { file: 'about-1.webp', widths: [800, 1200] },
  { file: 'about-2.webp', widths: [800, 1200] },
  // hero slike — ako i one nisu optimizovane, otkomentariši:
  // { file: 'hero-slide-1.webp', widths: [828, 1920] },
  // { file: 'hero-slide-2.webp', widths: [828, 1920] },
];

for (const { file, widths } of jobs) {
  const input = `${IMAGES_DIR}/${file}`;
  if (!existsSync(input)) {
    console.warn(`⚠ Ne postoji: ${input} — preskačem`);
    continue;
  }
  for (const w of widths) {
    const output = input.replace('.webp', `-${w}w.webp`);
    const info = await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(output);
    console.log(`✓ ${output} — ${Math.round(info.size / 1024)} KB`);
  }
}

console.log('\nGotovo. Sada ažuriraj <img> tagove u About.jsx (srcset).');