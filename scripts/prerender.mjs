/**
 * prerender.mjs - Static Site Generation (SSG) for SEO
 *
 * Runs AFTER `vite build`. Spins up a local server to serve the built
 * files, then uses a headless browser to render each route and saves the
 * fully-rendered HTML back to dist/. Crawlers now get real content instead
 * of an empty <div id="root"></div>.
 *
 * Browser strategy:
 *   - Vercel / CI (Linux build container): @sparticuz/chromium + puppeteer-core.
 *     The full `puppeteer` Chromium will NOT launch in Vercel's build image
 *     (missing system libraries), which is why prerendering was silently
 *     failing in production. @sparticuz/chromium ships a Chromium built to run
 *     in exactly that environment.
 *   - Local dev (macOS/Linux): full `puppeteer` with its bundled Chromium.
 *
 * Fail-loud: if any route renders without real content (i.e. an empty shell),
 * the build EXITS NON-ZERO so a broken deploy is caught instead of shipping
 * blank pages. Set PRERENDER_SERVERLESS=1 to force the serverless browser.
 *
 * Usage:  node scripts/prerender.mjs   (called automatically via `postbuild`)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const ROUTES = [
  '/',
  '/about',
  '/terms',
  '/privacy',
  '/ceramic-coating-reno-nv',
  '/ceramic-coating-sparks-nv',
  '/paint-correction-reno-nv',
  '/auto-detailing-reno-nv',
  '/rv-detailing-reno-nv',
  '/boat-detailing-reno-nv',
  '/blog',
  '/blog/is-ceramic-coating-worth-it-reno',
  '/blog/the-truth-about-automatic-car-washes',
  '/blog/how-to-wash-a-ceramic-coated-car',
  '/blog/preparing-boat-rv-for-lake-tahoe',
  '/blog/paint-correction-vs-waxing',
  '/blog/how-much-does-car-detailing-cost-reno',
  '/blog/headlight-restoration-reno-nv',
  '/mobile-detailing-sparks-nv',
  '/contact',
  // Prerendered so its noindex meta is baked into static HTML. /packages is not
  // in the sitemap and is intentionally kept out of the index; baking the tag
  // (rather than relying on robots Disallow) lets crawlers actually read noindex.
  '/packages',
  '/404'
];
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

    const templatePath = resolve(DIST, 'index.html');
    const originalTemplate = readFileSync(templatePath);

    const server = createServer((req, res2) => {
      let filePath = resolve(DIST, req.url === '/' ? 'index.html' : req.url.slice(1));

      // SPA fallback - serve original template from memory for routes without extensions
      if (!req.url.includes('.')) {
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.end(originalTemplate);
        return;
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

// Choose a browser that actually launches in the current environment.
async function launchBrowser() {
  const useServerless = !!(process.env.VERCEL || process.env.PRERENDER_SERVERLESS);

  if (useServerless) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteer = await import('puppeteer-core');
    console.log('  🌐 Launching serverless Chromium (@sparticuz/chromium)...');
    return puppeteer.launch({
      args: [...chromium.args, '--disable-dev-shm-usage'],
      defaultViewport: { width: 1280, height: 800 },
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      protocolTimeout: 300000,
    });
  }

  const puppeteer = await import('puppeteer');
  console.log('  🌐 Launching local Chromium (puppeteer)...');
  return puppeteer.launch({
    headless: true,
    protocolTimeout: 300000,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
}

// A page passes only if React actually rendered real content into #root.
// The failure mode we're guarding against is shipping the empty SPA shell.
function validateRendered(route, html, shellLength) {
  const problems = [];
  if (!/<h1[\s>]/i.test(html)) problems.push('no <h1> in output');
  if (!/<div id="root">\s*<[a-z]/i.test(html)) problems.push('#root is empty');
  if (html.length < shellLength + 500) problems.push('output barely larger than shell');

  // Title must exist and be non-empty (guards the BlogPost array-children bug,
  // where Helmet silently rendered an empty <title>). Scope to <head> with HTML
  // comments stripped, so SVG <title>s and comment text can't skew the count.
  const headEnd = html.indexOf('</head>');
  const head = (headEnd === -1 ? html : html.slice(0, headEnd)).replace(/<!--[\s\S]*?-->/g, '');
  const titles = head.match(/<title>([\s\S]*?)<\/title>/gi) || [];
  if (titles.length === 0) problems.push('no <title> in <head>');
  else if (titles.length > 1) problems.push(`${titles.length} <title> tags in <head> (expected 1)`);
  else if (!titles[0].replace(/<\/?title>/gi, '').trim()) problems.push('empty <title>');

  return problems;
}

async function prerender() {
  console.log('\n🔍 Pre-rendering routes for SEO...\n');

  const shellLength = readFileSync(resolve(DIST, 'index.html'), 'utf-8').length;
  const server = await startServer();
  const browser = await launchBrowser();

  const failures = [];
  let homeSeo = null; // baseline homepage head tags, captured on the "/" route

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    console.log(`  📄 Rendering ${route} ...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React hydration and Helmet effects to flush to DOM
    await page.waitForSelector('#root > *', { timeout: 10000 });
    // Helmet writes head tags via useEffect. Wait for the observable result
    // (a non-empty title plus either a canonical or a robots meta; every route
    // sets one of the two) instead of a fixed sleep, then allow a short settle
    // for the remaining meta tags written in the same effect pass.
    await page.waitForFunction(
      () => !!document.title.trim() && !!(document.querySelector('link[rel="canonical"]') || document.querySelector('meta[name="robots"]')),
      { timeout: 15000 }
    );
    await new Promise(r => setTimeout(r, 200));

    // During static rendering, react-helmet-async leaks the homepage's head
    // tags into every subsequently-rendered route (the page's own correct tags
    // are present too, but the homepage title/canonical/description/OG get
    // appended). We capture the homepage tags as a baseline on "/", then strip
    // any tag whose value matches that baseline from the other routes. This is
    // value-based (not position-based), so it is deterministic.
    if (route === '/') {
      homeSeo = await page.evaluate(() => {
        const meta = {};
        document.querySelectorAll('head meta[name="description"], head meta[property^="og:"], head meta[name^="twitter:"]').forEach((m) => {
          const k = m.getAttribute('property') || m.getAttribute('name');
          // Shared, site-wide defaults (declared statically in index.html or identical
          // on every page) — never treat these as a homepage value to strip elsewhere.
          if (['og:image', 'og:type', 'twitter:card', 'twitter:image', 'og:site_name', 'og:locale', 'og:image:width', 'og:image:height', 'og:image:alt'].includes(k)) return;
          meta[k] = m.getAttribute('content');
        });
        return {
          title: document.querySelector('head title')?.textContent || '',
          canonical: document.querySelector('head link[rel="canonical"]')?.getAttribute('href') || '',
          // og:image is excluded from the value-based strip (many pages share the
          // site default), so record it separately for the positional cleanup below.
          ogImage: document.querySelector('head meta[property="og:image"]')?.getAttribute('content') || '',
          meta,
        };
      });
    } else if (homeSeo) {
      await page.evaluate((home) => {
        document.querySelectorAll('head title').forEach((t) => { if (t.textContent === home.title) t.remove(); });
        document.querySelectorAll('head link[rel="canonical"]').forEach((l) => { if (l.getAttribute('href') === home.canonical) l.remove(); });
        document.querySelectorAll('head meta[name="description"], head meta[property^="og:"], head meta[name^="twitter:"]').forEach((m) => {
          const k = m.getAttribute('property') || m.getAttribute('name');
          if (home.meta[k] !== undefined && m.getAttribute('content') === home.meta[k]) m.remove();
        });
        // og:image cannot use the value-based strip: pages without a dedicated
        // image legitimately share the homepage's default, and stripping by value
        // would delete their only tag. Positional rule instead: if the page has
        // an og:image different from the homepage's, the homepage copies are
        // leaks; drop them. Then collapse any remaining duplicates to one tag.
        const ogs = [...document.querySelectorAll('head meta[property="og:image"]')];
        if (ogs.length > 1) {
          const own = ogs.filter((m) => m.getAttribute('content') !== home.ogImage);
          const keep = own.length > 0 ? own : ogs;
          const seen = new Set();
          ogs.forEach((m) => {
            const v = m.getAttribute('content');
            if (!keep.includes(m) || seen.has(v)) m.remove();
            else seen.add(v);
          });
        }
      }, homeSeo);
    }

    // Blog posts render a visible "Frequently Asked Questions" section as Q:/A:
    // paragraph pairs but ship no FAQPage schema. Extract the on-page Q&A and
    // inject matching FAQPage JSON-LD (single source = visible content, so the
    // markup can never drift from what users see).
    if (route.startsWith('/blog/')) {
      await page.evaluate(() => {
        const faqH2 = [...document.querySelectorAll('h2')].find((h) => /frequently asked questions/i.test(h.textContent || ''));
        if (!faqH2 || !faqH2.parentElement) return;
        const faqs = [];
        let q = null;
        faqH2.parentElement.querySelectorAll('p').forEach((p) => {
          const t = (p.textContent || '').trim();
          if (/^Q:\s*/i.test(t)) q = t.replace(/^Q:\s*/i, '');
          else if (/^A:\s*/i.test(t) && q) { faqs.push({ q, a: t.replace(/^A:\s*/i, '') }); q = null; }
        });
        if (!faqs.length) return;
        const ld = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        };
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.textContent = JSON.stringify(ld);
        document.head.appendChild(s);
      });
    }

    const html = await page.content();
    await page.close();

    const problems = validateRendered(route, html, shellLength);
    if (problems.length) {
      failures.push(`${route} → ${problems.join(', ')}`);
      console.log(`  ⚠️  ${route} FAILED validation: ${problems.join(', ')}`);
      continue;
    }

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

  if (failures.length) {
    throw new Error(
      `Prerendering produced empty/invalid output for ${failures.length} route(s):\n  - ` +
      failures.join('\n  - ')
    );
  }

  console.log(`\n✨ Pre-rendered ${ROUTES.length} routes successfully!\n`);
}

prerender().catch((err) => {
  // Fail loudly. A broken prerender must NOT silently ship an empty SPA shell —
  // that is the exact regression this script exists to prevent.
  console.error('\n❌ Pre-rendering failed:', err.message || err);
  console.error('   Aborting build so blank pages are not deployed.\n');
  process.exit(1);
});
