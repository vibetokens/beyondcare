import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Family Resources | Beyond Care Home Care Services",
  description:
    "Guides and articles to help South Carolina families understand home care options, recognize when care is needed, and prepare for the process.",
}

const RESOURCES = [
  {
    title: "Home Care vs. Home Health: What Is the Difference?",
    slug: "home-care-vs-home-health",
    category: "Understanding Care",
    excerpt:
      "Many families confuse non-medical home care with home health care — they serve very different purposes. Understanding the difference helps you find the right support at the right time.",
  },
  {
    title: "When It May Be Time for Home Care",
    slug: "when-its-time",
    category: "Family Guides",
    excerpt:
      "Recognizing the signs that a loved one needs additional support at home can be difficult. This guide walks through common indicators families often notice before seeking help.",
  },
  {
    title: "How to Prepare for Your Home Care Consultation",
    slug: "preparing-for-consultation",
    category: "Getting Started",
    excerpt:
      "Knowing what to bring and what to ask helps make your first conversation with a home care provider much more productive. Here is what to think about beforehand.",
  },
  {
    title: "Recognizing Signs of Caregiver Burnout",
    slug: "signs-of-caregiver-burnout",
    category: "Caregiver Wellness",
    excerpt:
      "Family caregivers often put themselves last. This guide covers the warning signs of burnout and what families can do — including how respite care can help everyone.",
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Resources</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Family Resources Hub
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Practical guides to help families in South Carolina understand home care, recognize when support
              is needed, and navigate the process with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 24 }}>
            {RESOURCES.map(r => (
              <div key={r.slug} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div className="eyebrow mb-2">{r.category}</div>
                <h2 className="h-sm text-ink mb-3">{r.title}</h2>
                <p className="text-muted mb-5" style={{ lineHeight: 1.75, flex: 1 }}>{r.excerpt}</p>
                <Link href={`/resources/${r.slug}`} className="link-cta-teal">Read Article</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional links */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div className="text-center mb-8">
            <span className="eyebrow">More Information</span>
            <h2 className="h-lg mt-2">Other Helpful Pages</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {[
              { title: "How Care Works", href: "/how-care-works", desc: "Our 5-step care process explained simply." },
              { title: "FAQ",            href: "/faq",            desc: "Answers to the questions families ask most." },
              { title: "Payment Options",href: "/payment-options",desc: "Private pay, insurance, Medicaid, VA, and more." },
            ].map(l => (
              <div key={l.href} className="card text-center">
                <h3 className="h-sm text-teal-brand mb-2">{l.title}</h3>
                <p className="text-muted mb-4" style={{ fontSize: ".9375rem" }}>{l.desc}</p>
                <Link href={l.href} className="link-cta-teal">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-teal-pale">
        <div className="wrap text-center">
          <h2 className="h-lg mb-4">Have Questions We Have Not Answered?</h2>
          <p className="body-lg text-muted mb-6">
            Call us or request a free consultation. We are glad to talk through your situation
            and help you understand what options are available.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
            <a href="tel:8648412500" className="btn-outline">(864) 841-2500</a>
          </div>
        </div>
      </section>
    </>
  )
}
