// Génère l'image de partage social (og:image) à partir de tools/og-image.html.
//
// Usage: node tools/og-shot.mjs
// Sortie: assets/akago/og-image.png (1200x630)
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = pathToFileURL(resolve(root, 'tools/og-image.html')).href;
const out = resolve(root, 'assets/akago/og-image.png');

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(src, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });
  console.log(`✓ ${out}`);
} finally {
  await browser.close();
}
