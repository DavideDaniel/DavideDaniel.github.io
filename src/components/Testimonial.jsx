/**
 * Testimonial component - Displays a single testimonial with photo and quote
 *
 * @ai-context This component shows professional testimonials from colleagues.
 * Used in the testimonials section of the portfolio.
 *
 * @param {Object} props
 * @param {string} props.image - URL to person's photo
 * @param {string} props.name - Person's name
 * @param {string} props.title - Person's job title and company
 * @param {string} props.quote - Testimonial text
 */
function Testimonial({ image, name, title, quote }) {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p className="testimonial-quote">"{quote}"</p>
    </div>
  )
}

export default Testimonial
