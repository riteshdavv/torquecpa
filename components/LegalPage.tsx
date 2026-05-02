interface LegalPageProps {
  eyebrow: string
  title: string
  titleEm?: string
  subtitle: string
  date: string
  children: React.ReactNode
}

export default function LegalPage({ eyebrow, title, titleEm, subtitle, date, children }: LegalPageProps) {
  return (
    <>
      <header className="legal-hero">
        <div className="container">
          <div className="legal-eyebrow">{eyebrow}</div>
          <h1>
            {title}
            {titleEm && <> <em>{titleEm}</em></>}
          </h1>
          <p className="legal-sub">{subtitle}</p>
          <span className="legal-meta">
            <span className="dot" />
            Last updated · {date}
          </span>
        </div>
      </header>

      <main className="legal-body">
        <div className="legal-wrap">
          {children}
        </div>
      </main>
    </>
  )
}
