import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LegalPage from '@/components/LegalPage'

export const metadata = {
  title: 'Terms of Service — Torque',
  description: 'What we agree to. What you agree to. Written plainly.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />

      <LegalPage
        eyebrow="— Legal · Terms"
        title="Terms of"
        titleEm="Service"
        subtitle="What we agree to. What you agree to. Written plainly."
        date="April 27, 2026"
      >
        {/* Opening callout */}
        <div className="legal-callout">
          <span className="callout-tag">— The short version</span>
          <p>These terms govern the relationship between Torque and firms that engage with us for the pilot or ongoing service. They are written in plain English because we believe you should be able to read them in under ten minutes and understand exactly what you are agreeing to.</p>
        </div>

        {/* Section 1 */}
        <section className="legal-section">
          <h2><span className="num">01</span>The service</h2>
          <p>Torque builds and deploys AI-powered document processing systems for CPA and bookkeeping firms. The system — built on n8n and deployed on infrastructure you control — automatically classifies, extracts data from, and organises the financial documents your clients send you.</p>

          <p>The service has two phases:</p>

          <div className="phase-grid">
            <div className="phase-card">
              <div className="phase-tag">— Phase 01</div>
              <div className="phase-name">The Pilot</div>
              <div className="phase-price">$250 <span>· one-time</span></div>
              <p>A 14-business-day engagement in which we build, train, and deploy the system on your infrastructure. Full terms of the pilot are in the <a href="/refund">Refund Policy</a>.</p>
            </div>
            <div className="phase-card">
              <div className="phase-tag">— Phase 02</div>
              <div className="phase-name">The Retainer</div>
              <div className="phase-price">$400 <span>/ month</span></div>
              <p>Ongoing maintenance, model updates, and priority support, offered after the pilot delivers.</p>
            </div>
          </div>
        </section>

        <hr className="legal-divider" />

        {/* Section 2 */}
        <section className="legal-section">
          <h2><span className="num">02</span>What we agree to deliver</h2>
          <p>During the pilot, we agree to:</p>
          <ul>
            <li>Conduct a discovery call to map your document intake process</li>
            <li>Build a working n8n automation system on your infrastructure</li>
            <li>Train a document classification model on your actual document types</li>
            <li>Test the system against your real documents and verify outputs</li>
            <li>Conduct a 60-minute team walkthrough and produce written SOPs for your workflow</li>
            <li>Deploy all six included assets described in the offer</li>
            <li>Process your first 20 real client documents within 14 business days</li>
          </ul>
          <p>If we do not meet this standard, the refund terms in our{' '}
            <a href="/refund" style={{ color: 'var(--cobalt-2)', textDecoration: 'none', borderBottom: '1px solid var(--cobalt-2)' }}>
              Refund Policy
            </a>{' '}
            apply.
          </p>
        </section>

        <hr className="legal-divider" />

        {/* Section 3 */}
        <section className="legal-section">
          <h2><span className="num">03</span>What you agree to provide</h2>
          <p>For us to deliver the pilot, you agree to:</p>
          <ul>
            <li>Attend the discovery call and engage honestly about your current document intake process</li>
            <li>Provide real sample documents for system training within three business days of engagement start</li>
            <li>Provide access to a server or hosting environment within five business days of engagement start</li>
            <li>Make at least one staff member available for the team walkthrough in days 12–13</li>
            <li>Provide honest feedback on whether the pilot delivered</li>
          </ul>
          <p>If these are not provided within the stated timeframes, the 14-business-day clock pauses until they are, and the refund guarantee conditions are not met.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 4 */}
        <section className="legal-section">
          <h2><span className="num">04</span>Data and privacy</h2>
          <p>The system we deploy runs on your infrastructure. Your client data — documents, financial records, personal information — <b style={{ color: 'var(--ink)', fontWeight: 500 }}>never reaches our systems</b>. We have no access to it after deployment.</p>
          <p>The limited information we collect about you as a customer is described in our{' '}
            <a href="/privacy" style={{ color: 'var(--cobalt-2)', textDecoration: 'none', borderBottom: '1px solid var(--cobalt-2)' }}>
              Privacy Policy
            </a>
            . By engaging with us you agree to the terms of that policy.
          </p>
          <p>You are responsible for ensuring that your use of the automated system complies with any obligations you have to your clients regarding data handling. We can provide documentation of the system's architecture to support any client enquiries you receive.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 5 */}
        <section className="legal-section">
          <h2><span className="num">05</span>Intellectual property</h2>
          <p>Assets built during the pilot belong to you after delivery. This includes the n8n workflows, the trained classification model, the folder taxonomy, the SOPs, and all supporting documentation we produce.</p>
          <p>Torque retains ownership of the underlying methodology, templates, and training materials used to build the system. We grant you a permanent, irrevocable licence to use all deliverables for your own business operations.</p>
          <p>You may not resell the deliverables or use them to build an automation service for third parties without our written permission.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 6 */}
        <section className="legal-section">
          <h2><span className="num">06</span>Limitation of liability</h2>
          <p>If something goes wrong, our liability is limited to the amount you paid us. We are not liable for indirect, consequential, or incidental damages — including lost revenue, missed deadlines, or errors that arose from data you provided.</p>
          <p>This limitation does not apply to situations involving our own fraud or wilful misconduct.</p>

          <div className="plain-quote">
            <div className="plain-tag">— In plain terms</div>
            <p>If the system produces an incorrect extraction and you catch it in the review queue (which is what the review queue exists for), that is not our liability. If you bypass the review queue and file an incorrect document, that is not our liability. If we build the wrong system or fail to deliver what we promised, the refund terms apply.</p>
          </div>
        </section>

        <hr className="legal-divider" />

        {/* Section 7 */}
        <section className="legal-section">
          <h2><span className="num">07</span>Cancellation</h2>

          <div className="cancel-row">
            <div className="cancel-label">Pilot</div>
            <div className="cancel-body">
              <p>You may cancel the pilot at any time before system deployment by emailing{' '}
                <a href="mailto:torque.zeta@gmail.com">torque.zeta@gmail.com</a>
                . If cancelled before we have started building (before the discovery call), you receive a full refund. If cancelled after build has started, refund eligibility is governed by the{' '}
                <a href="/refund">Refund Policy</a>
                .
              </p>
            </div>
          </div>

          <div className="cancel-row">
            <div className="cancel-label">Retainer</div>
            <div className="cancel-body">
              <p>Cancel any time before the next billing date. <b style={{ color: 'var(--ink)', fontWeight: 500 }}>No notice period. No penalty. No forms.</b> Email{' '}
                <a href="mailto:torque.zeta@gmail.com">torque.zeta@gmail.com</a>
                .
              </p>
            </div>
          </div>
        </section>

        <hr className="legal-divider" />

        {/* Section 8 */}
        <section className="legal-section">
          <h2><span className="num">08</span>Changes to these terms</h2>
          <p>If we make material changes, we will notify active customers by email at least 14 days before the changes take effect. Continuing to use the service after that date constitutes acceptance of the updated terms.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 9 */}
        <section className="legal-section">
          <h2><span className="num">09</span>Governing law</h2>
          <p>These terms are governed by the laws of India. Any disputes will be resolved first through direct negotiation. If that fails, through arbitration under the Arbitration and Conciliation Act, 1996, with proceedings in Indore, Madhya Pradesh.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 10 */}
        <section className="legal-section">
          <h2><span className="num">10</span>Contact</h2>
          <p>Questions about these terms:</p>
          <div className="legal-contact-card">
            <a href="mailto:torque.zeta@gmail.com">torque.zeta@gmail.com</a><br />
            Torque, Indore, India<br />
            <span style={{ color: 'var(--ink-3)' }}>We will respond within two business days.</span>
          </div>
        </section>
      </LegalPage>

      <Footer />
    </>
  )
}
