import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Bio from './pages/Bio'
import './styles/App.css'

/**
 * Main App component with routing configuration
 *
 * Routes:
 * - / : Welcome/landing page
 * - /bio : Portfolio/bio page (original site content)
 *
 * @ai-context This is the main app entry point. Add new routes here as the app grows.
 */
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  )
}

export default App
