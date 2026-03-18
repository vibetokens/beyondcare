import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Home Care Works | Beyond Care Home Care Services",
  description:
    "Getting started with home care at Beyond Care is simple and personal. From consultation to care plan to caregiver match — here's how the process works.",
}

const STEPS = [
  {
    n: "1",
    title: "Call or Request a Consultation",
    body: "Contact us by phone at (864) 841-2500 or fill out our online form. We will respond promptly — typically same business day. There is no obligation and no pressure.",
  },
  {
    n: "2",
    title: "We Assess Your Needs",
    body: "A member of our team will schedule a consultation — in person or by phone — to understand your loved one's situation, daily routines, specific needs, preferences, and goals. This is also your opportunity to ask questions.",
  },
  {
    n: "3",
    title: "We Build a Care Plan",
    body: "Based on the assessment, we create an individualized care plan that outlines the specific services, schedule, and goals for your loved one. Our nurse-led team reviews every plan to ensure it reflects a clinical standard of quality.",
  },
  {
    n: "4",
    title: "We Match Your Caregiver",
    body: "We take matching seriously. We consider not just skill and availability, but personality fit, communication style, and the specific dynamics of your loved one's situation.",
  },
  {
    n: "5",
    title: "Care Begins — and We Stay Involved",
    body: "Care starts on the agreed schedule. We follow up regularly with your family, monitor caregiver performance, and adjust the plan as your loved one's needs evolve. We do not disappear after placement.",
  },
]

export default function HowCareWorksPage() {
  return (
    <>
              <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">How Care Works</span>
            <h1>Simple, Clear, and Personal</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Getting started with home care should not be complicated. We walk every family through a clear,
              personal process — from first call to ongoing care.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap" style={{ maxWidth: 800 }}>
            <div className="steps">
              {STEPS.map(s => (
                <div key={s.n} className="step">
                  <div><span className="step-num">{s.n}</span></div>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", marginBottom: 8 }}>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow">What to Expect</span>
              <h2>Questions Families Often Ask</h2>
              <div style={{ marginTop: 40, textAlign: "left" }}>
                {[
                  { q: "How quickly can care begin?", a: "In many situations we can move from consultation to care start relatively quickly. Contact us to discuss your specific timeline." },
                  { q: "What if our needs change?", a: "Care plans are designed to evolve. We actively monitor and adjust as your loved one's needs change." },
                  { q: "Can we meet the caregiver before care starts?", a: "Yes. We encourage families to meet their matched caregiver before care begins to ensure everyone is comfortable." },
                  { q: "What if we are not happy with a caregiver?", a: "We take compatibility seriously. If a match is not working, we will work with you to find a better fit." },
                ].map(({ q, a }) => (
                  <div key={q} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--border)" }}>
                    <h4 style={{ marginBottom: 8, color: "var(--teal)" }}>{q}</h4>
                    <p>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrap">
            <h2>Ready to Get Started?</h2>
            <p>Request a free consultation — no obligation, no pressure.</p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-w">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <span>📞</span>
              <a href="tel:8648412500" style={{ color: "rgba(255,255,255,.9)" }}>(864) 841-2500</a>
            </div>
          </div>
        </section>

    </>
  )
}
