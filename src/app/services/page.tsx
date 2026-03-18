import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Home Care Services | Beyond Care Home Care Services",
  description:
    "Beyond Care provides personal care, companion care, respite care, meal preparation, housekeeping, transportation, medication reminders, and hospital discharge support across Upstate South Carolina.",
}

const SERVICES = [
  {
    icon: "🤲", title: "Personal Care", slug: "personal-care",
    desc: "Bathing, grooming, dressing, hygiene, and mobility support — handled with patience and respect. Our caregivers assist with the activities of daily living that allow your loved one to maintain dignity and comfort at home.",
  },
  {
    icon: "💬", title: "Companion Care", slug: "companion-care",
    desc: "Meaningful conversation, daily engagement, and a consistent presence that reduces isolation. Loneliness can be as damaging as physical decline — our companions are trained to build real, warm relationships.",
  },
  {
    icon: "🌿", title: "Respite Care", slug: "respite-care",
    desc: "Relief for family caregivers. We step in so you can step back and recharge. Even the most devoted family caregivers need breaks — scheduled or emergency respite is available to protect everyone's wellbeing.",
  },
  {
    icon: "🍽️", title: "Meal Preparation", slug: "meal-preparation",
    desc: "Nutritious, home-prepared meals that respect your loved one's preferences and dietary needs. Proper nutrition supports health outcomes and quality of life — we make sure every meal is planned and prepared thoughtfully.",
  },
  {
    icon: "🏠", title: "Light Housekeeping", slug: "light-housekeeping",
    desc: "Clean, safe, organized living spaces — because a tidy home is a safer home. Our caregivers assist with laundry, vacuuming, dishes, and general tidying so your loved one lives in a clean, comfortable environment.",
  },
  {
    icon: "🚗", title: "Transportation", slug: "transportation-assistance",
    desc: "Rides to appointments, errands, and daily needs — so independence doesn't stop at the front door. We transport clients to medical appointments, grocery shopping, and community activities safely and dependably.",
  },
  {
    icon: "💊", title: "Medication Reminders", slug: "medication-reminders",
    desc: "Consistent prompts to help clients stay on schedule with their medications. We do not administer medications, but we do provide scheduled reminders to help clients maintain their prescribed routines.",
  },
  {
    icon: "🏥", title: "Hospital Discharge Support", slug: "hospital-discharge-support",
    desc: "Skilled transition support from facility to home — reducing the risk of readmission. Our nurse-led team coordinates with discharge planners to ensure a smooth, safe transition from hospital to home.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Our Services</span>
            <h1>Non-Medical Home Care Services in South Carolina</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              We provide a broad range of home care services, customized around each client's real daily needs.
              Whether your loved one needs a few hours of help each week or consistent daily support, we can
              build a care plan that fits.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 28 }}>
              {SERVICES.map(s => (
                <div key={s.slug} style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: 32,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  transition: "all .2s",
                }}>
                  <div style={{
                    width: 52, height: 52, flexShrink: 0,
                    background: "var(--teal-light)", borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem",
                  }}>{s.icon}</div>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ fontSize: ".9375rem", marginBottom: 14 }}>{s.desc}</p>
                    <a href={`/services/${s.slug}`} style={{ fontSize: ".875rem", fontWeight: 700, color: "var(--teal)" }}>
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrap">
            <h2>Not Sure What You Need?</h2>
            <p>Call us or request a consultation — we will help identify the right services for your loved one.</p>
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
