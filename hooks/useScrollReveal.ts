'use client'

import { useEffect } from 'react'

/**
 * Replicates the IntersectionObserver-based scroll-reveal from the original
 * Torque_CPA.html. Observes every element with a `data-reveal` attribute
 * (and `.hiw-hero-wrap`, `.fb`) and adds the `is-in` class when it enters
 * the viewport, then un-observes it.
 *
 * For `data-reveal-group` parents, sets a `--i` CSS custom property on each
 * direct child so staggered animation delays work via `calc(var(--i) * ...)`.
 *
 * Call once in a top-level Client Component (e.g. a ScrollRevealProvider or
 * the root page). Cleans up the observer on unmount.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    const targets = document.querySelectorAll<HTMLElement>(
      '[data-reveal], .hiw-hero-wrap, .fb',
    )

    targets.forEach((el) => {
      if (el.hasAttribute('data-reveal-group')) {
        Array.from(el.children).forEach((child, k) => {
          ;(child as HTMLElement).style.setProperty('--i', String(k))
        })
      }
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
