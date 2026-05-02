import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LegalPage from '@/components/LegalPage'

export const metadata = {
  title: 'Refund Policy — Torque',
  description: 'Simple, specific, and honest.',
}

export default function RefundPage() {
  return (
    <>
      <Nav />

      <LegalPage
        eyebrow="— Legal · Refund"
        title="Refund"
        titleEm="Policy"
        subtitle="Simple, specific, and honest."
        date="April 27, 2026"
      >
        {/* Opening callout */}
        <div className="legal-callout">
          <span className="callout-tag">— The short version</span>
          <p>If the pilot doesn't deliver, you don't pay. Here is exactly what that means.</p>
        </div>

        {/* The Guarantee — dark strip */}
        <div className="guarantee-block">
          <div className="guarantee-tag">— The guarantee</div>
          <p className="guarantee-quote">
            We process your first <em>20 real client documents</em> — correctly classified, correctly extracted, correctly filed — within <em>14 business days</em>. If we do not hit that bar, you get every dollar back and keep everything we built.
          </p>
          <div className="guarantee-foot">You decide if it worked.</div>
        </div>

        {/* Section 1 */}
        <section className="legal-section">
          <h2><span className="num">01</span>The pilot</h2>
          <p>The pilot costs $250, paid once at the start of the engagement. It is not a deposit toward a larger fee. It is the complete cost of the pilot.</p>

          <div className="sublabel">— What the $250 covers</div>
          <ul>
            <li>Full document processing system built on your actual document types</li>
            <li>AI classification model trained on your documents</li>
            <li>All six included assets (Zero-Error Verification Gate, Client Vault Setup, Team Adoption Playbook, Tax Season Shield, Client Confidence Script, Monthly Intelligence Updates)</li>
            <li>Team walkthrough and SOP documentation</li>
            <li>14 business days of build, test, and deployment</li>
          </ul>
        </section>

        <hr className="legal-divider" />

        {/* Section 2 */}
        <section className="legal-section">
          <h2><span className="num">02</span>What the guarantee covers</h2>
          <p>If the system does not correctly process your first 20 real client documents within 14 business days of the pilot start date, you receive a full $250 refund.</p>
          <p><b style={{ color: 'var(--ink)', fontWeight: 500 }}>"Correctly processed" means:</b> classified to the right document type, key fields extracted without error, filed to the correct folder with the correct naming convention. If extractions fall below the 85% confidence threshold, those documents are flagged for your review — this is not a failure of the system, it is the system working as designed.</p>
          <p>You keep everything we built, regardless of whether you request a refund. The workflows, the classification model, the SOPs, and all supporting documentation transfer to you at pilot completion and remain yours.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 3 */}
        <section className="legal-section">
          <h2><span className="num">03</span>What the guarantee requires from you</h2>
          <p>The guarantee has three conditions. They exist because without them the system cannot be built — not because we want to make the refund difficult to claim.</p>

          <div className="condition-card">
            <div className="cond-num">Condition 01</div>
            <h3>Discovery call and sample documents</h3>
            <p>You attended the discovery call and provided real sample documents for system training within the first three business days of the engagement. Without sample documents, the classification model cannot be trained to your specific document types.</p>
          </div>

          <div className="condition-card">
            <div className="cond-num">Condition 02</div>
            <h3>Server access</h3>
            <p>You provided access to a server or hosting environment within the first five business days. Without a deployment environment, the system cannot be built or tested.</p>
          </div>

          <div className="condition-card">
            <div className="cond-num">Condition 03</div>
            <h3>Timing</h3>
            <p>The refund request is made within 30 days of the pilot completion date — not the purchase date, the completion date.</p>
          </div>

          <p style={{ marginTop: '24px' }}>If you met all three conditions and the system still did not process your documents correctly within 14 business days, the guarantee applies in full.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 4 */}
        <section className="legal-section">
          <h2><span className="num">04</span>How to request a refund</h2>
          <p>Email{' '}
            <a href="mailto:torque.zeta@gmail.com" style={{ color: 'var(--cobalt-2)', textDecoration: 'none', borderBottom: '1px solid var(--cobalt-2)' }}>
              torque.zeta@gmail.com
            </a>{' '}
            with the subject line <span className="kbd">Refund request</span> and a brief description of what didn't work. That is all we ask.
          </p>
          <p>We do not require forms, screenshots, error logs, or any formal documentation. We will confirm receipt within one business day and process the refund within five business days via the original payment method.</p>
          <p>We will ask one follow-up question — what didn't work — because understanding that helps us improve. You are not required to answer it to receive the refund.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 5 */}
        <section className="legal-section">
          <h2><span className="num">05</span>The after-pilot retainer</h2>
          <p>The $400/month retainer is a separate arrangement, offered only after the pilot delivers. It is not covered by the pilot guarantee.</p>
          <p>The retainer is billed monthly and can be cancelled at any time before the next billing date with <b style={{ color: 'var(--ink)', fontWeight: 500 }}>no penalty, no notice period, and no cancellation fee</b>. There are no contracts and no minimum terms.</p>
          <p>If you cancel the retainer, the system continues running on your infrastructure. We provide a final handover document covering maintenance procedures. You own everything and can continue running it independently.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 6 */}
        <section className="legal-section">
          <h2><span className="num">06</span>What this policy doesn't cover</h2>
          <ul>
            <li>Refund requests made more than 30 days after pilot completion</li>
            <li>Situations where sample documents or server access were not provided within the timeframes in Section 3</li>
            <li>The after-pilot retainer period</li>
            <li>Dissatisfaction with the service that is not related to system performance (for example, you decided automation was not right for your firm after the pilot ran successfully)</li>
          </ul>
        </section>

        <hr className="legal-divider" />

        {/* Section 7 */}
        <section className="legal-section">
          <h2><span className="num">07</span>Contact</h2>
          <p>Refund requests and questions:</p>
          <div className="legal-contact-card">
            <a href="mailto:torque.zeta@gmail.com">torque.zeta@gmail.com</a><br />
            <span style={{ color: 'var(--ink-3)' }}>Response within one business day.</span>
          </div>
        </section>
      </LegalPage>

      <Footer />
    </>
  )
}
