import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Payment Options for Home Care | Beyond Care Home Care Services",
  description:
    "Beyond Care accepts private pay, long-term care insurance, CLTC, Medicaid Waiver, VA Benefits, and vouchers. Learn how to make home care work for your family's budget.",
}

const PAYMENTS = [
  {
    icon: "💳",
    title: "Private Pay",
    body: "Many families choose to pay for home care services directly. We work with families to structure a care plan that fits their needs and budget.",
  },
  {
    icon: "📋",
    title: "Long-Term Care Insurance",
    body: "If your loved one has a long-term care insurance policy, it may cover some or all home care services. We can help you understand what your policy covers and assist with the claims process.",
  },
  {
    icon: "🏛️",
    title: "Community Long Term Care (CLTC)",
    body: "South Carolina's CLTC program helps eligible individuals receive home and community-based services. Contact us to discuss whether your loved one may qualify.",
  },
  {
    icon: "🏥",
    title: "Medicaid Waiver",
    body: "Medicaid waiver programs can help cover the cost of home care for qualifying individuals. Beyond Care works with families to navigate waiver eligibility and enrollment.",
  },
  {
    icon: "🎖️",
    title: "VA Benefits",
    body: "Veterans and their spouses may qualify for VA-funded home care services. We work with families to understand and access applicable veteran benefits.",
  },
  {
    icon: "📄",
    title: "Vouchers",
    body: "Certain voucher programs may be available for qualifying individuals and families. Contact us to learn whether a voucher program applies to your situation.",
  },
]

export default function PaymentOptionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow page-hero-eyebrow">Payment Options</span>
            <h1>Flexible Payment and Coverage Options</h1>
            <p className="lead" style={{ marginTop: 16 }}>
              We work with families using a variety of payment arrangements to help make quality home care accessible.
              Quality care should not be out of reach — we will help you understand every option available to you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid-3" style={{ gap: 24 }}>
              {PAYMENTS.map(p => (
                <div key={p.title} className="card">
                  <div style={{ fontSize: "1.75rem", marginBottom: 16 }}>{p.icon}</div>
                  <h4 style={{ color: "var(--teal)", marginBottom: 10 }}>{p.title}</h4>
                  <p style={{ fontSize: ".9375rem" }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow">Not Sure Where to Start?</span>
              <h2>We Can Help You Navigate Your Options</h2>
              <p style={{ marginTop: 12, marginBottom: 32 }}>
                Understanding payment and coverage options can feel overwhelming. Call us — our team can walk you
                through what is available based on your loved one&apos;s specific situation.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/schedule-consultation" className="btn btn-p">Request a Free Consultation</a>
                <a href="tel:8648412500" className="btn btn-o">Call (864) 841-2500</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
