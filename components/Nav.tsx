'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * Fixed top navigation bar with mobile hamburger menu.
 *
 * - Transparent / white-text at the top of the page.
 * - Adds `.scrolled` class once the user scrolls past 24 px (floating pill).
 * - On mobile (≤ 768px) the nav links are hidden; a hamburger opens a full-screen overlay.
 */
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const navEl = document.querySelector<HTMLElement>('.nav')
    if (!navEl) return

    function onScroll() {
      if (window.scrollY > 24) navEl!.classList.add('scrolled')
      else navEl!.classList.remove('scrolled')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="logo" onClick={closeMenu}>
            <Image
              src="/Vector.png"
              alt="Torque Logo"
              width={26}
              height={26}
              style={{ width: 'auto', height: '26px' }}
              priority
            />
            <span className="logo-text">TORQUE</span>
          </a>

          {/* Desktop Navigation links */}
          <div className="nav-links">
            <a href="/#how-it-works">How It Works</a>
            <a href="/#demo">Demo</a>
            <a href="/#offer">Offer</a>
            <a href="/#included">What&apos;s Included</a>
            <a href="/privacy">Privacy Policy</a>
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta nav-cta-desktop">
            <div className="nav-cta-wrap">
              <a
                className="btn btn-primary"
                href="https://calendly.com/torque-zeta/discovery-call-torque"
                id="nav-pilot-cta"
              >
                Start the $250 Pilot →
              </a>
              <span className="nav-guarantee">14-day guarantee</span>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu-inner">
            <nav className="mobile-nav-links">
              <a href="/#how-it-works" onClick={closeMenu}>How It Works</a>
              <a href="/#demo" onClick={closeMenu}>Demo</a>
              <a href="/#offer" onClick={closeMenu}>Offer</a>
              <a href="/#included" onClick={closeMenu}>What&apos;s Included</a>
              <a href="/privacy" onClick={closeMenu}>Privacy Policy</a>
            </nav>
            <div className="mobile-menu-cta">
              <a
                className="btn btn-primary mobile-cta-btn"
                href="https://calendly.com/torque-zeta/discovery-call-torque"
                onClick={closeMenu}
              >
                Start the $250 Pilot →
              </a>
              <span className="mobile-guarantee">14-day money-back guarantee</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
