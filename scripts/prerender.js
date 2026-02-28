/**
 * Post-build pre-rendering script
 *
 * Renders each route to static HTML using the SSR bundle produced by Vite.
 * This runs after both the client and server builds complete.
 *
 * @ai-context When adding new routes, add them to the `routes` array below.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '../dist')

// All routes to pre-render — keep in sync with src/App.jsx
const routes = ['/', '/bio', '/musings']

async function prerender() {
  const template = fs.readFileSync(path.resolve(dist, 'index.html'), 'utf-8')
  const { render } = await import(path.resolve(dist, 'server/entry-server.js'))

  for (const route of routes) {
    const { html, helmet } = render(route)

    // Start with injecting pre-rendered content into the root div
    let output = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    )

    // Inject page-specific <head> tags from react-helmet-async
    if (helmet) {
      const helmetTitle = helmet.title.toString()
      const helmetMeta = helmet.meta.toString()
      const helmetLink = helmet.link.toString()
      const helmetScript = helmet.script.toString()

      // Replace the existing <title> with the page-specific one
      if (helmetTitle) {
        output = output.replace(/<title>[^<]*<\/title>/, helmetTitle)
      }

      // Replace homepage meta description and robot-indexable meta tags with page-specific ones
      // Remove existing meta tags that helmet will provide (description, robots, og:*, twitter:*)
      if (helmetMeta) {
        output = output.replace(
          /\s*<meta name="description"[^>]*>/g,
          ''
        )
        output = output.replace(
          /\s*<meta name="robots"[^>]*>/g,
          ''
        )
        output = output.replace(
          /\s*<meta property="og:[^"]*"[^>]*>/g,
          ''
        )
        output = output.replace(
          /\s*<!-- Open Graph -->/g,
          ''
        )
        output = output.replace(
          /\s*<meta name="twitter:[^"]*"[^>]*>/g,
          ''
        )
        output = output.replace(
          /\s*<!-- Twitter Card -->/g,
          ''
        )
        // Inject helmet meta tags before </head>
        output = output.replace('</head>', `    ${helmetMeta}\n  </head>`)
      }

      // Replace homepage canonical link with page-specific one
      if (helmetLink) {
        output = output.replace(
          /\s*<link rel="canonical"[^>]*>/g,
          ''
        )
        // Inject helmet link tags before </head>
        output = output.replace('</head>', `    ${helmetLink}\n  </head>`)
      }

      // Inject any page-specific script tags (e.g., JSON-LD structured data)
      if (helmetScript) {
        output = output.replace('</head>', `    ${helmetScript}\n  </head>`)
      }
    }

    // Determine output path
    const outputPath =
      route === '/'
        ? path.resolve(dist, 'index.html')
        : path.resolve(dist, route.slice(1), 'index.html')

    // Ensure directory exists and write
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, output)
    console.log(`Pre-rendered: ${route} -> ${path.relative(dist, outputPath)}`)
  }

  // Create 404.html as a copy of index.html for GitHub Pages SPA fallback
  const indexHtml = fs.readFileSync(path.resolve(dist, 'index.html'), 'utf-8')
  fs.writeFileSync(path.resolve(dist, '404.html'), indexHtml)
  console.log('Created 404.html for SPA fallback')

  // Clean up server bundle (not needed in deployment)
  fs.rmSync(path.resolve(dist, 'server'), { recursive: true, force: true })
  console.log('Cleaned up server bundle')
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err)
  process.exit(1)
})
