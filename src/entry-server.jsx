/**
 * Server-side entry point for pre-rendering
 *
 * @ai-context This file is used during the build to pre-render each route
 * to static HTML. It is NOT used at runtime in the browser.
 */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

/**
 * Render a given URL path to an HTML string
 * @param {string} url - The route path to render (e.g. '/', '/bio')
 * @returns {{ html: string, helmet: object }} The rendered HTML and helmet context
 */
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
