import type { Metadata } from "next"
import { OFFICES, SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us | Beyond Care Home Care Services",
  description:
    "Contact Beyond Care Home Care Services in Honea Path and Williamston, SC. Call (864) 841-2500 or email service@beyondcarehc.com. Serving Upstate South Carolina.",
}

const inputStyle = {
  borderColor: "var(--rule)",
  fontFamily: "var(--font-sans)",
} as const

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Contact</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              We&apos;re Here to Help
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Have questions about our services, coverage area, or how to get started?
              Reach out — we respond promptly and without pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>

            {/* Offices info */}
            <div>
              <h2 className="h-md mb-6">Our Offices</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                {[
                  {
                    name: OFFICES.honeaPath.name + " (Main)",
                    address: OFFICES.honeaPath.address,
                    cityLine: `${OFFICES.honeaPath.city}, ${OFFICES.honeaPath.state} ${OFFICES.honeaPath.zip}`,
                    phone: `(864) 841-2500`,
                    phoneHref: OFFICES.honeaPath.phoneHref,
                  },
                  {
                    name: OFFICES.williamston.name,
                    address: OFFICES.williamston.address,
                    cityLine: `${OFFICES.williamston.city}, ${OFFICES.williamston.state} ${OFFICES.williamston.zip}`,
                    phone: `(864) 369-0222`,
                    phoneHref: OFFICES.honeaPath.phoneHref,
                  },
                ].map(o => (
                  <div key={o.name} className="card">
                    <h3 className="h-sm text-teal-brand mb-2">{o.name}</h3>
                    <address style={{ fontStyle: "normal", marginBottom: 12, color: "var(--muted)", lineHeight: 1.6 }}>
                      {o.address}<br />
                      {o.cityLine}
                    </address>
                    <a href={o.phoneHref} className="text-teal-brand font-bold" style={{ fontSize: "1.0625rem" }}>{o.phone}</a>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div className="eyebrow mb-1">Email</div>
                  <a href={`mailto:${SITE.serviceEmail}`} className="text-teal-brand font-semibold">{SITE.serviceEmail}</a>
                </div>
                <div>
                  <div className="eyebrow mb-1">Office Hours</div>
                  <p className="text-ink">Monday – Friday, 8:00 AM – 4:00 PM</p>
                  <p className="text-muted" style={{ fontSize: ".875rem", marginTop: 4 }}>After hours: on-call staff for urgent matters</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="h-md mb-6">Send Us a Message</h2>
              <form action="https://formspree.io/f/placeholder" method="POST">
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="flex flex-col gap-1.5 mb-5">
                    <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="fname">First Name *</label>
                    <input
                      id="fname" name="fname" type="text" required
                      className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 mb-5">
                    <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="lname">Last Name *</label>
                    <input
                      id="lname" name="lname" type="text" required
                      className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="email">Email Address *</label>
                  <input
                    id="email" name="email" type="email" required
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="How can we help you?"
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <button type="submit" className="btn-coral w-full" style={{ justifyContent: "center" }}>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
