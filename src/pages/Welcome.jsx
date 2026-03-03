import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>David Daniel | Principal Engineer</title>
        <meta name="description" content="David Daniel — Principal Engineer specializing in agentic engineering, AI transformations, cloud architecture, and scalable platform design." />
        <link rel="canonical" href="https://daviddaniel.tech/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="David Daniel | Principal Engineer" />
        <meta property="og:description" content="David Daniel — Principal Engineer specializing in agentic engineering, AI transformations, cloud architecture, and scalable platform design." />
        <meta property="og:url" content="https://daviddaniel.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="David Daniel" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="David Daniel | Principal Engineer" />
        <meta name="twitter:description" content="David Daniel — Principal Engineer specializing in agentic engineering, AI transformations, cloud architecture, and scalable platform design." />
      </Helmet>
      <div className="welcome-content">
        <header className="welcome-header">
          <h1 className="subtitle">David Daniel | Principal Engineer</h1>
        </header>

        <section className="welcome-description">
          <p>
            Principal Engineer specializing in agentic engineering, AI transformations,
            cloud architecture, and scalable platform design. This site hosts technical
            research on spec-driven development frameworks and agentic AI tools, alongside
            reflections on AI engineering practices.
          </p>
        </section>

        <nav className="welcome-nav">
          <div className="nav-card">
            <h2>🔬 Technical Research</h2>
            <p>
              Spec-driven development frameworks, agentic AI tools, and research into
              methodologies like BMAD and SpecKit for scalable AI-native engineering.
            </p>
            <a href="/research/" className="nav-link">
              Explore Research →
            </a>
          </div>

          <div className="nav-card">
            <h2>📝 Bio (Archive)</h2>
            <p>
              Historical content from when I originally became a web developer. Work samples are no longer live.
            </p>
            <Link to="/bio" className="nav-link">
              Visit Bio →
            </Link>
          </div>

          <div className="nav-card secondary">
            <h2>💭 Musings</h2>
            <p>
              Reflections on AI's impact on software engineering.
            </p>
            <Link to="/musings" className="nav-link" rel="nofollow">
              Read Musings →
            </Link>
          </div>
        </nav>

        <footer className="welcome-footer">
          <p>&copy; 2026 David Daniel &middot; Principal Engineer</p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/davidedaniel/" rel="me">LinkedIn</a>
            <a href="https://github.com/DavideDaniel" rel="me">GitHub</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Welcome
