import type { Metadata } from "next"
import Link from "next/link"
import { PROCESS_STEPS, PHONES, TRUST_SIGNALS } from "@/lib/constants"

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
    q: "How do you match caregivers to clients?",
    a: "We take matching seriously — pairing clients with caregivers based on skills, personality, and compatibility. If the fit is not right for any reason, let us know and we will work with you to make a change. Your loved one's comfort and trust in their caregiver matters.",
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

      {/* Trust signals */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Our Standards</span>
            <h2 className="h-lg mt-2">What You Can Count On</h2>
          </div>
          <div className="grid-2" style={{ gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {TRUST_SIGNALS.map(signal => (
              <div key={signal} className="flex items-center gap-3">
                <span className="material-symbols-outlined flex-shrink-0" style={{ color: "var(--teal-brand)", fontSize: 20 }}>check_circle</span>
                <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-deep">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Ready to Get Started?</span>
              <h2 className="text-white font-extrabold mt-2 mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                The first conversation is free — and there&apos;s no obligation.
              </h2>
              <p className="mb-6" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
                Call us, fill out the form, or request a consultation online. We&apos;ll reach out
                promptly and walk you through everything at your pace.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/schedule-consultation" className="btn-coral">Request Free Consultation</Link>
                <a href={PHONES.primaryHref} className="btn-outline-white">{PHONES.primary}</a>
              </div>
            </div>
            <div className="bg-white" style={{ borderRadius: 16, padding: 32 }}>
              <h3 className="h-sm text-teal-brand mb-5">Office Hours</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Weekdays</p>
                  <p className="font-bold" style={{ color: "var(--ink)" }}>Monday – Friday, 8:00 AM – 4:00 PM</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>After Hours</p>
                  <p style={{ color: "var(--body)", lineHeight: 1.6 }}>On-call staff available for urgent needs outside business hours.</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Honea Path Office</p>
                  <a href="tel:8643690222" className="font-bold" style={{ color: "var(--teal-brand)" }}>(864) 369-0222</a>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Williamston Office</p>
                  <a href="tel:8648412500" className="font-bold" style={{ color: "var(--teal-brand)" }}>(864) 841-2500</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
