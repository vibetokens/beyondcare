import type { Metadata } from "next"
import Link from "next/link"
import { PROCESS_STEPS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "How Home Care Works | Beyond Care Home Care Services",
  description:
    "Getting started with home care at Beyond Care is simple and personal. From consultation to care plan to caregiver match — here's how the process works.",
}

const FAQ = [
  {
    q: "How quickly can care begin?",
    a: "In many situations we can move from consultation to care start relatively quickly. Contact us to discuss your specific timeline and we will do everything we can to meet your needs.",
  },
  {
    q: "What if our needs change?",
    a: "Care plans are designed to evolve. We actively monitor your loved one's situation and adjust the plan as needs change — whether that means adding services, reducing hours, or shifting the schedule.",
  },
  {
    q: "Can we meet the caregiver before care starts?",
    a: "Yes. We encourage families to meet their matched caregiver before care begins to ensure everyone is comfortable and that the fit feels right.",
  },
  {
    q: "What if we are not happy with a caregiver?",
    a: "We take compatibility seriously. If a match is not working for any reason, we will work with you to find a better fit. Your satisfaction and your loved one's comfort are the priority.",
  },
  {
    q: "Do you provide care on weekends or holidays?",
    a: "Yes. We offer flexible scheduling that includes weekends, evenings, and holiday coverage depending on your care plan.",
  },
  {
    q: "Do we have to commit to a long-term contract?",
    a: "We work with families on flexible terms. Contact us to discuss the structure that makes the most sense for your situation.",
  },
]

export default function HowCareWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>How Care Works</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Simple, Clear, and Personal
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Getting started with home care should not be complicated. We walk every family through a clear,
              personal process — from first call to ongoing care.
            </p>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">The Process</span>
            <h2 className="h-lg mt-2">Five Steps to Great Care</h2>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
            {PROCESS_STEPS.map((s, idx) => (
              <div key={s.n} style={{
                display: "flex", gap: 28, alignItems: "flex-start",
                paddingBottom: idx < PROCESS_STEPS.length - 1 ? 32 : 0,
                borderBottom: idx < PROCESS_STEPS.length - 1 ? "1px solid var(--rule)" : "none",
              }}>
                <div style={{
                  flexShrink: 0, width: 60, height: 60,
                  borderRadius: "50%", background: "var(--teal-deep)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: "1rem", letterSpacing: ".02em",
                }}>
                  {s.n}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <h3 className="h-sm text-ink mb-2">{s.title}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.75 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="text-center mb-10">
              <span className="eyebrow">What to Expect</span>
              <h2 className="h-lg mt-2">Questions Families Often Ask</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {FAQ.map(({ q, a }, idx) => (
                <div key={q} style={{
                  padding: "24px 0",
                  borderBottom: idx < FAQ.length - 1 ? "1px solid var(--rule)" : "none",
                }}>
                  <h3 className="h-sm text-teal-brand mb-2">{q}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.75 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section bg-teal-pale">
        <div className="wrap text-center">
          <h2 className="h-lg mb-4">Ready to Get Started?</h2>
          <p className="body-lg text-muted mb-6">Request a free consultation — no obligation, no pressure.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
            <a href="tel:8648412500" className="btn-outline">(864) 841-2500</a>
          </div>
        </div>
      </section>
    </>
  )
}
