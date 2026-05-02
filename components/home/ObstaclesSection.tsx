'use client'

const obstacles = [
  {
    concern: '"AI will misread numbers — my licence is on the line"',
    resolvedBy: 'The Zero-Error Verification Gate',
    description:
      'Confidence score on every extraction. Below threshold = flagged for human review before it touches your files. Nothing auto-files. Ever.',
    last: false,
  },
  {
    concern: '"Client data is confidential — I can\'t use a third-party system"',
    resolvedBy: 'The Client Vault Setup',
    description:
      'n8n runs self-hosted on your own server. No data ever leaves your environment. Zero third-party access. Verifiable.',
    last: false,
  },
  {
    concern: '"This will take months to set up"',
    resolvedBy: 'The 14-Day Live Guarantee',
    description:
      'First document processes within 14 business days or we keep building for free until it does.',
    last: false,
  },
  {
    concern: '"My team won\'t adopt a new system"',
    resolvedBy: 'The Team Adoption Playbook',
    description:
      'Live 60-minute walkthrough with your full team. SOPs written for your specific workflow. Not generic documentation.',
    last: false,
  },
  {
    concern: '"What if it breaks during March when I need it most?"',
    resolvedBy: 'The Tax Season Shield',
    description:
      '4-hour priority support response January through April. You are never left waiting during crunch.',
    last: true,
  },
]

export default function ObstaclesSection() {
  return (
    <section className="section" id="obstacles" style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="sec-head" data-reveal>
          <div className="sec-eyebrow">— EVERY OBJECTION, ALREADY SOLVED</div>
          <h2>What you're thinking right now.</h2>
        </div>

        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {obstacles.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 32px 1fr',
                gap: '16px',
                alignItems: 'start',
                padding: '28px 0',
                borderBottom: item.last ? 'none' : '1px solid var(--rule)',
                transition: 'background .15s',
              }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = '#fafafa' }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px' }}>
                  CONCERN
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '19px', color: 'var(--ink)', lineHeight: 1.35 }}>
                  {item.concern}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '28px', fontSize: '16px', color: 'var(--cobalt)' }}>
                →
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--cobalt)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px' }}>
                  RESOLVED BY
                </div>
                <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--ink)', marginBottom: '4px' }}>
                  {item.resolvedBy}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.55 }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
