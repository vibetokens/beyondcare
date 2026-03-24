import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home Care Blog | Beyond Care Home Care Services",
  description:
    "Articles, guides, and practical tips for families navigating in-home care in South Carolina. From Beyond Care Home Care Services.",
}

const ALL_POSTS = [
  {
    slug: "home-care-seniors-independence-south-carolina",
    title: "How Home Care Helps Seniors Stay Independent in South Carolina",
    date: "March 18, 2026",
    category: "Senior Independence",
    description:
      "In-home care supports independence for South Carolina seniors — learn how non-medical home care helps aging adults stay safe, comfortable, and in control at home.",
  },
  {
    slug: "signs-parent-needs-help-at-home",
    title: "7 Signs Your Parent May Need Help at Home",
    date: "March 11, 2026",
    category: "Family Guides",
    description:
      "Not sure if your parent needs in-home care? These 7 signs can help South Carolina families recognize when it is time to explore home care support.",
  },
  {
    slug: "home-care-vs-home-health-families",
    title: "Home Care vs Home Health — What Every Family Should Understand",
    date: "March 4, 2026",
    category: "Understanding Care",
    description:
      "Home care and home health are not the same. Learn the key differences and what each type of service covers — so you can make the right decision for your loved one.",
  },
  {
    slug: "in-home-support-after-hospital-stay",
    title: "Coming Home From the Hospital — Why In-Home Support Matters",
    date: "February 25, 2026",
    category: "Hospital Discharge",
    description:
      "The weeks after a hospital discharge are high-risk for seniors. Learn how in-home care reduces readmission risk and supports safer recovery at home in South Carolina.",
  },
  {
    slug: "when-is-right-time-to-start-home-care",
    title: "When Is the Right Time to Start Home Care?",
    date: "February 18, 2026",
    category: "Getting Started",
    description:
      "Many families wait too long to start home care. Learn when the right time actually is — and why earlier is almost always better for seniors in South Carolina.",
  },
  {
    slug: "why-companion-care-matters-senior-wellbeing",
    title: "Why Companion Care for Seniors Is More Than Just Keeping Them Company",
    date: "February 11, 2026",
    category: "Companion Care",
    description:
      "Loneliness is a serious health risk for older adults. Learn why companion care for seniors in South Carolina is more than comfort — it is a meaningful health intervention.",
  },
  {
    slug: "what-to-expect-home-care-consultation",
    title: "What to Expect During a Home Care Consultation",
    date: "February 4, 2026",
    category: "Getting Started",
    description:
      "Wondering what happens during a home care consultation? Learn what Beyond Care covers, what questions to ask, and how to prepare for your first meeting.",
  },
  {
    slug: "fall-prevention-tips-seniors-at-home",
    title: "Fall Prevention Tips for Seniors Living at Home",
    date: "January 27, 2026",
    category: "Safety",
    description:
      "Falls are the leading cause of injury in older adults. These fall prevention tips can help South Carolina seniors stay safer at home — with or without home care support.",
  },
  {
    slug: "why-medication-reminders-matter-seniors",
    title: "Why Medication Reminders Are One of the Most Important Home Care Services",
    date: "January 20, 2026",
    category: "Health Management",
    description:
      "Medication errors are among the most common — and preventable — causes of health decline in seniors. Learn why medication reminders are a critical component of home care.",
  },
  {
    slug: "what-professional-caregivers-help-with-day-to-day",
    title: "What a Professional Caregiver Actually Does Each Day",
    date: "January 13, 2026",
    category: "Our Services",
    description:
      "What does a home care caregiver actually do during a visit? Learn what daily professional caregiver support looks like from Beyond Care in South Carolina.",
  },
  {
    slug: "why-cpr-certified-caregivers-matter",
    title: "Why CPR Certification in a Home Caregiver Is a Standard That Matters",
    date: "January 6, 2026",
    category: "Caregiver Standards",
    description:
      "CPR certification in a home caregiver is more than a credential — it is a critical safety standard. Learn why it matters and how Beyond Care trains its team.",
  },
  {
    slug: "how-family-caregivers-avoid-burnout",
    title: "How Family Caregivers Can Protect Themselves From Burnout",
    date: "December 17, 2025",
    category: "Family Caregivers",
    description:
      "Family caregiver burnout is real — and common. Learn the warning signs and practical steps that help South Carolina family caregivers protect their own health and sustain care.",
  },
  {
    slug: "transportation-support-seniors-more-than-a-ride",
    title: "Senior Transportation — Why It Is About More Than Getting From Here to There",
    date: "December 9, 2025",
    category: "Transportation",
    description:
      "When seniors lose access to transportation, health suffers. Learn how caregiver-provided transportation in South Carolina supports independence and health access.",
  },
  {
    slug: "what-respite-care-gives-back-to-families",
    title: "What Respite Care Actually Gives Back to Families",
    date: "December 2, 2025",
    category: "Respite Care",
    description:
      "Respite care is not just a break — it is what makes sustainable family caregiving possible. Learn how respite care from Beyond Care in South Carolina supports the whole family.",
  },
  {
    slug: "families-choosing-aging-in-place-support",
    title: "Why Aging in Place Has Become the Preferred Choice for South Carolina Families",
    date: "November 19, 2025",
    category: "Aging in Place",
    description:
      "Aging in place is not just a trend — it is what most seniors want. Learn why in-home care is making it possible for more South Carolina families.",
  },
  {
    slug: "senior-nutrition-at-home-small-habits",
    title: "Senior Nutrition at Home — Why It Matters and How to Support It",
    date: "November 11, 2025",
    category: "Health & Wellness",
    description:
      "Poor nutrition is a leading driver of health decline in older adults. Learn practical nutrition tips for seniors at home — and how home care supports better eating habits.",
  },
  {
    slug: "early-memory-changes-when-families-should-pay-attention",
    title: "Early Memory Changes — What Families Should Watch For",
    date: "October 28, 2025",
    category: "Memory Care",
    description:
      "Memory changes in aging parents can be easy to dismiss. Learn which early signs warrant attention — and how in-home support helps South Carolina families manage safely.",
  },
  {
    slug: "home-care-supports-mobility-daily-confidence",
    title: "How Home Care Supports Senior Mobility and Daily Confidence",
    date: "October 14, 2025",
    category: "Personal Care",
    description:
      "Mobility challenges affect everything — from fall risk to independence and emotional well-being. Learn how home care from Beyond Care supports safer daily movement for seniors.",
  },
  {
    slug: "why-social-connection-matters-later-life",
    title: "Why Social Connection Remains One of the Most Important Health Factors in Later Life",
    date: "September 30, 2025",
    category: "Senior Well-Being",
    description:
      "Social connection is not a luxury for seniors — it is a health requirement. Learn why companionship and engagement matter deeply to senior well-being in South Carolina.",
  },
  {
    slug: "light-housekeeping-improves-safety-seniors",
    title: "How Light Housekeeping Makes a Senior's Home Safer",
    date: "September 16, 2025",
    category: "Home Safety",
    description:
      "A tidy home is a safer home. Learn how light housekeeping from a home care caregiver supports fall prevention and daily health for seniors in South Carolina.",
  },
  {
    slug: "emotional-benefits-staying-at-home-seniors",
    title: "The Emotional Benefits of Staying Home — What Families Should Understand",
    date: "September 2, 2025",
    category: "Aging in Place",
    description:
      "Home is more than a place — for seniors, it is independence, memory, and identity. Learn about the emotional benefits of aging at home with support from Beyond Care in South Carolina.",
  },
  {
    slug: "home-care-resources-families-honea-path-sc",
    title: "Home Care Resources for Families in Honea Path, South Carolina",
    date: "August 19, 2025",
    category: "Local Resources",
    description:
      "Families in Honea Path, SC looking for in-home care resources — Beyond Care Home Care Services is based in Honea Path and serves the surrounding community. Learn more.",
  },
  {
    slug: "home-care-resources-families-williamston-sc",
    title: "Home Care Resources for Families in Williamston, South Carolina",
    date: "August 5, 2025",
    category: "Local Resources",
    description:
      "Beyond Care serves families in Williamston, SC from our satellite office at 103 Belton Drive. Learn about home care services and resources available in Williamston.",
  },
  {
    slug: "upstate-south-carolina-families-choose-in-home-care",
    title: "Why Upstate South Carolina Families Are Choosing In-Home Care",
    date: "July 22, 2025",
    category: "Local Resources",
    description:
      "Families across Upstate South Carolina are increasingly choosing in-home care for seniors and adults. Learn why — and how Beyond Care supports families throughout the region.",
  },
  {
    slug: "home-care-support-veterans-families-south-carolina",
    title: "Home Care Support for Veterans in South Carolina",
    date: "July 8, 2025",
    category: "Veterans",
    description:
      "Veterans in South Carolina may qualify for VA home care benefits. Learn how Beyond Care supports veterans and how VA Aid and Attendance can help fund in-home care.",
  },
  {
    slug: "planning-care-after-surgery-rehabilitation",
    title: "How to Plan for Care After Surgery or Rehabilitation",
    date: "June 24, 2025",
    category: "Recovery Care",
    description:
      "Coming home after surgery or rehab requires a plan. Learn how in-home care from Beyond Care in South Carolina supports a safer, smoother recovery at home.",
  },
  {
    slug: "questions-ask-before-hiring-home-care-provider",
    title: "Questions to Ask Before You Hire a Home Care Provider",
    date: "June 10, 2025",
    category: "Choosing Care",
    description:
      "Not all home care providers are equal. Use these questions to evaluate and choose the right home care company for your loved one in South Carolina.",
  },
  {
    slug: "understanding-medicaid-waiver-home-care-south-carolina",
    title: "Understanding Medicaid Waiver Home Care Options in South Carolina",
    date: "May 27, 2025",
    category: "Payment Options",
    description:
      "South Carolina's Medicaid Waiver and CLTC programs may help eligible families access in-home care. Learn how these programs work and how to explore eligibility.",
  },
  {
    slug: "can-long-term-care-insurance-pay-for-home-care",
    title: "Can Long-Term Care Insurance Help Pay for Home Care? Yes — Here Is How",
    date: "May 13, 2025",
    category: "Payment Options",
    description:
      "If your loved one has a long-term care insurance policy, it may cover significant home care costs. Learn how LTC insurance works for home care in South Carolina.",
  },
  {
    slug: "how-to-make-home-safer-aging-parent",
    title: "How to Make Your Parent's Home Safer as They Age",
    date: "April 29, 2025",
    category: "Home Safety",
    description:
      "Small home modifications can dramatically reduce fall risk and improve safety for aging seniors. A practical guide for South Carolina families preparing a parent's home.",
  },
  {
    slug: "home-care-anderson-south-carolina",
    title: "Home Care in Anderson, SC — What Families Should Know",
    date: "April 15, 2025",
    category: "Local Resources",
    description:
      "Families in Anderson, South Carolina searching for in-home care services. Learn what to look for, what non-medical home care covers, and how Beyond Care serves Anderson County.",
  },
  {
    slug: "home-care-greenville-south-carolina",
    title: "In-Home Care Options in Greenville, SC — A Family Guide",
    date: "April 1, 2025",
    category: "Local Resources",
    description:
      "Greenville County families navigating in-home care options for seniors and adults. Learn what non-medical home care covers and how Beyond Care serves the Greenville area.",
  },
  {
    slug: "home-care-easley-south-carolina",
    title: "Home Care in Easley and Pickens County, SC",
    date: "March 18, 2025",
    category: "Local Resources",
    description:
      "Families in Easley and Pickens County, SC searching for in-home care. Learn how Beyond Care provides nurse-led, non-medical home care throughout the area.",
  },
  {
    slug: "dementia-home-care-south-carolina",
    title: "Home Care for Dementia and Memory Loss — A Guide for SC Families",
    date: "March 4, 2025",
    category: "Memory Care",
    description:
      "Caring for a loved one with dementia at home is possible with the right support. Learn how non-medical home care from Beyond Care helps South Carolina families manage memory care safely.",
  },
  {
    slug: "parkinsons-disease-home-care-south-carolina",
    title: "Parkinson's Disease and Home Care — What Families in SC Need to Know",
    date: "February 18, 2025",
    category: "Condition-Specific Care",
    description:
      "Parkinson's disease creates specific daily challenges. Learn how in-home care from Beyond Care helps South Carolina families manage Parkinson's safely and with dignity.",
  },
  {
    slug: "stroke-recovery-home-care-south-carolina",
    title: "Stroke Recovery at Home — How Home Care Supports the Process in SC",
    date: "February 4, 2025",
    category: "Recovery Care",
    description:
      "The recovery period after a stroke is critical. Learn how in-home non-medical care from Beyond Care helps South Carolina stroke survivors return home and rebuild daily life.",
  },
  {
    slug: "va-aid-attendance-home-care-south-carolina",
    title: "VA Aid & Attendance — How Veterans in SC Can Use It for Home Care",
    date: "January 21, 2025",
    category: "Veterans",
    description:
      "Many veterans and surviving spouses in South Carolina qualify for VA Aid & Attendance — a benefit that can pay for in-home care. Learn how it works and how to apply.",
  },
  {
    slug: "overnight-care-seniors-south-carolina",
    title: "Overnight Home Care for Seniors in South Carolina — What It Is and When You Need It",
    date: "January 7, 2025",
    category: "Our Services",
    description:
      "Some seniors need support through the night — not just during the day. Learn what overnight home care covers and when it becomes the right solution for South Carolina families.",
  },
  {
    slug: "questions-to-ask-home-care-agency-south-carolina",
    title: "10 Questions to Ask Any Home Care Agency Before You Hire Them",
    date: "December 10, 2024",
    category: "Choosing Care",
    description:
      "Not every home care agency in South Carolina is equal. Ask these 10 questions before you hire — and understand what the answers should look like.",
  },
  {
    slug: "respite-care-family-caregivers-south-carolina",
    title: "Respite Care for Family Caregivers in South Carolina — Relief That Actually Works",
    date: "November 19, 2024",
    category: "Respite Care",
    description:
      "Family caregivers in South Carolina are burning out. Learn how scheduled respite care from Beyond Care provides real, sustainable relief — without the guilt.",
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
            <h1
              className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
            >
              Articles &amp; Guides for Families
            </h1>
            <p
              className="mt-4 max-w-xl"
              style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}
            >
              Practical information about home care, caregiving, and navigating in-home support in South Carolina.
            </p>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div className="grid-3">
            {ALL_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card"
                style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
              >
                <div className="eyebrow mb-2">{post.category}</div>
                <h2 className="h-sm text-ink mb-3" style={{ flex: 1, fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                  {post.title}
                </h2>
                <p className="text-muted mb-4" style={{ lineHeight: 1.65, fontSize: ".9375rem" }}>
                  {post.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className="text-muted" style={{ fontSize: ".8125rem", fontWeight: 600 }}>
                    {post.date}
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--teal-brand)" }}>
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-deep">
        <div className="wrap text-center">
          <h2
            className="text-white font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Have Questions? We Are Here to Help.
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            Our team is available to answer your home care questions — no pressure, no obligation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-coral">Free Consultation</Link>
            <Link href="/faq" className="btn-outline-white">Read Our FAQ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
