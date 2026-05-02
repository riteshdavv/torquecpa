export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 data-reveal>
          See it working on your <em>actual</em> documents.
        </h2>
        <p>
          Before you pay anything. The pilot starts at $250. Full refund if it doesn't deliver.{' '}
          <a href="/refund" style={{ color: 'var(--cobalt-glow)', textDecoration: 'underline' }}>
            See refund terms →
          </a>
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="https://calendly.com/torque-zeta/discovery-call-torque">
            Start the $250 Pilot →
          </a>
          <a className="btn btn-ghost" href="/#offer">
            See the offer in full
          </a>
        </div>
      </div>
    </section>
  )
}
