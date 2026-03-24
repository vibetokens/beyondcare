import type { Metadata } from "next"
import { OFFICES } from "@/lib/constants"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Request a Free Consultation | Beyond Care Home Care Services",
  description:
    "Schedule a free, no-obligation consultation with Beyond Care Home Care Services. We serve Upstate South Carolina families. Call (864) 841-2500 or fill out our form.",
}


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
              <ContactForm type="consultation" />
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
