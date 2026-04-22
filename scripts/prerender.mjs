/**
 * prerender.mjs — Static Site Generation (SSG) for SEO
 *
 * Runs AFTER `vite build`. Spins up a local server to serve the built
 * files, then uses Puppeteer to render each route and save the fully-
 * rendered HTML back to dist/. Crawlers now get real content instead
 * of an empty <div id="root"></div>.
 *
 * Usage:  node scripts/prerender.mjs
 * Called automatically via the `postbuild` npm script.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const ROUTES = ['/', '/terms', '/privacy'];
const PORT = 4173;

// Simple static file server for the dist folder
function startServer() {
  return new Promise((res) => {
    const mime = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.webp': 'image/webp',
      '.ico': 'image/x-icon',
      '.svg': 'image/svg+xml',
      '.woff2': 'font/woff2',
    };

    const server = createServer((req, res2) => {
      let filePath = resolve(DIST, req.url === '/' ? 'index.html' : req.url.slice(1));

      // SPA fallback — serve index.html for any route without an extension
      if (!filePath.includes('.') || !existsSync(filePath)) {
        filePath = resolve(DIST, 'index.html');
      }

      try {
        const data = readFileSync(filePath);
        const ext = '.' + filePath.split('.').pop();
        res2.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res2.end(data);
      } catch {
        res2.writeHead(404);
        res2.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`  ⚡ Prerender server running on http://localhost:${PORT}`);
      res(server);
    });
  });
}

async function prerender() {
  console.log('\n🔍 Pre-rendering routes for SEO...\n');

  const server = await startServer();

  // Dynamic import so puppeteer is only needed at build time
  const puppeteer = await import('puppeteer');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    console.log(`  📄 Rendering ${route} ...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait a bit longer for React hydration and any animations to settle
    await page.waitForSelector('#root > *', { timeout: 10000 });

    const html = await page.content();
    await page.close();

    // Determine output path
    const outDir = route === '/'
      ? DIST
      : resolve(DIST, route.slice(1));

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    const outFile = resolve(outDir, 'index.html');
    writeFileSync(outFile, html, 'utf-8');
    console.log(`  ✅ Saved ${outFile.replace(DIST, 'dist')}`);
  }

  await browser.close();
  server.close();

  console.log(`\n✨ Pre-rendered ${ROUTES.length} routes successfully!\n`);
}

prerender().catch((err) => {
  console.error('❌ Pre-rendering failed:', err);
  console.log('⚠️ Falling back to standard SPA build (Vercel deployment will continue)...');
  process.exit(0);
});
