import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Home Care in South Carolina | Beyond Care Home Care Services",
  description:
    "Beyond Care Home Care Services provides compassionate, nurse-led non-medical home care in South Carolina. Personal care, companionship, respite, and more — available 24/7. Call today.",
}

const TRUST = [
  "Bonded & Insured",
  "Employee Caregivers — Not Contractors",
  "CPR Certified Staff",
  "Available 24/7",
  "Two Upstate SC Offices",
  "Nurse-Led Ownership",
]

const SERVICES = [
  { title: "Personal Care", desc: "Bathing, grooming, dressing, hygiene, and mobility support — handled with patience and respect.", slug: "personal-care" },
  { title: "Companion Care", desc: "Meaningful conversation, daily engagement, and a consistent presence that reduces isolation.", slug: "companion-care" },
  { title: "Respite Care", desc: "Relief for family caregivers. We step in so you can step back and recharge.", slug: "respite-care" },
  { title: "Meal Preparation", desc: "Nutritious, home-prepared meals that respect your loved one's preferences and dietary needs.", slug: "meal-preparation" },
  { title: "Light Housekeeping", desc: "Clean, safe, organized living spaces — because a tidy home is a safer home.", slug: "light-housekeeping" },
  { title: "Transportation", desc: "Rides to appointments, errands, and daily needs — so independence doesn't stop at the front door.", slug: "transportation-assistance" },
  { title: "Medication Reminders", desc: "Consistent prompts to help clients stay on schedule with their medications.", slug: "medication-reminders" },
  { title: "Hospital Discharge Support", desc: "Skilled transition support from facility to home — reducing the risk of readmission.", slug: "hospital-discharge-support" },
]

const STANDARD = [
  { label: "Rigorous Vetting", body: "Criminal background checks, reference verification, skills assessment, and an in-person interview before any placement." },
  { label: "Ongoing Training", body: "Caregivers complete continuing education and skills assessments on a regular basis — not just at hire." },
  { label: "Matched, Not Random", body: "We use a structured matching process — personality, schedule, and care needs — to make sure the fit is right from day one." },
]

const STEPS = [
  { n: "1", title: "Call or Request a Consultation", body: "Contact us by phone or online. We respond promptly — no obligation." },
  { n: "2", title: "We Assess Your Needs", body: "A team member meets with you to understand your loved one's situation, preferences, and goals." },
  { n: "3", title: "We Build a Care Plan", body: "An individualized plan created with clinical precision and personal attention." },
  { n: "4", title: "We Match Your Caregiver", body: "We select the right fit — not just by availability, but by personality and care style." },
  { n: "5", title: "Care Begins — We Stay Involved", body: "We monitor quality, communicate with your family, and adjust as needs change." },
]

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Beyond Care Home Care Services",
  "description": "Compassionate, nurse-led non-medical home care in Upstate South Carolina.",
  "url": "https://beyondcarehc.com",
  "telephone": "+18648412500",
  "email": "service@beyondcarehc.com",
  "address": [
    { "@type": "PostalAddress", "streetAddress": "512A East Greer St", "addressLocality": "Honea Path", "addressRegion": "SC", "postalCode": "29654" },
    { "@type": "PostalAddress", "streetAddress": "103 Belton Dr", "addressLocality": "Williamston", "addressRegion": "SC", "postalCode": "29697" },
  ],
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

        {/* ── Hero ─────────────────────────────────── */}
        <section id="hero">
          <Image
            id="hero-img"
            src="/images/hero-porch.png"
            alt="Caregiver sitting with senior client on porch"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%", opacity: .35, zIndex: 0 }}
          />
          <div className="wrap">
            <div className="hero-inner">
              <span className="eyebrow eyebrow-light">— Serving Upstate South Carolina</span>
              <h1 className="hero-h1">
                Dependable <em>Home Care</em><br />
                for the People You Love
              </h1>
              <p className="hero-sub">
                Locally owned. Nurse-led. Built to help your loved one stay safe,
                comfortable, and independent at home — with people you can genuinely trust.
              </p>
              <p className="hero-sub-note">Privately owned &amp; operated by an experienced Registered Nurse</p>
              <div className="hero-actions">
                <a href="/schedule-consultation" className="btn btn-r">Request a Free Consultation</a>
                <a href="tel:8648412500" className="btn btn-ol">(864) 841-2500</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────── */}
        <div id="trust-strip">
          <div className="wrap">
            <div className="trust-strip-inner">
              {TRUST.map(t => (
                <span key={t} className="trust-item">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services ─────────────────────────────── */}
        <section className="section bg-cream">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our Services</span>
              <h2>Personalised care for every need</h2>
              <p>We match each client with the right caregiver and the right level of support.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map(s => (
                <div key={s.slug} className="svc-card">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <a href={`/services/${s.slug}`} className="svc-link">Learn more →</a>
                </div>
              ))}
            </div>
            <div className="services-cta">
              <a href="/services" className="btn btn-t">View all services →</a>
            </div>
          </div>
        </section>

        {/* ── The Beyond Care Standard ──────────────── */}
        <div className="photo-split">
          <div className="photo-split-img">
            <Image src="/images/caregiver-indoor.png" alt="Caregiver providing compassionate care" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="photo-split-content bg-deep">
            <span className="eyebrow eyebrow-light">Caregiver Standards</span>
            <h2 style={{ fontFamily: "var(--f-serif)", color: "#fff", fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: 12, letterSpacing: "-.02em" }}>
              The Beyond Care standard
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 32, lineHeight: 1.75 }}>
              Every caregiver we place meets a bar most agencies never set.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {STANDARD.map(s => (
                <div key={s.label}>
                  <h4 style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#5ECCE0", marginBottom: 6 }}>{s.label}</h4>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".9375rem", lineHeight: 1.7, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <a href="/caregiver-standards" className="standard-link" style={{ marginTop: 32 }}>Read about our caregiver standards →</a>
          </div>
        </div>

        {/* ── How Care Works ────────────────────────── */}
        <section className="section bg-cream">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}>
              <div>
                <span className="eyebrow">How It Works</span>
                <h2 className="serif">Simple, clear, and personal</h2>
                <p style={{ color: "var(--t2)", fontSize: "1rem", lineHeight: 1.75, marginTop: 12, marginBottom: 32 }}>
                  Getting started with home care should not be complicated. We walk every
                  family through a clear, personal process — from first call to ongoing care.
                </p>
                <a href="/schedule-consultation" className="btn btn-r">Request a Free Consultation</a>
              </div>
              <div className="steps" style={{ borderTop: "1px solid rgba(27,61,72,.1)" }}>
                {STEPS.map(s => (
                  <div key={s.n} className="step" style={{ borderBottom: "1px solid rgba(27,61,72,.08)" }}>
                    <span className="step-num" style={{ background: "var(--teal-deep)", border: "none", color: "#5ECCE0" }}>{s.n}</span>
                    <div>
                      <h4 style={{ color: "var(--t1)" }}>{s.title}</h4>
                      <p style={{ color: "var(--t2)" }}>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose ────────────────────────────── */}
        <div className="photo-split">
          <div className="photo-split-content" style={{ background: "var(--cream)" }}>
            <span className="eyebrow">Why Beyond Care</span>
            <h2 className="serif">Not just any home care company</h2>
            <p style={{ color: "var(--t2)", lineHeight: 1.75, marginTop: 12, marginBottom: 24 }}>
              There are a lot of options in South Carolina. Here is what makes Beyond Care genuinely different.
            </p>
            <ul className="check-list" style={{ marginBottom: 28 }}>
              <li>Nurse-owned — clinical oversight built in, not bolted on</li>
              <li>Direct employees only — bonded, insured, workers&apos; comp covered</li>
              <li>Individualized care plans for every single client</li>
              <li>Flexible scheduling from a few hours to 24/7</li>
              <li>Two offices, deeply rooted in the Upstate community</li>
              <li>We stay involved — not just at placement</li>
            </ul>
            <a href="/why-choose-beyond-care" className="btn btn-r">Learn more about our approach</a>
          </div>
          <div className="photo-split-img">
            <Image src="/images/caregiver-kitchen.png" alt="Caregiver preparing meal with senior" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* ── Testimonial ───────────────────────────── */}
        <section className="section bg-deep">
          <div className="wrap">
            <div className="section-head section-head-light" style={{ marginBottom: 40 }}>
              <span className="eyebrow eyebrow-light">Families Trust Beyond Care</span>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <blockquote>
                &ldquo;I am very pleased with my services. My caregiver is amazing,
                and goes above and beyond what she is required to do.&rdquo;
              </blockquote>
              <cite>— Betty F., Beyond Care Client</cite>
            </div>
          </div>
        </section>

        {/* ── Service Area ──────────────────────────── */}
        <section className="section bg-cream">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Where We Serve</span>
              <h2>Serving families across Upstate South Carolina</h2>
              <p>Two offices. Five counties. Personally invested in every family we serve.</p>
            </div>
            <div className="grid-2" style={{ maxWidth: 760, margin: "0 auto 32px" }}>
              <div className="location-card">
                <h4>Honea Path Office (Main)</h4>
                <address>
                  512A East Greer St<br />Honea Path, SC 29654<br /><br />
                  <a href="tel:8648412500">(864) 841-2500</a>
                </address>
              </div>
              <div className="location-card">
                <h4>Williamston Office</h4>
                <address>
                  103 Belton Dr<br />Williamston, SC 29697<br /><br />
                  <a href="tel:8643690222">(864) 369-0222</a>
                </address>
              </div>
            </div>
            <p style={{ textAlign: "center", color: "var(--t3)", fontSize: ".9375rem" }}>
              Anderson · Greenville · Abbeville · Pickens · Greenwood counties
            </p>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a href="/locations" className="btn btn-t">View all locations →</a>
            </div>
          </div>
        </section>

        {/* ── Payment Options ───────────────────────── */}
        <section className="section bg-deep">
          <div className="wrap">
            <div className="section-head section-head-light">
              <span className="eyebrow eyebrow-light">Payment &amp; Coverage</span>
              <h2>Flexible payment options</h2>
              <p>We work with families using a variety of arrangements to make quality care accessible.</p>
            </div>
            <div className="payment-grid">
              {["Private Pay","Long-Term Care Insurance","Community Long Term Care (CLTC)","Medicaid Waiver","VA Benefits","Vouchers"].map(p => (
                <span key={p} className="pay-pill">{p}</span>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/payment-options" className="btn btn-ol">Learn about payment options</a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────── */}
        <section className="cta-section">
          <div className="wrap">
            <h2>Ready to talk about care<br />for your loved one?</h2>
            <p>
              Schedule a free, no-obligation consultation. We&apos;ll answer your questions,
              explain your options, and help you find the right fit.
            </p>
            <div className="cta-actions">
              <a href="/schedule-consultation" className="btn btn-ow">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <a href="tel:8648412500">(864) 841-2500</a>
              <span>·</span>
              <a href="tel:8643690222">(864) 369-0222</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
