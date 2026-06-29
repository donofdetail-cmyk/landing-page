/**
 * generate-sitemap.mjs - Build sitemap.xml with accurate <lastmod> dates.
 *
 * lastmod is derived automatically so it can never go stale:
 *   1. If the source file has uncommitted changes  -> today
 *   2. else the file's last git commit date        -> git log -1 %cs
 *   3. else the filesystem mtime                    -> stat
 *   4. else today
 *
 * Static routes map 1:1 to their page component. Blog posts are parsed out of
 * BlogPost.tsx (slug + dateModifiedISO), so adding a post updates the sitemap
 * with no manual edit here. noindex routes (terms, privacy, packages, 404) are
 * intentionally excluded.
 *
 * Output: argv[2] or dist/sitemap.xml. Wired into the build via `postbuild`.
 * Usage:  node scripts/generate-sitemap.mjs ["public/sitemap.xml"]
 */

import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ORIGIN = 'https://donofdetail.com';
const OUT = resolve(ROOT, process.argv[2] || 'dist/sitemap.xml');

const today = () => new Date().toISOString().slice(0, 10);

// Last-modified date for a source file, newest reliable signal wins.
function lastmod(relPath) {
  const abs = resolve(ROOT, relPath);
  if (!existsSync(abs)) return today();
  try {
    const dirty = execSync(`git status --porcelain -- "${relPath}"`, { cwd: ROOT }).toString().trim();
    if (dirty) return today();
  } catch { /* not a git repo / git unavailable */ }
  try {
    const d = execSync(`git log -1 --format=%cs -- "${relPath}"`, { cwd: ROOT }).toString().trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  } catch { /* fall through */ }
  try {
    return statSync(abs).mtime.toISOString().slice(0, 10);
  } catch {
    return today();
  }
}

// Indexable static routes -> source component.
const staticRoutes = [
  { path: '/',                          file: 'src/pages/Home.tsx',                 priority: '1.0', changefreq: 'weekly' },
  { path: '/about',                     file: 'src/pages/About.tsx',                priority: '0.8', changefreq: 'monthly' },
  { path: '/contact',                   file: 'src/pages/Contact.tsx',              priority: '0.8', changefreq: 'monthly' },
  { path: '/auto-detailing-reno-nv',    file: 'src/pages/AutoDetailing.tsx',        priority: '0.9', changefreq: 'monthly' },
  { path: '/mobile-detailing-sparks-nv',file: 'src/pages/SparksDetailing.tsx',      priority: '0.8', changefreq: 'monthly' },
  { path: '/ceramic-coating-reno-nv',   file: 'src/pages/CeramicCoating.tsx',       priority: '0.9', changefreq: 'monthly' },
  { path: '/ceramic-coating-sparks-nv', file: 'src/pages/SparksCeramicCoating.tsx', priority: '0.9', changefreq: 'monthly' },
  { path: '/paint-correction-reno-nv',  file: 'src/pages/PaintCorrection.tsx',      priority: '0.9', changefreq: 'monthly' },
  { path: '/rv-detailing-reno-nv',      file: 'src/pages/RVDetailing.tsx',          priority: '0.8', changefreq: 'monthly' },
  { path: '/boat-detailing-reno-nv',    file: 'src/pages/BoatDetailing.tsx',        priority: '0.8', changefreq: 'monthly' },
  { path: '/blog',                      file: 'src/pages/BlogHub.tsx',              priority: '0.8', changefreq: 'weekly' },
];

// Blog posts: parse slug + dateModifiedISO straight out of the posts object.
function blogRoutes() {
  const file = 'src/pages/BlogPost.tsx';
  const src = readFileSync(resolve(ROOT, file), 'utf-8');
  const re = /^ {2}'([a-z0-9-]+)':\s*\{[\s\S]*?dateModifiedISO:\s*'(\d{4}-\d{2}-\d{2})'/gm;
  const routes = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    routes.push({ path: `/blog/${m[1]}`, lastmod: m[2], priority: '0.7', changefreq: 'monthly' });
  }
  return routes;
}

const urls = [
  ...staticRoutes.map((r) => ({ ...r, lastmod: lastmod(r.file) })),
  ...blogRoutes(),
];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url>\n` +
        `    <loc>${ORIGIN}${u.path}</loc>\n` +
        `    <lastmod>${u.lastmod}</lastmod>\n` +
        `    <changefreq>${u.changefreq}</changefreq>\n` +
        `    <priority>${u.priority}</priority>\n` +
        `  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

writeFileSync(OUT, xml, 'utf-8');
console.log(`  🗺️  Sitemap written to ${OUT.replace(ROOT + '/', '')} (${urls.length} URLs)`);
