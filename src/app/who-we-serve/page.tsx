import type { Metadata } from "next"
import Link from "next/link"
import { AUDIENCE_PAGES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Who We Serve | Beyond Care Home Care Services",
  description:
    "Beyond Care serves seniors, adults with disabilities, veterans, family caregivers, and individuals recovering from illness or surgery in Upstate South Carolina. Nurse-led, locally owned.",
}

const AUDIENCES = [
  {
    href: "/who-we-serve/seniors",
    title: "Seniors & Older Adults",
    desc: "Personalized in-home support that helps older adults live safely, comfortably, and independently at home — for as long as possible.",
    tag: "Most common",
  },
  {
    href: "/who-we-serve/aging-in-place",
    title: "Aging in Place",
    desc: "For seniors and families who want to stay at home and need the right support structure to make that possible safely.",
    tag: "",
  },
  {
    href: "/who-we-serve/family-caregivers",
    title: "Family Caregivers",
    desc: "Respite and backup care for family members who are doing the daily caregiving work and need scheduled relief and support.",
    tag: "",
  },
  {
    href: "/who-we-serve/veterans",
    title: "Veterans & Their Families",
    desc: "In-home care for veterans and surviving spouses — many of whom qualify for VA benefits that can offset or cover the cost of care.",
    tag: "VA benefits available",
  },
  {
    href: "/who-we-serve/dementia-families",
    title: "Dementia & Memory Care Families",
    desc: "Consistent, compassionate home care for loved ones with dementia — and relief for the family caregivers who carry that weight every day.",
    tag: "",
  },
  {
    href: "/who-we-serve/parkinsons-care",
    title: "Parkinson's Disease",
    desc: "In-home support tailored to the specific daily challenges of Parkinson's — mobility, fall prevention, personal care, and routine.",
    tag: "",
  },
  {
    href: "/who-we-serve/stroke-recovery",
    title: "Stroke Recovery",
    desc: "Non-medical home care that helps stroke survivors return home safely and rebuild daily confidence during the critical recovery window.",
    tag: "",
  },
  {
    href: "/who-we-serve/adults-disabilities",
    title: "Adults & Children with Disabilities",
    desc: "Practical, person-centered support for individuals with physical or intellectual disabilities — from children to adults — who benefit from in-home care.",
    tag: "",
  },
  {
    href: "/who-we-serve/hospital-discharge",
    title: "Hospital Discharge & Recovery",
    desc: "Care that starts the day your loved one comes home — reducing readmission risk and supporting a safer, smoother recovery.",
    tag: "",
  },
]

export default function WhoWeServePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Who We Serve</span>
            <h1
              className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
            >
              Care Built Around the Person,<br />Not the Condition
            </h1>
            <p
              className="mt-4 max-w-xl"
              style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}
            >
              Beyond Care serves a wide range of clients and families in Upstate South Carolina. Every care plan starts with a conversation — because no two situations are the same.
            </p>
            <div className="mt-6" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Free Consultation</Link>
              <a href="tel:8648412500" className="btn-outline-white">(864) 841-2500</a>
            </div>
          </div>
        </div>
      </section>

      {/* Audience grid */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Our Clients</span>
            <h2 className="h-lg mt-2">Who Beyond Care Helps</h2>
            <p className="body-lg text-muted mt-3" style={{ maxWidth: 600, margin: "12px auto 0" }}>
              Whether you are planning care for a parent, navigating a diagnosis, or simply looking for dependable daily support — we are here.
            </p>
          </div>
          <div className="grid-3">
            {AUDIENCES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="card"
                style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
              >
                {a.tag && (
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: ".75rem",
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "var(--teal-brand)",
                      marginBottom: 10,
                    }}
                  >
                    {a.tag}
                  </span>
                )}
                <h2 className="h-sm text-ink mb-3" style={{ flex: 1 }}>{a.title}</h2>
                <p className="text-muted mb-4" style={{ lineHeight: 1.65, fontSize: ".9375rem" }}>{a.desc}</p>
                <span className="font-bold" style={{ color: "var(--teal-brand)", fontSize: ".9375rem" }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Not Sure Where You Fit?</span>
            <h2 className="h-lg mt-2 mb-4">Just Tell Us What's Going On</h2>
            <p className="body-lg text-muted mb-6">
              You do not need to have everything figured out before you call. Most families contact us with a general concern — a parent who seems to be struggling, a discharge coming up, a spouse who needs more help than the family can provide. We take it from there.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
              <Link href="/faq" className="btn-outline">Common Questions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 32,
              textAlign: "center",
            }}
          >
            {[
              { stat: "2013", label: "Serving SC Since" },
              { stat: "Nurse-Led", label: "Owner is a Registered Nurse" },
              { stat: "2 Offices", label: "Honea Path & Williamston" },
              { stat: "5 Counties", label: "Served Across Upstate SC" },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  className="font-extrabold"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--teal-light)", lineHeight: 1.1 }}
                >
                  {item.stat}
                </div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem", marginTop: 6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
