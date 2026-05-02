'use client'

import { useEffect, useRef } from 'react'

export default function ROISection() {
  const clientsRef = useRef<HTMLInputElement>(null)
  const rateRef = useRef<HTMLInputElement>(null)
  const clientsValRef = useRef<HTMLSpanElement>(null)
  const rateValRef = useRef<HTMLSpanElement>(null)
  const outHrsRef = useRef<HTMLSpanElement>(null)
  const outRevRef = useRef<HTMLSpanElement>(null)
  const meterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elClients = clientsRef.current
    const elRate = rateRef.current
    const valClients = clientsValRef.current
    const valRate = rateValRef.current
    const outHrs = outHrsRef.current
    const outRev = outRevRef.current
    const meter = meterRef.current

    if (!elClients || !elRate) return

    let animClients = 50
    let animRate = 150
    let rafId: number | null = null

    function lerp(start: number, end: number, amt: number) {
      return (1 - amt) * start + amt * end
    }

    function animateROI() {
      const targetClients = parseInt(elClients!.value) || 0
      const targetRate = parseInt(elRate!.value) || 0

      animClients = lerp(animClients, targetClients, 0.15)
      animRate = lerp(animRate, targetRate, 0.15)

      const hrs = animClients * 3
      const rev = hrs * animRate

      if (valClients) valClients.textContent = String(Math.round(animClients))
      if (valRate) valRate.textContent = '$' + Math.round(animRate)
      if (outHrs) outHrs.textContent = String(Math.round(hrs))
      if (outRev) outRev.textContent = Math.round(rev).toLocaleString()

      const maxRev = 200 * 3 * 500
      const percent = (rev / maxRev) * 100
      if (meter) meter.style.width = percent + '%'

      if (Math.abs(animClients - targetClients) > 0.01 || Math.abs(animRate - targetRate) > 0.01) {
        rafId = requestAnimationFrame(animateROI)
      } else {
        if (valClients) valClients.textContent = String(targetClients)
        if (valRate) valRate.textContent = '$' + targetRate
        if (outHrs) outHrs.textContent = String(targetClients * 3)
        if (outRev) outRev.textContent = (targetClients * 3 * targetRate).toLocaleString()
        if (meter) meter.style.width = ((targetClients * 3 * targetRate) / maxRev * 100) + '%'
        rafId = null
      }
    }

    function triggerUpdate() {
      if (!rafId) {
        rafId = requestAnimationFrame(animateROI)
      }
    }

    elClients.addEventListener('input', triggerUpdate)
    elRate.addEventListener('input', triggerUpdate)
    triggerUpdate()

    return () => {
      elClients.removeEventListener('input', triggerUpdate)
      elRate.removeEventListener('input', triggerUpdate)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="section" id="problem" style={{ background: 'var(--night)', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="sec-head">
          <div className="sec-eyebrow" style={{ color: 'var(--cobalt-glow)' }}>— THE REAL COST</div>
          <div style={{ width: 'max-content', textAlign: 'left', margin: 0 }}>
            <h2 style={{ color: '#fff' }}>The hours disappear.</h2>
            <h2 style={{ color: 'rgba(255, 255, 255, 0.4)', marginTop: '-10px', marginBottom: '30px' }}>
              The billing doesn't follow.
            </h2>
          </div>
          <p style={{ textAlign: 'left', margin: 0, color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', maxWidth: '600px', lineHeight: 1.6 }}>
            A typical S-Corp client onboarding requires 3 hours of non-billable work. Across 50 clients
            that's 150 hours per year. At $150/hr, that's $22,500 you worked for and never invoiced.
            <br /><br />
            The system below eliminates that number permanently.
          </p>
        </div>

        {/* ROI Widget */}
        <style>{`
          .roi-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            outline: none;
            margin: 20px 0;
          }
          .roi-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: #f87171;
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.2s;
            box-shadow: 0 0 15px rgba(248, 113, 113, 0.4);
          }
          .roi-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
          .roi-meter-bg {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            overflow: hidden;
            margin-top: 15px;
          }
          .roi-meter-fill {
            height: 100%;
            background: linear-gradient(90deg, #f87171, #ef4444);
            width: 0%;
            transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>

        <div
          className="roi-widget"
          style={{
            marginTop: '50px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '48px',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Decorative Glow */}
          <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(248, 113, 113, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '48px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Number of clients
                </label>
                <span ref={clientsValRef} id="roi-clients-val" style={{ fontFamily: 'var(--mono)', fontSize: '20px', color: '#fff' }}>50</span>
              </div>
              <input ref={clientsRef} type="range" id="roi-clients" min="1" max="200" defaultValue="50" className="roi-slider" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Billing rate ($/hr)
                </label>
                <span ref={rateValRef} id="roi-rate-val" style={{ fontFamily: 'var(--mono)', fontSize: '20px', color: '#fff' }}>$150</span>
              </div>
              <input ref={rateRef} type="range" id="roi-rate" min="50" max="500" step="10" defaultValue="150" className="roi-slider" />
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                  Hours lost per year
                </span>
                <span ref={outHrsRef} id="roi-out-hrs" style={{ fontFamily: 'var(--serif)', fontSize: '42px', color: '#fff' }}>150</span>
                <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)', marginLeft: '4px' }}>hrs</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                  Revenue never billed
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '42px', color: '#f87171' }}>$</span>
                  <span ref={outRevRef} id="roi-out-rev" style={{ fontFamily: 'var(--serif)', fontSize: '64px', color: '#f87171', lineHeight: 1 }}>22,500</span>
                </div>
              </div>
            </div>

            <div className="roi-meter-bg">
              <div ref={meterRef} id="roi-meter" className="roi-meter-fill" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '11px', fontFamily: 'var(--mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              <span>Current Leak</span>
              <span>Max Potential</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
