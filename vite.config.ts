import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Injects <link rel="preload"> tags for the two above-the-fold fonts (display
// headline + body weight, latin subset) into the built index.html. The font
// URLs are content-hashed at build time, so the preloads cannot be written
// statically in index.html; prerendering then carries them onto every route.
const preloadCriticalFonts = (): Plugin => ({
  name: 'preload-critical-fonts',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(_html, ctx) {
      const files = Object.keys(ctx.bundle ?? {}).filter((f) =>
        /(archivo-black-latin-400-normal|dm-sans-latin-300-normal).*\.woff2$/.test(f)
      );
      return files.map((f) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: true, href: `/${f}` },
        injectTo: 'head' as const,
      }));
    },
  },
});

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      preloadCriticalFonts(),
      ViteImageOptimizer({
        jpg: { quality: 80 },
        png: { quality: 80 },
        webp: { quality: 80 },
        avif: { quality: 80 },
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        output: {
          // Split the heavy stable dependencies into their own chunks so a
          // change to app code or one library does not invalidate the other's
          // long-lived immutable cache entry. Path-based matching (not package
          // names) so subpath imports like react-dom/client stay in the right
          // chunk instead of duplicating into the entry.
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (/node_modules\/(motion|framer-motion|motion-dom|motion-utils)\//.test(id)) return 'motion';
            if (/node_modules\/(react|react-dom|scheduler|react-router|react-router-dom|react-helmet-async|react-fast-compare|invariant|shallowequal)\//.test(id)) return 'react-vendor';
            return 'vendor';
          },
        },
      },
    }
  };
});
