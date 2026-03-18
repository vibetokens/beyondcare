import type { Metadata } from "next"
import Link from "next/link"
import { PAYMENT_OPTIONS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Payment Options for Home Care | Beyond Care Home Care Services",
  description:
    "Beyond Care accepts private pay, long-term care insurance, CLTC, Medicaid Waiver, VA Benefits, and vouchers. Learn how to make home care work for your family's budget.",
}

const PAYMENT_DETAILS = [
  {
    title: "Private Pay",
    href: "/payment-options/private-pay",
    body: "Many families choose to pay for home care directly. We work with you to structure a care plan that fits your needs and budget, with no hidden fees or surprises.",
  },
  {
    title: "Long-Term Care Insurance",
    href: "/payment-options/long-term-care-insurance",
    body: "If your loved one has a long-term care insurance policy, it may cover some or all of our services. We can help you understand your policy and assist with the claims process.",
  },
  {
    title: "Community Long Term Care (CLTC)",
    href: "/payment-options",
    body: "South Carolina's CLTC program helps eligible individuals receive home and community-based services. Contact us to discuss whether your loved one may qualify.",
  },
  {
    title: "Medicaid Waiver",
    href: "/payment-options/medicaid-waiver",
    body: "Medicaid waiver programs can help cover the cost of home care for qualifying individuals. Our team can help families navigate waiver eligibility and enrollment.",
  },
  {
    title: "VA Benefits",
    href: "/payment-options/va-benefits",
    body: "Veterans and surviving spouses may qualify for VA-funded home care through Aid & Attendance or other programs. We will help you understand and access your benefits.",
  },
  {
    title: "Vouchers",
    href: "/payment-options",
    body: "Certain voucher programs may be available for qualifying individuals and families. Contact us to learn whether a voucher program applies to your situation.",
  },
]

export default function PaymentOptionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Payment Options</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Flexible Payment &amp; Coverage Options
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              We work with families using a variety of payment arrangements to help make quality home care
              accessible. Quality care should not be out of reach — we will help you understand every option.
            </p>
          </div>
        </div>
      </section>

      {/* Payment cards */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-3" style={{ gap: 24 }}>
            {PAYMENT_DETAILS.map(p => (
              <div key={p.title} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <h3 className="h-sm text-teal-brand mb-3">{p.title}</h3>
                <p className="text-muted mb-4" style={{ flex: 1, lineHeight: 1.75 }}>{p.body}</p>
                {p.href !== "/payment-options" ? (
                  <Link href={p.href} className="link-cta-teal">Learn More</Link>
                ) : (
                  <Link href="/schedule-consultation" className="link-cta-teal">Ask Us About This</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation help */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Not Sure Where to Start?</span>
            <h2 className="h-lg mt-2 mb-4">We Can Help You Navigate Your Options</h2>
            <p className="body-lg text-muted mb-6">
              Understanding payment and coverage can feel overwhelming. Call us — our team will walk you through
              what is available based on your loved one&apos;s specific situation. There is no cost or obligation.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
              <a href="tel:8648412500" className="btn-outline">(864) 841-2500</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
