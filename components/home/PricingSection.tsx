export default function PricingSection() {
  return (
    <section className="pricing-section" id="offer">
      <div className="container">
        <div className="sec-head" data-reveal>
          <div className="sec-eyebrow">— THE OFFER</div>
          <h2>
            The Zero Data Entry System
            <br />
            <em>for CPA &amp; Bookkeeping Firms.</em>
          </h2>
          <p>
            Live in 14 Days &nbsp;·&nbsp; Full refund if it doesn't work &nbsp;·&nbsp;{' '}
            <a href="/refund" style={{ color: 'var(--cobalt-2)', textDecoration: 'underline' }}>
              Refund terms
            </a>
          </p>
        </div>

        <div className="price-grid" style={{ gridTemplateColumns: '1.4fr 1fr', maxWidth: '880px' }} data-reveal>

          {/* PILOT — main card */}
          <div className="price featured" style={{ position: 'relative' }} data-reveal>
            <div className="name">THE PILOT</div>
            <div className="amt">$250</div>
            <div className="per">one-time &nbsp;·&nbsp; 14 business days &nbsp;·&nbsp; full refund if it doesn't work</div>
            <div className="desc" style={{ marginTop: '20px', fontSize: '15px' }}>
              Everything below is included. You keep it whether you continue or not.
            </div>
            <ul>
              <li>Full system built on your actual documents</li>
              <li>All six bonuses included from day one</li>
              <li>You keep everything built — whether you continue or refund</li>
              <li>
                Full refund if it doesn't deliver —{' '}
                <a href="/refund" style={{ color: 'var(--cobalt-glow)', textDecoration: 'underline', fontSize: '12px' }}>
                  see refund terms
                </a>
              </li>
            </ul>
            <a className="cta-btn" href="https://calendly.com/torque-zeta/discovery-call-torque" style={{ textAlign: 'center' }}>
              Start the Pilot →
            </a>
          </div>

          {/* AFTER PILOT */}
          <div className="price" style={{ display: 'flex', flexDirection: 'column' }} data-reveal>
            <div className="name">AFTER PILOT</div>
            <div className="amt">$400</div>
            <div className="per">per month</div>
            <div className="desc">Only offered after the pilot delivers. Never pitched upfront.</div>
            <ul style={{ marginTop: '8px' }}>
              <li>Ongoing maintenance and monthly updates</li>
              <li>Monthly intelligence model improvements</li>
              <li>Tax Season Shield priority support (Jan–Apr)</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '20px', fontStyle: 'italic', fontSize: '13px', color: 'var(--ink-3)' }}>
              We only offer this after you've seen the pilot work.
              <br />
              Never before.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
