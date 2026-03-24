import type { Metadata } from "next"
import Link from "next/link"
import { PHONES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Caregiver Careers in South Carolina | Beyond Care Home Care Services",
  description:
    "Join the Beyond Care team. Competitive pay, weekly pay, health insurance, paid training, and flexible scheduling for caregivers in Upstate South Carolina.",
}

const BENEFITS = [
  {
    title: "Competitive Pay",
    body: "We offer competitive wages that reflect the value of the work our caregivers do every day.",
  },
  {
    title: "Weekly Pay",
    body: "Get paid every week — no waiting. We know your time and work are valuable.",
  },
  {
    title: "Health Insurance",
    body: "Health insurance benefits are available to all employees upon hire.",
  },
  {
    title: "Paid Training",
    body: "We invest in your development with paid orientation, in-service training, and continuing education.",
  },
  {
    title: "Flexible Scheduling",
    body: "We work with your availability to build a schedule that fits your life — full time or part time.",
  },
  {
    title: "Meaningful Work",
    body: "Make a real difference in someone's daily life. The work is personal, impactful, and genuinely rewarding.",
  },
]

const POSITIONS = [
  {
    title: "Home Care Aide",
    href: "/careers/caregiver-jobs",
    desc: "Provide personal care, companion care, and household support to clients in their homes throughout Upstate SC.",
  },
  {
    title: "Companion Caregiver",
    href: "/careers/caregiver-jobs",
    desc: "Build meaningful daily relationships with seniors and adults who benefit from consistent, caring company.",
  },
  {
    title: "Overnight Caregiver",
    href: "/careers/caregiver-jobs",
    desc: "Provide overnight monitoring, safety support, and personal care for clients with higher-level needs.",
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Careers</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Join the Beyond Care Team
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              We are looking for compassionate, dependable caregivers to join our team in Upstate South Carolina.
              Competitive pay, real benefits, and work that actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Why Beyond Care</span>
            <h2 className="h-lg mt-2">Why Caregivers Choose Us</h2>
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {BENEFITS.map(b => (
              <div key={b.title} className="card">
                <h3 className="h-sm text-teal-brand mb-2">{b.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.75 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Open Positions</span>
            <h2 className="h-lg mt-2">We Are Currently Hiring</h2>
          </div>
          <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
            {POSITIONS.map(p => (
              <div key={p.title} className="card" style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "space-between" }}>
                <div>
                  <h3 className="h-sm text-ink mb-1">{p.title}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.65 }}>{p.desc}</p>
                </div>
                <Link href={p.href} className="btn-teal" style={{ flexShrink: 0 }}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Ready to Apply?</span>
            <h2 className="h-lg mt-2 mb-4">Take the First Step Today</h2>
            <p className="body-lg text-muted mb-6">
              Start your application online or call our careers line to learn more about available positions
              and what working at Beyond Care looks like.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://2920.axiscare.com" target="_blank" rel="noopener noreferrer" className="btn-coral">Apply Online</a>
              <Link href="/careers/apply" className="btn-outline">Application Form</Link>
              <a href={PHONES.careersHref} className="btn-outline">{PHONES.careers}</a>
            </div>
            <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
              <Link href="/careers/caregiver-jobs" className="link-cta-teal">View Caregiver Jobs</Link>
              <Link href="/careers/benefits-training" className="link-cta-teal">Benefits &amp; Training</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
