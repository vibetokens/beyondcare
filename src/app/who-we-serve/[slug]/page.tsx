import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type AudienceData = {
  title: string
  eyebrow: string
  hero: string
  intro: string
  sections: { heading: string; body: string }[]
  services: string[]
  cta: string
}

const AUDIENCE_DATA: Record<string, AudienceData> = {
  "seniors": {
    title: "Home Care for Seniors",
    eyebrow: "Who We Serve",
    hero: "Home Care for Seniors &amp; Older Adults",
    intro:
      "Beyond Care helps seniors in Upstate South Carolina live safely, comfortably, and independently at home for as long as possible. Our nurse-led team provides personalized, compassionate in-home support tailored to each client's needs.",
    sections: [
      {
        heading: "Supporting Independence at Home",
        body:
          "Most seniors want to remain in their own homes as they age — and with the right support, many can. Beyond Care provides the daily assistance that makes aging in place safe and sustainable. From personal care and meal preparation to companionship and transportation, we build care plans around what each individual truly needs.",
      },
      {
        heading: "What Seniors Often Need",
        body:
          "As adults age, daily tasks that were once effortless can become challenging — bathing, dressing, cooking, managing medications, and getting around safely. Our caregivers provide hands-on assistance that preserves dignity, promotes routine, and helps prevent the accidents and hospitalizations that can result from unsupported decline.",
      },
      {
        heading: "Nurse-Led Oversight for Quality You Can Trust",
        body:
          "Our nurse-led model means that clinical oversight is built into everything we do. Our team — caregivers, coordinators, and clinical leadership — all operate to a consistent, accountable standard that families can count on.",
      },
    ],
    services: [
      "Personal Care (bathing, grooming, hygiene)",
      "Companion Care",
      "Meal Preparation",
      "Light Housekeeping",
      "Medication Reminders",
      "Transportation to appointments and errands",
      "Overnight and 24-Hour Care when needed",
    ],
    cta: "Request a free consultation to discuss how we can support your loved one at home.",
  },
  "adults-disabilities": {
    title: "Home Care for Adults with Disabilities",
    eyebrow: "Who We Serve",
    hero: "In-Home Support for Adults with Disabilities",
    intro:
      "Beyond Care provides non-medical in-home support for adults with physical disabilities, cognitive conditions, or chronic health challenges. We meet each client where they are and help them maintain as much independence and quality of life as possible.",
    sections: [
      {
        heading: "Person-Centered, Non-Medical Support",
        body:
          "Adults living with disabilities often need assistance with daily tasks but do not require skilled medical care. Beyond Care bridges that gap — providing practical, compassionate support that enables clients to remain at home, maintain their routines, and engage with their community on their own terms.",
      },
      {
        heading: "Individualized Care Plans",
        body:
          "No two clients have the same needs. We start every care relationship with a thorough consultation to understand what tasks are challenging, what routines matter, and what type of support would be most valuable. Care plans are flexible and can be adjusted as needs evolve.",
      },
      {
        heading: "Working with Families and Support Networks",
        body:
          "We collaborate with families, guardians, and existing support providers to ensure our care complements — not disrupts — the structures already in place. Clear communication and consistent caregiver assignments help build trust and familiarity for clients who rely on routine.",
      },
    ],
    services: [
      "Personal Care and hygiene assistance",
      "Mobility and Transfer Support",
      "Medication Reminders",
      "Companion Care and engagement",
      "Meal Preparation and nutrition support",
      "Transportation to appointments and activities",
      "Light Housekeeping",
    ],
    cta: "Call us to discuss how we can support an adult with a disability in your family.",
  },
  "family-caregivers": {
    title: "Support for Family Caregivers",
    eyebrow: "Who We Serve",
    hero: "Relief and Support for Family Caregivers",
    intro:
      "Family caregivers do extraordinary work — but even the most devoted family member needs rest. Beyond Care provides planned respite and backup care so that family caregivers can recharge without leaving their loved one without support.",
    sections: [
      {
        heading: "The Weight of Family Caregiving",
        body:
          "An estimated 53 million Americans provide unpaid care to a family member. The physical and emotional toll is real — burnout, health decline, and relationship strain are common among family caregivers who do not get adequate relief. Taking a break is not abandonment. It is essential.",
      },
      {
        heading: "What Respite Care Looks Like",
        body:
          "Respite care from Beyond Care can be as simple as a few hours a week so a spouse can rest or run errands, or as involved as full-day or weekend coverage while a family member travels. We work around your loved one's existing routine and preferences, and we maintain clear communication with the family throughout.",
      },
      {
        heading: "Planning Ahead vs. Emergency Respite",
        body:
          "We help families set up both scheduled respite — built into a regular care plan — and emergency or backup coverage when the unexpected happens. Planning ahead is always easier, but we understand that sometimes needs arise quickly. Contact us to discuss what kind of support would work for your situation.",
      },
    ],
    services: [
      "Respite Care (scheduled and emergency)",
      "Companion Care while you step away",
      "Personal Care during respite periods",
      "Meal Preparation and housekeeping",
      "Overnight coverage so you can sleep",
      "Weekend respite blocks",
    ],
    cta: "Request a free consultation to talk about respite care options for your family.",
  },
  "aging-in-place": {
    title: "Aging in Place Home Care",
    eyebrow: "Who We Serve",
    hero: "Aging in Place in South Carolina",
    intro:
      "Aging in place — staying in your own home as you grow older — is possible with the right support. Beyond Care helps older adults in Upstate South Carolina live safely at home by providing the personalized assistance that makes independence sustainable.",
    sections: [
      {
        heading: "Why Aging in Place Matters",
        body:
          "Research consistently shows that most people prefer to age in their own homes. Home is familiar, comfortable, and connected to the people and routines that make life meaningful. With appropriate non-medical support, many older adults can safely remain at home long past the point where they might otherwise need to consider facility care.",
      },
      {
        heading: "Making the Home Safer",
        body:
          "Part of supporting aging in place is addressing safety. Our nurse-led team can assess what services would reduce fall risk, ensure consistent nutrition and hydration, maintain a clean and organized environment, and monitor for changes that may signal a need for additional support.",
      },
      {
        heading: "Starting Early, Staying Flexible",
        body:
          "Aging in place support works best when it begins early — before a crisis occurs. Families who establish care before it is urgently needed benefit from a familiar caregiver, an established routine, and a plan that can flex as needs evolve. A few hours a week can make a significant difference.",
      },
    ],
    services: [
      "Personal Care for daily hygiene and grooming",
      "Meal Preparation and nutrition monitoring",
      "Light Housekeeping and fall prevention",
      "Medication Reminders",
      "Companion Care and social engagement",
      "Transportation to appointments and community",
      "24-Hour and Overnight Care for higher needs",
    ],
    cta: "Contact us to build an aging in place care plan for your loved one.",
  },
  "hospital-discharge": {
    title: "Home Care After Hospital Discharge",
    eyebrow: "Who We Serve",
    hero: "Safe Recovery at Home After a Hospital Stay",
    intro:
      "The period immediately after a hospital stay or surgery is critical. Beyond Care provides hospital discharge support that helps patients transition safely from facility to home — reducing the risk of readmission and supporting a smooth recovery.",
    sections: [
      {
        heading: "Why Hospital Discharge Support Matters",
        body:
          "Studies show that inadequate support during post-hospital recovery is a leading cause of hospital readmission. Patients returning home after surgery, illness, or rehabilitation often need help with personal care, medication reminders, meals, and monitoring — but do not require skilled nursing. This is exactly where Beyond Care can help.",
      },
      {
        heading: "What We Provide After Discharge",
        body:
          "Our caregivers help clients follow discharge instructions, manage daily activities during recovery, prepare meals, handle light housekeeping, provide medication reminders, and monitor for warning signs that should be reported to the family or healthcare provider. Our nurse-led team brings clinical awareness to every recovery situation.",
      },
      {
        heading: "Coordinating with Your Care Team",
        body:
          "We work collaboratively with discharge planners, family members, and primary care providers to ensure that home care begins smoothly and that everyone is aligned on the recovery plan. If you are planning a procedure or discharge for a loved one, contact us in advance to have care ready to start immediately upon return home.",
      },
    ],
    services: [
      "Hospital Discharge Support and care coordination",
      "Personal Care during recovery",
      "Medication Reminders post-discharge",
      "Meal Preparation and nutrition support",
      "Mobility and Transfer Assistance",
      "Light Housekeeping to maintain a safe environment",
      "Family monitoring updates and communication",
    ],
    cta: "Plan ahead for hospital discharge — contact us before the discharge date to ensure a smooth transition home.",
  },
  "veterans": {
    title: "Home Care for Veterans",
    eyebrow: "Who We Serve",
    hero: "In-Home Care for Veterans &amp; Their Families",
    intro:
      "Beyond Care proudly serves veterans in Upstate South Carolina with dependable, nurse-led non-medical home care. Many veterans qualify for VA benefits that help cover the cost — and our team is here to help families understand every available option.",
    sections: [
      {
        heading: "Veterans Deserve the Best Care at Home",
        body:
          "After a lifetime of service, veterans deserve to age and recover on their own terms — at home, with dignity, and with support that meets their specific needs. Beyond Care provides the personalized, non-medical home care that makes remaining at home safe and sustainable for veterans of all ages and service backgrounds.",
      },
      {
        heading: "VA Benefits May Cover Home Care",
        body:
          "Veterans and their surviving spouses may qualify for VA Aid and Attendance or other VA benefits that can significantly offset or fully cover the cost of in-home care. Our team can walk you through the payment options available so that cost does not stand between a veteran and the support they need.",
      },
      {
        heading: "Nurse-Led Care You Can Trust",
        body:
          "Our nurse-led team oversees care standards for every client, including our veteran clients. All caregivers are bonded, insured, licensed, and trained to the Beyond Care standard — giving veterans and their families confidence in the quality of support they receive.",
      },
    ],
    services: [
      "Personal Care (bathing, grooming, dressing)",
      "Companion Care and social engagement",
      "Meal Preparation and nutrition support",
      "Transportation to VA appointments and errands",
      "Medication Reminders",
      "Light Housekeeping",
      "Respite Care for veteran family caregivers",
      "24-Hour and Overnight Care for higher needs",
    ],
    cta: "Contact us to discuss VA benefit eligibility and home care options for a veteran in your family.",
  },
  "dementia-families": {
    title: "Home Care for Families Managing Dementia",
    eyebrow: "Who We Serve",
    hero: "In-Home Support for Loved Ones with Dementia",
    intro:
      "Caring for a loved one with dementia is one of the most demanding experiences a family can face. Beyond Care provides consistent, compassionate non-medical home care that supports individuals with dementia at home — while giving family caregivers the relief and backup they need.",
    sections: [
      {
        heading: "Consistency Is Everything",
        body:
          "For individuals with dementia, consistency and familiarity reduce anxiety and support daily functioning. Beyond Care prioritizes consistent caregiver assignments so that your loved one works with familiar faces who understand their preferences, routines, and communication needs. A consistent caregiver is not just convenient — it is clinically meaningful.",
      },
      {
        heading: "What Non-Medical Home Care Can and Cannot Do",
        body:
          "Non-medical home care is not memory care facility placement — but for many families, it is what makes it possible to keep a loved one at home far longer. Our caregivers assist with personal care, meals, activities, and daily routines. They are trained to respond calmly and patiently in challenging situations. They also serve as an extra set of eyes and ears, keeping families informed about changes in condition or behavior.",
      },
      {
        heading: "Supporting the Family Caregiver",
        body:
          "Family members who serve as primary caregivers for a loved one with dementia carry an exceptional load. Caregiver burnout in this population is common and serious. Beyond Care's respite and backup care services are specifically designed to give family caregivers scheduled breaks, overnight relief, and backup when they need to step away — without leaving their loved one without support.",
      },
    ],
    services: [
      "Personal Care with patience and routine",
      "Consistent caregiver assignments",
      "Companion Care and engagement activities",
      "Meal Preparation and hydration monitoring",
      "Medication Reminders",
      "Respite Care for family caregivers",
      "Overnight Care and monitoring",
      "Light Housekeeping and fall prevention",
    ],
    cta: "Talk to us about building a care plan that supports your loved one with dementia at home.",
  },
  "parkinsons-care": {
    title: "Home Care for Parkinson's Disease",
    eyebrow: "Who We Serve",
    hero: "In-Home Support for Individuals with Parkinson&apos;s Disease",
    intro:
      "Parkinson's disease presents unique daily challenges — tremors, mobility changes, speech difficulties, and increased fall risk. Beyond Care provides non-medical in-home care in Upstate South Carolina that is built around the specific needs of individuals living with Parkinson's disease.",
    sections: [
      {
        heading: "Understanding What Parkinson's Requires",
        body:
          "Parkinson's disease is progressive, and care needs evolve over time. Early on, clients may need assistance primarily with activities affected by tremors or fine motor challenges. As the disease progresses, more comprehensive personal care, mobility support, and transfer assistance may be needed. Beyond Care builds care plans that start where the client is and flex as needs change.",
      },
      {
        heading: "Fall Prevention Is Central to Parkinson's Care",
        body:
          "Falls are among the most serious risks for individuals with Parkinson's disease. Our caregivers are trained to assist with safe transfers, steady mobility support, and maintaining a clear, hazard-free home environment. Our nurse-led oversight means that any concerning changes are identified quickly and communicated to the family and healthcare team.",
      },
      {
        heading: "Maintaining Quality of Life at Home",
        body:
          "Living with Parkinson's does not mean giving up independence or comfort. With the right in-home support, many individuals remain at home throughout the progression of their condition. Our caregivers provide the practical assistance that allows clients to maintain their routines, stay engaged with family, and preserve their quality of life.",
      },
    ],
    services: [
      "Personal Care and hygiene assistance",
      "Mobility and Transfer Support with fall prevention",
      "Meal Preparation and feeding assistance",
      "Medication Reminders",
      "Companion Care and engagement",
      "Transportation to neurology and therapy appointments",
      "Light Housekeeping and hazard management",
      "Overnight Care for nighttime safety",
    ],
    cta: "Contact Beyond Care to discuss how we can support a loved one with Parkinson's disease at home.",
  },
  "stroke-recovery": {
    title: "Home Care After a Stroke",
    eyebrow: "Who We Serve",
    hero: "In-Home Support for Stroke Survivors",
    intro:
      "Recovering from a stroke at home in Upstate South Carolina is more achievable with the right support. Beyond Care provides non-medical in-home care that helps stroke survivors regain daily function, stay safe, and rebuild confidence — while reducing the risk of hospital readmission.",
    sections: [
      {
        heading: "The Critical Window After a Stroke",
        body:
          "The weeks and months following a stroke are a critical period for recovery. Patients returning home from the hospital or rehabilitation facility often need significant daily assistance — but many of those needs are non-medical in nature. Beyond Care fills that gap: helping with personal care, meal preparation, mobility assistance, and daily routines that support a structured, stable recovery at home.",
      },
      {
        heading: "Coordinating With the Recovery Team",
        body:
          "Stroke recovery is a team effort. Beyond Care works alongside discharge planners, physical therapists, occupational therapists, and primary care providers to ensure that in-home care reinforces — not disrupts — the recovery plan. Our nurse-led oversight means that any concerning changes are identified and communicated to the appropriate members of the care team.",
      },
      {
        heading: "Building Confidence and Preventing Setbacks",
        body:
          "Beyond the physical aspects of recovery, stroke survivors often face emotional challenges: frustration, anxiety, and loss of confidence. A consistent, patient caregiver who is familiar with the client's routine and recovery goals provides not just physical support but meaningful reassurance. This matters deeply to long-term recovery outcomes.",
      },
    ],
    services: [
      "Personal Care and hygiene assistance",
      "Mobility and Transfer Support",
      "Meal Preparation and nutrition monitoring",
      "Medication Reminders",
      "Transportation to therapy and follow-up appointments",
      "Light Housekeeping and fall prevention",
      "Companion Care and emotional support",
      "Hospital Discharge coordination and care start",
    ],
    cta: "Planning for a stroke survivor's return home? Contact us to have care ready from day one.",
  },
}

const VALID_SLUGS = ["seniors", "adults-disabilities", "family-caregivers", "aging-in-place", "hospital-discharge", "veterans", "dementia-families", "parkinsons-care", "stroke-recovery"]

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const data = AUDIENCE_DATA[slug]
  if (!data) return {}
  return {
    title: `${data.title} | Beyond Care Home Care Services`,
    description: data.intro.substring(0, 155),
  }
}

export default async function WhoWeServePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const data = AUDIENCE_DATA[slug]
  if (!data) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>{data.eyebrow}</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
              dangerouslySetInnerHTML={{ __html: data.hero }}
            />
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              {data.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Content + services */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {data.sections.map(s => (
                <div key={s.heading}>
                  <h2 className="h-md text-teal-brand mb-3">{s.heading}</h2>
                  <p className="text-muted" style={{ lineHeight: 1.8 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-teal-pale" style={{ borderRadius: 12, padding: 32 }}>
                <h2 className="h-md text-teal-brand mb-4">Services for This Need</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {data.services.map(s => (
                    <li key={s} className="check-item">
                      <span className="check-dot" />
                      <span className="text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <Link href="/services" className="link-cta-teal">View All Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
