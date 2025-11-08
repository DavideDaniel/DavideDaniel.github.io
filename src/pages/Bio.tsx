import { Link } from 'react-router-dom'
import '../styles/Bio.css'

/**
 * Bio/Portfolio page component
 *
 * This page will contain the original portfolio content from the static site,
 * refactored into React components.
 *
 * Original sections:
 * - Hero with parallax background
 * - About section
 * - Sample work/projects
 * - Experience & resume
 * - Testimonials
 * - Contact
 *
 * @ai-context This will be migrated from the original index.html. Replace jQuery
 * functionality with React hooks and modern JavaScript.
 */
function Bio() {
  return (
    <div className="bio-container">
      {/* Navigation */}
      <nav className="bio-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>

      {/* Hero Section - TODO: Add parallax background */}
      <section className="hero">
        <div className="hero-content">
          <h1>David Daniel</h1>
          <p className="tagline">Web Developer</p>
        </div>
      </section>

      {/* About Section - TODO: Migrate from original */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About</h2>
          <p>
            This section will contain the original bio content.
            To be migrated from the static site.
          </p>
        </div>
      </section>

      {/* Sample Work - TODO: Migrate projects */}
      <section id="samples" className="section samples">
        <div className="container">
          <h2>Sample Work</h2>
          <p>Projects will be displayed here.</p>
        </div>
      </section>

      {/* Experience - TODO: Migrate experience content */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2>Experience</h2>
          <p>Experience and skills will be displayed here.</p>
        </div>
      </section>

      {/* Testimonials - TODO: Migrate testimonials carousel */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <p>Testimonials carousel will be here.</p>
        </div>
      </section>

      {/* Contact - TODO: Migrate contact section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Contact information and social links will be here.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bio-footer">
        <p>&copy; {new Date().getFullYear()} David Daniel. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Bio
