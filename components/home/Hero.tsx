'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const demoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const demoEl = demoRef.current
    if (!demoEl) return

    let cancelled = false

    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    // Inject dynamic styles
    const style = document.createElement('style')
    style.textContent = `
      .doc-cursor {
        display: inline-block; width: 6px; height: 1em;
        background: currentColor; margin-left: 2px;
        animation: suiBlinkCaret 0.9s steps(1) infinite;
        vertical-align: text-bottom;
      }
      .doc-loader {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        display: flex; align-items: center; gap: 8px;
        color: #9aa0ab; font-family: var(--mono); font-size: 13px;
        opacity: 0; transition: opacity 0.3s ease;
      }
      .doc-spinner {
        width: 14px; height: 14px;
        border: 2px solid rgba(154, 160, 171, 0.2);
        border-top-color: #9aa0ab;
        border-radius: 50%;
        animation: docSpin 0.8s linear infinite;
      }
      .doc-active-box {
        background: rgba(78, 140, 255, 0.08) !important;
        box-shadow: inset 2px 0 0 var(--cobalt) !important;
        transition: all 0.2s ease;
      }
      .doc-arrow-pulse {
        animation: docArrowPulse 1s ease-in-out infinite;
      }
      @keyframes docSpin { to { transform: rotate(360deg); } }
      @keyframes docArrowPulse {
        0%, 100% { opacity: 0.3; transform: translateX(0); }
        50% { opacity: 1; transform: translateX(4px); }
      }
    `
    document.head.appendChild(style)

    const rightPanel = demoEl.querySelector('.doc-panel-right') as HTMLElement | null
    const jsonOut = demoEl.querySelector('.json-out') as HTMLElement | null
    const w2Doc = demoEl.querySelector('.w2-doc') as HTMLElement | null
    const arrowTrack = demoEl.querySelector('.doc-arrow-track') as HTMLElement | null

    // Create loader
    const loader = document.createElement('div')
    loader.className = 'doc-loader'
    loader.innerHTML = '<span class="doc-spinner"></span> Extracting...'
    if (jsonOut) {
      jsonOut.style.position = 'relative'
      jsonOut.appendChild(loader)
    }

    async function typeHtml(el: HTMLElement, htmlStr: string, charDelay: number) {
      if (cancelled) return
      el.innerHTML = ''
      const cursor = document.createElement('span')
      cursor.className = 'doc-cursor'
      el.appendChild(cursor)
      
      const parts = htmlStr.split(/<br\s*\/?>/i)
      for (let i = 0; i < parts.length; i++) {
        if (cancelled) { cursor.remove(); return }
        if (i > 0) el.insertBefore(document.createElement('br'), cursor)
        const textNode = document.createTextNode('')
        el.insertBefore(textNode, cursor)
        for (const ch of parts[i]) {
          if (cancelled) { cursor.remove(); return }
          textNode.textContent += ch
          await wait(charDelay)
        }
      }
      cursor.remove()
    }

    const w2Boxes = Array.from(demoEl.querySelectorAll('.w2-box')) as HTMLElement[]
    const w2Vals = w2Boxes.map((b) => b.querySelector('.w2-box-val') as HTMLElement | null)
    const jsonLines = Array.from(demoEl.querySelectorAll('.json-line')) as HTMLElement[]
    const jsonVals = jsonLines.map(
      (l) => l.querySelector('.jt-str, .jt-num') as HTMLElement | null
    )

    const w2FullVals = w2Vals.map((v) => (v ? v.innerHTML : ''))
    const jsonFullVals = jsonVals.map((v) => (v ? v.innerHTML : ''))

    // Hide initially but preserve space
    w2Boxes.forEach((b) => { b.style.opacity = '0'; b.style.transition = 'opacity 0.2s ease' })
    jsonLines.forEach((l) => { l.style.opacity = '0'; l.style.transition = 'opacity 0.2s ease' })

    // Lock container heights
    if (w2Doc) w2Doc.style.minHeight = w2Doc.offsetHeight + 'px'
    if (jsonOut) jsonOut.style.minHeight = jsonOut.offsetHeight + 'px'

    function resetDemo() {
      w2Boxes.forEach((b) => { b.style.opacity = '0' })
      w2Vals.forEach((v) => { if (v) v.innerHTML = '' })
      jsonLines.forEach((l) => { l.style.opacity = '0' })
      jsonVals.forEach((v) => { if (v) v.innerHTML = '' })
      loader.style.opacity = '0'
    }

    resetDemo()

    async function runDocDemo() {
      if (cancelled) return
      await wait(300)
      if (cancelled) return

      loader.style.opacity = '1'

      // Left side — W-2 boxes
      for (let i = 0; i < w2Boxes.length; i++) {
        if (cancelled) return
        w2Boxes[i].style.opacity = '1'
        if (w2Vals[i] && w2FullVals[i]) {
          w2Boxes[i].classList.add('doc-active-box')
          await typeHtml(w2Vals[i]!, w2FullVals[i], 30)
          w2Boxes[i].classList.remove('doc-active-box')
        } else {
          await wait(100)
        }
      }

      if (cancelled) return
      if (arrowTrack) arrowTrack.classList.add('doc-arrow-pulse')
      await wait(800)
      if (cancelled) return

      loader.style.opacity = '0'
      if (arrowTrack) arrowTrack.classList.remove('doc-arrow-pulse')
      await wait(300)
      if (cancelled) return

      // Right side — JSON lines
      for (let i = 0; i < jsonLines.length; i++) {
        if (cancelled) return
        jsonLines[i].style.opacity = '1'
        if (jsonVals[i] && jsonFullVals[i]) {
          jsonLines[i].classList.add('doc-active-box')
          await typeHtml(jsonVals[i]!, jsonFullVals[i], 20)
          jsonLines[i].classList.remove('doc-active-box')
        } else {
          await wait(60)
        }
      }
    }

    async function runLoop() {
      while (!cancelled) {
        await runDocDemo()
        if (cancelled) break
        await wait(3000)
        if (cancelled) break
        resetDemo()
        await wait(400)
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          runLoop()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(demoEl)

    return () => {
      cancelled = true
      io.disconnect()
      style.remove()
    }
  }, [])

  return (
    <header className="hero">
      <div className="container hero-content">
        <h1 id="hero-title">
          Your team should <em>never</em> manually process a client document again.
        </h1>
        <p className="hero-sub">
          63% of accounting firms bill zero dollars for the hours their staff spend processing client
          documents. Every W-2, 1099, bank statement, and tax return should be classified, extracted,
          named, and filed automatically. Your staff reviews. Never keys.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="https://calendly.com/torque-zeta/discovery-call-torque" id="hero-pilot-cta">
            Start the $250 Pilot →
          </a>
          <a className="btn btn-ghost" href="#how-it-works" id="hero-secondary-cta">
            See how it works
          </a>
        </div>

        {/* Document Extraction Demo */}
        <div className="doc-demo" ref={demoRef} id="demo">

          {/* LEFT: Raw W-2 */}
          <div className="doc-panel doc-panel-left">
            <div className="doc-panel-label">RAW DOCUMENT</div>
            <div className="w2-doc">
              <div className="w2-header">
                <div className="w2-agency">Department of the Treasury — Internal Revenue Service</div>
                <div className="w2-title">
                  W-2 Wage and Tax Statement <span className="w2-year">2023</span>
                </div>
              </div>
              <div className="w2-grid">
                <div className="w2-box">
                  <span className="w2-box-num">a</span>
                  <span className="w2-box-label">Employee SSN</span>
                  <span className="w2-box-val">***-**-6742</span>
                </div>
                <div className="w2-box w2-box-wide">
                  <span className="w2-box-num">b</span>
                  <span className="w2-box-label">Employer EIN</span>
                  <span className="w2-box-val">47-3821904</span>
                </div>
                <div className="w2-box w2-box-wide">
                  <span className="w2-box-num">c</span>
                  <span className="w2-box-label">Employer name, address, ZIP</span>
                  <span className="w2-box-val" style={{ minHeight: '2.8em' }}>
                    Meridian Group LLC<br />4401 Commerce Dr, Austin TX 78701
                  </span>
                </div>
                <div className="w2-box">
                  <span className="w2-box-num">1</span>
                  <span className="w2-box-label">Wages, tips, other comp.</span>
                  <span className="w2-box-val w2-money">$94,200.00</span>
                </div>
                <div className="w2-box">
                  <span className="w2-box-num">2</span>
                  <span className="w2-box-label">Federal income tax withheld</span>
                  <span className="w2-box-val w2-money">$14,130.00</span>
                </div>
                <div className="w2-box">
                  <span className="w2-box-num">4</span>
                  <span className="w2-box-label">Social security tax withheld</span>
                  <span className="w2-box-val w2-money">$5,840.40</span>
                </div>
                <div className="w2-box">
                  <span className="w2-box-num">6</span>
                  <span className="w2-box-label">Medicare tax withheld</span>
                  <span className="w2-box-val w2-money">$1,365.90</span>
                </div>
                <div className="w2-box w2-box-wide">
                  <span className="w2-box-num">e</span>
                  <span className="w2-box-label">Employee name</span>
                  <span className="w2-box-val">SARAH J. KOWALSKI</span>
                </div>
              </div>
              <div className="w2-footer">
                OMB No. 1545-0008 &nbsp;·&nbsp; Copy B — To be filed with employee's federal tax return
              </div>
            </div>
          </div>

          {/* CENTER: Arrow */}
          <div className="doc-panel-arrow">
            <div className="doc-arrow-track">
              <div className="doc-arrow-line"></div>
              <svg className="doc-arrow-head" viewBox="0 0 16 24" fill="none">
                <path
                  d="M2 2l12 10L2 22"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="doc-arrow-label">
              <span className="doc-arrow-time">4 min</span>
              <span className="doc-arrow-sub">avg. processing</span>
            </div>
          </div>

          {/* RIGHT: JSON output */}
          <div className="doc-panel doc-panel-right">
            <div className="doc-panel-label">EXTRACTED &amp; STRUCTURED</div>
            <div className="json-out">
              <div className="json-line"><span className="jt-brace">{'{'}</span></div>
              <div className="json-line json-indent">
                <span className="jt-key">"document_type"</span>
                <span className="jt-punct">: </span>
                <span className="jt-str">"W-2"</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"tax_year"</span>
                <span className="jt-punct">: </span>
                <span className="jt-num">2023</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"employee"</span>
                <span className="jt-punct">: </span>
                <span className="jt-brace">{'{'}</span>
              </div>
              <div className="json-line json-indent2">
                <span className="jt-key">"name"</span>
                <span className="jt-punct">: </span>
                <span className="jt-str">"Sarah J. Kowalski"</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent2">
                <span className="jt-key">"ssn_last4"</span>
                <span className="jt-punct">: </span>
                <span className="jt-str">"6742"</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-brace">{'}'}</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"employer"</span>
                <span className="jt-punct">: </span>
                <span className="jt-brace">{'{'}</span>
              </div>
              <div className="json-line json-indent2">
                <span className="jt-key">"name"</span>
                <span className="jt-punct">: </span>
                <span className="jt-str">"Meridian Group LLC"</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent2">
                <span className="jt-key">"ein"</span>
                <span className="jt-punct">: </span>
                <span className="jt-str">"47-3821904"</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-brace">{'}'}</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"wages"</span>
                <span className="jt-punct">: </span>
                <span className="jt-num">94200.00</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"federal_tax_withheld"</span>
                <span className="jt-punct">: </span>
                <span className="jt-num">14130.00</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"ss_tax_withheld"</span>
                <span className="jt-punct">: </span>
                <span className="jt-num">5840.40</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"medicare_tax_withheld"</span>
                <span className="jt-punct">: </span>
                <span className="jt-num">1365.90</span>
                <span className="jt-punct">,</span>
              </div>
              <div className="json-line json-indent">
                <span className="jt-key">"confidence"</span>
                <span className="jt-punct">: </span>
                <span className="jt-num">0.998</span>
              </div>
              <div className="json-line"><span className="jt-brace">{'}'}</span></div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
