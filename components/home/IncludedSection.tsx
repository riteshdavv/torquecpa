export default function IncludedSection() {
  return (
    <section className="section" id="included">
      <div className="container">
        <div className="sec-head" data-reveal>
          <div className="sec-eyebrow">— EVERYTHING INCLUDED — FREE WITH THE PILOT</div>
          <h2>Six things you keep.</h2>
          <p style={{ color: 'rgba(107, 107, 115, 0.7)' }}>Whether you continue or not.</p>
        </div>

        <div className="included-grid">

          {/* Card 1: Zero-Error Verification Gate */}
          <div className="inc-card" data-reveal>
            <div className="inc-card-vis vis-gate" data-reveal>
              <div className="sui-stage" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="sui-win win">
                  <div className="sui-bar">
                    <span className="d r"></span><span className="d y"></span><span className="d g"></span>
                    <span className="t">extraction.json</span>
                  </div>
                  <div className="code">
                    <div className="ln"><span className="num">1</span><span><span className="k">"wages"</span><span className="p">:</span> <span className="n">94200.00</span><span className="p">,</span></span></div>
                    <div className="ln"><span className="num">2</span><span><span className="k">"fed_tax"</span><span className="p">:</span> <span className="n">14130.00</span><span className="p">,</span></span></div>
                    <div className="ln"><span className="num">3</span><span><span className="k">"ssn"</span><span className="p">:</span> <span className="s">"***-**-4821"</span><span className="p">,</span></span></div>
                    <div className="ln warn"><span className="num">4</span><span><span className="k">"ein"</span><span className="p">:</span> <span className="s">"47-382??04"</span><span className="p">,</span></span></div>
                    <div className="ln"><span className="num">5</span><span><span className="k">"conf"</span><span className="p">:</span> <span className="n">0.67</span></span></div>
                  </div>
                </div>
                <span className="pill">
                  <span className="pulse"></span>
                  Needs review
                </span>
                <div className="mag" aria-hidden="true">
                  <div className="lens"></div>
                  <div className="handle"></div>
                </div>
              </div>
            </div>
            <div className="inc-card-body" data-reveal>
              <div className="inc-card-head" data-reveal>
                <h4>The Zero-Error Verification Gate</h4>
                <span className="inc-badge">FREE</span>
              </div>
              <p>Confidence scoring on every extraction. Below threshold = flagged for human review before touching your files. Professional liability protected.</p>
            </div>
          </div>

          {/* Card 2: Client Vault Setup */}
          <div className="inc-card" data-reveal>
            <div className="inc-card-vis vis-vault" data-reveal>
              <div className="sui-stage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <div className="toggle" role="presentation">
                  <div className="thumb"></div>
                  <div className="opt">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M4 10a3 3 0 1 1 .5-5.96A4 4 0 0 1 12 6a2.5 2.5 0 0 1 0 4H4z" />
                    </svg>
                    Cloud
                  </div>
                  <div className="opt self">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <rect x="2" y="3" width="10" height="3" rx="1" />
                      <rect x="2" y="8" width="10" height="3" rx="1" />
                      <circle cx="4.5" cy="4.5" r="0.5" fill="currentColor" />
                      <circle cx="4.5" cy="9.5" r="0.5" fill="currentColor" />
                    </svg>
                    Self-hosted
                  </div>
                </div>
                <div className="server">
                  <div className="rack">
                    <span className="led"></span>
                    <div className="bar"></div>
                    <span className="led b"></span>
                  </div>
                  <div className="rack">
                    <span className="led o"></span>
                    <div className="bar"></div>
                    <span className="led"></span>
                  </div>
                  <div className="rack">
                    <span className="led"></span>
                    <div className="bar"></div>
                    <span className="led b"></span>
                  </div>
                  <span className="label">
                    <span className="dot"></span>
                    Your network
                  </span>
                </div>
              </div>
            </div>
            <div className="inc-card-body" data-reveal>
              <div className="inc-card-head" data-reveal>
                <h4>The Client Vault Setup</h4>
                <span className="inc-badge">FREE</span>
              </div>
              <p>Self-hosted n8n on your own server. No data ever leaves your environment. Normally a separate infrastructure project — included free.</p>
            </div>
          </div>

          {/* Card 3: Team Adoption Playbook */}
          <div className="inc-card" data-reveal>
            <div className="inc-card-vis vis-play" data-reveal>
              <div className="sui-stage" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="sui-win win">
                  <div className="sui-bar">
                    <span className="d r"></span><span className="d y"></span><span className="d g"></span>
                    <span className="t">SOP · Document Intake</span>
                  </div>
                  <div className="list">
                    <div className="row a">
                      <div className="box">
                        <svg viewBox="0 0 10 10" fill="none">
                          <polyline points="1.5 5 3.5 7.5 8.5 2" />
                        </svg>
                      </div>
                      <span>Email arrives at hello@yourfirm.com</span>
                    </div>
                    <div className="row b">
                      <div className="box">
                        <svg viewBox="0 0 10 10" fill="none">
                          <polyline points="1.5 5 3.5 7.5 8.5 2" />
                        </svg>
                      </div>
                      <span>AI classifies and extracts</span>
                    </div>
                    <div className="row c">
                      <div className="box">
                        <svg viewBox="0 0 10 10" fill="none">
                          <polyline points="1.5 5 3.5 7.5 8.5 2" />
                        </svg>
                      </div>
                      <span>Team reviews flagged items only</span>
                    </div>
                  </div>
                </div>
                <span className="pill">
                  <span className="ic">
                    <svg viewBox="0 0 10 10">
                      <polyline points="1.5 5 3.5 7.5 8.5 2" />
                    </svg>
                  </span>
                  Trained
                </span>
              </div>
            </div>
            <div className="inc-card-body" data-reveal>
              <div className="inc-card-head" data-reveal>
                <h4>The Team Adoption Playbook</h4>
                <span className="inc-badge">FREE</span>
              </div>
              <p>Live 60-minute walkthrough with your full team plus SOPs written for your specific workflow. Not generic documentation — yours.</p>
            </div>
          </div>

          {/* Card 4: Tax Season Shield */}
          <div className="inc-card" data-reveal>
            <div className="inc-card-vis vis-shield" data-reveal>
              <div className="sui-stage" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="sui-win win">
                  <div className="sui-bar">
                    <span className="d r"></span><span className="d y"></span><span className="d g"></span>
                    <span className="t">Tax Season · 2026</span>
                  </div>
                  <div className="cal">
                    <div className="m">OCT</div>
                    <div className="m">NOV</div>
                    <div className="m">DEC</div>
                    <div className="m on a">JAN</div>
                    <div className="m on b">FEB</div>
                    <div className="m on c">MAR</div>
                    <div className="m on d">APR</div>
                    <div className="m">MAY</div>
                  </div>
                  <div className="foot">
                    <span>Priority window</span>
                    <span className="sla">≤ 4 hr SLA</span>
                  </div>
                </div>
                <span className="chip">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 1l5 2v4c0 3-2 5.5-5 6.5C4 12.5 2 10 2 7V3l5-2z" />
                    <polyline points="5 7 6.5 8.5 9.5 5.5" />
                  </svg>
                  Shielded
                </span>
              </div>
            </div>
            <div className="inc-card-body" data-reveal>
              <div className="inc-card-head" data-reveal>
                <h4>The Tax Season Shield</h4>
                <span className="inc-badge">FREE</span>
              </div>
              <p>4-hour priority support January through April. The one window you cannot afford downtime, you get our fastest response automatically every year.</p>
            </div>
          </div>

          {/* Card 5: Client Confidence Script */}
          <div className="inc-card" data-reveal>
            <div className="inc-card-vis vis-script" data-reveal>
              <div className="sui-stage" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="sui-win win">
                  <div className="sui-bar">
                    <span className="d r"></span><span className="d y"></span><span className="d g"></span>
                    <span className="t">To: hello@yourfirm.com</span>
                  </div>
                  <div className="head">
                    <div className="row"><span className="lbl">To</span><span className="val">hello@yourfirm.com</span></div>
                    <div className="row"><span className="lbl">Re</span><span className="val">Our document security</span></div>
                  </div>
                  <div className="body">
                    Hi [Client] — your files are processed entirely on our own server.{' '}
                    <span className="hl">No third-party systems ever handle your data</span>
                    <span className="cursor"></span>
                  </div>
                </div>
                <span className="toast">
                  <span className="ic">
                    <svg viewBox="0 0 10 10">
                      <polyline points="1.5 5 3.5 7.5 8.5 2" />
                    </svg>
                  </span>
                  Copied to clipboard
                </span>
              </div>
            </div>
            <div className="inc-card-body" data-reveal>
              <div className="inc-card-head" data-reveal>
                <h4>The Client Confidence Script</h4>
                <span className="inc-badge">FREE</span>
              </div>
              <p>Word-for-word email template for clients asking about document security. Removes the awkward conversation permanently.</p>
            </div>
          </div>

          {/* Card 6: Monthly Intelligence Updates */}
          <div className="inc-card" data-reveal>
            <div className="inc-card-vis vis-updates" data-reveal>
              <div className="sui-stage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
                <span className="month">
                  <span className="dot"></span>
                  SHIPPED THIS MONTH
                </span>
                <div className="dock" role="presentation">
                  <div className="tile t1">W-2</div>
                  <div className="tile t2">K-1</div>
                  <div className="tile t3">1099</div>
                  <div className="tile t4">BANK</div>
                  <div className="tile t5">
                    1099-B
                    <span className="badge">NEW</span>
                  </div>
                </div>
                <span className="tip">v3.14</span>
              </div>
            </div>
            <div className="inc-card-body" data-reveal>
              <div className="inc-card-head" data-reveal>
                <h4>Monthly Intelligence Updates</h4>
                <span className="inc-badge">FREE</span>
              </div>
              <p>New document types added to your model every month. System gets smarter every cycle without you lifting a finger.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
