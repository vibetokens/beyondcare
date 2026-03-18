import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
        {/* Hero */}
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">About Us</span>
            <h1>Locally Owned. Nurse-Led. Built for South Carolina Families.</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Beyond Care Home Care Services was built on a simple premise: families in South Carolina deserve
              a home care provider they can genuinely trust — one that combines clinical knowledge, personal
              accountability, and real community roots.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
              <div>
                <span className="eyebrow">Our Story</span>
                <h2>Why Beyond Care Exists</h2>
                <p style={{ marginTop: 16, marginBottom: 16 }}>
                  Beyond Care was founded on the belief that non-medical home care in South Carolina could be
                  done better — with higher standards for caregivers, more personalized attention for clients,
                  and a level of professional oversight that families could actually count on.
                </p>
                <p style={{ marginBottom: 16 }}>
                  Our owner, a Registered Nurse with direct experience in patient care, saw families struggling
                  to find home care that was dependable, well-managed, and genuinely compassionate. The solution
                  was to build it herself.
                </p>
                <p>
                  Today, Beyond Care operates from two offices — Honea Path and Williamston — and serves families
                  across the Upstate region. Every client we support receives an individualized care plan developed
                  with the same care and precision that a clinical professional brings to any health-related matter.
                </p>
                <p style={{ marginTop: 16, fontStyle: "italic", fontFamily: "var(--f-heading)", fontSize: "1.0625rem", color: "var(--teal)" }}>
                  This is what it means to go beyond.
                </p>
              </div>
              <div style={{ background: "var(--teal-light)", borderRadius: 20, padding: 40, border: "1px solid rgba(28,122,138,.15)" }}>
                <h3 style={{ color: "var(--teal-dark)", marginBottom: 24 }}>The Beyond Care Standard</h3>
                {[
                  { h: "Nurse-Led Oversight", b: "Our owner's clinical background shapes how we approach care planning, caregiver oversight, and quality monitoring." },
                  { h: "Employee Caregivers", b: "Every caregiver is a direct employee — bonded, insured, CPR certified, and covered by workers' compensation." },
                  { h: "Individualized Planning", b: "No one-size-fits-all approach. Every care plan is built around the specific needs, routines, and preferences of each client." },
                ].map(i => (
                  <div key={i.h} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(28,122,138,.15)" }}>
                    <h4 style={{ color: "var(--teal)", marginBottom: 6 }}>{i.h}</h4>
                    <p style={{ fontSize: ".9375rem" }}>{i.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section section-alt">
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
              <span className="eyebrow">Mission &amp; Vision</span>
              <h2>What We Stand For</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 840, margin: "0 auto 48px" }}>
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 32, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>🎯</div>
                <h3 style={{ color: "var(--teal)", marginBottom: 12 }}>Our Mission</h3>
                <p>
                  To provide compassionate, quality, individualized care to our community — improving quality of life
                  and promoting personal independence for every client we serve.
                </p>
              </div>
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 32, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>🌟</div>
                <h3 style={{ color: "var(--teal)", marginBottom: 12 }}>Our Vision</h3>
                <p>To set a new standard for home care services in South Carolina.</p>
              </div>
            </div>

            <div style={{ maxWidth: 840, margin: "0 auto" }}>
              <h3 style={{ textAlign: "center", marginBottom: 32 }}>Our Values</h3>
              <div className="why-grid">
                {VALUES.map(v => (
                  <div key={v.title} className="why-card">
                    <h4>{v.title}</h4>
                    <p>{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="wrap">
            <h2>Ready to Learn More?</h2>
            <p>Call us or request a free consultation. We are here to answer your questions.</p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-w">Request a Free Consultation</a>
              <a href="/contact" className="btn" style={{ background: "transparent", border: "2px solid rgba(255,255,255,.4)", color: "#fff" }}>Contact Us</a>
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
