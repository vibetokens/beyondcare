import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why Choose Beyond Care | Beyond Care Home Care Services",
  description:
    "Locally owned, nurse-led, and genuinely committed to quality — here's what makes Beyond Care different from other home care options in South Carolina.",
}

const REASONS = [
  {
    title: "Nurse-Led Ownership",
    body: "Our owner is a Registered Nurse who is actively involved in client care — not a remote executive managing from a distance. When you call us, you reach a team that knows your loved one personally. Clinical oversight is not an add-on at Beyond Care — it is foundational.",
  },
  {
    title: "Caregivers You Can Trust",
    body: "Every Beyond Care caregiver is a direct employee — bonded, insured, CPR certified, and covered by workers' compensation. They go through selective screening, orientation, and ongoing in-service training. We do not use contractors.",
  },
  {
    title: "Flexible Scheduling",
    body: "We serve families who need a few hours a week and families who need 24-hour support. Care is scheduled around your loved one's life — not the other way around. Flexible scheduling means care that actually works.",
  },
  {
    title: "A Plan Built Around Your Family",
    body: "Every care relationship starts with a consultation and an individualized plan. We do not apply a one-size-fits-all approach. Your loved one's specific needs, routines, and preferences shape everything we do.",
  },
  {
    title: "Locally Owned and Community-Rooted",
    body: "We are not a franchise. We are not a corporate chain. We are a locally owned home care company personally invested in this community. Our team lives here, works here, and cares deeply about the families we serve.",
  },
  {
    title: "Responsive and Present",
    body: "Home care needs can change quickly. We maintain regular communication with families, monitor care quality, and respond when things shift. We do not disappear after placement.",
  },
]

export default function WhyChoosePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Why Beyond Care</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Not Just Any Home Care Company
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              There are a lot of home care options in South Carolina. Here is what makes Beyond Care different —
              and why families across the Upstate choose us.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-3" style={{ gap: 24 }}>
            {REASONS.map(r => (
              <div key={r.title} className="card">
                <h3 className="h-sm text-teal-brand mb-3">{r.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.75 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <div style={{ color: "var(--teal-brand)", fontSize: "1.375rem", letterSpacing: ".1em", marginBottom: 20 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote className="testi-quote">
              &ldquo;I am very pleased with my services. My caregiver is amazing, and goes above
              and beyond what she is required to do.&rdquo;
            </blockquote>
            <cite className="text-muted" style={{ fontStyle: "normal", fontSize: ".875rem", marginTop: 16, display: "block" }}>
              — Betty F., Beyond Care Client, Honea Path, SC
            </cite>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section bg-teal-pale">
        <div className="wrap text-center">
          <h2 className="h-lg mb-4">See the Difference for Yourself</h2>
          <p className="body-lg text-muted mb-6">Request a free, no-obligation consultation today.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
            <Link href="/caregiver-standards" className="btn-outline">Our Caregiver Standards</Link>
          </div>
        </div>
      </section>
    </>
  )
}
