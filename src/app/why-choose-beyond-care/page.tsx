import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Why Choose Beyond Care | Beyond Care Home Care Services",
  description:
    "Locally owned, nurse-led, and genuinely committed to quality — here's what makes Beyond Care different from other home care options in South Carolina.",
}

const REASONS = [
  {
    icon: "👩‍⚕️",
    title: "Nurse-Led Ownership",
    body: "Our owner is a Registered Nurse who is actively involved in client care — not a remote executive managing from a distance. When you call us, you reach a team that knows your loved one personally. Clinical oversight is not an add-on at Beyond Care — it is foundational.",
  },
  {
    icon: "👥",
    title: "Caregivers You Can Trust",
    body: "Every Beyond Care caregiver is a direct employee — bonded, insured, CPR certified, and covered by workers' compensation. They go through selective screening, orientation, and ongoing in-service training. We do not use contractors.",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    body: "We serve families who need a few hours a week and families who need 24-hour support. Care is scheduled around your loved one's life — not the other way around. Scheduling flexibility means care that actually works for real families.",
  },
  {
    icon: "📝",
    title: "A Plan Built Around Your Family",
    body: "Every care relationship starts with a consultation and an individualized plan. We do not apply a one-size-fits-all approach. Your loved one's specific needs, routines, and preferences shape everything we do.",
  },
  {
    icon: "🏠",
    title: "Locally Owned and Community-Rooted",
    body: "We are not a franchise. We are not a corporate chain. We are a locally owned home care company that is personally invested in this community. Our team lives here, works here, and cares deeply about the families we serve.",
  },
  {
    icon: "📞",
    title: "Responsive and Present",
    body: "Home care needs can change quickly. We maintain regular communication with families, monitor care quality, and respond when things shift. We do not disappear after placement.",
  },
]

export default function WhyChoosePage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Why Beyond Care</span>
            <h1>Not Just Any Home Care Company</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              There are a lot of home care options in South Carolina. Here is what makes Beyond Care different —
              and why families across the Upstate choose us.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-3" style={{ gap: 28 }}>
              {REASONS.map(r => (
                <div key={r.title} className="card">
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{r.icon}</div>
                  <h4 style={{ color: "var(--teal)", marginBottom: 12, fontSize: "1.0625rem" }}>{r.title}</h4>
                  <p style={{ fontSize: ".9375rem" }}>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <blockquote>
                &ldquo;I am very pleased with my services. My caregiver is amazing, and goes above
                and beyond what she is required to do.&rdquo;
              </blockquote>
              <cite>— Betty F., Beyond Care Client</cite>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrap">
            <h2>See the Difference for Yourself</h2>
            <p>Request a free, no-obligation consultation today.</p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-w">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <span>📞</span>
              <a href="tel:8648412500" style={{ color: "rgba(255,255,255,.9)" }}>(864) 841-2500</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
