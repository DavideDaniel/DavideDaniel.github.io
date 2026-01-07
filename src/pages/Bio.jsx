import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Testimonial from '../components/Testimonial'
import ResumeModal from '../components/ResumeModal'
import '../styles/Bio.css'

/**
 * Bio/Portfolio page component
 *
 * This page contains the complete portfolio with all original content from the static site,
 * refactored into modern React components.
 *
 * Sections:
 * - Hero with parallax-style background
 * - About section with bio
 * - Sample work/projects grid
 * - Experience with skills and resume
 * - Testimonials
 * - Contact with social links
 *
 * @ai-context This is the main portfolio page. Migrated from jQuery/Bootstrap to React.
 * Smooth scrolling and interactivity handled with React hooks.
 */
function Bio() {
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /**
   * @ai-context Smooth scroll to section when navigation link is clicked
   * Replaces jQuery smooth scroll from original site
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 60 // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  /**
   * @ai-context Track which section is currently in view for nav highlighting
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'samples', 'experience', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Project data
  const projects = [
    {
      image: '/slacker.png',
      title: 'Slacker',
      description: "Poor team's slack...",
      link: 'https://github.com/DavideDaniel/NodeChatApp'
    },
    {
      image: '/whofundsme.png',
      title: 'WhoFundsMe',
      description: 'Who funds our politicians? Take a look.',
      link: 'http://whofundsme.hacktivist.io'
    },
    {
      image: '/lolist.png',
      title: 'LOList',
      description: 'Live comedy show ticket availability notifications',
      link: 'http://LOList.io'
    },
    {
      image: '/distill.png',
      title: '// Distill-js',
      description: 'Distill comments from your javascript! NPM package to extract commented out lines into a markdown file.',
      link: 'https://www.npmjs.com/package/distill-js'
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      image: '/testimonials/ashley-singh.jpg',
      name: 'Ashley K Singh',
      title: 'Product Manager at VenueNext',
      quote: 'I was the Product Manager on LOList. David is a passionate and hard working individual. As the Lead Developer on LOList, he led the charge on implementing user stories and managing a team of two other developers. He is organized and ambitious. He seized the opportunity to help develop the look and feel of the app as well. I highly recommend David for any team.'
    },
    {
      image: '/testimonials/ciara-yu.jpg',
      name: 'Ciara Yu',
      title: 'Support Engineer at Maxymiser',
      quote: "David is a talented, driven individual with a true passion for optimizing the user experience and making the tools we use everyday easy and enjoyable to use. I was lucky enough to work with him at Maxymiser, where I got to witness his work ethic firsthand. We managed several client accounts together, supporting their customer experience optimization program through sophisticated online A/B and MVT campaigns. As a support team, I extremely valued his talent to not only tend to the problem at hand but also step back and view the bigger picture to identify the optimal solution. This proved invaluable on several occasions, as he was able to build scalable, reusable solutions that enhanced our ability to deliver quality campaigns in an efficient manner. He's an asset to any team, as he's always willing to help, asks the right questions, and views any challenges as another opportunity to learn something new. I highly recommend David, and hope to get to work with him again in the future!"
    },
    {
      image: '/testimonials/jerome-hardaway.jpg',
      name: 'Jerome Hardaway',
      title: 'Web Developer at HigherVisibility',
      quote: 'I met David through General Assembly and the best way to describe him is as the total package. His natural prowess in quickly learning programming languages, as well as rapidly applying them to various problems coupled with his leadership ability made him an essential asset in our class and several of our projects. Any company that David goes to will have their return on the investment exceed their expectations.'
    },
    {
      image: '/testimonials/jason-ng.jpg',
      name: 'Jason Ng',
      title: 'Instructor/Developer at Byte Academy',
      quote: "David and I were both in General Assembly's web development accelerator program. I spent everyday for four months coding and learning alongside him. His hunger for knowledge was something I have never encountered before. The work ethic, and problem solving skills he displayed were extremely motivating and inspired those around him. It is clear he is dedicated to producing clean, and efficient code. Any organization will have an amazing asset with David on their team."
    }
  ]

  return (
    <div className="bio-container">
      {/* Navigation */}
      <nav className="bio-nav">
        <div className="nav-container">
          <Link to="/" className="back-link">← Home</Link>
          <div className="bio-nav-links">
            <button
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('samples')}
              className={activeSection === 'samples' ? 'active' : ''}
            >
              Samples
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={activeSection === 'testimonials' ? 'active' : ''}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>David Daniel</h1>
          <p className="tagline">Web Developer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <div className="about-col">
              <p>
                I'm a web developer with a varied background. In previous lives I've played bass in an alt-rock band, worked as a photographer in the NYC commercial & fashion industry, supervised a residential mental health facility in Portland, OR, worked with startups at Grand Central Tech & most recently as a Solutions Engineer with Oracle Maxymiser.
              </p>
            </div>
            <div className="about-col">
              <p>
                I've just returned to Portland, OR and am seeking opportunities as a web developer (front-end or full-stack) with the right company where I can put my skills to work and also continue to grow as a developer. When I'm not crushing code, I ❤️, tinkering with motorcycles, chilling with my 2 cats, and cooking for friends before game nights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section id="samples" className="section samples">
        <div className="container-wide">
          <h2 className="section-title">Sample Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-content">
            <h3>Some clients I've worked with:</h3>
            <p className="clients-list">
              Nike, Converse, Carmax, Kaspersky, Bare Escentuals, JC Penney, Shoes.com, Vonage, Dr. Pepper Snapple Group, HD Supply, IBM, Allrecipes.com, Social Data Collective, Football Fanatics and more...
            </p>
            <h3>Skills that pay the bills:</h3>
            <p className="skills-list">
              JavaScript | jQuery | HTML/CSS | Node.js | React | d3 | Angular | Ruby | Rails | Git | inDesign | Lightroom | Photoshop
            </p>
            <div className="resume-section">
              <p>View or download:</p>
              <button
                onClick={() => setShowResumeModal(true)}
                className="btn btn-custom"
              >
                RÉSUMÉ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <div className="container-wide">
          <h2 className="section-title">Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="profile-image-wrapper">
              <img
                src="/ga-pic-small.jpg"
                alt="David Daniel"
                className="profile-image"
              />
            </div>
            <div className="social-links">
              <a href="mailto:davidedaniel@gmail.com?subject=You're Hired!" aria-label="Email">
                <span className="social-icon">
                  <i className="icon-email">✉</i>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/davidedaniel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="social-icon">
                  <i className="icon-linkedin">in</i>
                </span>
              </a>
              <a href="https://github.com/davidedaniel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <span className="social-icon">
                  <i className="icon-github">⚙</i>
                </span>
              </a>
              <a href="https://www.twitter.com/davidedaniel" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span className="social-icon">
                  <i className="icon-twitter">🐦</i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bio-footer">
        <p>&copy; {new Date().getFullYear()} David Enoch Daniel. All rights reserved.</p>
      </footer>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </div>
  )
}

export default Bio
