import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Caregiver Standards | Beyond Care Home Care Services",
  description:
    "Every Beyond Care caregiver is a direct employee — bonded, insured, CPR certified, and held to consistent standards of care. Learn what it takes to become a Beyond Care caregiver.",
}

const STANDARDS = [
  "Direct employees of Beyond Care — not contractors or agency referrals",
  "Fully bonded and insured",
  "Covered by workers' compensation",
  "CPR certified through required training",
  "Complete continuing education and in-service training",
  "Regular skills assessments and performance evaluations",
  "Screened through a selective hiring process",
  "Background-checked before placement",
  "Oriented to Beyond Care's care protocols and standards",
]

const COMPARISON = [
  { label: "Employer Relationship", bc: "Direct employee of Beyond Care", other: "Contractor / Agency referral" },
  { label: "Insurance Coverage",    bc: "Covered by Beyond Care policy",  other: "May be client's responsibility" },
  { label: "Workers' Comp",         bc: "Provided by Beyond Care",        other: "Often not applicable" },
  { label: "Training & Oversight",  bc: "Managed by Beyond Care",         other: "Variable or limited" },
  { label: "Performance Monitoring",bc: "Regular evaluation",             other: "Often absent" },
]

export default function CaregiverStandardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Caregiver Standards</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Who Is Coming Into Your Home?
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              It is a fair question — and we have a clear, direct answer. Every Beyond Care caregiver is a
              vetted, trained, bonded direct employee. We take caregiver standards seriously because the quality
              of care depends on the quality of the people delivering it.
            </p>
          </div>
        </div>
      </section>

      {/* Standards + Comparison */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 64, alignItems: "start" }}>

            {/* Standards list */}
            <div>
              <span className="eyebrow">Our Standards</span>
              <h2 className="h-lg mt-2 mb-4">What Every Beyond Care Caregiver Meets</h2>
              <p className="body-lg text-muted mb-6">
                Before a caregiver ever steps inside a client&apos;s home, they must meet every standard below.
                These are not aspirations — they are requirements.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {STANDARDS.map(s => (
                  <li key={s} className="check-item">
                    <span className="check-dot" />
                    <span className="text-ink">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison table */}
            <div>
              <span className="eyebrow">The Difference</span>
              <h2 className="h-lg mt-2 mb-4">Employees vs. Contractors</h2>
              <p className="body-lg text-muted mb-6">
                Many home care companies use contractors or agency referrals — people they have less direct
                oversight and accountability over. Beyond Care does not operate that way.
              </p>
              <div style={{ border: "1px solid var(--rule)", borderRadius: 10, overflow: "hidden" }}>
                {/* Header */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--teal-deep)", padding: "10px 16px", gap: 12 }}>
                  <div style={{ fontSize: ".75rem", fontWeight: 700, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".06em" }}>Category</div>
                  <div style={{ fontSize: ".75rem", fontWeight: 700, color: "var(--teal-light)", textTransform: "uppercase", letterSpacing: ".06em" }}>Beyond Care</div>
                  <div style={{ fontSize: ".75rem", fontWeight: 700, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".06em" }}>Others</div>
                </div>
                {COMPARISON.map((row, idx) => (
                  <div key={row.label} style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12,
                    alignItems: "center", padding: "14px 16px",
                    background: idx % 2 === 0 ? "var(--canvas)" : "#fff",
                  }}>
                    <div style={{ fontSize: ".8125rem", fontWeight: 700, color: "var(--ink)" }}>{row.label}</div>
                    <div className="text-teal-brand" style={{ fontSize: ".875rem", fontWeight: 600 }}>&#10003; {row.bc}</div>
                    <div className="text-muted" style={{ fontSize: ".875rem" }}>&#10007; {row.other}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Why It Matters</span>
            <h2 className="h-lg mt-2 mb-4">The Standard Protects Everyone</h2>
            <p className="body-lg text-muted mb-6">
              When caregivers are employees — not contractors — we are accountable for what happens in your
              home. Our bonding, insurance, and workers&apos; compensation coverage means you are protected.
              Our training and evaluation process means care quality stays consistent over time.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
              <Link href="/how-care-works" className="btn-outline">How Care Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
