import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Free Consultation | Beyond Care Home Care Services",
  description:
    "Schedule a free, no-obligation consultation with Beyond Care Home Care Services. We serve Upstate South Carolina families. Call (864) 841-2500 or fill out our form.",
}

export default function ScheduleConsultationPage() {
  return (
    <>
              <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Get Started</span>
            <h1>Request a Free Consultation</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Whether you are planning ahead or need help right now, we are here.
              Fill out the form below or call us directly — no obligation, no pressure.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
              <div className="contact-form">
                <h3 style={{ marginBottom: 24 }}>Tell Us About Your Needs</h3>
                <form action="https://formspree.io/f/placeholder" method="POST">
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fname">First Name *</label>
                      <input id="fname" name="fname" type="text" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lname">Last Name *</label>
                      <input id="lname" name="lname" type="text" className="form-input" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="city">City / Area</label>
                    <input id="city" name="city" type="text" className="form-input" placeholder="e.g., Honea Path, Williamston, Anderson..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="services">Services of Interest</label>
                    <select id="services" name="services" className="form-select">
                      <option value="">Select a service...</option>
                      <option>Personal Care</option>
                      <option>Companion Care</option>
                      <option>Respite Care</option>
                      <option>Meal Preparation</option>
                      <option>Light Housekeeping</option>
                      <option>Transportation</option>
                      <option>Medication Reminders</option>
                      <option>Hospital Discharge Support</option>
                      <option>Multiple / Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Tell Us More (Optional)</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Share any details that would help us prepare for your consultation..." />
                  </div>
                  <button type="submit" className="btn btn-p" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "16px" }}>
                    Submit Request →
                  </button>
                </form>
              </div>

              <div>
                <h3 style={{ marginBottom: 24 }}>Prefer to Call?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                  {[
                    { label: "Honea Path Office (Main)", phone: "(864) 841-2500", tel: "8648412500", address: "512A East Greer St, Honea Path, SC 29654" },
                    { label: "Williamston Office", phone: "(864) 369-0222", tel: "8643690222", address: "103 Belton Dr, Williamston, SC 29697" },
                  ].map(o => (
                    <div key={o.label} className="location-card">
                      <h4>{o.label}</h4>
                      <address>
                        <a href={`tel:${o.tel}`} style={{ fontSize: "1.125rem", fontWeight: 700, display: "block", marginBottom: 6 }}>{o.phone}</a>
                        <span style={{ fontSize: ".875rem" }}>{o.address}</span>
                      </address>
                    </div>
                  ))}
                </div>

                <div style={{ background: "var(--teal-light)", borderRadius: "var(--radius)", padding: 28, border: "1px solid rgba(28,122,138,.15)" }}>
                  <h4 style={{ color: "var(--teal)", marginBottom: 12 }}>Office Hours</h4>
                  <p style={{ marginBottom: 8 }}>Monday – Friday: 8:00 AM – 4:00 PM</p>
                  <p style={{ fontSize: ".875rem", color: "var(--t3)" }}>
                    After hours: Urgent calls are forwarded to on-call staff.
                    We understand that care needs do not follow business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}
