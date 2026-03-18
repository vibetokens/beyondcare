import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact Us | Beyond Care Home Care Services",
  description:
    "Contact Beyond Care Home Care Services in Honea Path and Williamston, SC. Call (864) 841-2500 or email service@beyondcarehc.com. Serving Upstate South Carolina.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Contact</span>
            <h1>We&apos;re Here to Help</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              Have questions about our services, coverage area, or how to get started?
              Reach out — we respond promptly and without pressure.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
              <div>
                <h3 style={{ marginBottom: 32 }}>Our Offices</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                  {[
                    {
                      name: "Honea Path Office (Main)",
                      address: "512A East Greer St\nHonea Path, SC 29654",
                      phone: "(864) 841-2500",
                      tel: "8648412500",
                    },
                    {
                      name: "Williamston Office",
                      address: "103 Belton Dr\nWilliamston, SC 29697",
                      phone: "(864) 369-0222",
                      tel: "8643690222",
                    },
                  ].map(o => (
                    <div key={o.name} className="location-card">
                      <h4>{o.name}</h4>
                      <address style={{ whiteSpace: "pre-line", marginBottom: 12 }}>{o.address}</address>
                      <a href={`tel:${o.tel}`} style={{ fontSize: "1.0625rem", fontWeight: 700 }}>{o.phone}</a>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div className="footer-contact-item" style={{ color: "var(--t2)" }}>
                    <span>✉️</span>
                    <div>
                      <div style={{ fontSize: ".75rem", fontWeight: 700, color: "var(--t3)", marginBottom: 2 }}>EMAIL</div>
                      <a href="mailto:service@beyondcarehc.com" style={{ color: "var(--teal)", fontWeight: 600 }}>service@beyondcarehc.com</a>
                    </div>
                  </div>
                  <div className="footer-contact-item" style={{ color: "var(--t2)" }}>
                    <span>🕐</span>
                    <div>
                      <div style={{ fontSize: ".75rem", fontWeight: 700, color: "var(--t3)", marginBottom: 2 }}>OFFICE HOURS</div>
                      <div>Monday – Friday, 8:00 AM – 4:00 PM</div>
                      <div style={{ fontSize: ".875rem", color: "var(--t3)" }}>After hours: on-call staff for urgent matters</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <h3 style={{ marginBottom: 24 }}>Send Us a Message</h3>
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
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea id="message" name="message" className="form-textarea" required placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="btn btn-p" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
