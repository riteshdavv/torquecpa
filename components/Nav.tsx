'use client'

import Image from 'next/image'
import { useEffect } from 'react'

/**
 * Fixed top navigation bar.
 *
 * Mirrors the original Torque_CPA.html nav exactly:
 * - Transparent / white-text at the top of the page.
 * - Adds the `.scrolled` class once the user scrolls past 24 px, which
 *   triggers the floating pill style defined in globals.css.
 * - CTA link points to mailto:torque.zeta@gmail.com
 */
export default function Nav() {
  useEffect(() => {
    const navEl = document.querySelector<HTMLElement>('.nav')
    if (!navEl) return

    function onScroll() {
      if (window.scrollY > 24) navEl!.classList.add('scrolled')
      else navEl!.classList.remove('scrolled')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount so initial state is correct
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <a href="#" className="logo">
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

        {/* Navigation links */}
        <div className="nav-links">
          <a href="/#how-it-works">How It Works</a>
          <a href="/#demo">Demo</a>
          <a href="/#offer">Offer</a>
          <a href="/#included">What's Included</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* CTA */}
        <div className="nav-cta">
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
      </div>
    </nav>
  )
}
