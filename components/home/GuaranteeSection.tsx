import EmailCTA from "./EmailCTA";

export default function GuaranteeSection() {
  return (
    <section id="guarantee" style={{ background: 'var(--night)', color: '#fff', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '36px', alignItems: 'start' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'rgba(78,140,255,0.15)',
              border: '1px solid rgba(78,140,255,0.3)',
              borderRadius: '16px',
              display: 'grid',
              placeItems: 'center',
              fontSize: '28px',
              flexShrink: 0,
            }}
          >
            🛡
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                color: 'var(--cobalt-glow)',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                marginBottom: '16px',
              }}
            >
              THE 14-DAY LIVE GUARANTEE
            </div>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(18px,2.2vw,26px)',
                color: '#fff',
                lineHeight: 1.5,
                marginBottom: '16px',
              }}
            >
              "We process your first 20 real client documents — correctly classified, correctly
              extracted, correctly filed — within 14 business days. If we do not hit that bar, you get
              every dollar back and keep everything we built. You decide if it worked."
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>
              The system is yours either way. The only risk is 14 days watching it work.
            </p>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '4px',
                }}
              >
                What the guarantee requires from you
              </div>
              {[
                'You attended the discovery call and provided sample documents for system training.',
                'You provided server access or a hosting environment within the first five business days.',
                'The refund request is made within 30 days of pilot completion.',
              ].map((text, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}
                >
                  <span style={{ color: 'rgba(78,140,255,0.8)', marginTop: '1px', flexShrink: 0 }}>
                    0{i + 1}
                  </span>
                  {text}
                </div>
              ))}
              <div style={{ marginTop: '6px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                These aren't hoops — they're the three things without which the system literally
                cannot be built. If you've done all three and it still doesn't work, the $250 comes
                back to you and you keep everything.
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailCTA />
    </section>
  )
}
