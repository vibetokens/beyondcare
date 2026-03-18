import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Home Care in South Carolina | Beyond Care Home Care Services",
  description:
    "Beyond Care Home Care Services provides compassionate, nurse-led non-medical home care in South Carolina. Personal care, companionship, respite, and more — available 24/7.",
}

const TRUST = [
  "Bonded & Insured",
  "Employee Caregivers",
  "CPR Certified Staff",
  "Available 24/7",
  "Two SC Offices",
  "Nurse-Led",
]

const SERVICES = [
  { icon: "🤝", color: "#E8F5F8", title: "Personal Care",        desc: "Bathing, grooming, dressing, and mobility support — handled with patience and dignity.", slug: "personal-care" },
  { icon: "💬", color: "#FFF0EB", title: "Companion Care",       desc: "Consistent presence, conversation, and daily engagement that reduces isolation.", slug: "companion-care" },
  { icon: "🌿", color: "#EDF7EE", title: "Respite Care",         desc: "Relief for family caregivers. We step in so you can step back and recharge.", slug: "respite-care" },
  { icon: "🍽️", color: "#FFF5E6", title: "Meal Preparation",    desc: "Nutritious home-cooked meals that respect your loved one's preferences.", slug: "meal-preparation" },
  { icon: "🏡", color: "#EEF4FF", title: "Light Housekeeping",   desc: "A clean, organized home is a safer home. We help keep things tidy and comfortable.", slug: "light-housekeeping" },
  { icon: "🚗", color: "#FFF0F5", title: "Transportation",       desc: "Reliable rides to appointments and errands — independence doesn't stop at the door.", slug: "transportation-assistance" },
  { icon: "💊", color: "#EDF7EE", title: "Medication Reminders", desc: "Consistent, scheduled prompts to help clients stay on track with their medications.", slug: "medication-reminders" },
  { icon: "🏥", color: "#E8F5F8", title: "Hospital Discharge",   desc: "Nurse-led transition support from facility to home, reducing readmission risk.", slug: "hospital-discharge-support" },
]

const STANDARDS = [
  { icon: "🔍", color: "#E8F5F8", label: "Rigorous Vetting",    body: "Criminal background checks, reference verification, skills assessment, and an in-person interview before any placement." },
  { icon: "📚", color: "#FFF0EB", label: "Ongoing Training",    body: "Continuing education and skills assessments on a regular cadence — not just at hire." },
  { icon: "🤝", color: "#EDF7EE", label: "Matched, Not Random", body: "A structured matching process — personality, schedule, and care needs — to get the fit right from day one." },
]

const WHY = [
  "Nurse-owned — clinical oversight built in, not bolted on",
  "Direct employees only — bonded, insured, workers' comp covered",
  "Individualized care plans for every single client",
  "Flexible scheduling from a few hours to 24/7",
  "Two offices, deeply rooted in the Upstate SC community",
  "We stay involved long after placement",
]

const STEPS = [
  { n: "1", title: "Call or Request a Consultation", body: "Contact us by phone or online. We respond promptly — no obligation." },
  { n: "2", title: "We Assess Your Needs",           body: "A team member meets with you to understand your loved one's situation and goals." },
  { n: "3", title: "We Build a Care Plan",           body: "An individualized plan created with clinical precision and personal attention." },
  { n: "4", title: "We Match Your Caregiver",        body: "Selected by skill, personality, and care style — not just availability." },
  { n: "5", title: "Care Begins — We Stay Involved", body: "We monitor quality, communicate with your family, and adjust as needs change." },
]

const SCHEMA = {
  "@context": "https://schema.org", "@type": "LocalBusiness",
  "name": "Beyond Care Home Care Services",
  "url": "https://beyondcarehc.com", "telephone": "+18648412500",
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

        {/* ─── Hero ──────────────────────────────────────── */}
        <section id="hero">
          <Image id="hero-bg" src="/images/hero-porch.png" alt="" fill priority sizes="100vw" />
          <div className="wrap">
            <div className="hero-content">
              <div className="hero-tag">❤️ Serving Upstate South Carolina</div>
              <h1 className="hero-h1">
                Dependable <em>Home Care</em><br />for the People You Love
              </h1>
              <p className="hero-body">
                Locally owned. Nurse-led. Built to help your loved one stay safe, comfortable,
                and independent at home — with people you can genuinely trust.
              </p>
              <p className="hero-note">Privately owned &amp; operated by an experienced Registered Nurse</p>
              <div className="hero-btns">
                <a href="/schedule-consultation" className="btn btn-red">Request a Free Consultation</a>
                <a href="tel:8648412500" className="btn btn-outline-white">(864) 841-2500</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Trust chips ───────────────────────────────── */}
        <div id="trust-chips">
          <div className="wrap">
            <div className="chips-row">
              {TRUST.map(t => (
                <span key={t} className="chip">
                  <span className="chip-check">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Services ──────────────────────────────────── */}
        <section className="section bg-white">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Our Services</span>
              <h2>Personalised care for every need</h2>
              <p>We match each client with the right caregiver and the right level of support.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map(s => (
                <div key={s.slug} className="svc-card">
                  <div className="svc-icon" style={{ background: s.color }}>{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <a href={`/services/${s.slug}`} className="svc-link">Learn more →</a>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/services" className="btn btn-outline">View all services</a>
            </div>
          </div>
        </section>

        {/* ─── Floral divider ────────────────────────────── */}
        <div className="floral-divider">✦ ✿ ✦ ✿ ✦</div>

        {/* ─── Caregiver Standards ───────────────────────── */}
        <section className="section bg-cream">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Caregiver Standards</span>
              <h2>The Beyond Care standard</h2>
              <p>Every caregiver we place meets a bar most agencies never set.</p>
            </div>
            <div className="features-grid">
              {STANDARDS.map(s => (
                <div key={s.label} className="feat">
                  <div className="feat-icon" style={{ background: s.color }}>{s.icon}</div>
                  <h4>{s.label}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/caregiver-standards" className="btn btn-outline">Read our caregiver standards</a>
            </div>
          </div>
        </section>

        {/* ─── Photo + Why Choose ────────────────────────── */}
        <div className="split">
          <div className="split-img">
            <Image src="/images/caregiver-kitchen.png" alt="Caregiver preparing a meal with senior" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="split-body bg-sage">
            <span className="eyebrow">Why Beyond Care</span>
            <h2>Not just any home care company</h2>
            <p style={{ marginBottom: 4 }}>
              There are a lot of options in South Carolina. Here is what makes Beyond Care genuinely different.
            </p>
            <ul className="check-list" style={{ marginBottom: 28 }}>
              {WHY.map(w => <li key={w}>{w}</li>)}
            </ul>
            <a href="/why-choose-beyond-care" className="btn btn-teal">Learn more about our approach</a>
          </div>
        </div>

        {/* ─── Floral divider ────────────────────────────── */}
        <div className="floral-divider" style={{ background: "#fff", paddingTop: 28, paddingBottom: 28 }}>✦ ✿ ✦ ✿ ✦</div>

        {/* ─── How Care Works ────────────────────────────── */}
        <section className="section bg-white">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}>
              <div>
                <span className="eyebrow">How It Works</span>
                <h2 style={{ fontSize: "clamp(1.625rem,2.5vw,2.25rem)", marginBottom: 16 }}>
                  Simple, clear,<br />and personal
                </h2>
                <p style={{ color: "var(--t2)", lineHeight: 1.8, marginBottom: 32 }}>
                  Getting started with home care should not be complicated. We walk every family
                  through a clear process — from first call to ongoing care.
                </p>
                <a href="/schedule-consultation" className="btn btn-red">Request a Free Consultation</a>
                <div style={{ marginTop: 28 }}>
                  <Image
                    src="/images/caregiver-indoor.png"
                    alt="Caregiver with senior client"
                    width={400} height={280}
                    style={{ borderRadius: 16, objectFit: "cover", width: "100%", height: 260 }}
                  />
                </div>
              </div>
              <div className="steps">
                {STEPS.map(s => (
                  <div key={s.n} className="step">
                    <span className="step-n">{s.n}</span>
                    <div><h4>{s.title}</h4><p>{s.body}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonial ───────────────────────────────── */}
        <section className="section bg-blush">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 40 }}>
              <span className="eyebrow">What Families Say</span>
              <h2>Families trust Beyond Care</h2>
            </div>
            <div className="testimonial-box">
              <div className="stars">★★★★★</div>
              <blockquote>
                &ldquo;I am very pleased with my services. My caregiver is amazing, and goes above
                and beyond what she is required to do.&rdquo;
              </blockquote>
              <cite>— Betty F., Beyond Care Client</cite>
            </div>
          </div>
        </section>

        {/* ─── Service Area ──────────────────────────────── */}
        <section className="section bg-white">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Where We Serve</span>
              <h2>Serving families across<br />Upstate South Carolina</h2>
              <p>Two offices. Five counties. Personally invested in every family we serve.</p>
            </div>
            <div className="grid-2" style={{ maxWidth: 680, margin: "0 auto 28px" }}>
              <div className="loc-card">
                <h4>Honea Path Office (Main)</h4>
                <address>
                  512A East Greer St<br />Honea Path, SC 29654<br /><br />
                  <a href="tel:8648412500">(864) 841-2500</a>
                </address>
              </div>
              <div className="loc-card">
                <h4>Williamston Office</h4>
                <address>
                  103 Belton Dr<br />Williamston, SC 29697<br /><br />
                  <a href="tel:8643690222">(864) 369-0222</a>
                </address>
              </div>
            </div>
            <p style={{ textAlign: "center", color: "var(--t3)", fontSize: ".875rem" }}>
              Anderson · Greenville · Abbeville · Pickens · Greenwood counties
            </p>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <a href="/locations" className="btn btn-outline">View all locations</a>
            </div>
          </div>
        </section>

        {/* ─── Payment Options ───────────────────────────── */}
        <section className="section bg-sage">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Payment &amp; Coverage</span>
              <h2>Flexible payment options</h2>
              <p>We work with families to make quality care accessible.</p>
            </div>
            <div className="pay-pills">
              {["Private Pay","Long-Term Care Insurance","Community Long Term Care (CLTC)","Medicaid Waiver","VA Benefits","Vouchers"].map(p => (
                <span key={p} className="pay-pill">{p}</span>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="/payment-options" className="btn btn-outline">Learn about payment options</a>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─────────────────────────────────── */}
        <section className="cta-block bg-teal" style={{ color: "#fff" }}>
          <div className="wrap">
            <h2 style={{ color: "#fff" }}>Ready to talk about care<br />for your loved one?</h2>
            <p style={{ color: "rgba(255,255,255,.78)" }}>
              Schedule a free, no-obligation consultation. We&apos;ll answer your questions,
              explain your options, and help you find the right fit.
            </p>
            <div className="cta-btns">
              <a href="/schedule-consultation" className="btn btn-red">Request a Free Consultation</a>
              <a href="tel:8648412500" className="btn btn-outline-white">(864) 841-2500</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
