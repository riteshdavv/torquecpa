export default function HowItWorks() {
  return (
    <section className="features-section" id="how-it-works">
      <div className="container">

        <div className="sec-head">
          <div className="sec-eyebrow">— HOW IT WORKS</div>
          <h2>Point one email address at it.</h2>
          <p>We handle the rest. No complex integrations. No IT department required.</p>
        </div>

        {/* Hero mockup: animated email connector window */}
        <div className="hiw-hero-wrap">
          <div className="hiw-stage">

            {/* Floating corner widget: inbox */}
            <div className="hiw-orb b" aria-hidden="true">
              <span className="sq">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 4h10v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" />
                  <path d="M2 4l5 4 5-4" />
                </svg>
              </span>
              <span>INBOX&nbsp;·&nbsp;3 new</span>
            </div>

            {/* Floating corner widget: server */}
            <div className="hiw-orb a" aria-hidden="true">
              <span className="sq">
                <svg viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="3" width="10" height="3.5" rx="1" />
                  <rect x="2" y="7.5" width="10" height="3.5" rx="1" />
                  <circle cx="4" cy="4.75" r="0.5" fill="currentColor" />
                  <circle cx="4" cy="9.25" r="0.5" fill="currentColor" />
                </svg>
              </span>
              <span>SELF-HOSTED</span>
            </div>

            {/* Floating corner widget: filed */}
            <div className="hiw-orb c" aria-hidden="true">
              <span className="sq">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M2 4.5l1-1.5h3l1 1.5h5v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7z" />
                </svg>
              </span>
              <span>AUTO-FILED</span>
            </div>

            {/* The main window */}
            <div className="hiw-win">
              <div className="bar">
                <span className="d r"></span>
                <span className="d y"></span>
                <span className="d g"></span>
                <span className="t">Connect intake address</span>
              </div>

              <div className="body">
                <div className="hiw-label">Your firm's intake address</div>

                <div className="hiw-input-row">
                  <span className="at" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <rect x="2.5" y="4" width="15" height="12" rx="2" />
                      <path d="M2.5 5.5l7.5 5.5 7.5-5.5" />
                    </svg>
                  </span>
                  <span className="field">
                    <span className="typed">hello@yourfirm.com</span>
                    <span className="caret"></span>
                  </span>
                </div>

                <div className="hiw-steps" aria-hidden="true">
                  <div className="hiw-step s1"></div>
                  <div className="hiw-step s2"></div>
                  <div className="hiw-step s3"></div>
                  <div className="hiw-step s4"></div>
                </div>

                <div className="hiw-meta">
                  <span>DNS · MX · SPF verified</span>
                  <span className="right">
                    <span className="dot"></span>
                    Listening for documents
                  </span>
                </div>
              </div>

              {/* Floating "Connected!" pill */}
              <div className="hiw-connected" role="status" aria-live="polite">
                <span className="ic" aria-hidden="true">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2 7.5 5.5 11 12 4" />
                  </svg>
                </span>
                <span>
                  Connected!
                  <span className="sub">4 min to first auto-file</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 4-step process */}
        <style>{`
          @keyframes cardFadeSlide {
            0%, 10% { opacity: 0; transform: translateY(8px); }
            20%, 85% { opacity: 1; transform: translateY(0); }
            95%, 100% { opacity: 0; transform: translateY(-8px); }
          }
          .c-anim-1 { animation: cardFadeSlide 5s ease-out infinite 0.2s; opacity: 0; }
          .c-anim-2 { animation: cardFadeSlide 5s ease-out infinite 0.5s; opacity: 0; }
          .c-anim-3 { animation: cardFadeSlide 5s ease-out infinite 0.8s; opacity: 0; }
          .c-anim-4 { animation: cardFadeSlide 5s ease-out infinite 1.1s; opacity: 0; }
          @keyframes cardScanLaser {
            0%, 15% { top: 0; opacity: 0; }
            25% { opacity: 1; }
            75% { opacity: 1; }
            85%, 100% { top: 100%; opacity: 0; }
          }
          @keyframes cardScorePop {
            0%, 25% { transform: scale(0.8); opacity: 0; color: #9ca3af; }
            35%, 85% { transform: scale(1.1); opacity: 1; color: #15803d; }
            45% { transform: scale(1); }
            95%, 100% { transform: scale(1); opacity: 0; }
          }
          .c-score-1 { animation: cardScorePop 5s cubic-bezier(0.4,0,0.2,1) infinite 0.6s; opacity: 0; }
          .c-score-2 { animation: cardScorePop 5s cubic-bezier(0.4,0,0.2,1) infinite 1.1s; opacity: 0; }
          .c-score-3 { animation: cardScorePop 5s cubic-bezier(0.4,0,0.2,1) infinite 1.6s; opacity: 0; }
          .c-score-4 { animation: cardScorePop 5s cubic-bezier(0.4,0,0.2,1) infinite 2.1s; opacity: 0; }
          @keyframes cardReviewPop {
            0%, 15% { transform: scale(0.95); opacity: 0; }
            25%, 85% { transform: scale(1); opacity: 1; }
            95%, 100% { transform: scale(0.95); opacity: 0; }
          }
          .c-review { animation: cardReviewPop 5s cubic-bezier(0.4,0,0.2,1) infinite; opacity: 0; }
        `}</style>

        <div className="fs-bento" style={{ gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>

          {/* Step 1 */}
          <div className="fb">
            <div className="fb-vis" style={{ background: '#f0f9ff', height: '250px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '24px', width: '100%', alignSelf: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, background: '#fff', borderRadius: '14px', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px rgba(37,99,235,0.12)', border: '1px solid #dbeafe', color: '#2563eb' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#1e40af', fontWeight: 600, letterSpacing: '0.05em' }}>STEP 01</div>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px', width: '160px', height: '124px', textAlign: 'left', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div style={{ fontSize: '9.5px', color: '#9ca3af', fontFamily: 'var(--mono)', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
                    [hello@yourfirm.com]
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div className="c-anim-1" style={{ fontSize: '10.5px', color: '#374151', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#9ca3af', display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></span>W2_Kowalski.pdf
                    </div>
                    <div className="c-anim-2" style={{ fontSize: '10.5px', color: '#374151', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#9ca3af', display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></span>Bank_Stmt.pdf
                    </div>
                    <div className="c-anim-3" style={{ fontSize: '10.5px', color: '#374151', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#9ca3af', display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></span>1099_Mitchell.pdf
                    </div>
                    <div className="c-anim-4" style={{ fontSize: '10.5px', color: '#374151', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#9ca3af', display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></span>K1_Smith_23.pdf
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fb-content">
              <h3>Client sends documents</h3>
              <p>Via email, portal upload, or forwarded attachment — however your clients already send files today.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="fb">
            <div className="fb-vis" style={{ background: '#f0fdf4', height: '250px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '24px', width: '100%', alignSelf: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, background: '#fff', borderRadius: '14px', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px rgba(21,128,61,0.12)', border: '1px solid #dcfce7', color: '#16a34a' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#15803d', fontWeight: 600, letterSpacing: '0.05em' }}>STEP 02</div>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px', width: '160px', height: '124px', textAlign: 'left', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'rgba(21,128,61,0.6)', boxShadow: '0 0 12px rgba(21,128,61,0.8)', animation: 'cardScanLaser 5s ease-in-out infinite' }} />
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}><span style={{ fontSize: '10px', color: '#374151', fontWeight: 500 }}>W-2 Form</span><span className="c-score-1" style={{ fontSize: '11px', fontFamily: 'var(--mono)', fontWeight: 600 }}>96%</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}><span style={{ fontSize: '10px', color: '#374151', fontWeight: 500 }}>1099-NEC</span><span className="c-score-2" style={{ fontSize: '11px', fontFamily: 'var(--mono)', fontWeight: 600 }}>99%</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}><span style={{ fontSize: '10px', color: '#374151', fontWeight: 500 }}>Bank Stmt</span><span className="c-score-3" style={{ fontSize: '11px', fontFamily: 'var(--mono)', fontWeight: 600 }}>94%</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: '10px', color: '#374151', fontWeight: 500 }}>K-1 Form</span><span className="c-score-4" style={{ fontSize: '11px', fontFamily: 'var(--mono)', fontWeight: 600 }}>90%</span></div>
                  </div>
                  <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: '96%', height: '100%', background: '#22c55e', borderRadius: '99px' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="fb-content">
              <h3>AI reads and classifies</h3>
              <p>W-2, 1099, K-1, bank statement, payroll — identified and sorted. Confidence score assigned to each.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="fb">
            <div className="fb-vis" style={{ background: '#fefce8', height: '250px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '24px', width: '100%', alignSelf: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, background: '#fff', borderRadius: '14px', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px rgba(202,138,4,0.12)', border: '1px solid #fef08a', color: '#ca8a04' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#a16207', fontWeight: 600, letterSpacing: '0.05em' }}>STEP 03</div>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px', width: '160px', height: '124px', fontFamily: 'var(--mono)', fontSize: '10px', textAlign: 'left', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div className="c-anim-1"><span style={{ color: '#60a5fa' }}>"wages"</span>: <span style={{ color: '#10b981' }}>94200.00</span><span style={{ color: '#cbd5e1' }}>,</span></div>
                  <div className="c-anim-2"><span style={{ color: '#60a5fa' }}>"fed_tax"</span>: <span style={{ color: '#10b981' }}>14130.00</span><span style={{ color: '#cbd5e1' }}>,</span></div>
                  <div className="c-anim-3"><span style={{ color: '#60a5fa' }}>"state_tx"</span>: <span style={{ color: '#10b981' }}>4520.00</span><span style={{ color: '#cbd5e1' }}>,</span></div>
                  <div className="c-anim-4"><span style={{ color: '#60a5fa' }}>"employer"</span>: <span style={{ color: '#f59e0b' }}>"Meridian"</span></div>
                </div>
              </div>
            </div>
            <div className="fb-content">
              <h3>Data extracted and structured</h3>
              <p>Key figures pulled into your exact accounting system format. Nothing typed by hand.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="fb">
            <div className="fb-vis" style={{ background: '#faf5ff', height: '250px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '24px', width: '100%', alignSelf: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, background: '#fff', borderRadius: '14px', display: 'grid', placeItems: 'center', boxShadow: '0 8px 24px rgba(147,51,234,0.12)', border: '1px solid #e9d5ff', color: '#9333ea' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#7e22ce', fontWeight: 600, letterSpacing: '0.05em' }}>STEP 04</div>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px', width: '160px', height: '124px', textAlign: 'left', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#374151', display: 'flex', justifyContent: 'space-between' }}>
                    Review Queue <span>(1)</span>
                  </div>
                  <div className="c-review" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px', background: '#fff7ed', borderRadius: '8px', border: '1px solid #fed7aa', boxShadow: '0 4px 12px rgba(249,115,22,0.1)' }}>
                    <span style={{ color: '#c2410c', display: 'flex' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#c2410c', fontWeight: 500 }}>1099-B — 67% conf.</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ fontSize: '9.5px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#22c55e', display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span> Extracted (14 docs)
                    </div>
                    <div style={{ fontSize: '9.5px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#22c55e', display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span> Synced to QBO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fb-content">
              <h3>You review, not re-do</h3>
              <p>Low-confidence extractions flagged for human review. Everything else lands in the right folder.</p>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '12px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--ink-3)', letterSpacing: '0.03em' }}>
          Average time from document received to data ready: <strong style={{ color: 'var(--cobalt)' }}>4 minutes.</strong>
        </div>

      </div>
    </section>
  )
}
