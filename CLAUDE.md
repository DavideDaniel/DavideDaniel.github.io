# CLAUDE.md — Agent Instructions for DavideDaniel.github.io

## Project Overview
React 18 + Vite portfolio site deployed to GitHub Pages at daviddaniel.tech

## Content Policy (CRITICAL)
- NEVER modify existing visible content, text, copy, headings, styles, CSS, layouts, or user-facing behavior without explicit user approval
- SEO infrastructure changes (meta tags in `<head>`, structured data `<script>` tags, config files) are safe to add without approval
- Treat all existing visible content as frozen unless the user explicitly requests content changes

## SEO Requirements (MANDATORY — do not regress these)
- Pre-rendering must be maintained — every route must output full static HTML at build time. Verify by checking that dist/index.html contains visible text, not just `<div id="root"></div>`
- Every page component must have a `<Helmet>` block with unique title, description, canonical URL, and OG tags
- public/robots.txt must exist and must NOT contain `Disallow: /`
- public/sitemap.xml must exist and be updated when new routes are added
- public/CNAME must exist and contain exactly: `daviddaniel.tech`
- ALL canonical URLs, OG URLs, and sitemap entries must use `https://daviddaniel.tech` — NEVER `davidedaniel.github.io`
- JSON-LD structured data in index.html must not be removed
- When adding new pages/routes: add Helmet block, add sitemap entry, ensure pre-rendering covers the new route (add to `scripts/prerender.js` routes array)

## Build & Deploy
- `npm run build` produces pre-rendered HTML with full content via Vite SSR
- Build pipeline: `vite build` (client) → `vite build --ssr` (server) → `node scripts/prerender.js` (inject HTML)
- Deployment is via GitHub Actions to GitHub Pages
- Verify after build: dist/index.html should contain rendered text, not empty div
- Verify: dist/robots.txt, dist/sitemap.xml, dist/CNAME all present

## Tech Stack
- React 18, Vite, React Router, react-helmet-async
- GitHub Pages with custom domain (daviddaniel.tech)
- Pre-rendering via Vite SSR build + custom prerender script (scripts/prerender.js)

## Key Files
- `src/entry-server.jsx` — SSR entry point for pre-rendering
- `scripts/prerender.js` — Post-build script that renders each route to static HTML
- `src/main.jsx` — Client entry point with HelmetProvider and hydration support
- `public/robots.txt`, `public/sitemap.xml`, `public/CNAME` — SEO infrastructure files
