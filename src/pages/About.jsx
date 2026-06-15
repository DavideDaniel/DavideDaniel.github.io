import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import '../styles/About.css'

/**
 * About page component: current professional bio.
 *
 * This is the primary, indexable authorship page for the site. It establishes
 * David Daniel's professional identity (E-E-A-T) as an around-the-clock builder,
 * principal engineer by day, Proof Labs and personal projects on the side, and
 * links out to the technical research subsite and the archived early portfolio.
 *
 * @ai-context Keep this page deliberately high-level and dateless. LinkedIn
 * (linkedin.com/in/davidedaniel) is the source of truth for career history, so do
 * not add employment dates, describe the day-to-day of the Nike role, or list
 * language/framework specifics. Preserve the topical expertise terms, the
 * /research link, and the ProfilePage schema, which carry the SEO value.
 */
function About() {
  // Areas of expertise: current focus plus the platform/commerce track record.
  const expertise = [
    'AI-native development',
    'Agentic engineering',
    'Cloud architecture',
    'Digital commerce platforms',
    'Full-stack engineering',
    'Technical leadership',
  ]

  // Selected experience, current work first. No dates here; full history lives on LinkedIn.
  const experience = [
    { role: 'Founder & Builder', org: 'Proof Labs' },
    { role: 'Principal Engineer', org: 'Nike' },
    { role: 'Solutions Engineer', org: 'Oracle Maxymiser' },
    { role: 'Instructor & Technical Architect', org: 'Hack Oregon' },
  ]

  // Person / ProfilePage structured data for authorship signals.
  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'David Daniel',
      jobTitle: 'Principal Engineer',
      url: 'https://daviddaniel.tech/about/',
      worksFor: { '@type': 'Organization', name: 'Nike' },
      affiliation: { '@type': 'Organization', name: 'Proof Labs' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Portland',
        addressRegion: 'OR',
        addressCountry: 'US',
      },
      knowsAbout: [
        'AI-native development',
        'agentic engineering',
        'cloud architecture',
        'digital commerce platforms',
        'full-stack development',
        'technical leadership',
      ],
      sameAs: [
        'https://linkedin.com/in/davidedaniel/',
        'https://github.com/DavideDaniel',
      ],
    },
  }

  return (
    <div className="about-container">
      <Helmet>
        <title>About David Daniel | Principal Engineer &amp; Builder</title>
        <meta name="description" content="David Daniel, principal engineer and around-the-clock builder. AI-native and agentic engineering, cloud architecture, Proof Labs, and independent research into what's possible beyond enterprise tooling." />
        <link rel="canonical" href="https://daviddaniel.tech/about/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About David Daniel | Principal Engineer &amp; Builder" />
        <meta property="og:description" content="David Daniel, principal engineer and around-the-clock builder. AI-native and agentic engineering, cloud architecture, Proof Labs, and independent research." />
        <meta property="og:url" content="https://daviddaniel.tech/about/" />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="David Daniel" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About David Daniel | Principal Engineer &amp; Builder" />
        <meta name="twitter:description" content="Principal engineer and around-the-clock builder. AI-native and agentic engineering, cloud architecture, Proof Labs, and independent research." />
        <script type="application/ld+json">{JSON.stringify(profileJsonLd)}</script>
      </Helmet>

      <div className="about-content">
        <nav className="about-nav">
          <Link to="/" className="back-link">← Home</Link>
        </nav>

        {/* Career history from LinkedIn; framing per David's direction. Verify as things change. */}
        <header className="about-header">
          <h1>David Daniel</h1>
          <p className="about-title">Principal Engineer · Builder · Researcher</p>
          <p className="about-location">Portland, Oregon</p>
        </header>

        <section className="about-section">
          <p className="about-lead">
            I&apos;m a principal engineer and an around-the-clock builder. By day I
            work at Nike; nights and weekends I keep shipping, running{' '}
            <strong>Proof Labs</strong> on the side, building apps for family and
            friends, and prototyping ideas just to see how far they go.
          </p>
          <p>
            I research well beyond any one company&apos;s enterprise-approved
            toolset, on purpose. Working past those limits is how I find where the
            frontier actually is, and bring it back to inform what&apos;s possible
            beyond where the teams I work with are today. My focus is AI-native and
            agentic engineering: turning emerging AI tooling into dependable,
            production-grade workflows, plus the cloud architecture and platform
            design that lets them scale.
          </p>
        </section>

        <section className="about-section">
          <h2>Areas of expertise</h2>
          <ul className="expertise-list">
            {expertise.map((item) => (
              <li key={item} className="expertise-item">{item}</li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <h2>Experience</h2>
          <ul className="about-timeline">
            {experience.map((job) => (
              <li key={`${job.role}-${job.org}`} className="timeline-item">
                <span className="timeline-role">{job.role}</span>
                <span className="timeline-org">{job.org}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <h2>Background</h2>
          <p>
            My route into engineering was unconventional. Before code I worked in
            photography, then mental health, before finding my way into tech.
            I&apos;ve been building ever since, including ongoing community work as
            an instructor and technical architect with Hack Oregon. My full career
            history lives on{' '}
            <a href="https://www.linkedin.com/in/davidedaniel" target="_blank" rel="me noopener noreferrer">LinkedIn</a>.
          </p>
          <ul className="about-links">
            <li>
              <a href="/research/">Technical Research →</a>
              <span> Spec-driven development frameworks and agentic AI tooling.</span>
            </li>
            <li>
              <Link to="/bio/">Early Portfolio (Archive) →</Link>
              <span> Archived work from when I first became a web developer.</span>
            </li>
          </ul>
        </section>

        <footer className="about-footer">
          <div className="about-social">
            <a href="mailto:davidedaniel@gmail.com" rel="me">Email</a>
            <a href="https://www.linkedin.com/in/davidedaniel" target="_blank" rel="me noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/DavideDaniel" target="_blank" rel="me noopener noreferrer">GitHub</a>
          </div>
          <p className="about-copyright">&copy; {new Date().getFullYear()} David Daniel · Principal Engineer &amp; Builder</p>
        </footer>
      </div>
    </div>
  )
}

export default About
