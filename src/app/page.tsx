import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Home Care in South Carolina | Beyond Care Home Care Services",
  description:
    "Beyond Care Home Care Services provides compassionate, nurse-led non-medical home care in South Carolina. Personal care, companionship, respite, and more — available 24/7. Call today.",
}

const SERVICES = [
  { icon: "🤲", title: "Personal Care", desc: "Bathing, grooming, dressing, hygiene, and mobility support — handled with patience and respect.", href: "/services/personal-care" },
  { icon: "💬", title: "Companion Care", desc: "Meaningful conversation, daily engagement, and a consistent presence that reduces isolation.", href: "/services/companion-care" },
  { icon: "🌿", title: "Respite Care", desc: "Relief for family caregivers. We step in so you can step back and recharge.", href: "/services/respite-care" },
  { icon: "🍽️", title: "Meal Preparation", desc: "Nutritious, home-prepared meals that respect your loved one's preferences and dietary needs.", href: "/services/meal-preparation" },
  { icon: "🏠", title: "Light Housekeeping", desc: "Clean, safe, organized living spaces — because a tidy home is a safer home.", href: "/services/light-housekeeping" },
  { icon: "🚗", title: "Transportation", desc: "Rides to appointments, errands, and daily needs — so independence doesn't stop at the front door.", href: "/services/transportation-assistance" },
  { icon: "💊", title: "Medication Reminders", desc: "Consistent prompts to help clients stay on schedule with their medications.", href: "/services/medication-reminders" },
  { icon: "🏥", title: "Hospital Discharge", desc: "Skilled transition support from facility to home — reducing the risk of readmission.", href: "/services/hospital-discharge-support" },
]

const WHY = [
  { title: "Locally Owned and Nurse-Led", body: "Our owner is a Registered Nurse who is actively involved in client care — not a remote executive managing from a distance. When you call us, you reach a team that knows your loved one personally." },
  { title: "Caregivers You Can Trust", body: "Every Beyond Care caregiver is a direct employee — bonded, insured, CPR certified, and covered by workers' compensation. They go through selective screening, orientation, and ongoing in-service training." },
  { title: "Flexible Scheduling", body: "We serve families who need a few hours a week and families who need 24-hour support. Care is scheduled around your loved one's life — not the other way around." },
  { title: "A Plan Built Around Your Family", body: "Every care relationship starts with a consultation and an individualized plan. Your loved one's specific needs, routines, and preferences shape everything we do." },
]

const STEPS = [
  { n: "1", title: "Call or Request a Consultation", body: "Contact us by phone or form. We will respond promptly." },
  { n: "2", title: "We Assess Your Needs", body: "A member of our team will meet with you to understand your loved one's situation, preferences, and goals." },
  { n: "3", title: "We Build a Care Plan", body: "An individualized plan is created based on the assessment." },
  { n: "4", title: "We Match Your Caregiver", body: "We assign a caregiver who is the right fit for your loved one's needs and personality." },
  { n: "5", title: "Care Begins — and We Stay Involved", body: "We monitor quality, maintain communication with your family, and adjust the plan as needs change." },
]

const PAYMENTS = [
  "Private Pay", "Long-Term Care Insurance", "Community Long Term Care (CLTC)",
  "Medicaid Waiver", "VA Benefits", "Vouchers",
]

const TRUST = [
  "Nurse-Led Ownership", "Bonded and Insured", "Employee Caregivers — Not Contractors",
  "CPR Certified Staff", "Flexible Scheduling 24/7", "Two SC Office Locations",
]

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Beyond Care Home Care Services",
  "description": "Compassionate, nurse-led non-medical home care in South Carolina.",
  "url": "https://beyondcarehc.com",
  "telephone": "+18648412500",
  "email": "service@beyondcarehc.com",
  "address": [
    { "@type": "PostalAddress", "streetAddress": "512A East Greer St", "addressLocality": "Honea Path", "addressRegion": "SC", "postalCode": "29654" },
    { "@type": "PostalAddress", "streetAddress": "103 Belton Dr", "addressLocality": "Williamston", "addressRegion": "SC", "postalCode": "29697" },
  ],
  "areaServed": "Upstate South Carolina",
  "openingHours": "Mo-Fr 08:00-16:00",
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

        {/* ── Hero ──────────────────────────────────── */}
        <section id="hero">
          <div className="wrap">
            <div className="hero-inner">
              <div>
                <div className="hero-badge">
                  <span>❤️</span> Nurse-Led · Locally Owned · Upstate SC
                </div>
                <h1 className="hero-h1">
                  Dependable Home Care for South Carolina Families
                </h1>
                <p className="hero-sub">
                  Locally owned. Nurse-led. Here for your family when you need us most.
                  We serve families across the Upstate, providing dependable, compassionate
                  non-medical support so your loved one can remain where they want to be: at home.
                </p>
                <div className="hero-actions">
                  <a href="/schedule-consultation" className="btn btn-p">Request a Free Consultation</a>
                  <a href="tel:8648412500" className="btn btn-o">Call (864) 841-2500</a>
                </div>
                <div className="hero-trust">
                  {TRUST.map(t => (
                    <div key={t} className="hero-trust-item">
                      <span className="check">✓</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-card-header-dot" />
                  <div className="hero-card-header-dot" />
                  <div className="hero-card-header-dot" />
                  <span>Beyond Care — Quick Overview</span>
                </div>
                <div className="hero-card-body">
                  {[
                    { label: "Service Type", value: "Non-Medical Home Care" },
                    { label: "Ownership", value: "Locally Owned, Nurse-Led" },
                    { label: "Caregiver Type", value: "Direct Employees" },
                    { label: "Insurance", value: "Bonded & Insured" },
                    { label: "Availability", value: "Flexible, 24/7" },
                    { label: "Service Area", value: "5 SC Counties" },
                    { label: "Offices", value: "Honea Path & Williamston" },
                  ].map(r => (
                    <div key={r.label} className="hero-card-row">
                      <span className="hero-card-label">{r.label}</span>
                      <span className="hero-card-value">{r.value}</span>
                    </div>
                  ))}
                  <div className="hero-card-cta">
                    <a href="/schedule-consultation" className="btn btn-p" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                      Get Started Today →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ─────────────────────────────── */}
        <div id="trust-bar">
          <div className="wrap">
            <div className="trust-bar-inner">
              {TRUST.map(t => (
                <div key={t} className="trust-item">
                  <span className="trust-item-icon">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services ──────────────────────────────── */}
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Our Services</span>
            <h2>Support Where It Matters Most — At Home</h2>
            <p style={{ maxWidth: 640, marginTop: 12 }}>
              We provide a broad range of non-medical home care services, customized around each
              client's real daily needs. Whether your loved one needs a few hours of help each week
              or consistent daily support, we can build a care plan that fits.
            </p>
            <div className="services-grid">
              {SERVICES.map(s => (
                <div key={s.href} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <a href={s.href} className="service-link">Learn More →</a>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/services" className="btn btn-o">View All Services →</a>
            </div>
          </div>
        </section>

        {/* ── Why Choose ────────────────────────────── */}
        <section className="section section-alt">
          <div className="wrap">
            <span className="eyebrow">Why Families Choose Beyond Care</span>
            <h2>Not Just Any Home Care Company</h2>
            <p style={{ maxWidth: 540, marginTop: 12 }}>
              There are a lot of options out there. Here's what makes Beyond Care different.
            </p>
            <div className="why-grid">
              {WHY.map(w => (
                <div key={w.title} className="why-card">
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <a href="/why-choose-beyond-care" className="btn btn-p">Learn More About Our Approach →</a>
            </div>
          </div>
        </section>

        {/* ── Caregiver Standards ───────────────────── */}
        <section className="section">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <span className="eyebrow">Caregiver Standards</span>
                <h2>Who Is Coming Into Your Home?</h2>
                <p style={{ marginTop: 12, marginBottom: 8 }}>
                  It is a fair question — and we have a clear answer.
                  Beyond Care caregivers are:
                </p>
                <ul className="check-list">
                  <li>Direct employees of Beyond Care, not contractors or placement agency referrals</li>
                  <li>Bonded and fully insured</li>
                  <li>Covered by workers&apos; compensation</li>
                  <li>CPR certified through required training</li>
                  <li>Required to complete continuing education, in-service training, and skills assessments</li>
                  <li>Monitored through regular performance evaluations</li>
                  <li>Screened through a selective hiring process before they ever step inside a client&apos;s home</li>
                </ul>
                <div style={{ marginTop: 28 }}>
                  <a href="/caregiver-standards" className="btn btn-p">Read Our Caregiver Standards →</a>
                </div>
              </div>
              <div style={{ background: "var(--teal-light)", borderRadius: 20, padding: 40, border: "1px solid rgba(28,122,138,.15)" }}>
                <div style={{ fontFamily: "var(--f-heading)", fontSize: "1.125rem", color: "var(--teal-dark)", fontStyle: "italic", lineHeight: 1.7, marginBottom: 20 }}>
                  &ldquo;We take caregiver standards seriously because the quality of care depends on the quality
                  and accountability of the people delivering it.&rdquo;
                </div>
                <div style={{ fontSize: ".875rem", fontWeight: 700, color: "var(--teal)" }}>
                  — Beyond Care Standard of Care
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How Care Works ────────────────────────── */}
        <section className="section section-alt">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <span className="eyebrow">How Care Works</span>
                <h2>Simple, Clear, and Personal</h2>
                <p style={{ marginTop: 12 }}>
                  Getting started with home care should not be complicated.
                  Here is how we make it straightforward.
                </p>
                <div style={{ marginTop: 28 }}>
                  <a href="/schedule-consultation" className="btn btn-p">Request a Free Consultation →</a>
                </div>
              </div>
              <div className="steps">
                {STEPS.map(s => (
                  <div key={s.n} className="step">
                    <div><span className="step-num">{s.n}</span></div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Area ──────────────────────────── */}
        <section className="section">
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
              <span className="eyebrow">Service Area</span>
              <h2>Serving Families Across Upstate South Carolina</h2>
              <p style={{ marginTop: 12, marginBottom: 40 }}>
                Beyond Care operates from two offices in Anderson County and serves surrounding communities
                throughout the Upstate region.
              </p>
            </div>
            <div className="grid-2" style={{ maxWidth: 800, margin: "0 auto 40px" }}>
              <div className="location-card">
                <h4>Honea Path Office (Main)</h4>
                <address>
                  512A East Greer St<br />
                  Honea Path, SC 29654<br /><br />
                  <a href="tel:8648412500">(864) 841-2500</a>
                </address>
              </div>
              <div className="location-card">
                <h4>Williamston Office</h4>
                <address>
                  103 Belton Dr<br />
                  Williamston, SC 29697<br /><br />
                  <a href="tel:8643690222">(864) 369-0222</a>
                </address>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginBottom: 8, fontWeight: 600, color: "var(--t2)" }}>Coverage:</p>
              <p style={{ color: "var(--t3)" }}>
                Anderson County · Greenville County · Abbeville County · Pickens County · Greenwood County
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="/locations" className="btn btn-o">View All Locations →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial ───────────────────────────── */}
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

        {/* ── Payment Options ───────────────────────── */}
        <section className="section">
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
              <span className="eyebrow">Payment &amp; Coverage</span>
              <h2>Flexible Payment and Coverage Options</h2>
              <p style={{ marginTop: 12 }}>
                We work with families using a variety of payment arrangements to help make quality home care accessible.
              </p>
            </div>
            <div className="payment-grid">
              {PAYMENTS.map(p => (
                <div key={p} className="payment-pill">
                  <span className="payment-pill-check">✓</span>
                  {p}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/payment-options" className="btn btn-o">Learn About Payment Options →</a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────── */}
        <section className="cta-section">
          <div className="wrap">
            <h2>Ready to Talk?</h2>
            <p>
              Whether you are planning ahead or need help right now, we are here.
              Call our office or request a free consultation online.
            </p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-w">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <span>📞</span>
              <a href="tel:8648412500" style={{ color: "rgba(255,255,255,.9)" }}>(864) 841-2500</a>
              <span style={{ opacity: .5 }}>·</span>
              <a href="tel:8643690222" style={{ color: "rgba(255,255,255,.7)", fontSize: ".9375rem" }}>(864) 369-0222</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
