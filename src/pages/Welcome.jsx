import { Link } from 'react-router-dom'
import '../styles/Welcome.css'

/**
 * Welcome/Landing page component
 *
 * This is the new main landing page that explains the multi-page structure
 * and provides navigation to different sections of the site.
 *
 * @ai-context This is the entry point for visitors. Keep it clean and navigable.
 */
function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <header className="welcome-header">
          <h1 className="subtitle">David Daniel | Principal Engineer</h1>
        </header>

        <section className="welcome-description">
          <p>
            This site hosts multiple pages with different content and experiments.
            Explore the sections below to see what's available.
          </p>
        </section>

        <nav className="welcome-nav">
          <div className="nav-card">
            <h2>📝 Bio (Archive)</h2>
            <p>
              Historical content from when I originally became a web developer. Work samples are no longer live.
            </p>
            <Link to="/bio" className="nav-link">
              Visit Bio →
            </Link>
          </div>

          {/* Placeholder for future pages */}
          <div className="nav-card placeholder">
            <h2>🚧 More Coming Soon</h2>
            <p>
              Additional pages and projects will be added here as the site grows.
            </p>
          </div>
        </nav>

        <footer className="welcome-footer">
          <p>Built with React + Vite | Hosted on GitHub Pages</p>
        </footer>
      </div>
    </div>
  )
}

export default Welcome
