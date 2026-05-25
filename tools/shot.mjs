// Capture d'écran d'une page du site en desktop + mobile.
//
// Usage:
//   node tools/shot.mjs index.html            # fichier local -> file://
//   node tools/shot.mjs about.html legal.html # plusieurs pages
//   node tools/shot.mjs http://localhost:8000 # une URL servie
//
// Sortie: tools/screenshots/<nom>-<viewport>.png (pleine hauteur).
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { mkdirSync, existsSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'tools/screenshots');
mkdirSync(outDir, { recursive: true });

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 }, // iPhone 14
};

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('Aucune page fournie. Ex: node tools/shot.mjs index.html');
  process.exit(1);
}

function toUrl(target) {
  if (/^https?:\/\//.test(target)) return target;
  const abs = resolve(root, target);
  if (!existsSync(abs)) throw new Error(`Introuvable: ${target}`);
  return pathToFileURL(abs).href;
}

const browser = await chromium.launch();
try {
  for (const target of targets) {
    const url = toUrl(target);
    const name = basename(target).replace(/\.[^.]+$/, '') || 'page';
    for (const [vp, size] of Object.entries(viewports)) {
      const page = await browser.newPage({ viewport: size, deviceScaleFactor: 2 });
      await page.goto(url, { waitUntil: 'networkidle' });
      const out = resolve(outDir, `${name}-${vp}.png`);
      await page.screenshot({ path: out, fullPage: true });
      await page.close();
      console.log(`✓ ${vp.padEnd(7)} ${out}`);
    }
  }
} finally {
  await browser.close();
}
