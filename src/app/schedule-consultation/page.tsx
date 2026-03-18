import type { Metadata } from "next"
import { OFFICES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Request a Free Consultation | Beyond Care Home Care Services",
  description:
    "Schedule a free, no-obligation consultation with Beyond Care Home Care Services. We serve Upstate South Carolina families. Call (864) 841-2500 or fill out our form.",
}

const inputStyle = {
  borderColor: "var(--rule)",
  fontFamily: "var(--font-sans)",
} as const

export default function ScheduleConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Get Started</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Request a Free Consultation
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Whether you are planning ahead or need help right now, we are here.
              Fill out the form below or call us directly — no obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Form + side info */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>

            {/* Form */}
            <div>
              <h2 className="h-md mb-6">Tell Us About Your Needs</h2>
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
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="city">City / Area</label>
                  <input
                    id="city" name="city" type="text"
                    placeholder="e.g., Honea Path, Williamston, Anderson..."
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="services">Services of Interest</label>
                  <select
                    id="services" name="services"
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  >
                    <option value="">Select a service...</option>
                    <option>Personal Care</option>
                    <option>Companion Care</option>
                    <option>Respite Care</option>
                    <option>Meal Preparation</option>
                    <option>Light Housekeeping</option>
                    <option>Transportation</option>
                    <option>Medication Reminders</option>
                    <option>Hospital Discharge Support</option>
                    <option>24-Hour Home Care</option>
                    <option>Overnight Care</option>
                    <option>Multiple / Not Sure</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="message">Tell Us More (Optional)</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Share any details that would help us prepare for your consultation..."
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <button type="submit" className="btn-coral w-full" style={{ justifyContent: "center", fontSize: "1rem", padding: "16px" }}>
                  Submit Request
                </button>
              </form>
            </div>

            {/* Side info */}
            <div>
              <h2 className="h-md mb-6">Prefer to Call?</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                {[
                  {
                    label: OFFICES.honeaPath.name + " (Main)",
                    phone: "(864) 841-2500",
                    phoneHref: OFFICES.honeaPath.phoneHref,
                    address: OFFICES.honeaPath.full,
                  },
                  {
                    label: OFFICES.williamston.name,
                    phone: "(864) 369-0222",
                    phoneHref: OFFICES.williamston.phoneHref,
                    address: OFFICES.williamston.full,
                  },
                ].map(o => (
                  <div key={o.label} className="card">
                    <h3 className="h-sm text-teal-brand mb-2">{o.label}</h3>
                    <a href={o.phoneHref} className="text-teal-brand font-bold" style={{ fontSize: "1.125rem", display: "block", marginBottom: 6 }}>{o.phone}</a>
                    <address style={{ fontStyle: "normal", fontSize: ".875rem", color: "var(--muted)" }}>{o.address}</address>
                  </div>
                ))}
              </div>

              <div className="bg-teal-pale" style={{ borderRadius: 10, padding: 28, border: "1px solid rgba(28,122,138,.15)" }}>
                <h3 className="h-sm text-teal-brand mb-3">Office Hours</h3>
                <p className="text-ink mb-2">Monday – Friday: 8:00 AM – 4:00 PM</p>
                <p className="text-muted" style={{ fontSize: ".875rem" }}>
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
