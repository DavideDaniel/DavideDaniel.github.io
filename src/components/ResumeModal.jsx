import { useEffect } from 'react'

/**
 * ResumeModal component - Modal dialog for viewing resume PDF
 *
 * @ai-context This replaces the Bootstrap modal from the original site.
 * Uses React state and effects to handle modal visibility.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether modal is visible
 * @param {() => void} props.onClose - Function to close modal
 */
function ResumeModal({ isOpen, onClose }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className="modal-body">
          <iframe
            src="/David_Daniel_Resume_May_2016.pdf"
            title="Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
