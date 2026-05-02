'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What happens to my client data?',
    a: "Nothing leaves your environment. n8n runs on your own server — your private cloud or a server you control. We build the system, hand it to you, and have zero access to your data after deployment. This is an architectural decision, not a policy.",
  },
  {
    q: 'What if the AI misreads a document?',
    a: "Every extraction carries a confidence score. Anything below 85% is automatically routed to a human review queue before it touches your files. Your staff sees the document, the suggested extraction, and the reason for uncertainty. One click to approve or correct. Nothing auto-files without passing the confidence threshold.",
  },
  {
    q: 'What does the $250 actually include?',
    a: "The full system built on your actual document types. All six bonuses. The 14-day guarantee. And you keep everything we build whether you continue with us after the pilot or not. The $250 is not a deposit toward a larger fee — it is the complete cost of the pilot.",
  },
  {
    q: 'How long does setup actually take?',
    a: "14 business days from discovery call to first live document. Days 1–2: discovery and document audit. Days 3–8: system build and classification model training. Days 9–11: testing against your actual documents. Days 12–13: team walkthrough and SOP documentation. Day 14: live.",
  },
  {
    q: "What if it doesn't work for our specific setup?",
    a: (
      <>
        You email us, we refund every dollar, you keep everything we built. The guarantee has three conditions — not to make the refund hard to get, but because without them the system cannot actually be built: you need to have attended the discovery call, provided sample documents, and given us server access within the first five business days. These are prerequisites for delivery, not arbitrary hoops. If all three are met and the system still doesn't process your documents correctly within 14 business days, the $250 comes back within 5 business days. No dispute process. No back and forth.{' '}
        <a href="/refund" style={{ color: 'var(--cobalt-2)' }}>Full refund terms here.</a>
      </>
    ),
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="sec-head" data-reveal>
          <div className="sec-eyebrow">— FAQ</div>
          <h2>Questions &amp; answers.</h2>
        </div>
        <div className="faq-wrap">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? ' open' : ''}`}
            >
              <button className="faq-q" onClick={() => toggle(i)}>
                {item.q} <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
