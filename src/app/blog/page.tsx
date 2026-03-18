import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home Care Blog | Beyond Care Home Care Services",
  description:
    "Articles, guides, and practical tips for families navigating in-home care in South Carolina. From Beyond Care Home Care Services.",
}

const ARTICLES = [
  {
    title: "5 Signs It May Be Time to Consider Home Care for a Parent",
    slug: "signs-time-home-care",
    date: "Coming Soon",
    excerpt:
      "Recognizing when a loved one needs extra support is not always easy. These five signs can help families have an earlier, more productive conversation about in-home care options.",
    category: "Family Guides",
  },
  {
    title: "Home Care vs. Home Health: What Is the Difference?",
    slug: "home-care-vs-home-health",
    date: "Coming Soon",
    excerpt:
      "Many families confuse home care with home health care — but they serve very different purposes. Understanding the difference helps you find the right support for your loved one.",
    category: "Understanding Care",
  },
  {
    title: "How to Prepare for Your First Home Care Consultation",
    slug: "preparing-for-consultation",
    date: "Coming Soon",
    excerpt:
      "Knowing what to bring and what to ask makes your first consultation more productive. Here is a practical guide to getting the most out of your initial conversation with a home care provider.",
    category: "Getting Started",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Blog</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Articles &amp; Guides for Families
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Practical information about home care, caregiving, and navigating in-home support in South Carolina.
              New articles coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Coming Soon</span>
            <h2 className="h-lg mt-2 mb-4">New Articles on the Way</h2>
            <p className="body-lg text-muted">
              We are building out our resource library with practical guides for families in South Carolina who
              are navigating home care for the first time. In the meantime, explore our existing resources below
              or give us a call — we are always happy to answer questions directly.
            </p>
          </div>
        </div>
      </section>

      {/* Article previews */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-10">
            <span className="eyebrow">Upcoming Articles</span>
            <h2 className="h-lg mt-2">What We Are Writing</h2>
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {ARTICLES.map(a => (
              <div key={a.slug} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div className="eyebrow mb-2">{a.category}</div>
                <h3 className="h-sm text-ink mb-3" style={{ flex: 1 }}>{a.title}</h3>
                <p className="text-muted mb-4" style={{ lineHeight: 1.75, fontSize: ".9375rem" }}>{a.excerpt}</p>
                <span className="text-muted" style={{ fontSize: ".8125rem", fontWeight: 600 }}>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to resources */}
      <section className="section bg-canvas">
        <div className="wrap text-center">
          <h2 className="h-lg mb-4">Looking for Resources Now?</h2>
          <p className="body-lg text-muted mb-6">
            Our resources hub includes guides about when to consider home care, what to expect from a
            consultation, and other topics for families.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/resources" className="btn-teal">Browse Resources</Link>
            <Link href="/faq" className="btn-outline">Read Our FAQ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
