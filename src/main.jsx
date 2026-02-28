/**
 * Main application entry point
 *
 * @ai-context This initializes the React app with routing enabled.
 * The BrowserRouter provides client-side navigation capabilities.
 * HelmetProvider enables per-page <head> management for SEO.
 * Uses hydrateRoot when pre-rendered HTML is present, createRoot otherwise.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles/index.css'

const rootElement = document.getElementById('root')

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

// Use hydrateRoot if the page was pre-rendered, createRoot otherwise
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app)
} else {
  ReactDOM.createRoot(rootElement).render(app)
}
