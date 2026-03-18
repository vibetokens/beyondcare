import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "About Beyond Care Home Care Services | Nurse-Led Home Care in South Carolina",
  description:
    "Beyond Care Home Care Services is a locally owned, nurse-led non-medical home care company serving Upstate South Carolina. Learn about our mission, values, and commitment to quality.",
}

const VALUES = [
  { title: "Honesty", body: "We communicate clearly with clients, families, and our own team. You will always know where you stand with us." },
  { title: "Accountability", body: "We follow through on what we say. Our caregivers are monitored, evaluated, and held to consistent standards." },
  { title: "Respect", body: "Every client deserves to be treated with dignity. Every family deserves to be heard." },
  { title: "Commitment", body: "We show up. We follow through. We are in this with you for the long term." },
  { title: "Compassion", body: "Care without warmth is just a transaction. We bring genuine care to every visit, every day." },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow eyebrow-light">About Us</span>
            <h1>Locally Owned. Nurse-Led.<br />Built for SC Families.</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Beyond Care was built on a simple premise: families in South Carolina deserve a home care
              provider they can genuinely trust — one that combines clinical knowledge, personal accountability,
              and real community roots.
            </p>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
              <div>
                <span className="eyebrow">Our Story</span>
                <h2 className="serif">Why Beyond Care Exists</h2>
                <p style={{ marginTop: 14, marginBottom: 14, color: "var(--t2)", lineHeight: 1.8 }}>
                  Beyond Care was founded on the belief that non-medical home care in South Carolina
                  could be done better — with higher standards for caregivers, more personalized attention
                  for clients, and a level of professional oversight that families could actually count on.
                </p>
                <p style={{ marginBottom: 14, color: "var(--t2)", lineHeight: 1.8 }}>
                  Our owner, a Registered Nurse with direct experience in patient care, saw families
                  struggling to find home care that was dependable, well-managed, and genuinely compassionate.
                  The solution was to build it herself.
                </p>
                <p style={{ marginBottom: 20, color: "var(--t2)", lineHeight: 1.8 }}>
                  Today, Beyond Care operates from two offices — Honea Path and Williamston — and serves
                  families across the Upstate region.
                </p>
                <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "1.0625rem", color: "var(--teal-mid)" }}>
                  This is what it means to go beyond.
                </p>
              </div>
              <div style={{ background: "var(--teal-deep)", borderRadius: 12, padding: 40 }}>
                <h3 style={{ fontFamily: "var(--f-serif)", color: "#fff", marginBottom: 28, fontSize: "1.25rem" }}>The Beyond Care Standard</h3>
                {[
                  { h: "Nurse-Led Oversight", b: "Clinical background shapes how we approach care planning, caregiver oversight, and quality monitoring." },
                  { h: "Employee Caregivers", b: "Every caregiver is a direct employee — bonded, insured, CPR certified, and covered by workers' compensation." },
                  { h: "Individualized Planning", b: "No one-size-fits-all. Every plan is built around each client's specific needs, routines, and preferences." },
                ].map(i => (
                  <div key={i.h} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                    <h4 style={{ color: "#5ECCE0", marginBottom: 6, fontSize: ".875rem", fontWeight: 700, letterSpacing: ".04em" }}>{i.h}</h4>
                    <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".9rem", lineHeight: 1.65, margin: 0 }}>{i.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: 48 }}>
              <span className="eyebrow">What We Stand For</span>
              <h2 className="serif">Mission, Vision &amp; Values</h2>
            </div>
            <div className="grid-2" style={{ maxWidth: 800, margin: "0 auto 48px", gap: 24 }}>
              <div className="card" style={{ textAlign: "center" }}>
                <h3 className="serif" style={{ color: "var(--teal-mid)", marginBottom: 10 }}>Our Mission</h3>
                <p>To provide compassionate, quality, individualized care to our community — improving quality of life and promoting personal independence for every client we serve.</p>
              </div>
              <div className="card" style={{ textAlign: "center" }}>
                <h3 className="serif" style={{ color: "var(--teal-mid)", marginBottom: 10 }}>Our Vision</h3>
                <p>To set a new standard for home care services in South Carolina.</p>
              </div>
            </div>
            <div className="why-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
              {VALUES.map(v => (
                <div key={v.title} className="why-card">
                  <h4>{v.title}</h4>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrap">
            <h2>Ready to learn more?</h2>
            <p>Call us or request a free consultation — no pressure, no obligation.</p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-ow">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <a href="tel:8648412500">(864) 841-2500</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
