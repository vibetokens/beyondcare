import type { Metadata } from "next"
import Link from "next/link"
import FaqAccordion from "@/components/FaqAccordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Beyond Care Home Care Services",
  description:
    "Common questions about Beyond Care's home care services in Upstate South Carolina — answered clearly and honestly. From costs to caregivers to getting started.",
}

const CATEGORIES = [
  {
    label: "Getting Started",
    items: [
      {
        q: "How do I know if my parent needs home care?",
        a: "Common signs include changes in personal hygiene, unexplained weight loss, missed medications, a messy or unsafe home, difficulty with daily tasks like cooking and dressing, or increasing social withdrawal. If you've noticed a change and found yourself worrying — trust that instinct. A free consultation with our team is a low-pressure way to talk it through.",
      },
      {
        q: "What is the first step to getting started?",
        a: "Call us or fill out our consultation request form. We'll have a no-obligation conversation to understand your situation, answer your questions, and explain what a care plan might look like. There's no commitment and no pressure — just an honest conversation.",
      },
      {
        q: "Do you offer a free consultation?",
        a: "Yes, always. We offer free consultations by phone or in person. We'll come to your home if that's helpful. Our goal is to understand what you need before we ever talk about a care plan.",
      },
      {
        q: "How quickly can care begin?",
        a: "In many situations, we can move from consultation to first care visit relatively quickly. Contact us to discuss your specific timeline — if there's urgency, we'll do everything we can to meet your needs.",
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        q: "What is non-medical home care?",
        a: "Non-medical home care includes personal assistance, companionship, and household support — but not skilled nursing, therapy, or medical treatments. Beyond Care provides services like bathing assistance, meal preparation, transportation, and companion care to help clients live safely and comfortably at home.",
      },
      {
        q: "What services does Beyond Care provide?",
        a: "We provide personal care, companion care, respite care, meal preparation, light housekeeping, transportation, medication reminders, hospital discharge support, mobility and transfer assistance, overnight care, and 24-hour home care. Every care plan is tailored to the individual client.",
      },
      {
        q: "What's the difference between home care and home health?",
        a: "Home health care is skilled medical care provided by licensed clinicians (nurses, therapists) and is typically ordered by a physician after a hospitalization. Non-medical home care — what Beyond Care provides — is daily living assistance: help with bathing, meals, companionship, transportation, and household tasks. Many families use both, often at the same time.",
      },
      {
        q: "Can caregivers help with medications?",
        a: "Our caregivers provide medication reminders — they remind clients when it's time to take their medications and assist with organizing pill boxes. They do not administer medications or make clinical decisions. If a client needs skilled medication administration, that falls under home health care.",
      },
      {
        q: "What if needs change over time?",
        a: "Care plans are designed to evolve. As your loved one's needs change, we adjust the plan — adding or reducing services, modifying schedules, or increasing hours. We stay in close contact with families and monitor care continuously.",
      },
    ],
  },
  {
    label: "Caregivers",
    items: [
      {
        q: "Are your caregivers employees or contractors?",
        a: "All of our caregivers are employees of Beyond Care — not independent contractors. This means they are bonded, insured, covered by workers' compensation, CPR certified, background-checked, and subject to our ongoing training and performance evaluations.",
      },
      {
        q: "How do you screen your caregivers?",
        a: "We use a selective hiring process that includes thorough background checks, in-person interviews, reference verification, and orientation to our care standards. Caregivers complete required CPR certification, in-service training, and regular skills assessments. Our nurse-led team oversees quality monitoring.",
      },
      {
        q: "Can we meet the caregiver before they start?",
        a: "Yes — and we encourage it. We want your loved one to feel comfortable before care begins, so we facilitate an introduction before the first visit whenever possible.",
      },
      {
        q: "What if a caregiver isn't the right fit?",
        a: "We take compatibility seriously. If a match isn't working for any reason, we'll work with your family to find a better fit. Your loved one's comfort and your family's confidence in the caregiver are the priority.",
      },
    ],
  },
  {
    label: "Coverage & Payment",
    items: [
      {
        q: "What areas do you serve?",
        a: "We serve families throughout Upstate South Carolina, including Anderson County, Greenville County, Abbeville County, Pickens County, and Greenwood County. Our two offices are in Honea Path and Williamston. Call us to confirm coverage in your specific area.",
      },
      {
        q: "How much does home care cost?",
        a: "Costs vary based on the type of care, number of hours, and frequency of visits. We offer a free consultation to discuss your needs and review all available payment options. No commitment required.",
      },
      {
        q: "Do you accept Medicaid?",
        a: "Yes. We work with families using South Carolina's Medicaid Waiver programs, including Community Long Term Care (CLTC). Contact us to discuss eligibility and how the application process works.",
      },
      {
        q: "Does VA Aid & Attendance cover home care?",
        a: "Yes. VA Aid & Attendance is a benefit that many veterans and surviving spouses qualify for — and it can help cover the cost of non-medical in-home care. We help families understand what's available and navigate the application process.",
      },
      {
        q: "Do you accept long-term care insurance?",
        a: "Yes. We work with most long-term care insurance policies. We can help you understand your policy benefits and submit the necessary documentation to your insurer.",
      },
    ],
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATEGORIES.flatMap(cat =>
    cat.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>FAQ</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Common questions about home care, our services, and how Beyond Care works —
              answered clearly and honestly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section bg-white">
        <div className="wrap" style={{ maxWidth: 800 }}>
          <FaqAccordion categories={CATEGORIES} />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-teal-pale">
        <div className="wrap text-center">
          <span className="eyebrow">Still Have Questions?</span>
          <h2 className="h-lg mt-2 mb-4">We&apos;re Happy to Talk</h2>
          <p className="body-lg text-muted mb-6">
            Call us during business hours or request a free consultation — no pressure, no obligation.
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
