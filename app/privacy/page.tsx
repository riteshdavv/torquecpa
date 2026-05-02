import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LegalPage from '@/components/LegalPage'

export const metadata = {
  title: 'Privacy Policy — Torque',
  description: 'How we handle information at Torque.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <LegalPage
        eyebrow="— Legal · Privacy"
        title="Privacy"
        titleEm="Policy"
        subtitle="How we handle information at Torque."
        date="April 27, 2026"
      >
        {/* Opening callout */}
        <div className="legal-callout">
          <span className="callout-tag">— The short version</span>
          <p>The system we build for you runs on your own server. Your clients' documents, financial records, and personal information never reach us. This policy describes the limited information we collect about you as a business customer — not your clients' data, which never touches our infrastructure.</p>
        </div>

        {/* Section 1 */}
        <section className="legal-section">
          <h2><span className="num">01</span>What this policy covers</h2>
          <p>This policy describes what information Torque collects about firms and individuals who engage with us as customers — through our website, email, or the pilot engagement process. It does not govern your clients' data, because we do not have access to it.</p>
          <p>The automation system we deploy runs on infrastructure you control. We have no access to documents processed by that system, no visibility into extraction outputs, and no connection to your accounting software or client files after deployment.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 2 */}
        <section className="legal-section">
          <h2><span className="num">02</span>Information we collect about you</h2>
          <p>When you contact us or start the pilot, we collect:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Your firm name and general business information shared during the discovery call</li>
            <li>Billing information processed through our payment provider (we do not store card details — these are handled by Stripe and never touch our systems)</li>
            <li>Communication records from our working relationship — emails, call notes, support requests</li>
            <li>Basic performance data about the deployed system — document counts, processing times, error rates. This data lives on your server. We may review it with you during support but we do not store copies.</li>
          </ul>

          <div className="sublabel">— What we don't collect</div>
          <ul>
            <li>Your clients' names, tax documents, financial records, or any personal information belonging to your clients</li>
            <li>Any data processed by the n8n automation system we deploy</li>
            <li>Any data from your accounting software (QuickBooks, TaxSlayer, or similar)</li>
            <li>Browsing behaviour beyond standard web server logs (page visits, referring URL, browser type)</li>
          </ul>
        </section>

        <hr className="legal-divider" />

        {/* Section 3 */}
        <section className="legal-section">
          <h2><span className="num">03</span>How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Deliver the pilot and ongoing service</li>
            <li>Communicate with you about the system, updates, and support</li>
            <li>Process billing through Stripe</li>
            <li>Improve how we build and deliver the service based on what we learn from each engagement</li>
          </ul>
          <p>We do not sell your information. We do not share it with third parties except where necessary to deliver the service — specifically Stripe for payment processing, and email providers for communication. Neither has access to anything beyond what is necessary for their function.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 4 */}
        <section className="legal-section">
          <h2><span className="num">04</span>Data security</h2>
          <p>We handle the limited data we do hold with standard security practices — encrypted communication, no sensitive data stored beyond what billing and support require, access limited to people directly involved in your engagement.</p>
          <p>The more important security fact is architectural: your client data never reaches us in the first place. There is nothing to breach on our end that would expose your clients' information, because that data lives entirely within your own infrastructure.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 5 */}
        <section className="legal-section">
          <h2><span className="num">05</span>Your rights</h2>
          <p>You can request access to, correction of, or deletion of any personal information we hold about you. Contact us at{' '}
            <a href="mailto:torque.zeta@gmail.com" style={{ color: 'var(--cobalt-2)', textDecoration: 'none', borderBottom: '1px solid var(--cobalt-2)' }}>
              torque.zeta@gmail.com
            </a>{' '}
            and we will respond within 10 business days.
          </p>
          <p>If you end the engagement, we delete communication records and business information within 90 days, retaining only what is required for billing records under applicable law.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 6 */}
        <section className="legal-section">
          <h2><span className="num">06</span>Changes to this policy</h2>
          <p>If we make material changes to this policy, we will notify current customers by email at least 14 days before the changes take effect. The most recent version will always be available at this URL.</p>
        </section>

        <hr className="legal-divider" />

        {/* Section 7 */}
        <section className="legal-section">
          <h2><span className="num">07</span>Contact</h2>
          <p>Questions about this policy:</p>
          <div className="legal-contact-card">
            <a href="mailto:torque.zeta@gmail.com">torque.zeta@gmail.com</a><br />
            Torque, Indore, India
          </div>
        </section>

        <p className="legal-foot-note">Torque is a service business, not a SaaS platform. We do not run analytics pipelines, ad tracking, or user profiling. This policy reflects that.</p>
      </LegalPage>

      <Footer />
    </>
  )
}
