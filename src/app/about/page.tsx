import type { Metadata } from "next"
import Link from "next/link"
import { AWARDS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Beyond Care Home Care Services | Nurse-Led Home Care in South Carolina",
  description:
    "Beyond Care Home Care Services is a locally owned, nurse-led non-medical home care company serving Upstate South Carolina. Learn about our mission, values, and commitment to quality.",
}

const VALUES = [
  { title: "Honesty", body: "We communicate clearly with clients, families, and our own team. You will always know where you stand with us." },
  { title: "Accountability", body: "We follow through on what we say. Our caregivers are monitored, evaluated, and held to consistent standards." },
  { title: "Respect", body: "Every client deserves to be treated with dignity. Every family deserves to be heard." },
  { title: "Commitment", body: "We show up. We follow through. We are in this with you for the long term." },
  { title: "Compassion", body: "Care without warmth is just a transaction. We bring genuine care to every visit, every day." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>About Us</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Locally Owned. Nurse-Led.<br />Built for SC Families.
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Beyond Care was built on a simple premise: families in South Carolina deserve a home care
              provider they can genuinely trust — one that combines clinical knowledge, personal accountability,
              and real community roots.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="h-lg mt-2 mb-4">Why Beyond Care Exists</h2>
              <p className="body-lg text-muted mb-4" style={{ lineHeight: 1.8 }}>
                Beyond Care was founded on the belief that non-medical home care in South Carolina
                could be done better — with higher standards for caregivers, more personalized attention
                for clients, and a level of professional oversight that families could actually count on.
              </p>
              <p className="body-lg text-muted mb-4" style={{ lineHeight: 1.8 }}>
                Our owner, a Registered Nurse with direct experience in patient care, saw families
                struggling to find home care that was dependable, well-managed, and genuinely compassionate.
                The solution was to build it herself.
              </p>
              <p className="body-lg text-muted mb-5" style={{ lineHeight: 1.8 }}>
                Today, Beyond Care operates from two offices — Honea Path and Williamston — and serves
                families across the Upstate region.
              </p>
              <p style={{ fontStyle: "italic", fontSize: "1.0625rem", color: "var(--teal-mid)" }}>
                This is what it means to go beyond.
              </p>
            </div>
            <div className="bg-navy" style={{ borderRadius: 12, padding: 40 }}>
              <h3 className="h-sm mb-6" style={{ color: "#fff" }}>The Beyond Care Standard</h3>
              {[
                { h: "Nurse-Led Oversight", b: "Clinical background shapes how we approach care planning, caregiver oversight, and quality monitoring." },
                { h: "Employee Caregivers", b: "Every caregiver is a direct employee — bonded, insured, CPR certified, and covered by workers' compensation." },
                { h: "Individualized Planning", b: "No one-size-fits-all. Every plan is built around each client's specific needs, routines, and preferences." },
              ].map((item, idx) => (
                <div key={item.h} style={{ marginBottom: idx < 2 ? 20 : 0, paddingBottom: idx < 2 ? 20 : 0, borderBottom: idx < 2 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                  <h4 className="text-teal-light" style={{ marginBottom: 6, fontSize: ".875rem", fontWeight: 700, letterSpacing: ".04em" }}>{item.h}</h4>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".9rem", lineHeight: 1.65, margin: 0 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="h-lg mt-2">Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid-2 mb-12" style={{ maxWidth: 800, margin: "0 auto 48px", gap: 24 }}>
            <div className="card text-center">
              <h3 className="h-sm text-teal-brand mb-3">Our Mission</h3>
              <p className="text-muted">To provide compassionate, quality, individualized care to our community — improving quality of life and promoting personal independence for every client we serve.</p>
            </div>
            <div className="card text-center">
              <h3 className="h-sm text-teal-brand mb-3">Our Vision</h3>
              <p className="text-muted">To set a new standard for home care services in South Carolina.</p>
            </div>
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {VALUES.map(v => (
              <div key={v.title} className="card">
                <h4 className="h-sm text-teal-brand mb-3">{v.title}</h4>
                <p className="text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Recognition</span>
            <h2 className="h-lg mt-2">Recognized for Outstanding Care</h2>
            <p className="text-muted mt-3" style={{ maxWidth: 540, margin: "12px auto 0" }}>
              These awards are based on client and family feedback — a reflection of the trust our community has placed in us.
            </p>
          </div>
          <div className="grid-3" style={{ gap: 24, maxWidth: 860, margin: "0 auto" }}>
            {AWARDS.map(award => (
              <div key={award.label} className="card text-center" style={{ padding: "36px 24px" }}>
                <span className="material-symbols-outlined block mb-4" style={{ fontSize: 40, color: "var(--teal-brand)" }}>
                  military_tech
                </span>
                <p className="eyebrow mb-2">{award.org}</p>
                <h3 className="h-sm text-ink">{award.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team links */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
            <span className="eyebrow">Our Leadership</span>
            <h2 className="h-lg mt-2 mb-4">Nurse-Led from the Top</h2>
            <p className="body-lg text-muted mb-6">
              Beyond Care was founded by a Registered Nurse whose clinical expertise shaped the standards and
              oversight model the company runs on today. Learn more about our team and the recognition we have earned.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/about/leadership" className="btn-teal">Meet Our Leadership</Link>
              <Link href="/about/awards" className="btn-outline">Awards &amp; Recognition</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
