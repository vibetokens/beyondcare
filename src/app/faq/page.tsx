import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Beyond Care Home Care Services",
  description:
    "Common questions about Beyond Care's home care services in Upstate South Carolina — answered clearly and honestly. From costs to caregivers to getting started.",
}

const FAQ = [
  {
    q: "What is non-medical home care?",
    a: "Non-medical home care includes personal assistance, companionship, and household support — but not skilled nursing, therapy, or medical treatments. Beyond Care provides services like bathing assistance, meal preparation, transportation, and companion care to help clients live safely and comfortably at home.",
  },
  {
    q: "What services does Beyond Care provide?",
    a: "We provide personal care, companion care, respite care, meal preparation, light housekeeping, transportation, medication reminders, hospital discharge support, mobility and transfer assistance, overnight care, and 24-hour home care. Care plans are tailored to each client's needs.",
  },
  {
    q: "What areas does Beyond Care serve?",
    a: "We serve families throughout Upstate South Carolina, including Anderson County, Greenville County, Abbeville County, Pickens County, and Greenwood County. Our two offices are located in Honea Path and Williamston, SC. Call us to confirm coverage in your specific area.",
  },
  {
    q: "How much does home care cost?",
    a: "Costs vary based on the type of care, number of hours, and frequency of visits. We offer a free consultation to discuss your needs and review all available payment options — including private pay, long-term care insurance, Medicaid Waiver, VA Benefits, and CLTC. No commitment required.",
  },
  {
    q: "Are Beyond Care caregivers employees or contractors?",
    a: "All of our caregivers are employees of Beyond Care — not independent contractors or agency referrals. This means they are bonded, insured, covered by workers' compensation, CPR certified, background-checked, and subject to our ongoing training and performance evaluations.",
  },
  {
    q: "How do you select and screen caregivers?",
    a: "We use a selective hiring process that includes background checks, interviews, reference verification, and orientation to our care standards. Caregivers complete required CPR certification, in-service training, and regular skills assessments. Our nurse-led team oversees quality monitoring.",
  },
  {
    q: "Can we choose or change our caregiver?",
    a: "Yes. We work to match clients with caregivers based on skills, personality, and compatibility. If a match is not working for any reason, we will work with your family to find a better fit. Your loved one's comfort is the priority.",
  },
  {
    q: "What if our needs change over time?",
    a: "Care plans are designed to evolve. As your loved one's needs change, we adjust the plan — adding or reducing services, modifying schedules, or increasing hours. We maintain regular communication with families and monitor care continuously.",
  },
  {
    q: "Do you provide care on weekends, evenings, or holidays?",
    a: "Yes. We offer flexible scheduling including weekends, evenings, and holiday coverage. For clients with higher-level needs, we also offer overnight and 24-hour care options.",
  },
  {
    q: "How do I get started?",
    a: "The first step is a free consultation — by phone or in person. We will learn about your loved one's situation, answer your questions, and discuss what a care plan might look like. There is no obligation and no pressure. Call (864) 841-2500 or fill out our online consultation request.",
  },
  {
    q: "Does Beyond Care accept Medicaid or VA benefits?",
    a: "Yes. We work with families using Medicaid Waiver programs, VA benefits (including Aid & Attendance), Community Long Term Care (CLTC), and long-term care insurance. Contact us to discuss which programs your loved one may qualify for.",
  },
  {
    q: "Who owns and operates Beyond Care?",
    a: "Beyond Care is owned and operated by Sarah Atkin, RN, BSN, a Registered Nurse with over 20 years of nursing experience. Sarah is personally involved in daily operations, client oversight, and caregiver management — not a distant corporate owner.",
  },
]

export default function FaqPage() {
  return (
    <>
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

      {/* FAQ list */}
      <section className="section bg-white">
        <div className="wrap">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {FAQ.map(({ q, a }, idx) => (
              <div key={q} style={{
                padding: "28px 0",
                borderBottom: idx < FAQ.length - 1 ? "1px solid var(--rule)" : "none",
              }}>
                <h2 className="h-sm text-teal-brand mb-3">{q}</h2>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-teal-pale">
        <div className="wrap text-center">
          <span className="eyebrow">Still Have Questions?</span>
          <h2 className="h-lg mt-2 mb-4">We Are Happy to Talk</h2>
          <p className="body-lg text-muted mb-6">
            Call us anytime during business hours or request a free consultation — we are glad to answer
            any question you have about home care and whether Beyond Care is the right fit.
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
