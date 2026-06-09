import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Bio from './pages/Bio'
import './styles/App.css'

/**
 * Main App component with routing configuration
 *
 * Routes:
 * - / : Welcome/landing page
 * - /about : Current professional bio (primary, indexable authorship page)
 * - /bio : Archived early-career portfolio (low-priority, indexable)
 * - * : Catch-all — redirects unknown/retired paths (e.g. the retired /musings) home
 *
 * @ai-context This is the main app entry point. Add new routes here as the app grows,
 * and keep the pre-render route list in scripts/prerender.js in sync.
 */
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
