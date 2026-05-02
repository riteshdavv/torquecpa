import Image from 'next/image'
import Link from 'next/link'

/**
 * Site-wide footer.
 *
 * Converted from the original Torque_CPA.html footer (lines 6652–6697).
 * Changes from the source HTML:
 * - <img> replaced with next/image <Image> for Vector.png.
 * - All Cloudflare email-protection hrefs replaced with mailto:torque.zeta@gmail.com.
 * - Page links (/refund.html, /privacy.html, /terms.html) use Next.js <Link>
 *   and point to the app-router routes (/refund, /privacy, /terms).
 * - Inline styles kept where the original used them; class-based styles are
 *   driven by globals.css (footer, .foot-grid, .foot-bio, .foot-bottom).
 */
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          {/* Brand column */}
          <div>
            <div className="logo">
              <Image
                src="/Vector.png"
                alt="Torque Logo"
                width={26}
                height={26}
                style={{ width: 'auto', height: '26px' }}
              />
              TORQUE
            </div>
            <p className="foot-bio">
              AI workflow systems for CPA &amp; bookkeeping firms. We eliminate
              manual document processing — permanently.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a
                href="https://calendly.com/torque-zeta/discovery-call-torque"
                style={{
                  display: 'inline-block',
                  padding: '10px 18px',
                  background: 'var(--cobalt-2)',
                  color: '#fff',
                  borderRadius: '99px',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Start the $250 Pilot →
              </a>
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <h5>Navigate</h5>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#included">What&rsquo;s Included</a></li>
              <li><a href="#obstacles">Every Objection Solved</a></li>
              <li><a href="#offer">The Offer</a></li>
            </ul>
          </div>

          {/* The Pilot column */}
          <div>
            <h5>The Pilot</h5>
            <ul>
              <li><a href="#offer">$250 one-time</a></li>
              <li><a href="/#guarantee">14-day guarantee</a></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><a href="mailto:torque.zeta@gmail.com">Contact us</a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h5>Legal</h5>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="foot-bottom">
          <span>© 2026 Torque. All rights reserved.</span>
          <span>Built with n8n · Self-hosted · Your data, your server.</span>
        </div>
      </div>
    </footer>
  )
}
