import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Caregiver Standards | Beyond Care Home Care Services",
  description:
    "Every Beyond Care caregiver is a direct employee — bonded, insured, CPR certified, and held to consistent standards of care. Learn what it takes to become a Beyond Care caregiver.",
}

export default function CaregiverStandardsPage() {
  return (
    <>
              <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Caregiver Standards</span>
            <h1>Who Is Coming Into Your Home?</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              It is a fair question — and we have a clear, direct answer. Every Beyond Care caregiver is a
              vetted, trained, bonded direct employee. We take caregiver standards seriously because the quality
              of care depends on the quality and accountability of the people delivering it.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 64 }}>
              <div>
                <span className="eyebrow">Our Standards</span>
                <h2>What Every Beyond Care Caregiver Meets</h2>
                <p style={{ marginTop: 12, marginBottom: 24 }}>
                  Before a caregiver ever steps inside a client&apos;s home, they must meet every standard below.
                  These are not aspirations — they are requirements.
                </p>
                <ul className="check-list">
                  <li>Direct employees of Beyond Care — not contractors or placement agency referrals</li>
                  <li>Fully bonded and insured</li>
                  <li>Covered by workers&apos; compensation</li>
                  <li>CPR certified through required training</li>
                  <li>Complete continuing education and in-service training</li>
                  <li>Regular skills assessments and performance evaluations</li>
                  <li>Screened through a selective hiring process</li>
                  <li>Background-checked before placement</li>
                  <li>Oriented to Beyond Care&apos;s standards and care protocols</li>
                </ul>
              </div>

              <div>
                <span className="eyebrow">The Difference</span>
                <h2>Employees vs. Contractors</h2>
                <p style={{ marginTop: 12, marginBottom: 24 }}>
                  Many home care companies use contractors or placement agency referrals — people they have
                  less direct oversight and accountability over. Beyond Care does not operate that way.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Employer Relationship", bc: "Direct employee of Beyond Care", other: "Contractor / Agency referral" },
                    { label: "Insurance Coverage", bc: "Covered by Beyond Care policy", other: "May be client's responsibility" },
                    { label: "Workers' Comp", bc: "Provided by Beyond Care", other: "Often not applicable" },
                    { label: "Training & Oversight", bc: "Managed by Beyond Care", other: "Variable or limited" },
                    { label: "Performance Monitoring", bc: "Regular evaluation", other: "Often absent" },
                  ].map(row => (
                    <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                      <div style={{ fontSize: ".8125rem", fontWeight: 700, color: "var(--t3)" }}>{row.label}</div>
                      <div style={{ fontSize: ".875rem", color: "var(--teal)", fontWeight: 600 }}>✓ {row.bc}</div>
                      <div style={{ fontSize: ".875rem", color: "var(--t3)" }}>✗ {row.other}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrap">
            <h2>Meet Our Team</h2>
            <p>Learn more about our approach and request a free consultation to get started.</p>
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
