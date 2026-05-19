export default function EmailCTA() {
  return (
    <div className="email-cta-strip" id="email-cta">
      <div className="container email-cta-inner">
        <div className="email-cta-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13L2 4" />
          </svg>
        </div>
        <p className="email-cta-text">
          Not ready for a call? Email us directly at{' '}
          <a href="mailto:torque.zeta@gmail.com" className="email-cta-link">
            torque.zeta@gmail.com
          </a>
          {' '}— we reply within one business day.
        </p>
      </div>
    </div>
  )
}
