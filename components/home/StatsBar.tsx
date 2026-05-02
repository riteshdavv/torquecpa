'use client'

import { useEffect } from 'react'

export default function StatsBar() {
  useEffect(() => {
    const stats = document.querySelectorAll<HTMLElement>('.stat-val')

    function animateStat(el: HTMLElement) {
      const target = parseFloat(el.getAttribute('data-target') || '0')
      const duration = 2000
      const hold = 3000
      let startTime: number | null = null

      function step(timestamp: number) {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const current = progress * target

        if (target % 1 === 0) {
          el.textContent = String(Math.floor(current))
        } else {
          el.textContent = current.toFixed(1)
        }

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setTimeout(() => {
            startTime = null
            requestAnimationFrame(step)
          }, hold)
        }
      }
      requestAnimationFrame(step)
    }

    stats.forEach(animateStat)
  }, [])

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            maxWidth: '960px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div style={{ position: 'relative', padding: '0 20px' }}>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '56px',
                color: 'var(--cobalt)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              <span className="stat-val" data-target="3" style={{ minWidth: '0.8em' }}>
                3
              </span>{' '}
              hrs
            </div>
            <div style={{ color: 'var(--ink-2)', fontWeight: 500, fontSize: '15px' }}>
              saved per client onboarding
            </div>
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '15%',
                bottom: '15%',
                width: '2px',
                background:
                  'linear-gradient(180deg, transparent, var(--rule) 20%, var(--rule) 80%, transparent)',
              }}
            />
          </div>

          <div style={{ position: 'relative', padding: '0 20px' }}>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '56px',
                color: 'var(--cobalt)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              <span className="stat-val" data-target="86" style={{ minWidth: '1.5em' }}>
                86
              </span>
              %
            </div>
            <div style={{ color: 'var(--ink-2)', fontWeight: 500, fontSize: '15px' }}>
              of accountants still enter data manually
            </div>
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '15%',
                bottom: '15%',
                width: '2px',
                background:
                  'linear-gradient(180deg, transparent, var(--rule) 20%, var(--rule) 80%, transparent)',
              }}
            />
          </div>

          <div style={{ padding: '0 20px' }}>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '56px',
                color: 'var(--cobalt)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              Day{' '}
              <span className="stat-val" data-target="1" style={{ minWidth: '0.6em' }}>
                1
              </span>
            </div>
            <div style={{ color: 'var(--ink-2)', fontWeight: 500, fontSize: '15px' }}>
              first value visible
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
