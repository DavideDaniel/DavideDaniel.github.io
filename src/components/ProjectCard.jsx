/**
 * ProjectCard component - Displays a project with hover effects
 *
 * @ai-context This component shows portfolio projects with image, title, and description.
 * On hover, it reveals project details with overlay effect.
 *
 * @param {Object} props
 * @param {string} props.image - Path to project image
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.link - URL to project or repository
 */
function ProjectCard({ image, title, description, link }) {
  return (
    <div className="project-container">
      <a href={link} className="project-box" target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
        <div className="project-box-caption">
          <div className="project-box-caption-content">
            <div className="project-name">{title}</div>
            <div className="project-detail">{description}</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
