import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Home Care in South Carolina | Beyond Care Home Care Services",
  description:
    "Beyond Care Home Care Services provides compassionate, nurse-led non-medical home care in South Carolina. Personal care, companionship, respite, and more — available 24/7. Call today.",
}

const TRUST = ["Bonded & Insured","Employee Caregivers — Not Contractors","CPR Certified Staff","Available 24/7","Two Upstate SC Offices","Nurse-Led Ownership"]

const SERVICES = [
  { title: "Personal Care",          desc: "Bathing, grooming, dressing, hygiene, and mobility support — handled with patience and respect.",                  slug: "personal-care" },
  { title: "Companion Care",         desc: "Meaningful conversation, daily engagement, and a consistent presence that reduces isolation.",                     slug: "companion-care" },
  { title: "Respite Care",           desc: "Relief for family caregivers. We step in so you can step back and recharge.",                                     slug: "respite-care" },
  { title: "Meal Preparation",       desc: "Nutritious, home-prepared meals that respect your loved one's preferences and dietary needs.",                    slug: "meal-preparation" },
  { title: "Light Housekeeping",     desc: "Clean, safe, organized living spaces — because a tidy home is a safer home.",                                     slug: "light-housekeeping" },
  { title: "Transportation",         desc: "Rides to appointments, errands, and daily needs — so independence doesn't stop at the front door.",               slug: "transportation-assistance" },
  { title: "Medication Reminders",   desc: "Consistent prompts to help clients stay on schedule with their medications.",                                     slug: "medication-reminders" },
  { title: "Hospital Discharge",     desc: "Skilled transition support from facility to home — reducing the risk of readmission.",                            slug: "hospital-discharge-support" },
]

const STANDARD = [
  { label: "Rigorous Vetting",    body: "Criminal background checks, reference verification, skills assessment, and an in-person interview before any placement." },
  { label: "Ongoing Training",    body: "Caregivers complete continuing education and skills assessments regularly — not just at hire." },
  { label: "Matched, Not Random", body: "We use a structured matching process — personality, schedule, and care needs — to make sure the fit is right from day one." },
]

const STEPS = [
  { n:"1", title:"Call or Request a Consultation", body:"Contact us by phone or online. We respond promptly — no obligation." },
  { n:"2", title:"We Assess Your Needs",           body:"A team member meets with you to understand your loved one's situation, preferences, and goals." },
  { n:"3", title:"We Build a Care Plan",           body:"An individualized plan created with clinical precision and personal attention." },
  { n:"4", title:"We Match Your Caregiver",        body:"Selected by skill, personality, and care style — not just availability." },
  { n:"5", title:"Care Begins — We Stay Involved", body:"We monitor quality, communicate with your family, and adjust as needs change." },
]

const SCHEMA = {
  "@context":"https://schema.org","@type":"LocalBusiness",
  "name":"Beyond Care Home Care Services",
  "description":"Compassionate, nurse-led non-medical home care in Upstate South Carolina.",
  "url":"https://beyondcarehc.com","telephone":"+18648412500","email":"service@beyondcarehc.com",
  "address":[
    {"@type":"PostalAddress","streetAddress":"512A East Greer St","addressLocality":"Honea Path","addressRegion":"SC","postalCode":"29654"},
    {"@type":"PostalAddress","streetAddress":"103 Belton Dr","addressLocality":"Williamston","addressRegion":"SC","postalCode":"29697"},
  ],
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

        {/* ── Hero ─────────────────────────────── */}
        <section id="hero">
          <Image id="hero-bg" src="/images/hero-porch.png" alt="" fill priority sizes="100vw" />
          <div className="wrap">
            <div className="hero-content">
              <span className="eyebrow eyebrow-light">— Serving Upstate South Carolina</span>
              <h1 className="hero-h1">Dependable <em>Home Care</em><br />for the People You Love</h1>
              <p className="hero-sub">Locally owned. Nurse-led. Built to help your loved one stay safe, comfortable, and independent at home — with people you can genuinely trust.</p>
              <p className="hero-note">Privately owned &amp; operated by an experienced Registered Nurse</p>
              <div className="hero-btns">
                <a href="/schedule-consultation" className="btn btn-red">Request a Free Consultation</a>
                <a href="tel:8648412500" className="btn btn-outline-light">(864) 841-2500</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────── */}
        <div id="trust-strip">
          <div className="wrap">
            <div className="trust-row">
              {TRUST.map(t => <span key={t} className="trust-item">{t}</span>)}
            </div>
          </div>
        </div>

        {/* ── Services ─────────────────────── */}
        <section className="section bg-cream">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">Our Services</span>
              <h2>Personalised care for every need</h2>
              <div className="divider-teal" />
              <p style={{ marginTop: 20 }}>We match each client with the right caregiver and the right level of support.</p>
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
            <div style={{ textAlign:"center", marginTop:36 }}>
              <a href="/services" className="btn btn-outline-teal">View all services →</a>
            </div>
          </div>
        </section>

        {/* ── Caregiver Standards — photo left ─ */}
        <div className="split">
          <div className="split-img">
            <Image src="/images/caregiver-indoor.png" alt="Caregiver with client at home" fill sizes="50vw" style={{ objectFit:"cover" }} />
          </div>
          <div className="split-body bg-teal split-body-dark">
            <span className="eyebrow eyebrow-light">Caregiver Standards</span>
            <h2>The Beyond Care<br />standard</h2>
            <p style={{ marginBottom:8 }}>Every caregiver we place meets a bar most agencies never set.</p>
            <div className="cg-points">
              {STANDARD.map(s => (
                <div key={s.label} className="cg-point">
                  <h4>{s.label}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <a href="/caregiver-standards" style={{ fontSize:".875rem", fontWeight:700, color:"rgba(255,255,255,.65)", textDecoration:"underline", textUnderlineOffset:3 }}>
              Read about our caregiver standards →
            </a>
          </div>
        </div>

        {/* ── How Care Works — dark teal ─────── */}
        <section className="section bg-teal">
          <div className="wrap">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"72px", alignItems:"start" }}>
              <div>
                <span className="eyebrow eyebrow-light">How It Works</span>
                <h2 style={{ fontFamily:"var(--f-display)", color:"#fff", fontSize:"clamp(1.5rem,2.5vw,2.125rem)", letterSpacing:"-.02em", margin:"10px 0 18px" }}>
                  Simple, clear,<br />and personal
                </h2>
                <p className="lead lead-light" style={{ marginBottom:32 }}>
                  Getting started with home care should not be complicated. We walk every family through a clear process — from first call to ongoing care.
                </p>
                <a href="/schedule-consultation" className="btn btn-red">Request a Free Consultation</a>
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

        {/* ── Why Choose — photo right ──────── */}
        <div className="split">
          <div className="split-body" style={{ background:"#fff" }}>
            <span className="eyebrow">Why Beyond Care</span>
            <h2>Not just any home<br />care company</h2>
            <p style={{ color:"var(--t2)", marginBottom:20 }}>
              There are a lot of options in South Carolina. Here is what makes Beyond Care genuinely different.
            </p>
            <ul className="check-list" style={{ marginBottom:28 }}>
              <li>Nurse-owned — clinical oversight built in, not bolted on</li>
              <li>Direct employees only — bonded, insured, workers&apos; comp covered</li>
              <li>Individualized care plans for every single client</li>
              <li>Flexible scheduling from a few hours to 24/7</li>
              <li>Two offices, deeply rooted in the Upstate community</li>
              <li>We stay involved long after placement</li>
            </ul>
            <a href="/why-choose-beyond-care" className="btn btn-red">Learn more about our approach</a>
          </div>
          <div className="split-img">
            <Image src="/images/caregiver-kitchen.png" alt="Caregiver preparing meals with senior" fill sizes="50vw" style={{ objectFit:"cover" }} />
          </div>
        </div>

        {/* ── Testimonial ───────────────────── */}
        <section className="section bg-teal">
          <div className="wrap">
            <div className="section-label section-label-light" style={{ marginBottom:40 }}>
              <span className="eyebrow eyebrow-light">Families Trust Beyond Care</span>
            </div>
            <div className="testimonial-wrap">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;I am very pleased with my services. My caregiver is amazing, and goes above and beyond what she is required to do.&rdquo;</blockquote>
              <cite>— Betty F., Beyond Care Client</cite>
            </div>
          </div>
        </section>

        {/* ── Service Area ──────────────────── */}
        <section className="section bg-cream">
          <div className="wrap">
            <div className="section-label" style={{ marginBottom:48 }}>
              <span className="eyebrow">Where We Serve</span>
              <h2>Serving families across<br />Upstate South Carolina</h2>
              <div className="divider-teal" />
              <p style={{ marginTop:20 }}>Two offices. Five counties. Personally invested in every family we serve.</p>
            </div>
            <div className="grid-2" style={{ maxWidth:720, margin:"0 auto 28px" }}>
              <div className="loc-card">
                <h4>Honea Path Office (Main)</h4>
                <address>512A East Greer St<br />Honea Path, SC 29654<br /><br /><a href="tel:8648412500">(864) 841-2500</a></address>
              </div>
              <div className="loc-card">
                <h4>Williamston Office</h4>
                <address>103 Belton Dr<br />Williamston, SC 29697<br /><br /><a href="tel:8643690222">(864) 369-0222</a></address>
              </div>
            </div>
            <p style={{ textAlign:"center", color:"var(--t3)", fontSize:".9rem" }}>Anderson · Greenville · Abbeville · Pickens · Greenwood counties</p>
            <div style={{ textAlign:"center", marginTop:28 }}>
              <a href="/locations" className="btn btn-outline-teal">View all locations →</a>
            </div>
          </div>
        </section>

        {/* ── Payment ───────────────────────── */}
        <section className="section bg-teal">
          <div className="wrap">
            <div className="section-label section-label-light">
              <span className="eyebrow eyebrow-light">Payment &amp; Coverage</span>
              <h2>Flexible payment options</h2>
              <p>We work with families using a variety of arrangements to make quality care accessible.</p>
            </div>
            <div className="pay-pills">
              {["Private Pay","Long-Term Care Insurance","Community Long Term Care (CLTC)","Medicaid Waiver","VA Benefits","Vouchers"].map(p=>(
                <span key={p} className="pay-pill">{p}</span>
              ))}
            </div>
            <div style={{ textAlign:"center", marginTop:36 }}>
              <a href="/payment-options" className="btn btn-outline-light">Learn about payment options</a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────── */}
        <section className="cta-block">
          <div className="wrap">
            <h2>Ready to talk about care<br />for your loved one?</h2>
            <p>Schedule a free, no-obligation consultation. We&apos;ll answer your questions, explain your options, and help you find the right fit.</p>
            <div className="cta-btns">
              <a href="/schedule-consultation" className="btn btn-outline-white">Request a Free Consultation</a>
            </div>
            <div className="cta-phone">
              <a href="tel:8648412500">(864) 841-2500</a>
              <span style={{ color:"rgba(255,255,255,.3)" }}>·</span>
              <a href="tel:8643690222">(864) 369-0222</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
