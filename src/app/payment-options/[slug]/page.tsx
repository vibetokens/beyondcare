import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type PaymentData = {
  title: string
  eyebrow: string
  hero: string
  intro: string
  sections: { heading: string; body: string }[]
  cta: string
}

const PAYMENT_DATA: Record<string, PaymentData> = {
  "private-pay": {
    title: "Private Pay Home Care",
    eyebrow: "Private Pay",
    hero: "Flexible, Direct Payment for Quality Home Care",
    intro:
      "Private pay — also called out-of-pocket payment — is the most straightforward way to fund home care. You pay directly for services, giving you the most flexibility and control over your care plan.",
    sections: [
      {
        heading: "What Private Pay Means",
        body:
          "Private pay home care means you pay for services directly, without going through an insurance program or government benefit. This gives you full flexibility over the type of care, the schedule, and the caregivers. There are no program eligibility requirements, no waiting periods, and no pre-authorization delays.",
      },
      {
        heading: "What It Costs",
        body:
          "The cost of home care varies based on the number of hours, types of services, and frequency of visits. We offer a free consultation to discuss your needs and provide clear, honest information about rates. We work with families to build care plans that deliver genuine value.",
      },
      {
        heading: "Why Families Choose Private Pay",
        body:
          "Many families choose private pay because it offers the fastest path to starting care, the most schedule flexibility, and no restrictions on service type. For families with existing insurance coverage, private pay may also supplement their benefits to fill in gaps.",
      },
    ],
    cta: "Request a Free Consultation to discuss private pay options and get a clear picture of costs.",
  },
  "long-term-care-insurance": {
    title: "Long-Term Care Insurance for Home Care",
    eyebrow: "Long-Term Care Insurance",
    hero: "Using Your LTC Policy for In-Home Care",
    intro:
      "If your loved one has a long-term care insurance policy, it may cover some or all of the cost of non-medical home care. Beyond Care works with families to understand their policy benefits and navigate the claims process.",
    sections: [
      {
        heading: "How Long-Term Care Insurance Works",
        body:
          "Long-term care insurance (LTCI) policies typically pay a daily or monthly benefit to cover the cost of home care, assisted living, or nursing home care. Benefit eligibility is generally triggered by an inability to perform two or more Activities of Daily Living (ADLs) or by cognitive impairment. Each policy has specific coverage terms, elimination periods, and benefit amounts.",
      },
      {
        heading: "What Most Policies Cover",
        body:
          "Most LTCI policies cover non-medical home care services including personal care, companion care, and homemaker services — exactly the type of care Beyond Care provides. The specific services and amounts covered vary by policy. We recommend reviewing your policy documents or contacting your insurance company to confirm your benefits.",
      },
      {
        heading: "How We Help",
        body:
          "Beyond Care works with families who have long-term care insurance regularly. We can provide the documentation your insurance company requires, work with care coordinators, and help ensure that claims are submitted accurately and promptly. We have experience navigating the LTC insurance claims process and are happy to guide you through it.",
      },
      {
        heading: "Getting Started",
        body:
          "Contact us with your insurance company's name and your policy number. We will help verify benefits, confirm what services are covered, and get care started as quickly as possible.",
      },
    ],
    cta: "Call us or request a consultation to discuss using your long-term care insurance with Beyond Care.",
  },
  "medicaid-waiver": {
    title: "Medicaid Waiver Home Care in South Carolina",
    eyebrow: "Medicaid Waiver",
    hero: "Medicaid Waiver Programs for Home Care",
    intro:
      "South Carolina's Medicaid waiver programs help eligible individuals receive home and community-based services rather than entering a nursing facility. Beyond Care works with families to understand and access these programs.",
    sections: [
      {
        heading: "What Is the Medicaid Waiver?",
        body:
          "Medicaid Home and Community-Based Services (HCBS) waivers allow states to use Medicaid funding to pay for services that help people live at home rather than in institutions. South Carolina administers several waiver programs that may cover non-medical home care services for qualifying individuals.",
      },
      {
        heading: "Who May Qualify?",
        body:
          "Medicaid waiver eligibility depends on financial criteria (income and asset limits) and functional criteria (level of care need). Eligibility is determined by the state. Generally, applicants must be Medicaid-eligible and meet a certain level of care need. A care assessment is typically required.",
      },
      {
        heading: "The Community Long Term Care (CLTC) Program",
        body:
          "South Carolina's CLTC program is a primary pathway for receiving home care under Medicaid. It is designed to help individuals who would otherwise require nursing home care receive services in their own homes. The program includes case management and authorized home care hours.",
      },
      {
        heading: "How Beyond Care Can Help",
        body:
          "Beyond Care works with families navigating waiver programs. We can help you understand the eligibility process, connect you with appropriate resources, and provide care once your waiver is approved. Contact us to discuss your situation and what steps to take.",
      },
    ],
    cta: "Contact us to discuss Medicaid waiver options and whether your loved one may qualify.",
  },
  "va-benefits": {
    title: "VA Benefits for Home Care in South Carolina",
    eyebrow: "VA Benefits",
    hero: "Home Care Benefits for Veterans and Surviving Spouses",
    intro:
      "Veterans and their surviving spouses may qualify for VA-funded home care through programs like Aid & Attendance or VA Community Care. Beyond Care helps veteran families understand and access these benefits.",
    sections: [
      {
        heading: "Aid & Attendance Benefit",
        body:
          "The VA Aid & Attendance (A&A) benefit provides additional pension income to eligible wartime veterans and their surviving spouses who need help with daily activities. The benefit can be used to pay for in-home care services, assisted living, or nursing home care. A&A is one of the most significant VA programs available for families needing home care.",
      },
      {
        heading: "Who Qualifies for Aid & Attendance?",
        body:
          "To qualify, veterans must have served at least 90 days of active duty with at least one day during a period of war, have an honorable discharge, meet financial eligibility requirements, and require assistance with activities of daily living. Surviving spouses of qualifying veterans may also be eligible. An accredited VA claims agent or VA benefits specialist can help determine eligibility.",
      },
      {
        heading: "VA Community Care Program",
        body:
          "Eligible veterans may also receive non-institutional care through VA Community Care programs. These programs allow veterans to receive care from community providers — including non-medical home care — when the VA determines it is appropriate. Eligibility and coverage vary.",
      },
      {
        heading: "How We Help Veteran Families",
        body:
          "Beyond Care is committed to supporting the veteran community in Upstate South Carolina. We work with families to understand their VA benefits, help document care needs for claims purposes, and provide high-quality home care once benefits are established. Contact us to discuss your situation.",
      },
    ],
    cta: "Call us to discuss VA benefit options and how Beyond Care can help a veteran in your family.",
  },
}

const VALID_SLUGS = ["private-pay", "long-term-care-insurance", "medicaid-waiver", "va-benefits"]

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const data = PAYMENT_DATA[slug]
  if (!data) return {}
  return {
    title: `${data.title} | Beyond Care Home Care Services`,
    description: `${data.intro.substring(0, 150)}...`,
  }
}

export default async function PaymentOptionPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const data = PAYMENT_DATA[slug]
  if (!data) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>{data.eyebrow}</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              {data.hero}
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              {data.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="section bg-white">
        <div className="wrap">
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
            {data.sections.map(s => (
              <div key={s.heading}>
                <h2 className="h-md text-teal-brand mb-4">{s.heading}</h2>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA box */}
      <section className="section bg-teal-pale">
        <div className="wrap">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Get Started</span>
            <h2 className="h-lg mt-2 mb-4">Ready to Discuss Payment Options?</h2>
            <p className="body-lg text-muted mb-6">{data.cta}</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
              <a href="tel:8648412500" className="btn-outline">(864) 841-2500</a>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="wrap" style={{ paddingTop: 16, paddingBottom: 32 }}>
        <Link href="/payment-options" className="link-cta-teal">&#8592; All Payment Options</Link>
      </div>
    </>
  )
}
