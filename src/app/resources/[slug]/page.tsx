import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type ArticleSection = { heading: string; body: string[] }

type Article = {
  title: string
  category: string
  intro: string
  sections: ArticleSection[]
  takeaway: string
}

const ARTICLES: Record<string, Article> = {
  "home-care-vs-home-health": {
    title: "Home Care vs. Home Health: What Is the Difference?",
    category: "Understanding Care",
    intro:
      "When families start researching in-home support for a loved one, they often encounter two terms that sound very similar: home care and home health care. These are often used interchangeably in everyday conversation — but they are actually distinct services with different purposes, providers, and funding sources. Understanding the difference helps you find the right support at the right time.",
    sections: [
      {
        heading: "What Is Home Health Care?",
        body: [
          "Home health care is skilled medical care provided in the home by licensed clinical professionals — registered nurses, physical therapists, occupational therapists, speech-language pathologists, and licensed clinical social workers. It is ordered by a physician and typically follows a hospitalization, surgery, or a significant change in health status.",
          "Examples include wound care, IV therapy, injections, physical therapy, and monitoring of complex medical conditions. Home health care is typically short-term and focused on recovery from a specific medical event.",
          "Home health care is generally covered by Medicare and Medicaid when ordered by a physician and provided by a Medicare-certified agency. Coverage requires that the patient be homebound and need skilled care.",
        ],
      },
      {
        heading: "What Is Non-Medical Home Care?",
        body: [
          "Non-medical home care — sometimes called personal care, companion care, or custodial care — is non-clinical assistance with daily living activities. It is provided by trained caregivers, not licensed medical professionals.",
          "It includes help with bathing, grooming, dressing, meal preparation, light housekeeping, medication reminders, transportation, and companionship. The focus is on quality of life, safety, and independence — not medical treatment.",
          "Beyond Care provides non-medical home care. Our caregivers are trained, bonded employees who help clients live safely and comfortably at home — but they do not administer medications, perform wound care, or provide other skilled nursing services.",
        ],
      },
      {
        heading: "Which Type of Care Does Your Loved One Need?",
        body: [
          "After a surgery or hospitalization, your loved one may receive a home health order for skilled nursing visits. Once those visits are complete — and the skilled need has resolved — home health ends. If your loved one still needs help with daily activities, that is where non-medical home care steps in.",
          "Many families use both types of care simultaneously or in sequence. A client recovering from hip surgery may receive physical therapy through a home health agency while also having a Beyond Care caregiver helping with bathing, meals, and housekeeping.",
          "If you are unsure which type of care is appropriate, a free consultation with our team is a great starting point. We can help you understand what your loved one needs and whether we are the right fit.",
        ],
      },
    ],
    takeaway:
      "Home health care = skilled medical care ordered by a doctor. Non-medical home care = daily living assistance provided by trained caregivers. Both are valuable — and many families use both.",
  },
  "when-its-time": {
    title: "When It May Be Time for Home Care",
    category: "Family Guides",
    intro:
      "One of the hardest conversations families face is recognizing when a loved one needs more support than they can provide on their own. The signs often emerge gradually — easy to rationalize at first, harder to ignore over time. This guide walks through common indicators that families often notice before seeking help.",
    sections: [
      {
        heading: "Changes in Personal Hygiene and Self-Care",
        body: [
          "When someone who has always taken pride in their appearance begins showing signs of neglected hygiene — unwashed hair, body odor, unchanged clothes — it often signals that managing self-care has become genuinely difficult, not just inconvenient.",
          "This can stem from physical limitations (difficulty raising arms, getting in and out of the shower, managing fasteners on clothing), cognitive changes, fatigue, depression, or a combination. It is one of the earliest and most consistent signs that daily support could make a meaningful difference.",
          "A Beyond Care caregiver can assist with bathing, grooming, dressing, and oral care in a way that preserves your loved one's dignity and comfort.",
        ],
      },
      {
        heading: "Missed Medications and Medical Appointments",
        body: [
          "Managing multiple medications on a consistent schedule is genuinely complex — especially for individuals dealing with cognitive changes, vision problems, or fatigue. Missed doses, doubled doses, or confusion about what medications to take can have serious health consequences.",
          "Similarly, missed medical appointments signal that transportation or scheduling has become a barrier. Untreated conditions tend to worsen when follow-up care falls off.",
          "Our caregivers provide medication reminders and transportation support to help clients stay on track with their health regimen.",
        ],
      },
      {
        heading: "Declining Home Safety and Housekeeping",
        body: [
          "A home that is becoming cluttered, unsanitary, or hazardous — expired food in the refrigerator, piled mail, unwashed dishes, tripping hazards — is often a sign that daily management has become overwhelming. Clutter and mess are not personality flaws; they are symptoms of diminished capacity.",
          "Falls are a leading cause of serious injury for older adults, and an untidy home significantly increases fall risk. Light housekeeping support can address both safety and quality of life.",
        ],
      },
      {
        heading: "Social Withdrawal and Cognitive Changes",
        body: [
          "Isolation is both a symptom and a cause of decline. When a once-social person stops calling friends, avoids family gatherings, or loses interest in activities they previously enjoyed, it warrants attention. Depression, anxiety, cognitive decline, and physical limitations can all contribute.",
          "Repetitive conversations, confusion about dates or recent events, getting lost on familiar routes, or increasing difficulty managing finances and problem-solving may indicate early cognitive changes that benefit from supportive oversight.",
          "Beyond Care's companion care services address isolation directly — providing consistent human connection that research has shown to reduce cognitive and emotional decline.",
        ],
      },
    ],
    takeaway:
      "You do not have to wait for a crisis. If you are noticing these signs, a free consultation with our team can help clarify whether home care is the right next step — and what that might look like.",
  },
  "preparing-for-consultation": {
    title: "How to Prepare for Your Home Care Consultation",
    category: "Getting Started",
    intro:
      "Requesting a home care consultation is an important first step — and the more prepared you are, the more you will get out of that initial conversation. This guide covers what to think about beforehand, what information to have ready, and what questions to ask.",
    sections: [
      {
        heading: "Know Your Loved One's Daily Routine",
        body: [
          "Before your consultation, take a few minutes to think through a typical day for your loved one. What time do they wake up? Do they need help with morning hygiene? Do they cook their own meals or rely on prepared food? When do they take medications? How do they spend their time during the day?",
          "This kind of detail helps us understand not just what care is needed, but when it is needed and how it can be integrated into an existing routine without disruption. The more specific you can be, the better a care plan we can build.",
        ],
      },
      {
        heading: "Gather Medical and Medication Information",
        body: [
          "You do not need a complete medical history — we are a non-medical home care provider, not a clinical service. But it is helpful to have a general sense of your loved one's health conditions, physical limitations, and mobility level.",
          "A list of current medications is useful context, particularly for any conditions that affect daily functioning or that require consistent medication reminders as part of the care plan.",
          "If your loved one has had any recent hospitalizations, surgeries, or significant health changes, be ready to mention these — they often affect what type of care is most immediately needed.",
        ],
      },
      {
        heading: "Think About Schedule and Frequency",
        body: [
          "Home care can range from a few hours per week to 24-hour support. Before your consultation, consider what level of help you are actually looking for. Is this daily morning assistance? A few visits per week? Overnight coverage? Respite for a family caregiver on weekends?",
          "You do not need to have this figured out precisely — part of what we do in the consultation is help you think through the right level of care. But having a general sense of what you are hoping for helps us structure our recommendations.",
        ],
      },
      {
        heading: "Prepare Your Questions",
        body: [
          "A consultation is your opportunity to evaluate us as much as it is ours to learn about your situation. Good questions include: How do you select and train caregivers? What happens if a caregiver is sick? How is care quality monitored? What does a typical care plan look like? What are the costs, and what payment options are available?",
          "Write your questions down beforehand so you do not forget them. There is no such thing as a question that is too basic or too detailed — we welcome all of them.",
        ],
      },
    ],
    takeaway:
      "A little preparation goes a long way. The goal of the consultation is to listen, understand, and help — not to pressure. Come as you are, bring your questions, and let us do the work of figuring out how we can help.",
  },
  "signs-of-caregiver-burnout": {
    title: "Recognizing Signs of Caregiver Burnout",
    category: "Caregiver Wellness",
    intro:
      "Family caregivers are among the most selfless people in the world — and among the most at-risk for burnout. Caregiver burnout is a state of physical, emotional, and mental exhaustion that results from the prolonged stress of caring for someone else without adequate support. Recognizing it early is the first step toward addressing it.",
    sections: [
      {
        heading: "What Is Caregiver Burnout?",
        body: [
          "Caregiver burnout occurs when the demands of caregiving consistently exceed the caregiver's capacity to cope. It is not weakness or failure — it is a predictable outcome of doing too much for too long without sufficient support, rest, or acknowledgment.",
          "According to research, family caregivers experience significantly higher rates of depression, anxiety, chronic illness, and mortality than non-caregivers of similar age and demographic. The impact is real and documented — and it extends to the person receiving care, who benefits when their caregiver is healthy and present.",
        ],
      },
      {
        heading: "Common Signs to Watch For",
        body: [
          "Physical signs include persistent fatigue that sleep does not resolve, frequent illness due to a suppressed immune system, headaches, back pain, and changes in appetite or sleep patterns.",
          "Emotional signs include irritability, resentment toward the person being cared for (often accompanied by guilt), emotional numbness, loss of enjoyment in activities that previously brought pleasure, and feelings of hopelessness or being trapped.",
          "Behavioral signs include withdrawing from friends and social activities, neglecting personal health appointments, increasing reliance on alcohol or medication for stress relief, and difficulty concentrating or making decisions.",
        ],
      },
      {
        heading: "Why Family Caregivers Often Do Not Ask for Help",
        body: [
          "Many family caregivers delay asking for help because of guilt (feeling they should be able to manage everything), financial concerns about the cost of professional care, difficulty trusting someone else to provide care for their loved one, or simply because they have not allowed themselves to acknowledge how much they are struggling.",
          "These are understandable barriers — but they are ones that cost caregivers their own health and ultimately compromise the care they are able to provide. Seeking help is not giving up. It is a sustainable strategy.",
        ],
      },
      {
        heading: "How Respite Care Can Help",
        body: [
          "Respite care — planned, temporary relief for family caregivers — is one of the most effective interventions for caregiver burnout. It provides structured time away from caregiving responsibilities, knowing that your loved one is in safe, capable hands.",
          "Beyond Care's respite care can be as simple as a few hours a week to run errands and decompress, or as comprehensive as weekend coverage while a family caregiver travels or rests. We also offer emergency respite when the unexpected happens.",
          "If you recognize yourself in any of the signs above, please reach out. A free consultation is a low-pressure first step to understanding what support might look like.",
        ],
      },
    ],
    takeaway:
      "Caregiver burnout is serious — and preventable. If you are showing signs of burnout, please talk to us about respite care options. Supporting you is part of how we support your loved one.",
  },
}

const VALID_SLUGS = Object.keys(ARTICLES)

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) return {}
  return {
    title: `${article.title} | Beyond Care Resources`,
    description: article.intro.substring(0, 155),
  }
}

export default async function ResourceArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>{article.category}</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section bg-white">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>

            {/* Intro */}
            <p className="body-lg" style={{ lineHeight: 1.85, color: "var(--ink)", marginBottom: 48, fontSize: "1.0625rem" }}>
              {article.intro}
            </p>

            <div className="rule mb-12" />

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {article.sections.map(s => (
                <div key={s.heading}>
                  <h2 className="h-md text-teal-brand mb-4">{s.heading}</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {s.body.map((para, idx) => (
                      <p key={idx} className="text-muted" style={{ lineHeight: 1.85 }}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Takeaway */}
            <div style={{
              marginTop: 48, padding: 28, background: "var(--teal-pale)",
              borderRadius: 10, borderLeft: "4px solid var(--teal-brand)",
            }}>
              <p className="text-ink font-semibold" style={{ lineHeight: 1.75 }}>
                <strong>Key Takeaway:</strong> {article.takeaway}
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
