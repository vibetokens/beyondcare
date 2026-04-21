import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

const SITE_DOMAIN = "https://beyondcarehc.com";
const SITE_NAME   = "Beyond Care Home Care Services";

const TB = () => <span style={{ color: "var(--teal-brand)" }}>→</span>;

// ── All slugs + metadata for Related Posts ──────────────────────────────────
const ALL_SLUGS: { slug: string; title: string; category: string; date: string }[] = [
  { slug: "home-care-seniors-independence-south-carolina", title: "How Home Care Helps Seniors Stay Independent in South Carolina", category: "Senior Independence", date: "March 2026" },
  { slug: "signs-parent-needs-help-at-home", title: "7 Signs Your Parent May Need Help at Home", category: "Family Guides", date: "March 2026" },
  { slug: "home-care-vs-home-health-families", title: "Home Care vs Home Health — What Every Family Should Understand", category: "Understanding Care", date: "March 2026" },
  { slug: "in-home-support-after-hospital-stay", title: "Coming Home From the Hospital — Why In-Home Support Matters", category: "Hospital Discharge", date: "March 2026" },
  { slug: "when-is-right-time-to-start-home-care", title: "When Is the Right Time to Start Home Care?", category: "Getting Started", date: "March 2026" },
  { slug: "why-companion-care-matters-senior-wellbeing", title: "Why Companion Care for Seniors Is More Than Just Keeping Them Company", category: "Companion Care", date: "March 2026" },
  { slug: "what-to-expect-home-care-consultation", title: "What to Expect During a Home Care Consultation", category: "Getting Started", date: "March 2026" },
  { slug: "fall-prevention-tips-seniors-at-home", title: "Fall Prevention Tips for Seniors Living at Home", category: "Safety", date: "March 2026" },
  { slug: "why-medication-reminders-matter-seniors", title: "Why Medication Reminders Are One of the Most Important Home Care Services", category: "Health Management", date: "March 2026" },
  { slug: "what-professional-caregivers-help-with-day-to-day", title: "What a Professional Caregiver Actually Does Each Day", category: "Our Services", date: "March 2026" },
  { slug: "why-cpr-certified-caregivers-matter", title: "Why CPR Certification in a Home Caregiver Is a Standard That Matters", category: "Caregiver Standards", date: "March 2026" },
  { slug: "how-family-caregivers-avoid-burnout", title: "How Family Caregivers Can Protect Themselves From Burnout", category: "Family Caregivers", date: "March 2026" },
  { slug: "transportation-support-seniors-more-than-a-ride", title: "Senior Transportation — Why It Is About More Than Getting From Here to There", category: "Transportation", date: "March 2026" },
  { slug: "what-respite-care-gives-back-to-families", title: "What Respite Care Actually Gives Back to Families", category: "Respite Care", date: "March 2026" },
  { slug: "families-choosing-aging-in-place-support", title: "Why Aging in Place Has Become the Preferred Choice for South Carolina Families", category: "Aging in Place", date: "March 2026" },
  { slug: "senior-nutrition-at-home-small-habits", title: "Senior Nutrition at Home — Why It Matters and How to Support It", category: "Health & Wellness", date: "March 2026" },
  { slug: "early-memory-changes-when-families-should-pay-attention", title: "Early Memory Changes — What Families Should Watch For", category: "Memory Care", date: "March 2026" },
  { slug: "home-care-supports-mobility-daily-confidence", title: "How Home Care Supports Senior Mobility and Daily Confidence", category: "Personal Care", date: "March 2026" },
  { slug: "why-social-connection-matters-later-life", title: "Why Social Connection Remains One of the Most Important Health Factors in Later Life", category: "Senior Well-Being", date: "March 2026" },
  { slug: "light-housekeeping-improves-safety-seniors", title: "How Light Housekeeping Makes a Senior's Home Safer", category: "Home Safety", date: "March 2026" },
  { slug: "emotional-benefits-staying-at-home-seniors", title: "The Emotional Benefits of Staying Home — What Families Should Understand", category: "Aging in Place", date: "March 2026" },
  { slug: "home-care-resources-families-honea-path-sc", title: "Home Care Resources for Families in Honea Path, South Carolina", category: "Local Resources", date: "March 2026" },
  { slug: "home-care-resources-families-williamston-sc", title: "Home Care Resources for Families in Williamston, South Carolina", category: "Local Resources", date: "March 2026" },
  { slug: "upstate-south-carolina-families-choose-in-home-care", title: "Why Upstate South Carolina Families Are Choosing In-Home Care", category: "Local Resources", date: "March 2026" },
  { slug: "home-care-support-veterans-families-south-carolina", title: "Home Care Support for Veterans in South Carolina", category: "Veterans", date: "March 2026" },
  { slug: "planning-care-after-surgery-rehabilitation", title: "How to Plan for Care After Surgery or Rehabilitation", category: "Recovery Care", date: "March 2026" },
  { slug: "questions-ask-before-hiring-home-care-provider", title: "Questions to Ask Before You Hire a Home Care Provider", category: "Choosing Care", date: "March 2026" },
  { slug: "understanding-medicaid-waiver-home-care-south-carolina", title: "Understanding Medicaid Waiver Home Care Options in South Carolina", category: "Payment Options", date: "March 2026" },
  { slug: "can-long-term-care-insurance-pay-for-home-care", title: "Can Long-Term Care Insurance Help Pay for Home Care? Yes — Here Is How", category: "Payment Options", date: "March 2026" },
  { slug: "how-to-make-home-safer-aging-parent", title: "How to Make Your Parent's Home Safer as They Age", category: "Home Safety", date: "March 2026" },
  { slug: "home-care-anderson-south-carolina", title: "Home Care in Anderson, SC — What Families Should Know", category: "Local Resources", date: "March 2026" },
  { slug: "home-care-greenville-south-carolina", title: "In-Home Care Options in Greenville, SC — A Family Guide", category: "Local Resources", date: "March 2026" },
  { slug: "home-care-easley-south-carolina", title: "Home Care in Easley and Pickens County, SC", category: "Local Resources", date: "March 2026" },
  { slug: "dementia-home-care-south-carolina", title: "Home Care for Dementia and Memory Loss — A Guide for SC Families", category: "Memory Care", date: "March 2026" },
  { slug: "parkinsons-disease-home-care-south-carolina", title: "Parkinson's Disease and Home Care — What Families in SC Need to Know", category: "Condition-Specific Care", date: "March 2026" },
  { slug: "stroke-recovery-home-care-south-carolina", title: "Stroke Recovery at Home — How Home Care Supports the Process in SC", category: "Recovery Care", date: "March 2026" },
  { slug: "va-aid-attendance-home-care-south-carolina", title: "VA Aid & Attendance — How Veterans in SC Can Use It for Home Care", category: "Veterans", date: "March 2026" },
  { slug: "overnight-care-seniors-south-carolina", title: "Overnight Home Care for Seniors in South Carolina — What It Is and When You Need It", category: "Our Services", date: "March 2026" },
  { slug: "questions-to-ask-home-care-agency-south-carolina", title: "10 Questions to Ask Any Home Care Agency Before You Hire Them", category: "Choosing Care", date: "March 2026" },
  { slug: "respite-care-family-caregivers-south-carolina", title: "Respite Care for Family Caregivers in South Carolina — Relief That Actually Works", category: "Respite Care", date: "March 2026" },
  // New posts
  { slug: "how-to-choose-home-care-agency-guide", title: "How to Choose a Home Care Agency — A Family's Complete Guide", category: "Choosing Care", date: "March 2026" },
  { slug: "what-to-look-for-in-a-home-caregiver", title: "What to Look for in a Home Caregiver — 8 Qualities That Matter", category: "Caregiver Standards", date: "March 2026" },
  { slug: "red-flags-home-care-agency", title: "Red Flags When Choosing a Home Care Agency", category: "Choosing Care", date: "March 2026" },
  { slug: "dementia-care-at-home-complete-guide", title: "Dementia Care at Home — A Complete Guide for Families", category: "Memory Care", date: "March 2026" },
  { slug: "post-surgery-home-care-what-to-expect", title: "Post-Surgery Home Care — What to Expect and How to Prepare", category: "Recovery Care", date: "March 2026" },
  { slug: "companion-care-vs-personal-care", title: "Companion Care vs Personal Care — Understanding the Difference", category: "Understanding Care", date: "March 2026" },
  { slug: "how-much-does-home-care-cost", title: "How Much Does Home Care Cost? A Clear Breakdown for Families", category: "Payment Options", date: "March 2026" },
  { slug: "does-insurance-cover-home-care", title: "Does Insurance Cover Home Care? Medicare, Medicaid, and More", category: "Payment Options", date: "March 2026" },
  { slug: "medicare-vs-medicaid-home-care", title: "Medicare vs Medicaid for Home Care — What's the Difference?", category: "Payment Options", date: "March 2026" },
  { slug: "questions-to-ask-caregiver-interview", title: "Questions to Ask When Interviewing a Home Caregiver", category: "Choosing Care", date: "March 2026" },
  { slug: "home-care-abbeville-greenwood-sc", title: "Home Care in Abbeville and Greenwood County, SC", category: "Local Resources", date: "March 2026" },
  { slug: "24-hour-home-care-south-carolina", title: "24-Hour Home Care in South Carolina — What It Is and When You Need It", category: "Our Services", date: "March 2026" },
  { slug: "hospital-discharge-planning-home-care", title: "Hospital Discharge Planning — How to Set Up Home Care Before You Leave", category: "Hospital Discharge", date: "March 2026" },
  { slug: "personal-care-at-home-what-it-covers", title: "Personal Care at Home — What It Covers and Why It Matters", category: "Personal Care", date: "March 2026" },
  { slug: "caregiver-employee-vs-contractor-difference", title: "Caregiver as Employee vs. Independent Contractor — Why It Matters for Your Family", category: "Caregiver Standards", date: "March 2026" },
  // April 2026 — Seasonal Spring/Summer
  { slug: "spring-wellness-tips-seniors-south-carolina", title: "Spring Wellness Tips for Seniors in South Carolina", category: "Health & Wellness", date: "April 2026" },
  { slug: "heat-safety-elderly-south-carolina-summer", title: "Heat Safety for Elderly Adults in South Carolina — A Summer Guide", category: "Safety", date: "April 2026" },
  { slug: "caregiver-respite-planning-summer-south-carolina", title: "Summer Respite Care Planning for South Carolina Families", category: "Respite Care", date: "April 2026" },
];

function getRelatedPosts(currentSlug: string, currentCategory: string, count = 3) {
  // First try same category, then fall back to recent posts
  const sameCat = ALL_SLUGS.filter(p => p.slug !== currentSlug && p.category === currentCategory);
  const others  = ALL_SLUGS.filter(p => p.slug !== currentSlug && p.category !== currentCategory);
  return [...sameCat, ...others].slice(0, count);
}

const POSTS: Record<string, {
  title: string;
  date: string;
  description: string;
  category: string;
  faq?: { q: string; a: string }[];
  body: React.ReactNode;
}> = {
  "home-care-seniors-independence-south-carolina": {
    title: "How Home Care Helps Seniors Stay Independent in South Carolina",
    date: "March 2026",
    description: "In-home care supports independence for South Carolina seniors — learn how non-medical home care helps aging adults stay safe, comfortable, and in control at home.",
    category: "Senior Independence",
    faq: [
      { q: "What types of daily tasks can a home care caregiver help with?", a: "A home care caregiver can assist with personal hygiene, meal preparation, light housekeeping, medication reminders, transportation to appointments, and companionship — all of which support a senior's ability to remain safely at home." },
      { q: "Does receiving home care mean losing independence?", a: "No. For most seniors, the right support actually preserves independence by making daily tasks manageable and safe. A caregiver supplements what the senior cannot do alone without taking over what they can." },
      { q: "How does Beyond Care tailor support to each senior in South Carolina?", a: "Every client receives an individualized care plan developed by Beyond Care's nurse-led team. The plan is built around the senior's specific needs, preferences, and goals — and updated as those needs change." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">For most seniors, independence is not just about preference — it is about identity. The ability to live in your own home, follow your own routine, and make your own decisions is central to how older adults experience quality of life. When that independence is threatened by age-related challenges, the instinct is often to look for facility-based solutions. But for a significant number of seniors, a better answer exists: professional in-home care.</p>
        <h2>What Independence Really Means for Seniors at Home</h2>
        <p>Independence at home is not the absence of help. It is having the right support in place so that a senior can continue living on their own terms. A caregiver who assists with bathing, prepares meals, or provides transportation does not diminish independence — in most cases, that support is what makes independence sustainable.</p>
        <h2>The Specific Ways Home Care Supports Daily Independence</h2>
        <ul>
          <li><TB /><span>Personal care assistance allows seniors to maintain hygiene and grooming without relying solely on family members</span></li>
          <li><TB /><span>Meal preparation ensures consistent nutrition, which directly impacts energy, cognition, and health</span></li>
          <li><TB /><span>Transportation keeps seniors connected to medical appointments, errands, and social activities</span></li>
          <li><TB /><span>Companion care reduces isolation, which is one of the leading contributors to cognitive decline</span></li>
          <li><TB /><span>Medication reminders support health management without clinical intervention</span></li>
          <li><TB /><span>Light housekeeping maintains a clean, safe environment that reduces fall and injury risk</span></li>
        </ul>
        <h2>When Family Support Alone Is Not Enough</h2>
        <p>Family members often serve as primary caregivers — and they often reach a point where the need exceeds what they can provide without burnout. Professional home care supplements family support in a sustainable way, allowing families to remain connected as family rather than solely as caregivers.</p>
        <h2>The Research Behind Aging in Place</h2>
        <p>Studies consistently show that seniors who remain at home with appropriate support tend to experience better emotional well-being, slower cognitive decline, and higher satisfaction with their daily lives compared to those who relocate to facilities prematurely.</p>
        <h2>How Beyond Care Supports Senior Independence</h2>
        <p>Beyond Care&apos;s nurse-led care model, individualized care planning, and trained employee caregivers are specifically designed to support seniors in remaining safely and comfortably at home — without sacrificing quality of life.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What is non-medical home care?</p><p className="text-muted text-sm">A: Non-medical home care includes personal care assistance, companionship, meal preparation, housekeeping, transportation, and similar daily support — without clinical nursing or medical procedures.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can home care prevent nursing home placement?</p><p className="text-muted text-sm">A: For many seniors, appropriate in-home support significantly delays or prevents the need for facility placement. It depends on the individual&apos;s needs and how well the care plan addresses them.</p></div>
      </>
    ),
  },
  "signs-parent-needs-help-at-home": {
    title: "7 Signs Your Parent May Need Help at Home",
    date: "March 2026",
    description: "Not sure if your parent needs in-home care? These 7 signs can help South Carolina families recognize when it is time to explore home care support.",
    category: "Family Guides",
    faq: [
      { q: "What is the most serious warning sign that a parent needs home care?", a: "A fall — or a noticeable fear of falling — is one of the clearest signals. Falls significantly increase the risk of injury, hospitalization, and further decline. Even one fall warrants a conversation with a home care professional." },
      { q: "My parent lives far away. How can I assess whether they need help?", a: "Look for changes during visits or phone calls: unusual confusion, weight loss, poor hygiene, an unkempt home, or mood withdrawal. Any significant change from their baseline is worth investigating." },
      { q: "Can Beyond Care help families in South Carolina who are struggling to have this conversation with a parent?", a: "Yes. We regularly work with families who are navigating resistance from a loved one. Call us — we can provide guidance on how to approach the conversation in a way that respects your parent's dignity." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The conversation about home care rarely starts with a clear moment. It usually begins with a feeling — something seemed off during your last visit, or a phone call left you more worried than reassured. Knowing what to look for can help families act before a situation becomes a crisis.</p>
        <h2>Sign #1 — Changes in Personal Hygiene</h2>
        <p>If your parent&apos;s grooming, bathing, or personal hygiene has declined noticeably, this may signal that these tasks have become difficult or overwhelming. Unwashed hair, worn clothing repeated without laundering, or body odor that was not previously present are meaningful indicators.</p>
        <h2>Sign #2 — Unexplained Weight Loss or Poor Nutrition</h2>
        <p>Check the refrigerator and the pantry. Expired food, empty shelves, or signs that meals are being skipped or poorly prepared suggest that nutrition is becoming a problem — which can accelerate health decline.</p>
        <h2>Sign #3 — Medication Errors or Missed Doses</h2>
        <p>Prescription bottles that are full when they should be partially used, or evidence of confusion about what to take and when, point to medication management issues that need to be addressed.</p>
        <h2>Sign #4 — Falls or Fear of Falling</h2>
        <p>A recent fall is an obvious red flag. But a parent who has become hesitant to move around the home, avoids the stairs, or expresses fear about bathing is also showing you that fall risk has increased.</p>
        <h2>Sign #5 — Withdrawal and Isolation</h2>
        <p>Social withdrawal, reduced interest in hobbies, or noticeable changes in mood and energy can reflect both physical decline and the emotional impact of increasing isolation — both of which home care can address.</p>
        <h2>Sign #6 — Home Safety Concerns</h2>
        <p>Stove burners left on, doors unlocked at night, unexplained burns on hands, or a home that has become cluttered and difficult to navigate safely are red flags worth taking seriously.</p>
        <h2>Sign #7 — You Are Worried Every Time the Phone Rings</h2>
        <p>Caregiver anxiety is a real indicator. If you find yourself constantly worried about your parent&apos;s safety and well-being, that concern is worth acting on — both for them and for you.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How many signs need to be present before considering home care?</p><p className="text-muted text-sm">A: There is no threshold number. Even one serious sign — particularly a fall, significant medication error, or dramatic hygiene change — warrants a conversation with a home care professional.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My parent refuses to admit they need help. What do I do?</p><p className="text-muted text-sm">A: Contact us. We work with families navigating this conversation regularly and can offer practical guidance.</p></div>
      </>
    ),
  },
  "home-care-vs-home-health-families": {
    title: "Home Care vs Home Health — What Every Family Should Understand",
    date: "March 2026",
    description: "Home care and home health are not the same. Learn the key differences and what each type of service covers — so you can make the right decision for your loved one.",
    category: "Understanding Care",
    faq: [
      { q: "Does Medicare pay for non-medical home care in South Carolina?", a: "No. Medicare covers skilled home health services — nursing, physical therapy — when physician-ordered and clinically justified. It does not cover non-medical home care such as personal care, companionship, or meal preparation." },
      { q: "What is the difference between a home care agency and a home health agency?", a: "A home care agency provides non-medical daily living support — personal care, companionship, housekeeping. A home health agency provides physician-ordered clinical services such as skilled nursing, wound care, and therapy. They serve different needs and are funded differently." },
      { q: "Can my loved one receive both home care and home health at the same time?", a: "Yes. Many patients need both after a hospitalization — home health for clinical follow-up and home care for daily personal support. The two services complement each other and can run concurrently." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">These two terms are used interchangeably every day — by families, by discharge planners, sometimes even by healthcare professionals who should know better. The confusion is understandable. But the distinction matters, because they are fundamentally different types of service, funded by different sources, appropriate for different situations.</p>
        <h2>Defining Home Care</h2>
        <p>Non-medical home care covers daily living support — personal care, companionship, meal preparation, light housekeeping, transportation, and medication reminders. It does not require a physician order. It is available on a flexible, ongoing basis and is most commonly paid through private pay, long-term care insurance, Medicaid Waiver, VA benefits, or similar programs.</p>
        <h2>Defining Home Health</h2>
        <p>Home health refers to skilled clinical services delivered at home by licensed professionals — registered nurses, physical therapists, occupational therapists, or speech therapists. It is ordered by a physician, typically following a hospitalization or for the management of a specific medical condition. It is time-limited and focused on clinical goals. Medicare typically covers home health when eligibility criteria are met.</p>
        <h2>The Critical Distinction</h2>
        <p>The easiest way to remember the difference: home health treats a medical condition. Home care supports daily life. Both are valuable. Neither replaces the other.</p>
        <h2>When Both Are Needed</h2>
        <p>After a hospitalization, a senior often needs both. Home health provides the clinical follow-up — wound care, therapy, medication management. Home care provides the daily support — bathing help, meals, companionship, transportation — that home health does not cover. These services run in parallel and address different dimensions of the person&apos;s needs.</p>
        <h2>What Medicare Does and Does Not Cover</h2>
        <p>Medicare covers home health when physician-ordered and clinically justified. Medicare does not cover non-medical home care. This surprises many families. Understanding this early prevents frustrating discovery later.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can I receive both home care and home health at the same time?</p><p className="text-muted text-sm">A: Yes. They serve different purposes and can run concurrently without conflict.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I know which one my loved one needs?</p><p className="text-muted text-sm">A: Contact us for a conversation. We can help you identify what type of support is most relevant and whether a physician referral for home health is also warranted.</p></div>
      </>
    ),
  },
  "in-home-support-after-hospital-stay": {
    title: "Coming Home From the Hospital — Why In-Home Support Matters",
    date: "March 2026",
    description: "The weeks after a hospital discharge are high-risk for seniors. Learn how in-home care reduces readmission risk and supports safer recovery at home in South Carolina.",
    category: "Hospital Discharge",
    faq: [
      { q: "How soon after hospital discharge can Beyond Care start providing in-home care?", a: "We prioritize post-discharge situations. Contact us as soon as a discharge date is known — even 24 to 48 hours notice allows us to prepare a caregiver and begin care the day your loved one returns home." },
      { q: "What are the most common reasons seniors are readmitted to the hospital after discharge?", a: "Missed medications, inadequate nutrition, falls, and missed follow-up appointments are among the leading causes of post-discharge readmission. A home care caregiver directly addresses each of these risks." },
      { q: "Can Beyond Care coordinate with hospital discharge planners?", a: "Yes. We work alongside hospital case managers and discharge teams to ensure a smooth transition home and alignment with the discharge plan." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Hospital discharge can feel like the finish line. In reality, for many seniors, it is one of the most vulnerable moments in their healthcare journey. The weeks following discharge carry a disproportionately high risk of complications, falls, medication errors, and readmission. The right support at home changes that picture significantly.</p>
        <h2>Why the Post-Discharge Period Is High-Risk</h2>
        <p>Seniors often leave the hospital weaker than when they arrived. Bed rest, disrupted medication schedules, unfamiliar discharge instructions, and the physical toll of illness or procedure leave many older adults at elevated risk — precisely when they are being asked to manage more on their own.</p>
        <h2>What Happens Without Adequate Support</h2>
        <p>Without support at home, seniors may miss follow-up appointments, skip or mismanage medications, struggle to prepare nutritious meals during recovery, or experience a fall that sends them back to the emergency room. Hospital readmission rates for seniors without adequate post-discharge support are well-documented and significant.</p>
        <h2>What In-Home Care Provides During Recovery</h2>
        <p>A Beyond Care caregiver during the post-discharge period can assist with personal care as the senior regains strength, prepare meals appropriate to recovery dietary needs, provide medication reminders, accompany to follow-up appointments, monitor for changes in condition, and communicate concerns to the family before they become emergencies.</p>
        <h2>Planning Before Discharge Is Possible</h2>
        <p>Families do not have to wait until their loved one is already home to arrange support. Contact Beyond Care as soon as discharge is anticipated — even a 24–48 hour heads up allows us to prepare the right caregiver match and start the care plan.</p>
        <h2>Bridging the Gap Between Hospital and Long-Term Stability</h2>
        <p>Post-discharge care is often temporary — intensive during the recovery window and then reduced or transitioned to lighter ongoing support. Many clients who begin care after a hospitalization continue with Beyond Care as their situation stabilizes, building a care relationship that serves them well over time.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does insurance cover post-hospital home care?</p><p className="text-muted text-sm">A: Medicaid Waiver, VA benefits, long-term care insurance, and private pay may all apply. Medicare does not cover non-medical home care.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How quickly can Beyond Care start care after discharge?</p><p className="text-muted text-sm">A: We prioritize post-discharge situations. Contact us as soon as discharge is planned and we will move as quickly as possible.</p></div>
      </>
    ),
  },
  "when-is-right-time-to-start-home-care": {
    title: "When Is the Right Time to Start Home Care?",
    date: "March 2026",
    description: "Many families wait too long to start home care. Learn when the right time actually is — and why earlier is almost always better for seniors in South Carolina.",
    category: "Getting Started",
    faq: [
      { q: "What level of need should a senior have before starting home care?", a: "There is no minimum threshold. Many families start with just a few hours a week of companionship or light housekeeping — well before intensive personal care is needed. Beginning early establishes the care relationship and infrastructure before a crisis arrives." },
      { q: "Is it possible to start home care and then reduce or stop it later?", a: "Yes. Care plans are flexible and adjusted based on the client's evolving needs. Some clients reduce hours after a recovery period; others transition to more intensive support over time." },
      { q: "How do I start the process with Beyond Care in South Carolina?", a: "Call us at (864) 841-2500 for a free, no-pressure consultation. We will discuss your loved one's situation and help you understand what a care plan might look like — with no obligation to proceed." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The honest answer: earlier than most families think. The most common mistake families make in home care planning is waiting for a crisis before they act. By the time a fall, a hospitalization, or a significant health event forces the decision, the family is scrambling — and the senior is already in a compromised position.</p>
        <h2>The Crisis-Driven Model and Its Costs</h2>
        <p>When home care begins as a crisis response, families have less time to find the right provider, conduct a proper assessment, identify the right caregiver match, and ease the client into a new care routine. Everything happens under pressure, which tends to produce worse outcomes for everyone involved.</p>
        <h2>The Early-Intervention Model</h2>
        <p>Families who begin home care before it is urgently needed gain something that cannot be rushed: a care relationship. A client who has had time to adjust to having a caregiver — to build familiarity, trust, and routine — is in a far better position when needs increase.</p>
        <h2>What "Early" Actually Means</h2>
        <p>Early home care does not mean intensive care. It might mean a caregiver a few hours a week — helping with meals, running errands, providing companionship, or assisting with light housekeeping. This level of support is low-stakes and easy to introduce, but it establishes the infrastructure for more intensive care when that becomes necessary.</p>
        <h2>Functional Decline Is Gradual — Until It Is Not</h2>
        <p>Most seniors experience a gradual decline in function with occasional accelerating events — a fall, an illness, a surgery. Families who have home care in place before those events are positioned to respond rather than react.</p>
        <h2>The Cost of Waiting</h2>
        <p>Waiting for a crisis also tends to cost more — both financially and in terms of family stress. Emergency care arrangements are often more expensive, less well-matched, and harder to manage. Planning ahead gives families control.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if my parent doesn&apos;t feel they need help yet?</p><p className="text-muted text-sm">A: Starting with minimal, low-profile support — a few hours of companionship or light housekeeping — is often easier than introducing intensive personal care during a crisis. The earlier the relationship begins, the easier expansion becomes.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I bring up home care with my parent without creating conflict?</p><p className="text-muted text-sm">A: Contact us. We help families navigate this conversation regularly.</p></div>
      </>
    ),
  },
  "why-companion-care-matters-senior-wellbeing": {
    title: "Why Companion Care for Seniors Is More Than Just Keeping Them Company",
    date: "March 2026",
    description: "Loneliness is a serious health risk for older adults. Learn why companion care for seniors in South Carolina is more than comfort — it is a meaningful health intervention.",
    category: "Companion Care",
    faq: [
      { q: "Is loneliness actually harmful to a senior's health?", a: "Yes. Research links chronic social isolation in older adults to accelerated cognitive decline, increased rates of depression, weakened immune function, and higher mortality — risks comparable in severity to smoking or obesity." },
      { q: "What does a companion caregiver actually do during a visit?", a: "A companion caregiver engages the client in conversation, shared activities, games, reading, and outings. They also observe for changes in mood or condition and provide a consistent, familiar presence that supports routine and emotional well-being." },
      { q: "Can companion care slow cognitive decline in seniors with early memory changes?", a: "Regular social engagement and mental stimulation have documented protective effects on cognitive health. A companion caregiver who provides consistent interaction and structured activity supports brain health in ways that isolation actively undermines." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">When families think about home care, personal care tends to come to mind first — help with bathing, dressing, mobility. Companion care is often seen as secondary. But the research on social connection and senior health tells a different story. For many older adults, companion care may be the most impactful service they receive.</p>
        <h2>The Loneliness Crisis Among Older Adults</h2>
        <p>A significant percentage of seniors experience chronic loneliness — particularly those who live alone, have outlived spouses and friends, or have limited mobility that restricts social activity. The health consequences of chronic loneliness are not minor: they include accelerated cognitive decline, higher rates of depression and anxiety, weakened immune function, and increased risk of cardiovascular disease.</p>
        <h2>What Companion Care Actually Looks Like</h2>
        <p>Companion care is not passive. It includes meaningful conversation, shared activities, games, reading, accompaniment on outings, help staying connected with family, and providing the kind of daily engagement that keeps the mind active and the spirit engaged. A good companion caregiver also serves as an observer — noticing changes in mood, behavior, or physical condition and communicating those to the family.</p>
        <h2>The Routine Factor</h2>
        <p>Seniors who have consistent daily structure tend to function better cognitively and emotionally. A companion caregiver creates routine — arrival at a consistent time, shared activities, a predictable and familiar presence. That structure itself has measurable benefit.</p>
        <h2>Companion Care for Clients With Memory Changes</h2>
        <p>For clients in early stages of cognitive decline, companion care can be particularly valuable. Familiar faces, consistent routine, and engaging activities support cognitive health in ways that isolation actively undermines.</p>
        <h2>Combining Companion Care With Other Services</h2>
        <p>Companion care works well on its own and as part of a broader care plan that includes personal care, transportation, or meal preparation. Many Beyond Care clients receive a combination of services through a single coordinated care plan.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How often would a companion caregiver visit?</p><p className="text-muted text-sm">A: That depends entirely on your loved one&apos;s situation. Options range from a few hours per week to daily support.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a companion caregiver also help with light tasks around the home?</p><p className="text-muted text-sm">A: Yes. Companion care and light assistance with daily tasks often work together within the same care plan.</p></div>
      </>
    ),
  },
  "what-to-expect-home-care-consultation": {
    title: "What to Expect During a Home Care Consultation",
    date: "March 2026",
    description: "Wondering what happens during a home care consultation? Learn what Beyond Care covers, what questions to ask, and how to prepare for your first meeting.",
    category: "Getting Started",
    faq: [
      { q: "Is there any cost or obligation to schedule a home care consultation with Beyond Care?", a: "No. Consultations are free and create no obligation. The purpose is simply to understand your family's situation and share honest information about whether and how Beyond Care can help." },
      { q: "What information should I have ready before the consultation?", a: "It helps to have a general picture of your loved one's daily challenges, current health conditions, what tasks have become difficult, the household's schedule, and any questions about payment options or care logistics." },
      { q: "How long does the process take from consultation to care starting?", a: "Many families can begin care within a few days of the initial consultation. For urgent post-discharge or recovery situations, we work to move as quickly as possible." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Many families approach the first home care consultation with uncertainty — not knowing what to say, what will be asked, or what the outcome will be. The reality is that a good consultation is simply a conversation. Here is what you can expect from yours with Beyond Care.</p>
        <h2>The Purpose of the Consultation</h2>
        <p>A consultation is not a sales pitch. It is a structured conversation designed to help our team understand your loved one&apos;s situation — and to help your family understand whether and how Beyond Care can help. The goal is information exchange, not commitment.</p>
        <h2>What We Will Ask</h2>
        <p>Expect questions about your loved one&apos;s daily routine and current challenges, their health status and relevant conditions, what tasks have become difficult or unsafe, what the family&apos;s current caregiving situation looks like, what schedule would work for the household, and what outcomes the family is hoping for from home care.</p>
        <h2>What You Should Ask</h2>
        <p>Come prepared with your own questions. Good ones to ask: How are caregivers selected and matched? What happens if a caregiver cannot make a visit? How is the care plan monitored and updated? What does the billing process look like? How quickly can care begin?</p>
        <h2>What Happens After the Consultation</h2>
        <p>Following the consultation, our team builds an individualized care plan based on what we learned. We then identify the right caregiver match, discuss scheduling, and — when you are ready to move forward — coordinate the start of care.</p>
        <h2>There Is No Pressure</h2>
        <p>The consultation creates no obligation. Some families are ready to begin care immediately. Others need time to think, discuss with other family members, or explore payment options. Either response is completely fine.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Should my loved one be present for the consultation?</p><p className="text-muted text-sm">A: If possible, yes. Their preferences and comfort matter, and including them respects their dignity and autonomy. However, we understand that is not always feasible.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How long does the consultation take?</p><p className="text-muted text-sm">A: Most consultations take 45 minutes to an hour, depending on the complexity of the situation.</p></div>
      </>
    ),
  },
  "fall-prevention-tips-seniors-at-home": {
    title: "Fall Prevention Tips for Seniors Living at Home",
    date: "March 2026",
    description: "Falls are the leading cause of injury in older adults. These fall prevention tips can help South Carolina seniors stay safer at home — with or without home care support.",
    category: "Safety",
    faq: [
      { q: "What is the most effective way to reduce fall risk for a senior living at home?", a: "Addressing the highest-risk environments — especially the bathroom — with grab bars, non-slip surfaces, and adequate lighting provides immediate impact. A consistent home care caregiver who assists during high-risk activities like bathing and transfers reduces risk further." },
      { q: "Can medications increase fall risk in older adults?", a: "Yes. Blood pressure medications, sedatives, sleep aids, and certain antidepressants can increase dizziness and unsteadiness. A medication review with a physician can identify whether any current prescriptions are contributing to fall risk." },
      { q: "My parent has already fallen once. What should I do?", a: "One fall significantly raises the statistical likelihood of another. Contact your loved one's physician to assess contributing factors, and consider a home care consultation to discuss how regular caregiver support could reduce ongoing risk." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Falls are the leading cause of injury — and injury-related death — among adults over 65. Each year, millions of older Americans experience a fall, and a significant percentage result in serious injury, hospitalization, and lasting loss of independence. The good news is that many falls are preventable. Here is what families and seniors should know.</p>
        <h2>The Bathroom Is the Highest-Risk Zone</h2>
        <p>More falls happen in the bathroom than anywhere else in the home. Wet surfaces, transitions from sitting to standing, and reaching for items while unsteady create consistent risk. Solutions include grab bars near the toilet and in the shower or tub, a shower bench or chair, non-slip bath mats, and a handheld showerhead.</p>
        <h2>Lighting Matters More Than You Think</h2>
        <p>Poor lighting — particularly at night — is a major contributing factor to falls. Night lights in hallways, bathrooms, and bedrooms, combined with accessible light switches, significantly reduce nighttime fall risk.</p>
        <h2>Clutter and Trip Hazards</h2>
        <p>Throw rugs, loose carpet edges, electrical cords, and cluttered pathways are a common and preventable risk. Walking through the home with fall prevention in mind often reveals more hazards than families expect.</p>
        <h2>Medication Side Effects and Fall Risk</h2>
        <p>Certain medications — including blood pressure medications, sedatives, sleep aids, and some antidepressants — increase dizziness and unsteadiness. A medication review with a physician can identify whether any current prescriptions are contributing to fall risk.</p>
        <h2>The Role of a Caregiver in Fall Prevention</h2>
        <p>A trained caregiver provides more than physical assistance — they provide supervision during the highest-risk activities (bathing, transfers, movement through the home), bring consistency to daily routine, and serve as an early alert system when changes in gait, balance, or behavior suggest increasing risk.</p>
        <h2>Strength and Balance Matter</h2>
        <p>Range of motion activities, walking, and balance exercises — even gentle, low-impact ones — help maintain the physical function that protects against falls. Beyond Care caregivers can assist with prescribed exercise regimens and range of motion activities as part of a broader care plan.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My parent has already fallen once. What should I do?</p><p className="text-muted text-sm">A: A fall is a signal that the risk level has increased. Contact your loved one&apos;s physician and consider a home care assessment. One fall significantly increases the statistical likelihood of another.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can home care reduce fall risk?</p><p className="text-muted text-sm">A: Yes. A consistent caregiver who assists with high-risk activities, monitors the environment, and provides ambulation support can meaningfully reduce fall frequency and severity.</p></div>
      </>
    ),
  },
  "why-medication-reminders-matter-seniors": {
    title: "Why Medication Reminders Are One of the Most Important Home Care Services",
    date: "March 2026",
    description: "Medication errors are among the most common — and preventable — causes of health decline in seniors. Learn why medication reminders are a critical component of home care.",
    category: "Health Management",
    faq: [
      { q: "Can a home care caregiver manage or administer my parent's medications?", a: "Non-medical home caregivers provide reminders — prompts to take medications at the right time — but do not administer or manage prescriptions. Medication administration is the role of licensed nursing staff." },
      { q: "How common are medication errors in seniors living at home?", a: "Medication non-adherence — missed doses, incorrect timing, or wrong dosages — contributes to a significant percentage of senior hospitalizations. For seniors managing multiple prescriptions for chronic conditions, consistent reminders have a direct impact on health stability." },
      { q: "What happens if my loved one refuses to take their medications?", a: "A Beyond Care caregiver will note refusals and communicate them to the family as part of regular reporting. Persistent refusal should be raised with the client's physician, as it may signal side effects, confusion, or another underlying issue." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Seniors typically manage more prescriptions than any other age group. And managing multiple medications — with different dosing schedules, dietary restrictions, and potential interactions — is genuinely difficult. Medication errors are among the most common and most consequential causes of health decline in older adults. The simple act of a consistent daily reminder can change that picture.</p>
        <h2>The Scale of the Medication Problem</h2>
        <p>Studies estimate that medication non-adherence — missed doses, incorrect doses, taking medications at the wrong time — contributes to a significant percentage of senior hospitalizations. For seniors managing chronic conditions like hypertension, diabetes, heart failure, or COPD, consistent medication adherence is directly tied to health stability.</p>
        <h2>Why Seniors Miss Medications</h2>
        <p>The reasons are varied: forgetting, confusion about the schedule, difficulty opening containers, side effects that discourage adherence, or simply a routine disruption that throws off the habit. None of these are character failures — they are the predictable consequences of managing complexity without adequate support.</p>
        <h2>What a Medication Reminder Service Provides</h2>
        <p>A Beyond Care caregiver does not administer medications — that is the role of licensed clinical staff. What we provide is a consistent, reliable prompt at the right time each day. That prompt, combined with a familiar face and a daily routine, has a meaningful effect on adherence.</p>
        <h2>Medication Reminders as Part of a Broader Care Plan</h2>
        <p>Medication reminders work best as one component of a broader care plan that includes regular caregiver visits, communication with family, and appropriate coordination with the client&apos;s medical providers.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a home care caregiver administer medications?</p><p className="text-muted text-sm">A: No. Non-medical home care staff provide reminders — prompts to take medications — but do not administer or manage prescriptions. Medication administration is the role of licensed nursing staff.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if my loved one refuses to take their medications?</p><p className="text-muted text-sm">A: This is an important concern that should be raised with their physician. Our caregiver can note refusals and communicate them to the family as part of ongoing monitoring.</p></div>
      </>
    ),
  },
  "what-professional-caregivers-help-with-day-to-day": {
    title: "What a Professional Caregiver Actually Does Each Day",
    date: "March 2026",
    description: "What does a home care caregiver actually do during a visit? Learn what daily professional caregiver support looks like from Beyond Care in South Carolina.",
    category: "Our Services",
    faq: [
      { q: "How many hours does a typical home care caregiver visit last?", a: "Visit length depends on the care plan. Some clients receive a few hours of daily support; others have full-day or overnight caregivers. Beyond Care builds schedules around each client's actual needs." },
      { q: "Does a caregiver only help with tasks, or do they also spend time with the client?", a: "Both. Between task-oriented support, a caregiver is present — talking, listening, and engaging with the client. Companionship is not filler time; it is often what clients value most about the relationship." },
      { q: "Will Beyond Care communicate with my family about what happens during visits?", a: "Yes. Caregivers observe throughout every visit and report changes in the client's mood, energy, appetite, or condition to the Beyond Care team and to the family — keeping everyone informed." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Many families have a general idea that a home care caregiver helps around the house and with personal care — but not a clear picture of what a visit actually looks like from start to finish. Here is a realistic view of what professional caregiver support looks like day to day.</p>
        <h2>The Morning Routine</h2>
        <p>For many clients, the most valuable caregiver time is the morning. Getting out of bed safely, completing hygiene and grooming, dressing, preparing breakfast, and taking a morning medication are tasks that carry the highest physical and fall risk. A caregiver present during this window reduces risk and starts the day with structure and dignity.</p>
        <h2>Personal Care Assistance</h2>
        <p>Depending on the client&apos;s needs, the caregiver may assist with bathing or showering, oral hygiene, hair care, shaving, dressing, incontinence care, or feeding. These are handled with professionalism, patience, and a consistent respect for the client&apos;s preferences.</p>
        <h2>Companionship and Engagement</h2>
        <p>Between task-oriented support, a caregiver is present — talking, listening, engaging in activities, reading, or simply being a steady, familiar presence. This companionship element is not filler time. It is often what clients value most.</p>
        <h2>Meal Preparation and Nutrition</h2>
        <p>Caregivers plan and prepare meals that respect the client&apos;s preferences, dietary restrictions, and physical capabilities. This includes grocery shopping coordination, safe food preparation, and encouraging adequate intake.</p>
        <h2>Household Support</h2>
        <p>Light housekeeping — dishes, laundry, tidying common areas, taking out trash — is a routine part of many care visits. A clean, organized home is a safer home.</p>
        <h2>Transportation and Accompaniment</h2>
        <p>On days with appointments or errands, the caregiver provides transportation, accompanies the client as needed, and ensures a safe return home.</p>
        <h2>Observation and Communication</h2>
        <p>Throughout every visit, a trained Beyond Care caregiver is observing — watching for changes in the client&apos;s mood, energy, appetite, mobility, or cognition. That observation feeds back to the family and to our management team, keeping everyone informed.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if the client only needs help with one or two things?</p><p className="text-muted text-sm">A: Care plans are built around real needs. A client who only needs meal preparation and medication reminders gets exactly that — there is no requirement to accept services that are not needed.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How long is a typical caregiver visit?</p><p className="text-muted text-sm">A: Visit length varies based on the care plan. Some clients receive a few hours of support; others have all-day or overnight caregivers.</p></div>
      </>
    ),
  },
  "why-cpr-certified-caregivers-matter": {
    title: "Why CPR Certification in a Home Caregiver Is a Standard That Matters",
    date: "March 2026",
    description: "CPR certification in a home caregiver is more than a credential — it is a critical safety standard. Learn why it matters and how Beyond Care trains its team.",
    category: "Caregiver Standards",
    faq: [
      { q: "Are all Beyond Care caregivers CPR certified?", a: "Yes. CPR and First Aid certification is required as part of Beyond Care's orientation process and is maintained through ongoing training standards. No caregiver begins working with clients without this credential." },
      { q: "Why does CPR certification matter more in a home setting than in a facility?", a: "In a home setting, the caregiver is the only first responder until emergency services arrive — a window that can span several critical minutes. A CPR-certified caregiver in that moment is not a credential on paper; they are the emergency response." },
      { q: "What other safety training do Beyond Care caregivers receive?", a: "In addition to CPR and First Aid, caregivers complete orientation training, skills assessments, in-service education, and ongoing competency evaluations before and throughout their work with clients." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">When families evaluate home care options, CPR certification may not be the first thing they check — but it should be on the list. The presence of a CPR-certified caregiver in the home is not just a credential on paper. In the event of a cardiac emergency, stroke, choking incident, or other acute event, those skills can mean the difference between life and death in the minutes before emergency services arrive.</p>
        <h2>What CPR Certification Involves</h2>
        <p>CPR (cardiopulmonary resuscitation) and first aid certification trains individuals to respond to cardiac arrest, choking, severe bleeding, and other acute medical emergencies. Certified individuals learn chest compression technique, rescue breathing, use of automated external defibrillators (AEDs), and first aid response protocols.</p>
        <h2>Why It Matters in a Home Setting Specifically</h2>
        <p>In a facility setting, emergency response teams are nearby. In a home setting, a caregiver is the first and only responder until emergency services arrive — a window that can span several critical minutes. A CPR-certified caregiver in that moment is not a nice-to-have. They are the emergency response.</p>
        <h2>Beyond Care&apos;s Standard</h2>
        <p>Every Beyond Care caregiver is CPR and First Aid certified as a requirement of orientation — before they begin working with any client. This is a non-negotiable standard, not an optional credential.</p>
        <h2>What Families Should Ask Any Home Care Provider</h2>
        <p>When evaluating any home care agency, ask specifically: are all caregivers CPR certified? Is it a requirement or an option? How current are the certifications? The answers reveal something important about the provider&apos;s commitment to client safety.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care require all caregivers to maintain current CPR certification?</p><p className="text-muted text-sm">A: Yes. CPR and First Aid certification is required as part of our orientation process and is maintained through our ongoing training standards.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What other safety training do Beyond Care caregivers receive?</p><p className="text-muted text-sm">A: Beyond CPR, caregivers complete orientation training, in-service education, skills assessments, and ongoing competency evaluations.</p></div>
      </>
    ),
  },
  "how-family-caregivers-avoid-burnout": {
    title: "How Family Caregivers Can Protect Themselves From Burnout",
    date: "March 2026",
    description: "Family caregiver burnout is real — and common. Learn the warning signs and practical steps that help South Carolina family caregivers protect their own health and sustain care.",
    category: "Family Caregivers",
    faq: [
      { q: "What are the early warning signs of family caregiver burnout?", a: "Early signs include chronic exhaustion that sleep does not resolve, growing resentment, inability to concentrate, withdrawal from your own relationships, and declining personal health. These are signals that the caregiving load has exceeded sustainable capacity." },
      { q: "Is it acceptable to take breaks from caregiving?", a: "Not only acceptable — it is necessary. Sustainable caregiving over months or years requires built-in relief. Families that maintain long-term caregiving relationships successfully are those that recognize when to ask for help and act on it." },
      { q: "How can Beyond Care help a family caregiver who is approaching burnout in South Carolina?", a: "Respite care, supplemental daily support, and overnight coverage are all designed with family caregiver sustainability in mind. Call us — we can discuss how to structure relief that works for your specific situation." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Caregiver burnout is not a personal failure. It is the predictable result of sustained, often invisible effort that exceeds what one person can maintain indefinitely. If you are caring for a parent or spouse at home, you are doing something extraordinarily demanding — and the fact that you love the person you are caring for does not reduce the physical and emotional toll.</p>
        <h2>What Caregiver Burnout Actually Looks Like</h2>
        <p>Burnout is not always dramatic. It can look like chronic exhaustion that sleep does not fix, growing resentment that triggers guilt, inability to concentrate, withdrawal from your own relationships and interests, declining physical health from neglect of your own needs, and a diminished capacity to provide the care you want to give.</p>
        <h2>Why Caregivers Wait to Ask for Help</h2>
        <p>Family caregivers often delay seeking support because they feel guilt about needing a break, fear that outside help will signal failure, worry that their loved one will not accept someone else&apos;s help, or simply do not know how to initiate the process.</p>
        <h2>The Sustainability Math</h2>
        <p>A family caregiver who burns out is not providing good care. And the longer the caregiving relationship needs to last — months, years — the more important sustainability becomes. Taking breaks, setting limits, and accepting support is not optional if the goal is long-term caregiving capacity.</p>
        <h2>Practical Steps Toward Sustainability</h2>
        <ul>
          <li><TB /><span>Accept respite care. Even a few hours per week creates meaningful breathing room.</span></li>
          <li><TB /><span>Involve others in the caregiving circle. Other family members, neighbors, and community resources can contribute.</span></li>
          <li><TB /><span>Maintain at least one personal priority — exercise, a social connection, a personal interest.</span></li>
          <li><TB /><span>Communicate honestly with your loved one&apos;s medical team about your own capacity.</span></li>
          <li><TB /><span>Contact a home care provider to supplement what you are doing, not replace it.</span></li>
        </ul>
        <h2>Beyond Care&apos;s Role in Supporting Family Caregivers</h2>
        <p>Respite care, supplemental daily support, and overnight coverage are all designed with the family caregiver&apos;s sustainability in mind. Our goal is not to replace the family — it is to support the family in maintaining a role they can actually continue.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is it okay to take a break from caregiving?</p><p className="text-muted text-sm">A: Yes. Sustainable caregiving requires it. The families that maintain long-term caregiving relationships successfully are typically those who recognize when to ask for help.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I talk to my loved one about accepting additional help?</p><p className="text-muted text-sm">A: This is one of the most common challenges family caregivers face. Call us — we have navigated this conversation with many families.</p></div>
      </>
    ),
  },
  "transportation-support-seniors-more-than-a-ride": {
    title: "Senior Transportation — Why It Is About More Than Getting From Here to There",
    date: "March 2026",
    description: "When seniors lose access to transportation, health suffers. Learn how caregiver-provided transportation in South Carolina supports independence and health access.",
    category: "Transportation",
    faq: [
      { q: "Can a Beyond Care caregiver accompany my parent inside a medical appointment?", a: "Yes, where appropriate and as desired by the client and family. Unlike rideshare services, Beyond Care caregivers accompany clients — waiting, assisting inside the appointment if needed, and ensuring a safe return home." },
      { q: "Why is transportation considered a health care issue for seniors?", a: "Seniors without reliable transportation miss medical appointments at high rates, leading to delayed treatment, unmonitored conditions, and lapsed prescriptions. Transportation access is directly tied to health outcomes, not just convenience." },
      { q: "Does Beyond Care provide transportation to non-medical destinations?", a: "Yes. Caregivers provide transportation to grocery stores, pharmacy runs, social activities, religious services, and other errands — all of which contribute to a senior's independence and quality of life." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Driving is independence for most adults. When a senior can no longer drive safely — or simply no longer feels confident behind the wheel — the loss extends far beyond convenience. It affects access to healthcare, medication pickups, grocery shopping, social activities, and the fundamental feeling of being in control of one&apos;s daily life. Transportation support from a trusted caregiver is one of the most meaningful services home care provides.</p>
        <h2>The Health Consequences of Transportation Barriers</h2>
        <p>Seniors without reliable transportation miss medical appointments at alarming rates. Missed appointments mean delayed treatment, unmonitored conditions, lapsed prescriptions, and preventable health decline. Transportation is not a lifestyle convenience — it is a healthcare access issue.</p>
        <h2>Why a Caregiver-Provided Ride Is Different</h2>
        <p>A rideshare service drops someone off and drives away. A Beyond Care caregiver provides transportation and accompaniment — waiting, assisting inside the appointment, helping the client communicate with medical staff if needed, and ensuring a safe return home. That accompaniment changes the quality of the experience for the client significantly.</p>
        <h2>Social and Emotional Dimensions</h2>
        <p>Isolation is a major risk factor for senior health decline. Transportation to social activities, community programs, religious services, and visits with friends and family is not secondary — it is part of maintaining the social connection that keeps seniors engaged and well.</p>
        <h2>Grocery Shopping and Errands</h2>
        <p>Access to nutritious food is a direct health factor. A caregiver who accompanies a client to the grocery store — or shops on their behalf — ensures that the home has what it needs for healthy meals and daily living.</p>
        <h2>Integrating Transportation Into a Care Plan</h2>
        <p>Transportation from Beyond Care is not a separate service — it is woven into an individualized care plan alongside personal care, companionship, meal preparation, and other supports. Scheduling is built around the client&apos;s actual appointment and errand calendar.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can the caregiver come inside my loved one&apos;s medical appointment?</p><p className="text-muted text-sm">A: Yes, where appropriate and as desired by the client and family.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care provide transportation to all types of appointments?</p><p className="text-muted text-sm">A: Yes — medical, therapy, pharmacy, grocery, social, and other destinations as needed.</p></div>
      </>
    ),
  },
  "what-respite-care-gives-back-to-families": {
    title: "What Respite Care Actually Gives Back to Families",
    date: "March 2026",
    description: "Respite care is not just a break — it is what makes sustainable family caregiving possible. Learn how respite care from Beyond Care in South Carolina supports the whole family.",
    category: "Respite Care",
    faq: [
      { q: "What exactly is respite care and how is it different from regular home care?", a: "Respite care is relief-focused in-home care specifically designed to give family caregivers a scheduled break. The care provided is the same quality as any Beyond Care visit; the distinction is the purpose — supporting the sustainability of the family caregiver." },
      { q: "How much respite care do family caregivers typically need?", a: "This varies enormously. Some families benefit from a few hours per week; others need full-day or overnight coverage. The right amount is whatever allows the family caregiver to genuinely recover and maintain their own well-being over time." },
      { q: "Can respite care be arranged on short notice?", a: "Beyond Care does its best to accommodate short-notice respite needs. The earlier you contact us, the better we can match the right caregiver to the situation. Planned, scheduled respite is more sustainable than emergency-only arrangements." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The word &quot;respite&quot; means a brief period of rest or relief from something difficult. In the context of caregiving, it means time — time to rest, to handle personal obligations, to sleep through the night, to remember who you are outside of the caregiving role. What respite care gives back to families is not just hours. It is capacity.</p>
        <h2>The Invisible Weight of Family Caregiving</h2>
        <p>Family caregivers carry a load that is rarely fully visible — even to themselves. The constant availability, the interrupted sleep, the medical management, the emotional attentiveness, and the logistical coordination add up to something that most people outside the experience cannot fully appreciate.</p>
        <h2>What Respite Care Looks Like in Practice</h2>
        <p>Respite care from Beyond Care is simply having a trained, professional caregiver step in — for a few hours, a day, several days, or longer — so that the family caregiver can step back. During that time, the client receives the same quality of care they would receive any other day. The caregiver follows the care plan, provides personal support, companionship, meals, and whatever else is in the plan.</p>
        <h2>What Families Do With Respite Time</h2>
        <p>This varies enormously. Some family caregivers use respite to sleep. Others catch up on work, attend their own medical appointments, visit friends, travel, or simply sit quietly without being needed. All of these are valid. The point is not what you do with the time — it is that you have it.</p>
        <h2>Respite and the Long Game</h2>
        <p>Family caregiving often spans years. The families that maintain caregiving relationships over the long term are those that build sustainability into the process early. Respite care is not a luxury for those who are struggling — it is a maintenance practice for those who want to keep going.</p>
        <h2>Respite Is Also Good for the Client</h2>
        <p>It introduces a trusted caregiver into the client&apos;s life — which often becomes meaningful in its own right. A client who has built a relationship with a Beyond Care caregiver through regular respite visits has a foundation of familiarity that serves them well when more intensive care becomes necessary.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can I arrange respite care on short notice?</p><p className="text-muted text-sm">A: We do our best to accommodate short-notice needs. Contact us as early as possible to ensure the best caregiver match and scheduling.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is respite care the same as regular home care?</p><p className="text-muted text-sm">A: The care delivered is the same. The distinction is in the purpose — respite is specifically framed around giving family caregivers relief.</p></div>
      </>
    ),
  },
  "families-choosing-aging-in-place-support": {
    title: "Why Aging in Place Has Become the Preferred Choice for South Carolina Families",
    date: "March 2026",
    description: "Aging in place is not just a trend — it is what most seniors want. Learn why in-home care is making it possible for more South Carolina families.",
    category: "Aging in Place",
    faq: [
      { q: "What percentage of seniors prefer to age in place at home?", a: "Surveys consistently show that approximately 90 percent of older adults want to remain in their own homes for as long as possible. That preference is strong across income levels, health status, and geography." },
      { q: "What makes aging in place sustainable rather than just a preference?", a: "The right support structure. Without adequate help, aging in place can mean a senior struggling unsafely through daily tasks. With the right home care — personal assistance, companionship, meal preparation, transportation — it becomes a genuinely viable long-term plan." },
      { q: "Is aging in place always the right choice for South Carolina seniors?", a: "Not always. Beyond Care will be honest with families when a situation has exceeded what in-home care can safely address. But for many seniors — particularly when care begins early — appropriate home support makes aging in place a realistic long-term option." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">A generation ago, the default response to a senior&apos;s declining functional ability was often facility placement — assisted living, a nursing home, or a move in with an adult child. That default is shifting. More families today are choosing to keep their loved ones home — with professional support in place to make it work. That shift is not just sentimental. It is practical, evidence-based, and increasingly well-supported by home care infrastructure.</p>
        <h2>What Seniors Actually Want</h2>
        <p>Survey after survey shows that the overwhelming majority of older adults — upward of 90 percent — want to remain in their own homes for as long as possible. That preference is not irrational. Home is familiar. It holds history, independence, and the routines that define daily life.</p>
        <h2>The Research Supporting Aging in Place</h2>
        <p>Studies consistently link aging in place with better quality of life outcomes, higher satisfaction scores, slower cognitive decline in familiar environments, and lower rates of certain complications associated with institutional care settings.</p>
        <h2>What Makes Aging in Place Sustainable</h2>
        <p>The difference between aging in place working and failing is the support structure. Without appropriate support, aging in place can mean a senior struggling unsafely through daily tasks that have become too difficult. With the right support — personal care, companionship, meal preparation, transportation, medication reminders — it becomes a genuinely viable long-term plan.</p>
        <h2>How Beyond Care Supports Aging in Place</h2>
        <p>Beyond Care provides the individualized, flexible support that makes aging in place sustainable — built around each client&apos;s specific needs, delivered by trained caregivers, and supervised by nurse-led management.</p>
        <h2>Planning Early Changes the Outcome</h2>
        <p>Families who establish a home care relationship early — before a crisis — are better positioned to sustain aging in place over time. Starting with minimal support and scaling as needs grow is far more effective than introducing intensive care under emergency circumstances.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is aging in place always the right choice?</p><p className="text-muted text-sm">A: Not always. Beyond Care will be honest with families when a situation has exceeded what in-home care can safely address. But for many seniors, appropriate home care makes aging in place a genuinely realistic long-term plan.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: At what point should a family start planning for aging in place support?</p><p className="text-muted text-sm">A: Early. The earlier the care relationship is established, the more smoothly it grows with the client&apos;s needs.</p></div>
      </>
    ),
  },
  "senior-nutrition-at-home-small-habits": {
    title: "Senior Nutrition at Home — Why It Matters and How to Support It",
    date: "March 2026",
    description: "Poor nutrition is a leading driver of health decline in older adults. Learn practical nutrition tips for seniors at home — and how home care supports better eating habits.",
    category: "Health & Wellness",
    faq: [
      { q: "Why are seniors at higher risk for nutritional decline at home?", a: "Physical changes that affect taste and appetite, difficulty standing to cook, challenges grocery shopping, and the reality of eating alone all contribute to nutritional decline that families often do not notice until it has become a real problem." },
      { q: "Can a Beyond Care caregiver prepare meals for a senior with dietary restrictions?", a: "Yes. Dietary restrictions and preferences are documented in the care plan and respected during every meal preparation. Caregivers can work with low-sodium, diabetic, soft, and other specialty diets as prescribed." },
      { q: "What are the signs that a senior is experiencing nutritional decline?", a: "Unexplained weight loss, an increasingly empty refrigerator, signs of dehydration, declining energy, or increased confusion can all signal nutritional issues. Any of these warrant a conversation with a physician and a review of daily support." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Nutrition is one of the least visible and most important factors in senior health. Many older adults quietly experience nutritional decline — not because they do not want to eat well, but because shopping, cooking, and eating alone have become difficult in ways that are easy to overlook from a distance.</p>
        <h2>Why Seniors Are at Risk for Nutritional Decline</h2>
        <p>Physical changes that affect taste, appetite, and swallowing, combined with difficulty standing for extended periods, challenges shopping and carrying groceries, and the reality of cooking for one, all contribute to nutritional decline that families often do not notice until it has become a real problem.</p>
        <h2>The Health Consequences of Poor Nutrition in Seniors</h2>
        <p>Malnutrition and undernutrition in older adults are associated with weakened immune function, slower wound healing, muscle loss, increased fall risk, cognitive decline, and higher rates of hospitalization.</p>
        <h2>Practical Nutrition Strategies for Seniors at Home</h2>
        <ul>
          <li><TB /><span>Smaller, more frequent meals work better than three large ones for many seniors</span></li>
          <li><TB /><span>High-protein snacks help maintain muscle mass</span></li>
          <li><TB /><span>Hydration is consistently overlooked — seniors often do not feel thirst as strongly as younger adults</span></li>
          <li><TB /><span>Social eating — with a caregiver, family member, or companion — consistently increases food intake</span></li>
          <li><TB /><span>Simple, familiar foods are often more consistently consumed than elaborate meals</span></li>
        </ul>
        <h2>How a Home Care Caregiver Supports Nutrition</h2>
        <p>A Beyond Care caregiver who prepares meals brings consistency to nutrition that is difficult to achieve otherwise. Meals are prepared fresh, portions are appropriate, dietary restrictions are respected, and the simple act of having someone present during meals improves intake for many clients.</p>
        <h2>Signs of Nutritional Decline to Watch For</h2>
        <p>Unexplained weight loss, increasingly empty refrigerators, signs of dehydration, declining energy, or increased confusion can all signal nutritional issues worth addressing.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a Beyond Care caregiver prepare meals for clients with specific dietary restrictions?</p><p className="text-muted text-sm">A: Yes. Dietary restrictions and preferences are documented in the care plan and respected by the caregiver during meal preparation.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if my loved one has lost interest in eating?</p><p className="text-muted text-sm">A: Appetite changes in seniors can reflect physical, emotional, or medical causes. Note it, raise it with their physician, and consider how home care support can address the daily routine around meals.</p></div>
      </>
    ),
  },
  "early-memory-changes-when-families-should-pay-attention": {
    title: "Early Memory Changes — What Families Should Watch For",
    date: "March 2026",
    description: "Memory changes in aging parents can be easy to dismiss. Learn which early signs warrant attention — and how in-home support helps South Carolina families manage safely.",
    category: "Memory Care",
    faq: [
      { q: "What is the difference between normal age-related forgetfulness and a warning sign of dementia?", a: "Normal aging may involve occasionally forgetting a name but recalling it later, or slower information retrieval. Concerning signs include repeatedly asking the same question, forgetting recently learned information, getting lost in familiar places, or significant personality changes." },
      { q: "If my parent shows early memory changes, what should I do first?", a: "Schedule an appointment with their primary care physician. A physician can rule out reversible causes of cognitive decline — medication side effects, thyroid issues, vitamin deficiencies — and refer for further evaluation if needed. Early diagnosis opens the door to planning and support." },
      { q: "How does home care help a senior with early memory changes stay safe?", a: "Consistency is one of the most effective supports for early cognitive decline. A familiar caregiver, a predictable daily routine, and a structured home environment reduce confusion, support function, and provide early warning for the family when changes occur." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">It is easy to dismiss early memory changes in a parent or loved one as &quot;just getting older.&quot; And some degree of cognitive slowing is a normal part of aging. But there is a meaningful difference between normal age-related memory variation and changes that warrant attention, a physician conversation, and a plan.</p>
        <h2>Normal Age-Related Memory Changes vs. Concerning Signs</h2>
        <p><strong className="font-bold text-ink">Normal:</strong> occasionally forgetting a name but remembering it later, slower recall of information, needing more time to learn something new.</p>
        <p><strong className="font-bold text-ink">Concerning:</strong> forgetting recently learned information repeatedly, asking the same question multiple times in a short period, getting lost in familiar places, significant personality or behavior changes, difficulty managing finances or medication that was previously routine.</p>
        <h2>What Early Intervention Can and Cannot Do</h2>
        <p>A physician consultation can rule out reversible causes of cognitive decline — medication side effects, thyroid issues, vitamin deficiencies, depression — and provide guidance on conditions like mild cognitive impairment or early Alzheimer&apos;s disease. Early diagnosis does not cure these conditions, but it opens the door to planning, support, and — in some cases — treatment that can slow progression.</p>
        <h2>How Home Care Supports Clients With Early Memory Changes</h2>
        <p>Consistency is one of the most effective environmental supports for someone with early cognitive changes. A familiar caregiver, a consistent daily schedule, and a structured home environment reduce confusion and support function. Beyond Care caregivers are experienced in working with clients who have cognitive changes in a patient, respectful, and safe manner.</p>
        <h2>Safety Considerations</h2>
        <p>As memory changes progress, safety concerns increase — medication management errors, leaving appliances on, wandering risk, and difficulty recognizing unsafe situations. A caregiver in the home provides supervision, structure, and an early warning system for the family.</p>
        <h2>Having the Conversation Early</h2>
        <p>Families often wait until a crisis — a dangerous medication error, a lost episode, a fall related to confusion — to act. Early conversations about home care, physician monitoring, and family planning produce better outcomes than reactive crisis response.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care specialize in dementia care?</p><p className="text-muted text-sm">A: Beyond Care provides non-medical in-home support for clients with memory changes and cognitive decline. We match clients with caregivers who have the experience and temperament for this type of care.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: When is in-home care no longer sufficient for a client with dementia?</p><p className="text-muted text-sm">A: This depends on the individual&apos;s needs. We will be honest with families about what level of care is appropriate as needs evolve.</p></div>
      </>
    ),
  },
  "home-care-supports-mobility-daily-confidence": {
    title: "How Home Care Supports Senior Mobility and Daily Confidence",
    date: "March 2026",
    description: "Mobility challenges affect everything — from fall risk to independence and emotional well-being. Learn how home care from Beyond Care supports safer daily movement for seniors.",
    category: "Personal Care",
    faq: [
      { q: "Can a home care caregiver assist a senior who uses a wheelchair or walker?", a: "Yes. Beyond Care caregivers are trained in mobility assistance for clients using wheelchairs, walkers, and other assistive equipment — including safe transfer techniques and ambulation support." },
      { q: "Does home care replace physical therapy for seniors with mobility challenges?", a: "No. Physical therapy is a clinical service requiring a licensed therapist and physician order. Home care supports daily mobility between therapy sessions — reinforcing function, building confidence, and assisting with prescribed exercise activities." },
      { q: "How does reduced mobility affect a senior's overall well-being?", a: "Mobility decline creates a difficult cycle: reduced movement weakens muscles, increasing fall risk, which leads to fear-driven inactivity that further weakens the body. A present caregiver breaks that cycle by providing the confidence and physical support needed to keep moving." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Mobility affects everything. A senior who moves with confidence — who can get out of bed safely, walk through the home without fear, and transfer from a chair without help — experiences a fundamentally different daily life than one who cannot. When mobility becomes compromised, beyond the physical risk, it erodes the sense of independence and confidence that is central to quality of life.</p>
        <h2>The Physical Risks of Mobility Decline</h2>
        <p>Reduced mobility increases fall risk, contributes to muscle deconditioning, and can create a cycle where fear of falling leads to reduced activity — which further weakens the muscles needed to prevent falls.</p>
        <h2>What Mobility Support From a Caregiver Looks Like</h2>
        <p>A Beyond Care caregiver provides hands-on assistance with transfers — from bed to chair, chair to wheelchair, wheelchair to toilet — using techniques that minimize injury risk for the client. They assist with ambulation, walking alongside the client to provide stability and confidence. They assist with prescribed exercise regimens and range of motion activities to maintain and support physical function.</p>
        <h2>The Confidence Factor</h2>
        <p>Many seniors restrict their own activity out of fear — not current physical limitation. Having a trained, trusted caregiver present gives them the confidence to attempt and maintain activities they would otherwise avoid. That sustained activity is itself protective.</p>
        <h2>Mobility Support and Fall Prevention</h2>
        <p>These two areas are deeply linked. Caregivers who assist with high-risk mobility moments — getting up from bed, bathing, transferring — are addressing the specific contexts where most falls occur.</p>
        <h2>Mobility Assistance as Part of a Care Plan</h2>
        <p>Mobility assistance from Beyond Care is not a standalone service — it is integrated into a care plan alongside personal care, companionship, and other supports, coordinated around the client&apos;s specific physical situation.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a home care caregiver assist with a client who uses a wheelchair or walker?</p><p className="text-muted text-sm">A: Yes. Our caregivers are trained in mobility assistance for clients with a range of physical limitations and assistive equipment needs.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can home care substitute for physical therapy?</p><p className="text-muted text-sm">A: No. Physical therapy is a clinical service requiring a licensed therapist. Home care supplements therapy by supporting daily mobility between sessions — not replacing it.</p></div>
      </>
    ),
  },
  "why-social-connection-matters-later-life": {
    title: "Why Social Connection Remains One of the Most Important Health Factors in Later Life",
    date: "March 2026",
    description: "Social connection is not a luxury for seniors — it is a health requirement. Learn why companionship and engagement matter deeply to senior well-being in South Carolina.",
    category: "Senior Well-Being",
    faq: [
      { q: "How serious a health risk is social isolation for older adults?", a: "Chronic isolation in older adults is linked to accelerated cognitive decline, depression, weakened immune function, increased cardiovascular risk, and higher mortality rates. The research places its health impact in the same category as smoking or obesity." },
      { q: "How does social isolation happen for seniors living at home?", a: "Isolation typically builds gradually: a spouse passes, friends move or decline, driving stops, mobility decreases, and family is busy at a distance. Over time, the social world contracts until daily life becomes very quiet — often without the senior fully registering how much has changed." },
      { q: "Can a companion caregiver really make a meaningful difference for a lonely senior?", a: "Yes. Families consistently observe meaningful changes in mood, engagement, and energy within weeks of regular companion care. The relationship itself — a consistent, caring presence — has documented health value beyond the activities involved." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">We tend to think of health in terms of physical measures — blood pressure, medication management, fall prevention. But social connection is as important to senior health as many clinical factors — and it is one of the most commonly neglected.</p>
        <h2>What Research Says About Social Isolation</h2>
        <p>Chronic social isolation in older adults has been linked to accelerated cognitive decline, higher rates of depression and anxiety, increased cardiovascular risk, weakened immune function, and higher mortality rates. These are not soft outcomes — they are the same category of risk as smoking or obesity.</p>
        <h2>How Isolation Happens</h2>
        <p>Isolation among seniors is usually gradual. A spouse passes. Friends move or pass. Mobility declines, making it harder to get out. Family is busy and lives at a distance. The telephone feels harder to use. Slowly, the social world contracts until daily life becomes very quiet and very alone.</p>
        <h2>The Role of a Companion Caregiver</h2>
        <p>A Beyond Care companion caregiver provides more than company — they provide a consistent, familiar relationship with a person who genuinely engages with the client. That relationship has real health value. Clients with companion caregivers report higher mood, better sleep, and greater sense of purpose and connection.</p>
        <h2>Social Engagement and Cognitive Health</h2>
        <p>Conversations, shared activities, games, reading, and mentally stimulating engagement provide cognitive exercise that has protective effects for aging brains. The companion caregiver relationship is a vehicle for that engagement.</p>
        <h2>Supporting Connection With Family</h2>
        <p>Beyond Care caregivers can also support clients in staying connected with family — helping with video calls, letter writing, and the logistics of maintaining relationships with people who are not physically present.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can companion care alone improve my loved one&apos;s mood and engagement?</p><p className="text-muted text-sm">A: Yes. Many families observe meaningful changes in mood, energy, and engagement within a short period of regular companion care.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is companion care available for just a few hours a week?</p><p className="text-muted text-sm">A: Yes. Even a few hours of regular companion care per week can make a significant difference.</p></div>
      </>
    ),
  },
  "light-housekeeping-improves-safety-seniors": {
    title: "How Light Housekeeping Makes a Senior's Home Safer",
    date: "March 2026",
    description: "A tidy home is a safer home. Learn how light housekeeping from a home care caregiver supports fall prevention and daily health for seniors in South Carolina.",
    category: "Home Safety",
    faq: [
      { q: "What does light housekeeping from a home care caregiver typically include?", a: "Light housekeeping includes laundry, dishes, vacuuming, sweeping, surface cleaning, bathroom and kitchen maintenance, organization, and trash removal — the routine upkeep that keeps a home functional, clean, and safe." },
      { q: "How does a messy home increase fall risk for seniors?", a: "Throw rugs, loose cords, stacked items in walkways, and general floor clutter are among the most common trip hazards in senior homes. A caregiver who keeps pathways clear and manages accumulating items is actively reducing fall risk with every visit." },
      { q: "Does light housekeeping include deep cleaning or home repairs?", a: "No. Light housekeeping covers routine daily and weekly maintenance tasks. Deep cleaning projects, repairs, and outdoor maintenance are not typically included, though specific needs can be discussed during the care planning process." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Housekeeping is often framed as a comfort service — something nice to have but not essential. For seniors living at home, the reality is different. A cluttered, disorganized, or poorly maintained home is a physical risk environment. Light housekeeping from a home care caregiver is a safety service as much as a comfort one.</p>
        <h2>The Direct Link Between Clutter and Falls</h2>
        <p>Throw rugs, stacked items in walkways, loose cords, and general clutter on the floor are among the most common trip hazards in senior homes. A caregiver who keeps pathways clear and manages items that accumulate on floors and surfaces is actively reducing fall risk.</p>
        <h2>What Light Housekeeping Includes</h2>
        <p>Beyond Care caregivers provide light housekeeping as part of care plans — not deep cleaning or renovation, but the regular maintenance that keeps a home functional and safe. This includes: laundry, dishes, vacuuming and sweeping, surface cleaning and organization, bathroom maintenance, kitchen tidying, and trash removal.</p>
        <h2>Food Safety in the Kitchen</h2>
        <p>A caregiver who regularly checks the refrigerator, removes expired food, and maintains a hygienic kitchen is protecting the client from foodborne illness — a real risk for seniors who may not notice or act on spoilage.</p>
        <h2>The Psychological Benefits of a Tidy Home</h2>
        <p>Living in a clean, organized home has real psychological benefits — reduced anxiety, improved sense of control, and greater comfort. For seniors who take pride in their homes, maintaining that environment matters deeply to their sense of dignity.</p>
        <h2>Housekeeping as Part of an Integrated Care Plan</h2>
        <p>Light housekeeping works alongside personal care, companion support, and other services as part of a coordinated Beyond Care plan — not as a standalone cleaning service, but as one component of a comprehensive approach to daily support.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is heavy cleaning or home maintenance included?</p><p className="text-muted text-sm">A: Light housekeeping covers routine tasks — laundry, dishes, tidying, bathroom and kitchen maintenance. Heavy cleaning, repairs, or outdoor maintenance are not typically included.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a caregiver help organize and declutter the home?</p><p className="text-muted text-sm">A: Light organization and tidying are part of standard housekeeping support. Significant decluttering projects can be discussed on a case-by-case basis.</p></div>
      </>
    ),
  },
  "emotional-benefits-staying-at-home-seniors": {
    title: "The Emotional Benefits of Staying Home — What Families Should Understand",
    date: "March 2026",
    description: "Home is more than a place — for seniors, it is independence, memory, and identity. Learn about the emotional benefits of aging at home with support from Beyond Care in South Carolina.",
    category: "Aging in Place",
    faq: [
      { q: "Do seniors who stay at home have better emotional health outcomes than those who move to facilities?", a: "Research consistently shows that seniors who remain at home with appropriate support report higher life satisfaction, lower rates of depression, and better overall psychological well-being compared to comparable populations in facility care." },
      { q: "Why is environmental familiarity especially important for seniors with memory changes?", a: "Familiar environments reduce confusion, support daily orientation, and provide the sensory anchors — the chair by the window, the layout of the kitchen — that help people with cognitive changes navigate their day. Removing those anchors can produce disorientation and accelerated decline." },
      { q: "Can a senior return to home care after a period in a facility?", a: "In some cases, yes. If a senior was placed in a facility following a health event and has since stabilized, returning home with in-home support may be possible. Contact Beyond Care to discuss the specific situation." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">When families weigh care options, the conversation tends to focus on practical factors: safety, cost, level of need. The emotional dimension — what it means to a senior to stay in their own home — often gets underweighted. For many older adults, home is not just where they live. It is where their life is.</p>
        <h2>Home as Identity</h2>
        <p>The house a person has lived in for decades holds their history — their children&apos;s heights marked on a door frame, the garden they planted, the chair where they read every morning. For many seniors, leaving that home is not just a physical relocation. It is a rupture in their sense of who they are.</p>
        <h2>Independence and Dignity</h2>
        <p>Remaining at home preserves the fundamental sense of being in control of one&apos;s life — of deciding when to wake up, what to eat, how to spend the day, who visits. Even with caregiver support, this autonomy is substantially greater at home than in any facility setting.</p>
        <h2>The Stress of Environmental Change</h2>
        <p>Transitions are hard for aging adults, particularly those with any degree of cognitive change. Familiar environments reduce confusion, support routine, and provide the sensory anchors that help people orient themselves in daily life. Removing those anchors — even for a &quot;better&quot; setting — can produce disorientation and decline.</p>
        <h2>Better Mental Health Outcomes</h2>
        <p>Research consistently shows that seniors who remain at home with appropriate support report higher levels of life satisfaction, lower rates of depression, and better overall psychological well-being than comparable populations in facility care.</p>
        <h2>What This Means for Family Decisions</h2>
        <p>This does not mean home is always the right choice — it is not for everyone. But the emotional and psychological costs of facility placement are real, and they deserve weight in the decision. When in-home care can safely and sustainably support a senior&apos;s needs, the case for it is strong on multiple dimensions.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a senior in a facility return to in-home care?</p><p className="text-muted text-sm">A: In some cases, yes. If a senior was placed in a facility after a health event and has since stabilized, returning home with in-home support may be possible. Contact us to discuss the specific situation.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I know if my loved one is emotionally struggling with care at home vs. a facility?</p><p className="text-muted text-sm">A: Listen carefully to what they say and watch for mood and behavior changes. Their expressed preferences matter and deserve to be part of the conversation.</p></div>
      </>
    ),
  },
  "home-care-resources-families-honea-path-sc": {
    title: "Home Care Resources for Families in Honea Path, South Carolina",
    date: "March 2026",
    description: "Families in Honea Path, SC looking for in-home care resources — Beyond Care Home Care Services is based in Honea Path and serves the surrounding community. Learn more.",
    category: "Local Resources",
    faq: [
      { q: "Where is Beyond Care's main office in Honea Path, South Carolina?", a: "Beyond Care's main office is located at 512A East Greer Street in Honea Path, SC. This serves as the operational hub for care throughout Anderson County and the broader Upstate South Carolina region." },
      { q: "Does Beyond Care serve areas outside Honea Path?", a: "Yes. Beyond Care serves families throughout Anderson County and surrounding Upstate counties including Greenville, Abbeville, Pickens, and Greenwood — all served from the Honea Path and Williamston office locations." },
      { q: "What public programs help pay for home care in Anderson County, South Carolina?", a: "Anderson County families may qualify for Community Long Term Care (CLTC), Medicaid Waiver programs, VA Aid and Attendance benefits, and vouchers. Contact SCDHHS at 1-888-549-0820 to explore eligibility." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">If you are caring for an aging parent, a spouse, or another family member in Honea Path, SC, you are likely navigating a mix of practical challenges: finding reliable care, understanding what options are available, managing the emotional weight of the situation, and figuring out who to call. This post is designed to help Honea Path families orient themselves.</p>
        <h2>Beyond Care Home Care Services — Based in Honea Path</h2>
        <p>Beyond Care is based right here in Honea Path. Our main office at 512A East Greer Street serves as the operational hub for our work across Anderson County and the broader Upstate region. When you call us, you reach people who live and work in this community.</p>
        <h2>Non-Medical Home Care Options in Honea Path</h2>
        <p>Beyond Care provides the full range of non-medical home care services to Honea Path families — personal care, companion care, respite care, meal preparation, light housekeeping, transportation, medication reminders, mobility support, and hospital discharge support. Care is available on a flexible schedule from a few hours per week to 24-hour support.</p>
        <h2>Paying for Home Care in Anderson County</h2>
        <p>Payment and coverage options for home care in the Honea Path area include private pay, long-term care insurance, Community Long Term Care (CLTC), Medicaid Waiver, VA benefits, and vouchers. The South Carolina Department of Health and Human Services (SCDHHS) administers many of the public programs — contact them at 1-888-549-0820 for eligibility information.</p>
        <h2>Starting the Process</h2>
        <p>The simplest starting point is a phone call to Beyond Care: (864) 841-2500. Our team will listen to your situation, answer your questions, and help you understand your options — with no pressure and no obligation.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care serve only Honea Path, or also surrounding areas?</p><p className="text-muted text-sm">A: Beyond Care serves families throughout Anderson County and surrounding Upstate counties including Greenville, Abbeville, Pickens, and Greenwood.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What is the fastest way to get care started in Honea Path?</p><p className="text-muted text-sm">A: Call us directly at (864) 841-2500. We can often move quickly from initial conversation to care start.</p></div>
      </>
    ),
  },
  "home-care-resources-families-williamston-sc": {
    title: "Home Care Resources for Families in Williamston, South Carolina",
    date: "March 2026",
    description: "Beyond Care serves families in Williamston, SC from our satellite office at 103 Belton Drive. Learn about home care services and resources available in Williamston.",
    category: "Local Resources",
    faq: [
      { q: "Where is Beyond Care's Williamston, SC office located?", a: "Beyond Care's Williamston satellite office is located at 103 Belton Drive, Williamston, SC. Office hours are Monday through Friday, 8:00 AM to 4:00 PM." },
      { q: "What home care services are available to families in Williamston, South Carolina?", a: "The full range of Beyond Care services is available in Williamston — personal care, companion care, respite care, meal preparation, housekeeping, transportation, medication reminders, mobility support, and hospital discharge support." },
      { q: "How do I contact Beyond Care's Williamston office?", a: "Call the Williamston office at (864) 369-0222 or the main Honea Path line at (864) 841-2500. Both lines connect you with our team and are available during regular business hours." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">If your family is navigating a home care situation in Williamston, SC, Beyond Care Home Care Services is close by. Our Williamston office at 103 Belton Drive brings professional, nurse-led home care directly to this community.</p>
        <h2>Beyond Care&apos;s Williamston Office</h2>
        <p>Our satellite office in Williamston extends our reach into the greater Anderson and Greenville County corridor. Families in Williamston can access our full range of non-medical home care services with the same standards applied across all Beyond Care clients.</p>
        <h2>Home Care Services Available in Williamston</h2>
        <p>Personal care, companion care, respite care, meal preparation, light housekeeping, transportation, medication reminders, mobility support, and hospital discharge support are all available to Williamston-area families on a flexible schedule.</p>
        <h2>Payment Options for Williamston Families</h2>
        <p>Private pay, long-term care insurance, CLTC, Medicaid Waiver, VA benefits, and vouchers all represent potential payment pathways. Contact us and we can help you identify which options may apply to your family&apos;s situation.</p>
        <h2>How to Get Started</h2>
        <p>Call our Williamston office at (864) 369-0222 or our main Honea Path line at (864) 841-2500. We will schedule a consultation and help you understand your options.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care serve areas surrounding Williamston?</p><p className="text-muted text-sm">A: Yes. From our Williamston office, we serve families in Williamston and surrounding communities throughout Anderson and Greenville counties.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can I visit the Williamston office in person?</p><p className="text-muted text-sm">A: Yes. Contact us to arrange a visit during office hours, Monday–Friday, 8:00 AM – 4:00 PM.</p></div>
      </>
    ),
  },
  "upstate-south-carolina-families-choose-in-home-care": {
    title: "Why Upstate South Carolina Families Are Choosing In-Home Care",
    date: "March 2026",
    description: "Families across Upstate South Carolina are increasingly choosing in-home care for seniors and adults. Learn why — and how Beyond Care supports families throughout the region.",
    category: "Local Resources",
    faq: [
      { q: "Which counties in Upstate South Carolina does Beyond Care serve?", a: "Beyond Care serves Anderson, Greenville, Abbeville, Pickens, and Greenwood counties from office locations in Honea Path and Williamston, SC. Contact us to confirm service availability in your specific area." },
      { q: "Why do Upstate South Carolina families tend to prefer in-home care over facility placement?", a: "Upstate communities have a strong cultural value placed on family, independence, and staying rooted in home. In-home care aligns with that character — it supports the desire to age in a familiar place without requiring the family to manage everything alone." },
      { q: "Why does it matter that Beyond Care is locally owned rather than a franchise?", a: "A locally owned company — operated by a nurse who lives in this community — has genuine accountability to the families it serves. When something needs to be addressed, there is a real person nearby who has a personal stake in getting it right." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Across Upstate South Carolina — Anderson, Greenville, Abbeville, Pickens, Greenwood counties — families are navigating the same question: when a loved one needs more support than the family alone can provide, what is the best option? For a growing number of families in this region, the answer is professional in-home care.</p>
        <h2>The Demographics Driving Demand</h2>
        <p>South Carolina&apos;s senior population is growing, and the Upstate is no exception. As the population ages, the demand for home care services — delivered by trained professionals to support seniors and adults in their own homes — is increasing substantially.</p>
        <h2>The Community Character of Upstate South Carolina</h2>
        <p>There is a particular character to Upstate South Carolina communities — a value placed on family, on independence, and on staying rooted in the place you have always called home. In-home care aligns naturally with that character. It supports the desire to age in a familiar place, among familiar people and surroundings, without requiring the family to manage everything alone.</p>
        <h2>What In-Home Care Offers Upstate Families Specifically</h2>
        <p>Beyond Care&apos;s two office locations — Honea Path and Williamston — are positioned to serve the core of the Upstate region. Families throughout Anderson County and surrounding areas benefit from a provider that is genuinely local, not a regional franchise operating from a distance.</p>
        <h2>The Range of Needs Home Care Addresses</h2>
        <p>Upstate families are using in-home care for situations ranging from light supplemental support a few hours a week to intensive daily care and overnight coverage. The flexibility of the model makes it appropriate for a wide spectrum of situations.</p>
        <h2>Why Local Ownership Matters</h2>
        <p>A locally owned home care company — owned and operated by a nurse who lives in this community — is accountable to the community in a way that a regional chain is not. When something needs to be addressed, there is a real person close by who has a genuine stake in getting it right.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care serve all of Upstate South Carolina?</p><p className="text-muted text-sm">A: Beyond Care serves Anderson, Greenville, Abbeville, Pickens, and Greenwood counties. Contact us to confirm service availability in your specific area.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is home care more popular in some parts of the Upstate than others?</p><p className="text-muted text-sm">A: Demand exists throughout the region. Our two office locations allow us to serve both the central Anderson County area and the broader Upstate corridor effectively.</p></div>
      </>
    ),
  },
  "home-care-support-veterans-families-south-carolina": {
    title: "Home Care Support for Veterans in South Carolina",
    date: "March 2026",
    description: "Veterans in South Carolina may qualify for VA home care benefits. Learn how Beyond Care supports veterans and how VA Aid and Attendance can help fund in-home care.",
    category: "Veterans",
    faq: [
      { q: "What is VA Aid and Attendance and how can it help pay for home care in South Carolina?", a: "VA Aid and Attendance is a monthly pension supplement available to qualifying veterans and surviving spouses who need assistance with daily living activities. Eligible recipients receive meaningful additional monthly income specifically intended to fund care like what Beyond Care provides." },
      { q: "Does a veteran need to have been injured in service to qualify for Aid and Attendance?", a: "No. Aid and Attendance eligibility is based on current need for daily assistance and financial criteria — not on service-connected disability. Many veterans who never filed a VA disability claim may still qualify for this benefit." },
      { q: "Does Beyond Care's surviving spouse qualify for VA benefits if their veteran spouse is deceased?", a: "Surviving spouses of eligible veterans may qualify for a version of the Aid and Attendance benefit. Contact the VA at 1-800-827-1000 or a Veterans Service Organization such as the American Legion or VFW for specific guidance." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Veterans who have served this country deserve access to quality care in their later years. For many veterans — and eligible surviving spouses — the U.S. Department of Veterans Affairs provides benefits that can significantly offset the cost of in-home care. Yet these benefits are among the most underutilized entitlements available to American veterans.</p>
        <h2>The VA Aid and Attendance Benefit</h2>
        <p>Aid and Attendance is a monthly pension supplement available to eligible veterans who require assistance with activities of daily living. It is separate from VA healthcare and available to veterans who were not injured in service — it is based on current need, not the nature of service. Eligible veterans can receive meaningful additional monthly income specifically intended to fund care like what Beyond Care provides.</p>
        <h2>Who May Qualify</h2>
        <p>General eligibility for Aid and Attendance typically requires: military service with at least 90 days of active duty, at least one day during a qualifying period of war, discharge under conditions other than dishonorable, a current need for assistance with personal care, and financial eligibility meeting VA pension criteria.</p>
        <h2>How to Apply for VA Benefits</h2>
        <p>Veterans and families can contact the VA at 1-800-827-1000, visit VA.gov, or connect with a Veterans Service Organization (VSO) such as the American Legion, VFW, or Disabled American Veterans (DAV) for free assistance with the claims process. Your county&apos;s Veterans Affairs office may also provide support.</p>
        <h2>Beyond Care and Veteran Clients</h2>
        <p>Beyond Care proudly serves veterans and their families in Upstate South Carolina. We work with families who are using VA benefits to fund home care and can assist with documentation and care plan coordination as needed.</p>
        <h2>Starting the Conversation</h2>
        <p>If you believe a veteran in your family may be entitled to VA benefits for home care, start the application process early — benefit approval can take time, and care needs do not always wait.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does the VA directly pay Beyond Care?</p><p className="text-muted text-sm">A: VA benefit arrangements vary. Contact us and we will discuss how benefit payments are typically structured.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My parent is a surviving spouse of a veteran — do they qualify?</p><p className="text-muted text-sm">A: Surviving spouses of eligible veterans may qualify for a version of the Aid and Attendance benefit. Contact the VA or a VSO for specific eligibility guidance.</p></div>
      </>
    ),
  },
  "planning-care-after-surgery-rehabilitation": {
    title: "How to Plan for Care After Surgery or Rehabilitation",
    date: "March 2026",
    description: "Coming home after surgery or rehab requires a plan. Learn how in-home care from Beyond Care in South Carolina supports a safer, smoother recovery at home.",
    category: "Recovery Care",
    faq: [
      { q: "When should I contact Beyond Care if my loved one has upcoming surgery?", a: "Contact us as soon as a discharge date is anticipated — ideally before the discharge day. This allows us to conduct an assessment, build a care plan, and identify the right caregiver match so care can begin the day your loved one returns home." },
      { q: "What specific support does Beyond Care provide during the post-surgery recovery window?", a: "Personal care assistance, meal preparation appropriate to recovery dietary needs, medication reminders, transportation to follow-up appointments, light housekeeping, companionship, and observation for concerning changes that warrant contact with the care team." },
      { q: "How long does post-surgery home care typically last?", a: "It depends on the procedure, the patient's age and health, and the pace of recovery. Some clients need a few weeks of daily support; others transition to longer-term home care. Beyond Care adjusts care plans as the patient's needs evolve." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Surgery and rehabilitation stays are planned events — which means the home care that follows can be planned too. The families who navigate post-surgical and post-rehabilitation recovery most successfully are those who arrange support before discharge, not after arrival home.</p>
        <h2>What the Recovery Window Looks Like</h2>
        <p>The first few weeks following surgery or a rehabilitation stay are often the highest-risk period for complications, falls, medication errors, and readmission. During this window, a person is often physically weaker than their pre-surgery baseline, managing unfamiliar medications, and adjusting to activity restrictions that require help from someone else.</p>
        <h2>Why Planning Ahead Matters</h2>
        <p>Home care providers need time to conduct assessments, build care plans, and identify the right caregiver match. Families who call the day of discharge are asking providers to compress a process that works better with a few days&apos; notice. If you know discharge is coming — plan now.</p>
        <h2>What Beyond Care Provides During Recovery</h2>
        <p>Personal care assistance while mobility is limited, meal preparation appropriate to post-surgical dietary needs, transportation to follow-up appointments and therapy, medication reminders, light housekeeping, and companionship during recovery are all part of our post-surgical and post-rehabilitation support.</p>
        <h2>Short-Term vs. Ongoing Care</h2>
        <p>Some clients need intensive support for the recovery window and then can manage independently or with family support. Others discover during the recovery period that longer-term home care is needed. Both outcomes are common, and Beyond Care&apos;s care plans are built to be adjusted as your loved one&apos;s situation evolves.</p>
        <h2>Questions to Ask Before Discharge</h2>
        <p>Before your loved one is discharged, ask the hospital or rehab team: What activity restrictions apply? What are the follow-up appointment dates and locations? Are there specific mobility or transfer precautions we need to know? What medications are being prescribed and when should they be taken? What warning signs warrant a return to the ER? Bring this information into your care planning conversation with Beyond Care.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can Beyond Care coordinate with the surgical or rehab team?</p><p className="text-muted text-sm">A: We are happy to work alongside hospital case managers and discharge planners to support a smooth transition home.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How long after discharge can care begin?</p><p className="text-muted text-sm">A: We aim to have care in place on the day of discharge for clients who contact us in advance. Contact us as soon as a discharge date is known.</p></div>
      </>
    ),
  },
  "questions-ask-before-hiring-home-care-provider": {
    title: "Questions to Ask Before You Hire a Home Care Provider",
    date: "March 2026",
    description: "Not all home care providers are equal. Use these questions to evaluate and choose the right home care company for your loved one in South Carolina.",
    category: "Choosing Care",
    faq: [
      { q: "What is the most important question to ask a home care provider in South Carolina?", a: "Ask whether caregivers are employees or independent contractors. Employee caregivers are trained, supervised, bonded, insured, and covered by workers' compensation. Contractor-based agencies transfer significant risk and accountability to the family." },
      { q: "Should all home care agencies have nurse involvement in care planning?", a: "Yes — it is a meaningful quality differentiator. A care plan created without clinical input is essentially a schedule. Nurse-led oversight ensures clinical awareness, appropriate response to health changes, and a higher standard of ongoing care." },
      { q: "How do I verify that a home care agency in South Carolina is licensed?", a: "You can verify licensing through the South Carolina Department of Health and Environmental Control (DHEC). Ask any agency you are evaluating for their license number and confirm it with DHEC." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Choosing a home care provider is one of the most important decisions a family can make for a loved one. The options vary widely in quality, accountability, and transparency. Asking the right questions before you commit separates providers who will tell you what you want to hear from those who can tell you exactly what they do and why.</p>
        <h2>Are Your Caregivers Employees or Contractors?</h2>
        <p>This is the foundational question. Employee caregivers are trained, supervised, bonded, insured, and covered by workers&apos; compensation. Contractor-based agencies transfer risk to the family and typically provide far less oversight. Ask specifically: what is the employment status of the people who will be in my home?</p>
        <h2>What Does Your Screening and Hiring Process Look Like?</h2>
        <p>A vague answer to this question is a red flag. A good provider should be able to describe specifically how caregivers are screened, what background checks are conducted, and what criteria are used for hiring decisions.</p>
        <h2>What Training Is Required Before a Caregiver Works With a Client?</h2>
        <p>Ask about orientation requirements, CPR certification, and ongoing education. A provider that cannot describe specific training standards is telling you something important about how seriously they take quality.</p>
        <h2>Who Is Responsible if Something Goes Wrong?</h2>
        <p>What happens if a caregiver is injured in the home? What if something is damaged or missing? Who carries liability? These are uncomfortable questions that are essential to ask.</p>
        <h2>How Are Care Plans Created and Updated?</h2>
        <p>Ask whether plans are individualized or template-based, who creates them, and how frequently they are reviewed and updated.</p>
        <h2>What Happens When a Caregiver Cannot Make a Scheduled Visit?</h2>
        <p>The answer to this question reveals a lot about operational infrastructure. A good provider has a coverage plan. A weak provider leaves families scrambling.</p>
        <h2>Who Oversees Care Quality?</h2>
        <p>Is there a nurse, a clinical professional, or only administrative staff involved in quality management? Nurse-led oversight is a meaningful differentiator.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How does Beyond Care answer these questions?</p><p className="text-muted text-sm">A: Directly and specifically. We encourage every family to ask all of these questions during our consultation and we will answer each one clearly.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Are there other questions I should ask?</p><p className="text-muted text-sm">A: Yes — ask about client-to-caregiver ratios, how caregiver matching is done, and what the process is for raising concerns.</p></div>
      </>
    ),
  },
  "understanding-medicaid-waiver-home-care-south-carolina": {
    title: "Understanding Medicaid Waiver Home Care Options in South Carolina",
    date: "March 2026",
    description: "South Carolina's Medicaid Waiver and CLTC programs may help eligible families access in-home care. Learn how these programs work and how to explore eligibility.",
    category: "Payment Options",
    faq: [
      { q: "What is South Carolina's CLTC program and how does it help pay for home care?", a: "Community Long Term Care (CLTC) is South Carolina's primary Medicaid-funded program for home and community-based long-term care services. For eligible elderly and disabled residents, it covers personal care, homemaker services, and similar in-home supports administered through SCDHHS." },
      { q: "How do I start the eligibility process for Medicaid Waiver home care in South Carolina?", a: "Contact SCDHHS at 1-888-549-0820 to begin the application process. Eligibility involves a functional needs assessment and a financial determination. Starting early matters — enrollment can take weeks to months." },
      { q: "Can my family start home care while waiting for Medicaid Waiver approval?", a: "Yes. Many families begin care on a private pay basis while the CLTC or Medicaid Waiver enrollment is processing, then transition to program billing once approved. Contact Beyond Care to discuss interim care arrangements." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Medicaid Waiver programs are among the least understood and most underutilized home care funding resources available to South Carolina families. For eligible individuals, they can significantly reduce or eliminate out-of-pocket costs for in-home care — but navigating eligibility and enrollment requires some guidance.</p>
        <h2>What Medicaid Waiver Programs Do</h2>
        <p>Standard Medicaid generally covers acute medical care. Medicaid Waiver programs extend that coverage to include home and community-based services — like personal care and companionship — for eligible individuals who might otherwise require nursing facility placement. The idea is to support people in their own homes rather than institutional settings.</p>
        <h2>Community Long Term Care (CLTC) in South Carolina</h2>
        <p>CLTC is South Carolina&apos;s primary program for home and community-based long-term care services. It is a Medicaid-funded program administered by SCDHHS that provides personal care, homemaker services, and other in-home supports to eligible elderly and disabled South Carolinians. Eligibility requires both a functional assessment (level of care need) and a financial determination.</p>
        <h2>How the Eligibility Process Works</h2>
        <p>Eligibility for CLTC and Medicaid Waiver programs is determined by SCDHHS — not by Beyond Care. The process involves an application, a functional needs assessment conducted by a state evaluator, and a financial eligibility determination. Families can contact SCDHHS at 1-888-549-0820 to begin the process.</p>
        <h2>The Timeline</h2>
        <p>Enrollment in Medicaid Waiver programs can take time — weeks to months in some cases. Families who begin the application process early are in a much better position than those who start after care is already urgently needed.</p>
        <h2>Using Private Pay as a Bridge</h2>
        <p>Many families begin care on a private pay basis while Medicaid Waiver or CLTC enrollment is processing. Contact Beyond Care to discuss interim care arrangements.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care participate in CLTC and Medicaid Waiver programs?</p><p className="text-muted text-sm">A: Contact us to discuss current program participation and eligibility.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if my loved one does not qualify for Medicaid programs?</p><p className="text-muted text-sm">A: Private pay, long-term care insurance, and VA benefits are all alternative pathways. Contact us and we can help you explore options.</p></div>
      </>
    ),
  },
  "can-long-term-care-insurance-pay-for-home-care": {
    title: "Can Long-Term Care Insurance Help Pay for Home Care? Yes — Here Is How",
    date: "March 2026",
    description: "If your loved one has a long-term care insurance policy, it may cover significant home care costs. Learn how LTC insurance works for home care in South Carolina.",
    category: "Payment Options",
    faq: [
      { q: "What triggers long-term care insurance benefits for home care?", a: "Most LTC policies activate when the insured cannot independently perform a certain number of Activities of Daily Living — typically two or three from a standard list including bathing, dressing, eating, transferring, toileting, and continence. If your loved one needs help with these, review the policy carefully." },
      { q: "What is an elimination period in a long-term care insurance policy?", a: "The elimination period is a waiting period — typically 30, 60, or 90 days — before LTC benefits begin. Families commonly pay privately during this window and transition to insurance billing once the period ends." },
      { q: "How do I activate long-term care insurance benefits for in-home care in South Carolina?", a: "Contact the insurance company's claims department and ask specifically about home care benefits. They will initiate a claims process that involves a functional assessment of the insured. Once approved, benefits are paid per policy terms — sometimes to the provider, sometimes to the family." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Millions of Americans carry long-term care insurance policies — and many of them, or their families, are not aware of what those policies actually cover. For families paying for home care in South Carolina, a long-term care policy could represent a significant funding resource. Here is what you need to know.</p>
        <h2>What Long-Term Care Insurance Was Designed For</h2>
        <p>Long-term care insurance policies were specifically created to cover the types of services that health insurance and Medicare do not — including non-medical home care, assisted living, and nursing home care. The policies differ enormously in what they cover, how much they pay, and when benefits begin.</p>
        <h2>Understanding the Benefit Trigger</h2>
        <p>Most LTC policies activate when the insured cannot independently perform a certain number of Activities of Daily Living (ADLs) — typically two or three out of six standard ADLs including bathing, dressing, eating, transferring, toileting, and continence. If your loved one needs help with these, it is worth reviewing the policy carefully.</p>
        <h2>The Elimination Period</h2>
        <p>Most policies have an elimination period — a waiting period of 30, 60, or 90 days — before benefits begin. Understanding your policy&apos;s elimination period helps with planning. Private pay during the elimination period is common.</p>
        <h2>How to Activate Benefits</h2>
        <p>Contact the insurance company&apos;s claims department and ask specifically about home care benefits. They will initiate a claims process that typically involves an assessment of the insured&apos;s functional status. Once benefits are approved, they are paid according to the policy terms — sometimes directly to the provider, sometimes to the family.</p>
        <h2>What to Bring to the Conversation With Beyond Care</h2>
        <p>Once your policy benefits are confirmed, bring that information into your planning conversation with Beyond Care. We can help structure a care plan that works within your benefit parameters.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My parent bought a policy years ago and we are not sure what it covers. Where do we start?</p><p className="text-muted text-sm">A: Start by finding the policy documents. Call the insurance company&apos;s customer service line and ask specifically: does this policy cover home care? What are the ADL triggers? What is the elimination period? What is the daily or monthly benefit amount?</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if the daily benefit does not cover the full cost?</p><p className="text-muted text-sm">A: Many families supplement insurance benefits with private pay for the difference. We can help structure a care plan accordingly.</p></div>
      </>
    ),
  },
  "how-to-make-home-safer-aging-parent": {
    title: "How to Make Your Parent's Home Safer as They Age",
    date: "March 2026",
    description: "Small home modifications can dramatically reduce fall risk and improve safety for aging seniors. A practical guide for South Carolina families preparing a parent's home.",
    category: "Home Safety",
    faq: [
      { q: "What are the highest-priority home safety modifications for an aging parent?", a: "The bathroom is statistically the highest-risk room. Grab bars beside the toilet and in the shower, non-slip mats, a shower chair, and adequate lighting are the most impactful immediate modifications. Clearing throw rugs and clutter from walkways throughout the home is equally important." },
      { q: "Who can assess my parent's home for safety risks in South Carolina?", a: "An occupational therapist can conduct a formal home safety assessment and provide specific recommendations. Beyond Care caregivers also note safety concerns during care visits and communicate them to the family as part of ongoing monitoring." },
      { q: "Can home safety modifications fully prevent falls without a caregiver?", a: "Modifications significantly reduce environmental risk, but they do not replace the presence of a trained caregiver who assists during the highest-risk activities — bathing, transfers, nighttime movement — where most falls actually occur." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Home safety for seniors is something most families think about after a fall — not before one. But the adjustments that make a home safer for an aging adult are often simple, relatively inexpensive, and far less disruptive than dealing with the consequences of a preventable accident. Here is a practical room-by-room guide.</p>
        <h2>The Bathroom</h2>
        <p>The bathroom is statistically the highest-risk room in a senior&apos;s home. Priority modifications:</p>
        <ul>
          <li><TB /><span>Install grab bars beside the toilet and in the shower or tub — properly anchored into studs, not just drywall</span></li>
          <li><TB /><span>Place non-slip mats or adhesive strips in the tub or shower floor and on the floor outside it</span></li>
          <li><TB /><span>Add a shower chair or bench for seniors who fatigue easily or have balance issues</span></li>
          <li><TB /><span>Consider a handheld showerhead for easier use while seated</span></li>
          <li><TB /><span>Ensure adequate lighting — especially for nighttime bathroom trips</span></li>
        </ul>
        <h2>The Bedroom</h2>
        <ul>
          <li><TB /><span>Night lights or motion-activated lighting for nighttime navigation</span></li>
          <li><TB /><span>A bed height that allows feet to rest flat on the floor when seated at the edge</span></li>
          <li><TB /><span>Clear pathway from the bed to the bathroom</span></li>
          <li><TB /><span>Phone or call device within reach of the bed</span></li>
        </ul>
        <h2>The Kitchen</h2>
        <ul>
          <li><TB /><span>Frequently used items stored at waist height — not requiring reaching overhead or bending to low cabinets</span></li>
          <li><TB /><span>Non-slip floor mats</span></li>
          <li><TB /><span>A sturdy stool if any reaching is necessary</span></li>
          <li><TB /><span>Automatic stove shut-off devices for seniors with memory concerns</span></li>
        </ul>
        <h2>Stairways and Hallways</h2>
        <ul>
          <li><TB /><span>Secure handrails on both sides of any staircase</span></li>
          <li><TB /><span>Adequate lighting throughout — including at the top and bottom of stairs</span></li>
          <li><TB /><span>Remove throw rugs and loose carpet edges from all walking surfaces</span></li>
          <li><TB /><span>Clear pathways of cords, furniture corners, and stored items</span></li>
        </ul>
        <h2>The Role of a Caregiver in Ongoing Safety</h2>
        <p>Home modifications reduce risk. A present, trained caregiver reduces it further — by assisting during high-risk activities, keeping the home tidy and clear, noticing changes in the client&apos;s mobility or condition, and providing the kind of consistent supervision that safety modifications alone cannot replicate.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Who should I call to help assess home safety for my parent?</p><p className="text-muted text-sm">A: An occupational therapist can conduct a formal home safety assessment. Beyond Care can also note safety concerns observed during care visits and communicate them to the family.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a Beyond Care caregiver help implement some of these changes?</p><p className="text-muted text-sm">A: Light tidying, organization, and clearing hazards from pathways are part of standard housekeeping support. Installation of grab bars and similar modifications require a contractor.</p></div>
      </>
    ),
  },
  "home-care-anderson-south-carolina": {
    title: "Home Care in Anderson, South Carolina — What Families Should Know",
    date: "March 2026",
    description: "Looking for in-home care in Anderson, SC? Beyond Care provides nurse-led, locally owned non-medical home care throughout Anderson and Anderson County. Learn what to expect.",
    category: "Local Resources",
    faq: [
      { q: "Does Beyond Care serve Anderson and Anderson County, SC?", a: "Yes. Beyond Care is headquartered in nearby Honea Path and serves families throughout Anderson and Anderson County. Call us at (864) 841-2500 to confirm coverage in your specific area." },
      { q: "What types of home care services are available in Anderson, SC?", a: "Beyond Care provides personal care, companion care, respite care, meal preparation, medication reminders, transportation, light housekeeping, and overnight or 24-hour care for families in Anderson County." },
      { q: "Does Beyond Care accept Medicaid Waiver for home care in Anderson County?", a: "Yes. Beyond Care accepts Medicaid Waiver, CLTC, VA Aid and Attendance, long-term care insurance, and private pay. Many Anderson County families qualify for public benefits they have not yet applied for — contact us to discuss eligibility." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Anderson, South Carolina is the heart of Anderson County and home to a large and growing population of seniors and families who need dependable in-home care. If you are searching for home care in Anderson, SC, you are not alone — and the quality of the provider you choose matters more than most families realize.</p>
        <h2>What Non-Medical Home Care Means for Anderson Families</h2>
        <p>Non-medical home care — sometimes called personal care or companion care — provides daily assistance with the tasks that have become difficult: bathing, grooming, meals, light housekeeping, medication reminders, and transportation. It is distinct from home health care, which involves skilled nursing or therapy services ordered by a physician. For many Anderson families, non-medical home care is the support that makes it possible for a parent or loved one to remain safely at home rather than moving to a facility.</p>
        <h2>Why Local Ownership Matters in Anderson</h2>
        <p>Beyond Care is locally owned and headquartered in nearby Honea Path — just minutes from Anderson. We are not a national franchise with a call center in another state. When you call us, you reach a team that knows Anderson County, knows the community, and is personally invested in the families we serve here.</p>
        <h2>Nurse-Led Care: What It Means for Anderson Clients</h2>
        <p>Beyond Care is nurse-led — founded and operated with clinical oversight built into every care plan. Changes in a client's condition are noticed, documented, and communicated to the family and healthcare team. This level of accountability is not standard in the industry — but it is standard at Beyond Care.</p>
        <h2>Services Available to Anderson, SC Families</h2>
        <ul>
          <li><TB /><span>Personal Care — bathing, grooming, dressing, hygiene</span></li>
          <li><TB /><span>Companion Care — conversation, activities, social engagement</span></li>
          <li><TB /><span>Meal Preparation and nutrition support</span></li>
          <li><TB /><span>Light Housekeeping and fall prevention</span></li>
          <li><TB /><span>Medication Reminders</span></li>
          <li><TB /><span>Transportation to medical appointments and errands</span></li>
          <li><TB /><span>Respite Care for family caregivers</span></li>
          <li><TB /><span>Overnight and 24-Hour Care for higher needs</span></li>
        </ul>
        <h2>Payment Options for Anderson Families</h2>
        <p>Beyond Care accepts private pay, long-term care insurance, VA benefits, Medicaid Waiver, Community Long Term Care (CLTC), and vouchers. Many Anderson families are surprised to discover that existing insurance or benefit programs cover more of the cost than they expected. We are happy to walk through your options during a free consultation.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Do you have an office in Anderson, SC?</p><p className="text-muted text-sm">A: Our nearest office is in Honea Path, SC — just minutes from Anderson. We serve Anderson and all of Anderson County directly from that location.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How quickly can care start for a family in Anderson?</p><p className="text-muted text-sm">A: We can often have care in place within a few days of the initial consultation. For urgent discharge or recovery situations, contact us as soon as possible.</p></div>
      </>
    ),
  },
  "home-care-greenville-south-carolina": {
    title: "Home Care in Greenville, South Carolina — A Guide for Families",
    date: "March 2026",
    description: "Searching for home care in Greenville, SC? Beyond Care provides nurse-led in-home care to Greenville County families. Learn about services, payment options, and how to get started.",
    category: "Local Resources",
    faq: [
      { q: "Does Beyond Care provide home care throughout Greenville County, SC?", a: "Yes. Beyond Care serves Greenville, Simpsonville, Mauldin, Greer, Taylors, and surrounding Greenville County communities from our offices in Honea Path and Williamston, SC." },
      { q: "What makes Beyond Care different from other home care agencies in Greenville?", a: "Beyond Care is locally owned, nurse-led, and uses only direct employee caregivers — not independent contractors. Every caregiver is background-checked, bonded, insured, and CPR certified. Local ownership means real accountability to the families we serve." },
      { q: "How do I start home care for a parent in the Greenville area?", a: "Call us for a free, no-obligation consultation. We will discuss your loved one's needs and build a care plan that fits their situation. Care can often begin within a few days of the initial conversation." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Greenville, South Carolina has one of the fastest-growing senior populations in the state. As the Upstate region expands, so does the need for dependable, high-quality in-home care. If you are looking for home care in Greenville, SC, this guide will help you understand your options and what to look for in a provider.</p>
        <h2>The Growing Need for Home Care in Greenville</h2>
        <p>Greenville County is home to tens of thousands of seniors and adults who want to remain at home as they age or manage health conditions. For most of them, non-medical home care — not a facility — is the right answer. The right caregiver makes the difference between a senior who is thriving at home and one who is at risk.</p>
        <h2>What to Look for in a Greenville Home Care Provider</h2>
        <ul>
          <li><TB /><span>Are caregivers employees or independent contractors? (Employees are bonded, insured, and accountable)</span></li>
          <li><TB /><span>Is there clinical oversight — a nurse, not just an administrator?</span></li>
          <li><TB /><span>Is the company locally owned or a national franchise?</span></li>
          <li><TB /><span>Do they offer consistent caregiver assignments?</span></li>
          <li><TB /><span>What payment options do they accept?</span></li>
        </ul>
        <h2>Beyond Care's Service to Greenville County</h2>
        <p>Beyond Care serves families throughout Greenville County, including Greenville, Simpsonville, Mauldin, Greer, and Taylors. Our nurse-led team brings the same standards to every client in Greenville that we apply throughout Upstate South Carolina. All caregivers are direct employees — bonded, insured, licensed, and trained to our standards.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care serve all of Greenville County?</p><p className="text-muted text-sm">A: Yes. We serve families throughout Greenville County from our offices in Honea Path and Williamston, SC.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I start home care for a parent in Greenville?</p><p className="text-muted text-sm">A: Contact us for a free, no-obligation consultation. We will discuss your loved one's needs and how we can help.</p></div>
      </>
    ),
  },
  "home-care-easley-south-carolina": {
    title: "Home Care in Easley, South Carolina — What Pickens County Families Should Know",
    date: "March 2026",
    description: "Beyond Care provides nurse-led in-home care to families in Easley and throughout Pickens County, SC. Learn about our services and how to get started.",
    category: "Local Resources",
    faq: [
      { q: "Does Beyond Care serve Easley and Pickens County, SC?", a: "Yes. Beyond Care serves Easley, Pickens, Liberty, Clemson, Six Mile, and surrounding Pickens County communities from our offices in Honea Path and Williamston, SC." },
      { q: "What non-medical home care services are available in Easley?", a: "Beyond Care provides personal care, companion care, meal preparation, medication reminders, transportation, light housekeeping, and respite care for family caregivers throughout Pickens County." },
      { q: "How quickly can home care begin for a family in Easley, SC?", a: "We can often begin care within a few days of the initial consultation. For urgent situations such as hospital discharge or caregiver emergency, contact us as soon as possible and we will prioritize your case." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Easley is the largest city in Pickens County and home to many families navigating the challenges of caring for aging parents or loved ones who need daily support. If you are searching for home care in Easley, SC, here is what you should know about non-medical in-home care and how Beyond Care serves this community.</p>
        <h2>Non-Medical Home Care in Easley — The Basics</h2>
        <p>Non-medical home care assists with daily tasks that have become difficult — bathing, grooming, meals, housekeeping, medication reminders, transportation, and companionship. It is not nursing or therapy. It is the kind of steady, practical support that allows a senior or adult to remain safely at home without moving to a facility.</p>
        <h2>Why Easley Families Choose Beyond Care</h2>
        <p>Beyond Care is locally owned and nurse-led — not a national franchise. Our team oversees care standards and is actively invested in client outcomes. Families in Easley and Pickens County receive the same high standard of care that we have delivered throughout Upstate South Carolina since 2013.</p>
        <h2>Services for Easley, SC Families</h2>
        <ul>
          <li><TB /><span>Personal Care and hygiene assistance</span></li>
          <li><TB /><span>Companion Care and social engagement</span></li>
          <li><TB /><span>Meal Preparation and nutrition support</span></li>
          <li><TB /><span>Transportation to Pickens County medical appointments</span></li>
          <li><TB /><span>Medication Reminders</span></li>
          <li><TB /><span>Respite Care for family caregivers in Easley</span></li>
          <li><TB /><span>Light Housekeeping</span></li>
        </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care serve Easley and Pickens County?</p><p className="text-muted text-sm">A: Yes. We serve Easley, Pickens, Liberty, Clemson, Six Mile, and surrounding Pickens County communities from our offices in Honea Path and Williamston.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What payment options are available in Easley?</p><p className="text-muted text-sm">A: We accept private pay, long-term care insurance, VA benefits, Medicaid Waiver, and CLTC. Contact us to discuss what applies to your situation.</p></div>
      </>
    ),
  },
  "dementia-home-care-south-carolina": {
    title: "Dementia Care at Home in South Carolina — What Families Need to Know",
    date: "March 2026",
    description: "Caring for a loved one with dementia at home in South Carolina? Learn how non-medical in-home care supports individuals with dementia and the families who care for them.",
    category: "Memory Care",
    faq: [
      { q: "Can someone with dementia stay at home safely with non-medical home care in South Carolina?", a: "For many individuals in the early to moderate stages of dementia, yes. Professional in-home care — particularly when consistent caregivers maintain a familiar routine — allows individuals with dementia to remain at home safely longer than most families expect." },
      { q: "Does Beyond Care have caregivers trained specifically in dementia care?", a: "Yes. Our caregivers receive training in dementia care approaches including behavioral redirection, routine-based care, and elopement prevention. Our nurse-led oversight adds an additional layer of clinical awareness for clients with memory conditions." },
      { q: "Can Medicaid or VA benefits help pay for dementia home care in SC?", a: "Potentially yes. South Carolina's Medicaid Waiver (CLTC program) and VA Aid and Attendance benefits may cover qualifying non-medical home care for dementia clients. Contact us to discuss what applies to your loved one's situation." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">When a family member is diagnosed with dementia, one of the first questions families ask is: can we keep them at home? For many families in South Carolina, the answer is yes — with the right support. Non-medical in-home care is not a substitute for memory care facilities in every case, but for many individuals with dementia, it is what makes remaining at home possible for far longer than families expect.</p>
        <h2>What Non-Medical Home Care Can Do for Dementia Clients</h2>
        <p>Non-medical home care supports individuals with dementia by providing consistent, daily assistance with personal care, meals, medication reminders, light housekeeping, companionship, and routine. It does not provide medical treatment or skilled nursing — but for most individuals in the early to moderate stages of dementia, those are not the primary needs. Practical daily support from a trusted, familiar caregiver is.</p>
        <h2>Why Consistency Matters So Much</h2>
        <p>Individuals with dementia thrive on familiarity and routine. An unfamiliar face can trigger anxiety or confusion. This is why Beyond Care prioritizes consistent caregiver assignments for dementia clients — so that your loved one builds familiarity and trust with the person supporting them. Over time, that consistency becomes a meaningful source of stability.</p>
        <h2>Supporting the Family Caregiver</h2>
        <p>Family members who are caring for a loved one with dementia carry one of the heaviest caregiving loads that exists. Caregiver burnout in this population is not just common — it is nearly universal without adequate relief. Beyond Care's respite care services provide scheduled breaks, overnight support, and backup coverage that allow family caregivers to rest, work, travel, and maintain their own health without leaving their loved one unattended.</p>
        <h2>Nurse-Led Oversight for Dementia Clients</h2>
        <p>Because dementia is a progressive condition, changes in behavior, cognition, or physical health can signal important developments. Beyond Care's nurse-led model means that caregivers are trained to recognize and report these changes promptly to the family and healthcare team.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is non-medical home care appropriate for someone with advanced dementia?</p><p className="text-muted text-sm">A: It depends on the individual's specific needs. We recommend a consultation to assess what level of care is appropriate and whether in-home support is the right fit.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can Medicaid or VA benefits cover dementia home care in SC?</p><p className="text-muted text-sm">A: Potentially, yes. Medicaid Waiver, CLTC, and VA Aid and Attendance all may cover qualifying in-home care. Contact us to explore what applies to your situation.</p></div>
      </>
    ),
  },
  "parkinsons-disease-home-care-south-carolina": {
    title: "Parkinson's Disease and Home Care in South Carolina",
    date: "March 2026",
    description: "Learn how non-medical in-home care supports individuals with Parkinson's disease in South Carolina — and how Beyond Care helps families manage safely at home.",
    category: "Memory Care",
    faq: [
      { q: "What are the biggest daily challenges for Parkinson's patients that home care can address?", a: "Tremors, rigidity, and balance impairment make bathing, dressing, eating, and moving safely through the home difficult. A trained caregiver assists with each of these tasks while applying fall prevention strategies specific to clients with Parkinson's." },
      { q: "How does home care adapt as Parkinson's disease progresses?", a: "Beyond Care builds care plans that evolve with the client. Early-stage care may involve light assistance with grooming and meals. As the disease progresses, the care plan expands to include comprehensive personal care, overnight support, or 24-hour coverage — without the family needing to find a new provider." },
      { q: "Does insurance cover home care for Parkinson's patients in South Carolina?", a: "Long-term care insurance, VA benefits for qualifying veterans, and South Carolina's Medicaid Waiver program may all cover non-medical home care for Parkinson's clients. Contact Beyond Care to explore what applies to your loved one's specific situation." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Parkinson's disease is one of the most common neurological conditions affecting older adults — and it presents a unique set of daily challenges that non-medical in-home care is well-positioned to address. For South Carolina families managing a loved one's Parkinson's diagnosis, understanding the role of home care is an important step in planning for long-term safety and quality of life.</p>
        <h2>What Makes Parkinson's Care Different</h2>
        <p>Parkinson's disease affects movement, balance, coordination, and — over time — cognition and speech. The practical daily challenges include tremors that interfere with eating and grooming, rigidity that makes getting dressed or bathing difficult, and significant fall risk due to balance impairment. Non-medical home care addresses all of these challenges directly, without requiring clinical nursing services.</p>
        <h2>Fall Prevention Is Central</h2>
        <p>Falls are among the most serious — and most preventable — risks for individuals with Parkinson's. A trained caregiver who assists with transfers, accompanies clients during movement, and maintains a clear, hazard-free home environment significantly reduces this risk. Beyond Care caregivers are trained in safe transfer techniques and fall prevention strategies specific to clients with mobility challenges.</p>
        <h2>Care That Adapts as Parkinson's Progresses</h2>
        <p>Parkinson's is a progressive condition. Care needs in the early stages may be minimal — assistance with grooming or meal preparation. Later, more comprehensive personal care, overnight support, or around-the-clock assistance may be needed. Beyond Care builds care plans that adapt as needs change, so families do not need to start over with a new provider at each stage of progression.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a home caregiver help with the tremors and movement challenges of Parkinson's?</p><p className="text-muted text-sm">A: Yes. Caregivers assist with personal care tasks that have become difficult due to tremors or rigidity — bathing, grooming, dressing, eating — and provide mobility support during movement throughout the home.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does insurance cover home care for Parkinson's in South Carolina?</p><p className="text-muted text-sm">A: Long-term care insurance, VA benefits (for veterans), and Medicaid Waiver may all cover qualifying home care for Parkinson's clients. We can help you understand what applies to your situation.</p></div>
      </>
    ),
  },
  "stroke-recovery-home-care-south-carolina": {
    title: "Stroke Recovery at Home in South Carolina — What the First 90 Days Look Like",
    date: "March 2026",
    description: "Recovering from a stroke at home in South Carolina? Learn how non-medical in-home care supports safer recovery and reduces the risk of readmission after a stroke.",
    category: "Recovery Care",
    faq: [
      { q: "How soon after a stroke can Beyond Care begin providing home care in South Carolina?", a: "We recommend contacting us before the hospital discharge date so that care can begin the day your loved one returns home. For urgent situations, we can often mobilize within 24 to 48 hours." },
      { q: "What specific post-stroke needs does non-medical home care address?", a: "A Beyond Care caregiver assists with bathing, dressing, and grooming; prepares meals suited to recovery dietary needs; provides medication reminders; transports to therapy appointments; and monitors for any changes in condition that the family and care team should know about." },
      { q: "Does insurance cover home care for stroke recovery in SC?", a: "Long-term care insurance, VA benefits for qualifying veterans, and South Carolina's Medicaid Waiver program may cover non-medical home care during stroke recovery. Medicare covers skilled home health but not daily personal care and companion services. Contact us to discuss your specific coverage." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The weeks immediately following a stroke are one of the most critical periods in a person's long-term recovery. Patients who return home from the hospital or rehabilitation facility without adequate support face elevated risks of falls, missed medications, poor nutrition, and hospital readmission. Non-medical in-home care from a qualified provider is one of the most effective tools available to South Carolina families navigating post-stroke recovery.</p>
        <h2>What Stroke Survivors Typically Need at Home</h2>
        <p>The specific needs of a stroke survivor depend on which functions were affected and the degree of recovery that has occurred in the hospital or rehab setting. Common needs include assistance with bathing and dressing, help with meal preparation and eating, mobility and transfer support, medication reminders, transportation to therapy appointments, and companionship to address the emotional challenges of recovery.</p>
        <h2>Why the First 90 Days Matter So Much</h2>
        <p>Research on stroke recovery consistently shows that the brain has a heightened period of neuroplasticity — the ability to reorganize and recover function — in the weeks and months following a stroke. Consistent structure, routine, appropriate nutrition, and engagement during this window can significantly influence long-term outcomes. A stable home environment with daily professional support is not a luxury during this period — it is a clinical asset.</p>
        <h2>Coordinating With the Recovery Team</h2>
        <p>Beyond Care's nurse-led model is particularly valuable for stroke recovery cases. Our team ensures alignment with the client's discharge instructions, therapy schedule, and care team communication. Any concerning changes — increased confusion, worsening mobility, signs of a secondary event — are communicated to the family and healthcare providers promptly.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How quickly can care start after a stroke discharge?</p><p className="text-muted text-sm">A: We recommend contacting us before the discharge date so that care can begin the day your loved one returns home. We can often mobilize within 24-48 hours for urgent situations.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does insurance cover post-stroke home care in South Carolina?</p><p className="text-muted text-sm">A: Long-term care insurance, VA benefits, and Medicaid Waiver may all cover qualifying non-medical home care after a stroke. Contact us to explore what applies.</p></div>
      </>
    ),
  },
  "va-aid-attendance-home-care-south-carolina": {
    title: "VA Aid and Attendance Benefits for Home Care in South Carolina",
    date: "March 2026",
    description: "South Carolina veterans and surviving spouses may qualify for VA Aid and Attendance benefits that cover in-home care. Learn how the program works and how Beyond Care can help.",
    category: "Veterans",
    faq: [
      { q: "What is the VA Aid and Attendance benefit and how does it apply to home care?", a: "VA Aid and Attendance is a pension supplement for veterans and surviving spouses who need help with daily activities. It provides a monthly cash benefit — up to approximately $2,300 per month for a veteran with a dependent — that can be used to pay for non-medical in-home care such as the services Beyond Care provides." },
      { q: "How do I know if a South Carolina veteran qualifies for VA Aid and Attendance?", a: "Qualifying veterans must have served at least 90 days of active duty including at least one day during a wartime period, need assistance with daily activities due to age or disability, and meet the VA's income and asset thresholds. Surviving spouses of qualifying veterans may also be eligible." },
      { q: "Can Beyond Care start home care while we wait for VA Aid and Attendance approval?", a: "Yes. The VA application process can take several months. Many families begin care using private pay and transition to VA billing once benefits are approved. Contact us to discuss bridging options specific to your situation." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Many veterans and surviving spouses in South Carolina are eligible for VA Aid and Attendance benefits — a pension supplement that can help cover the cost of in-home care, assisted living, or nursing home care. Despite being one of the most valuable benefits available to qualifying veterans, it remains one of the most underutilized. This guide explains how the benefit works and how it applies to home care.</p>
        <h2>What Is VA Aid and Attendance?</h2>
        <p>VA Aid and Attendance is an enhanced pension benefit available to veterans and surviving spouses who need assistance with daily activities — including those provided by a home caregiver. It is a monthly cash benefit, paid in addition to the basic VA pension, that can be used to pay for in-home care, assisted living, or other approved care services.</p>
        <h2>Who Qualifies for VA Aid and Attendance in South Carolina?</h2>
        <ul>
          <li><TB /><span>Veterans who served at least 90 days of active duty, with at least one day during a wartime period</span></li>
          <li><TB /><span>Veterans who need help with daily activities due to disability, illness, or age</span></li>
          <li><TB /><span>Surviving spouses of qualifying veterans</span></li>
          <li><TB /><span>Individuals who meet income and asset thresholds established by the VA</span></li>
        </ul>
        <h2>How Much Does VA Aid and Attendance Pay?</h2>
        <p>Benefit amounts change annually. As of 2025, the maximum Aid and Attendance benefit is approximately $2,300 per month for a veteran with a dependent, $1,900 per month for a single veteran, and $1,200 per month for a surviving spouse. These amounts can cover a significant portion — or all — of the cost of non-medical in-home care.</p>
        <h2>How Beyond Care Works With VA Benefits</h2>
        <p>Beyond Care accepts VA Aid and Attendance and works with families to ensure the billing and documentation process is as smooth as possible. We serve veterans throughout Upstate South Carolina and are experienced in coordinating care with VA benefit payment structures.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I apply for VA Aid and Attendance in South Carolina?</p><p className="text-muted text-sm">A: Applications are submitted through the VA. We recommend working with an accredited VA claims agent or veterans service organization (VSO) for assistance with the application process.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can care start before the VA benefit is approved?</p><p className="text-muted text-sm">A: Yes. Many families start care using private pay while the VA application is processed, then transition to VA billing once approved. Contact us to discuss your specific situation.</p></div>
      </>
    ),
  },
  "overnight-care-seniors-south-carolina": {
    title: "Overnight Home Care for Seniors in South Carolina — What Families Should Know",
    date: "March 2026",
    description: "Overnight home care provides safety monitoring and support for seniors in South Carolina who need nighttime assistance. Learn what overnight care includes and when it is the right choice.",
    category: "Our Services",
    faq: [
      { q: "What does an overnight home care caregiver do during their shift in South Carolina?", a: "An overnight caregiver is present in the home throughout the night — available to assist if the client needs to get up, use the bathroom, take medication, or manage a safety concern. They remain alert and responsive while the client sleeps, providing both practical help and peace of mind for families." },
      { q: "Who typically needs overnight home care?", a: "Overnight care is most appropriate for seniors at risk of falls when getting up at night, individuals with dementia who may become confused or wander, clients recovering from surgery or illness who need monitoring, and family caregivers who cannot safely stay awake through the night." },
      { q: "How is overnight care different from 24-hour home care?", a: "Overnight care covers the nighttime hours only — typically 8 to 12 hours. Twenty-four-hour care involves rotating caregivers providing continuous coverage throughout the day and night. Many families start with overnight care and add daytime support as needs increase." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Nighttime is often the most vulnerable time for seniors living alone. Falls, medication errors, confusion episodes, and other incidents frequently happen overnight — when no one is present to respond. Overnight home care from Beyond Care in South Carolina provides the monitoring, assistance, and peace of mind that families need when daytime support is not enough.</p>
        <h2>What Overnight Care Includes</h2>
        <p>Beyond Care's overnight caregivers are present in the home throughout the night — available to assist if the client needs to get up, use the bathroom, take medication, or address any safety concern. Overnight care is not 24-hour care, but it fills the specific gap when a senior is safe during the day and needs nighttime presence.</p>
        <h2>Who Needs Overnight Care?</h2>
        <ul>
          <li><TB /><span>Seniors who are at risk of falls when getting up at night</span></li>
          <li><TB /><span>Individuals with dementia or memory conditions who may become confused or wander at night</span></li>
          <li><TB /><span>Clients recovering from surgery or illness who need nighttime monitoring</span></li>
          <li><TB /><span>Family caregivers who need to sleep through the night without worry</span></li>
          <li><TB /><span>Seniors living alone who are not safe to be unattended overnight</span></li>
        </ul>
        <h2>Overnight Care vs. 24-Hour Care</h2>
        <p>Overnight care covers the nighttime hours — typically 8 to 12 hours. The caregiver is present and available to respond, but may rest when the client is asleep. Twenty-four-hour care involves continuous coverage with rotating caregivers throughout the day and night. We help families determine which level of care is appropriate based on the client's specific needs.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Do overnight caregivers sleep during their shift?</p><p className="text-muted text-sm">A: Overnight caregivers may rest when the client is sleeping, but they remain in the home and available to respond immediately if needed.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can we combine overnight care with daytime care?</p><p className="text-muted text-sm">A: Yes. Many families pair overnight care with daytime caregiver visits to create a comprehensive support plan. Contact us to discuss the right schedule.</p></div>
      </>
    ),
  },
  "questions-to-ask-home-care-agency-south-carolina": {
    title: "10 Questions to Ask a Home Care Agency in South Carolina Before You Hire",
    date: "March 2026",
    description: "Not all home care agencies in South Carolina are equal. Use these 10 questions to evaluate providers — and understand what separates a great agency from an average one.",
    category: "Choosing Care",
    faq: [
      { q: "What is the single most important question to ask a home care agency in South Carolina?", a: "Ask whether caregivers are agency employees or independent contractors. Employee-based agencies provide workers' compensation coverage, liability insurance, background checks, and performance accountability. Independent contractor arrangements shift significant risk onto the family." },
      { q: "How do I verify that a home care agency is licensed in South Carolina?", a: "You can verify agency licensing through the South Carolina Department of Health and Environmental Control (DHEC). Ask any agency you are considering for their DHEC license number and confirm it is current." },
      { q: "Why does nurse involvement matter when evaluating a home care agency?", a: "A nurse-led agency develops care plans with clinical awareness, recognizes changes in client condition that non-clinical administrators would miss, and maintains a higher standard of oversight. Ask specifically whether a registered nurse is involved in assessment, care planning, and ongoing supervisory visits." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Choosing a home care agency in South Carolina is one of the most important decisions a family makes — and it is often made under pressure, during a stressful time. These 10 questions will help you cut through the marketing language and evaluate what matters: the quality and accountability of the care.</p>
        <h2>1. Are your caregivers employees or independent contractors?</h2>
        <p>This is the single most important question. Employee caregivers are covered by the agency's liability insurance, bonded, subject to background checks, and accountable to the agency's standards. Independent contractors are not. If a contractor causes harm or a problem arises, the agency's liability is limited. Beyond Care uses exclusively employee caregivers.</p>
        <h2>2. Is there clinical oversight — a nurse — involved in care?</h2>
        <p>Many home care companies are run by administrators, not clinicians. When clinical oversight is built into the organization, care plans reflect real clinical awareness, changes in client condition are recognized and acted upon, and the standard of care meets a higher threshold. That is the Beyond Care model.</p>
        <h2>3. Are caregivers CPR-certified?</h2>
        <p>This should be a non-negotiable standard. Beyond Care requires CPR certification for all caregivers.</p>
        <h2>4. How do you handle caregiver consistency?</h2>
        <p>Ask specifically whether you will see the same caregiver regularly. High turnover and rotating caregivers are common industry problems. Consistent caregiver assignments are better for clients — especially those with dementia or chronic conditions — and reflect a well-managed agency.</p>
        <h2>5. What happens if my regular caregiver calls in sick?</h2>
        <p>Coverage plans matter. Ask how the agency handles unexpected absences. A quality agency has backup staffing and a clear protocol for communicating with the family.</p>
        <h2>6. How are caregivers trained?</h2>
        <p>Ask what training is required before a caregiver begins working with clients, and whether ongoing training is provided. Beyond Care maintains training and continuing education standards for all caregivers.</p>
        <h2>7. What payment options do you accept?</h2>
        <p>Private pay, long-term care insurance, Medicaid Waiver, VA benefits, and CLTC are all common options. Make sure the agency accepts what applies to your situation.</p>
        <h2>8. Are you licensed and insured?</h2>
        <p>Home care agencies operating in South Carolina are required to be licensed. Ask for verification and confirm that the agency carries liability insurance.</p>
        <h2>9. How are you involved locally?</h2>
        <p>A locally owned agency has accountability to the community it serves. Ask whether leadership is genuinely invested in local families — or whether it is a franchise with an out-of-state corporate structure.</p>
        <h2>10. Can I speak with the owner or a clinical leader?</h2>
        <p>A quality agency will welcome this conversation. If the answer is no, that tells you something important.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How is Beyond Care different from other agencies in South Carolina?</p><p className="text-muted text-sm">A: We are locally owned, nurse-led, and use only direct employee caregivers who are licensed, bonded, insured, and drug screened. Our team is personally invested in every client we serve. We welcome the conversation.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I start the process with Beyond Care?</p><p className="text-muted text-sm">A: Contact us for a free, no-pressure consultation. We will answer every question you have before any commitment is made.</p></div>
      </>
    ),
  },
  "respite-care-family-caregivers-south-carolina": {
    title: "Respite Care for Family Caregivers in South Carolina — A Practical Guide",
    date: "March 2026",
    description: "Respite care gives South Carolina family caregivers the scheduled relief they need to sustain long-term caregiving. Learn what respite care includes and how to access it.",
    category: "Respite Care",
    faq: [
      { q: "What is respite care and how does it work in South Carolina?", a: "Respite care is temporary in-home care provided to give a family caregiver a scheduled break. Beyond Care's caregiver covers the loved one's daily needs — personal care, meals, companionship, supervision — while the family caregiver rests, works, or attends to other responsibilities." },
      { q: "How often can a family caregiver in South Carolina use respite care?", a: "As often as needed. Some families use respite care for a few hours each week; others need full-day or overnight coverage regularly. Beyond Care builds respite schedules around the family's specific situation — there is no fixed minimum or maximum." },
      { q: "Does insurance cover respite care for family caregivers in SC?", a: "Long-term care insurance policies frequently cover respite care. South Carolina's Medicaid Waiver (CLTC) and VA Aid and Attendance benefits may also apply for qualifying individuals. Contact us to discuss what your specific coverage includes." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Family caregivers in South Carolina provide an extraordinary amount of unpaid care — and most of them do it without adequate relief. Respite care is not a luxury. It is what makes sustainable family caregiving possible. This guide explains what respite care is, who it serves, and how families in Upstate South Carolina can access it through Beyond Care.</p>
        <h2>What Is Respite Care?</h2>
        <p>Respite care is temporary, relief-focused in-home care provided to give a family caregiver a break. It can range from a few hours per week to full-day coverage, overnight stays, or extended weekend care. The purpose is always the same: to ensure that the person receiving care has safe, professional support while the family caregiver rests, works, attends to personal needs, or simply steps away from the caregiving role.</p>
        <h2>Who Needs Respite Care in South Carolina?</h2>
        <ul>
          <li><TB /><span>Spouses caring for partners with chronic illness, dementia, or post-stroke needs</span></li>
          <li><TB /><span>Adult children managing parents' care alongside their own families and careers</span></li>
          <li><TB /><span>Families that handle all caregiving internally and are approaching burnout</span></li>
          <li><TB /><span>Any family caregiver who needs scheduled, reliable relief</span></li>
        </ul>
        <h2>The Warning Signs of Caregiver Burnout</h2>
        <p>Burnout in family caregivers does not always announce itself clearly. Common signs include persistent exhaustion that sleep does not resolve, resentment or withdrawal from the person you are caring for, declining physical or mental health, neglect of your own medical needs, and a growing sense of hopelessness about the situation. If any of these feel familiar, respite care is not optional — it is necessary.</p>
        <h2>How to Structure Respite Care That Works</h2>
        <p>The most effective respite care is scheduled — built into the care plan as a consistent, predictable break. Emergency respite is also available, but planned respite is far more sustainable. Beyond Care works with families to build respite schedules that provide meaningful relief while maintaining the quality and consistency of care for the client.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is respite care covered by insurance in South Carolina?</p><p className="text-muted text-sm">A: It may be. Long-term care insurance, Medicaid Waiver, CLTC, and VA benefits may all cover qualifying respite care. Contact us to discuss what applies to your situation.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My loved one doesn&apos;t want a caregiver. What do I do?</p><p className="text-muted text-sm">A: This is a common challenge. We recommend starting with short, low-key visits focused on companionship rather than personal care — allowing the client to build trust with the caregiver over time. Contact us to discuss strategies.</p></div>
      </>
    ),
  },

  // ── NEW POSTS ──────────────────────────────────────────────────────────────

  "how-to-choose-home-care-agency-guide": {
    title: "How to Choose a Home Care Agency — A Family's Complete Guide",
    date: "March 2026",
    description: "A step-by-step guide to choosing the right home care agency for your loved one in South Carolina. What to look for, what to avoid, and questions that reveal the truth.",
    category: "Choosing Care",
    faq: [
      { q: "What is the most important factor when choosing a home care agency in South Carolina?", a: "Whether caregivers are direct employees or independent contractors. Employee-based agencies carry liability insurance and workers' compensation, conduct background checks, and maintain performance accountability. Independent contractor arrangements leave significant risk with the family." },
      { q: "Should a nurse be involved in developing my loved one's care plan?", a: "Yes. A nurse-led care plan reflects clinical awareness of the client's conditions and risks — not just a scheduling preference. Ask specifically whether a registered nurse conducts the initial assessment and supervisory visits. This is what separates a real care plan from a service schedule." },
      { q: "How do I evaluate whether a home care agency in South Carolina is trustworthy?", a: "Ask specific questions about their hiring process, background check standards, caregiver consistency, nurse involvement, and coverage protocols. Pay attention to how quickly calls are returned and how clearly questions are answered. A quality agency welcomes scrutiny before a commitment is made." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Choosing a home care agency is one of the most important decisions a family can make — and one of the most confusing. There are dozens of providers in Upstate South Carolina, and they all use similar language. This guide gives you a practical framework for evaluating agencies honestly, asking the right questions, and choosing a provider your family can trust.</p>
        <h2>Step 1 — Understand What You Actually Need</h2>
        <p>Before you call a single agency, get clear on what type of care your loved one needs. Personal care (bathing, grooming, dressing), companion care (social engagement, companionship), respite care (relief for a family caregiver), or a combination? Knowing this helps you evaluate whether an agency is actually equipped to serve your specific situation — or just selling you a package.</p>
        <h2>Step 2 — Verify the Basics</h2>
        <p>Confirm the agency is licensed to operate in South Carolina, carries liability insurance, and uses direct employee caregivers rather than independent contractors. Employee-based agencies provide significantly more protection: the agency — not you — is responsible for caregiver screening, taxes, workers' compensation, and liability. If a caregiver is an independent contractor and gets injured in your home, your exposure is different than with an agency employee.</p>
        <h2>Step 3 — Ask About the Hiring Process</h2>
        <p>A quality agency will describe a rigorous, multi-point screening process including criminal background checks, reference verification, in-person interviews, and skills assessments. Ask specifically: what disqualifies a caregiver from employment? What ongoing training is required after hiring? How are caregivers evaluated after they begin working with clients?</p>
        <h2>Step 4 — Evaluate the Nurse Involvement</h2>
        <p>A nurse-led agency provides a clinically informed layer of oversight that non-nurse-led agencies cannot match. Ask whether a registered nurse is involved in developing care plans, conducting supervisory visits, and monitoring client status over time. This oversight is the difference between a schedule and a real care plan.</p>
        <h2>Step 5 — Understand How Schedules Work</h2>
        <p>Ask what the minimum hours per visit are, whether the same caregiver will show up regularly, and what happens when a caregiver calls in sick. Consistent caregiver assignment is one of the highest predictors of client satisfaction — especially for clients with dementia or chronic conditions.</p>
        <h2>Step 6 — Clarify the Financial Picture</h2>
        <p>Ask about hourly rates, minimums, and any additional fees. Ask which payment options the agency accepts: private pay, long-term care insurance, Medicaid Waiver, VA benefits. A quality agency will have a clear, honest conversation about cost before you commit.</p>
        <h2>Step 7 — Trust Your Read of the Agency</h2>
        <p>Pay attention to how quickly calls are returned, how clearly questions are answered, and whether the agency feels locally invested or transactional. Locally owned agencies in your community have a different kind of accountability than national franchises.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How is Beyond Care different from other agencies?</p><p className="text-muted text-sm">A: Beyond Care is locally owned, nurse-led, and uses only direct employee caregivers who are background-checked, bonded, insured, and CPR certified. Sarah Atkin, RN, BSN is personally involved in care planning and quality oversight. We welcome every question before a commitment is made.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can I meet the caregiver before care begins?</p><p className="text-muted text-sm">A: Yes. We facilitate introductions before the first visit whenever possible. Comfort and trust between the client and caregiver are priorities, not afterthoughts.</p></div>
      </>
    ),
  },

  "what-to-look-for-in-a-home-caregiver": {
    title: "What to Look for in a Home Caregiver — 8 Qualities That Matter",
    date: "March 2026",
    description: "Not all caregivers are equal. These 8 qualities separate truly excellent home caregivers from mediocre ones — and what to ask to find out which you are getting.",
    category: "Caregiver Standards",
    faq: [
      { q: "What is the most important quality to look for in a home caregiver?", a: "Reliability is the foundation. A caregiver who consistently shows up on time, every scheduled day, provides the stability that seniors depend on. No amount of warmth or skill compensates for a caregiver who is frequently late, absent, or inconsistent." },
      { q: "How can I tell if a caregiver genuinely cares about the people they serve?", a: "Listen for specifics. A caregiver with genuine warmth will talk about past clients with interest, recall details about their personalities and preferences, and describe the work with something beyond rote professionalism. Warmth cannot be performed over time — it shows in how a caregiver talks, not just what they claim." },
      { q: "Does Beyond Care evaluate caregivers for these qualities after hiring?", a: "Yes. Beyond Care conducts regular supervisory visits and performance evaluations that assess caregiver quality in the home — not just compliance with paperwork. Our nurse-led model means changes in caregiver performance are identified and addressed before they affect the client." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The quality of in-home care depends almost entirely on the individual who shows up at the door. A great caregiver makes an enormous difference in a client's daily life — and a poor one can create real harm. Here are the eight qualities that define an exceptional home caregiver, and how to evaluate whether a candidate has them.</p>
        <h2>1. Reliability</h2>
        <p>The single most important professional quality in a caregiver is showing up — on time, consistently, and without creating anxiety for the family. Reliability is not glamorous, but it is the foundation of every good care relationship. Ask about an agency's attendance and on-call policies before care begins.</p>
        <h2>2. Patience</h2>
        <p>Personal care tasks with a senior who moves slowly, gets confused, or resists help require genuine patience. A caregiver who rushes or shows frustration is not providing dignified care. Look for evidence of patience in the way a caregiver talks about their clients — not just in what they claim.</p>
        <h2>3. Observational Skills</h2>
        <p>An excellent caregiver notices changes. Unusual bruising, changes in eating or sleeping patterns, signs of confusion or distress — these are the things a clinical supervisor or family member needs to know. Caregivers who observe carefully and communicate proactively are genuinely valuable partners in health management.</p>
        <h2>4. Genuine Warmth</h2>
        <p>Clients know when care is transactional. The caregivers who have the most positive impact on seniors' well-being are those who actually like people — who are curious about their clients' histories, interests, and personalities. Warmth is not performable over time; it has to be real.</p>
        <h2>5. Physical Capability</h2>
        <p>Many home care tasks require real physical strength — safe transfers, mobility assistance, and helping a client who has fallen. Confirm that a caregiver is trained in proper body mechanics and transfer techniques, and that they are physically capable of the tasks required.</p>
        <h2>6. Discretion</h2>
        <p>Caregivers enter clients' homes and lives with deep access. A trustworthy caregiver maintains strict privacy, never shares client information outside of the care team, and never takes advantage of the intimacy that comes with the role.</p>
        <h2>7. Adaptability</h2>
        <p>A client's needs, moods, and health status change. An excellent caregiver adapts — adjusting their approach based on how a client is doing today, not how they were doing last week. Rigidity is a liability in home care.</p>
        <h2>8. Communication</h2>
        <p>The best caregivers keep families informed and are clear with the care team about what they observe, what happened during a visit, and any concerns they have. Communication is the connective tissue of good care.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How does Beyond Care screen for these qualities?</p><p className="text-muted text-sm">A: Our hiring process includes in-person interviews, reference verification, background checks, and an orientation period. Caregivers are monitored through regular supervisory visits and performance evaluations that assess the qualities above — not just compliance.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if the caregiver isn&apos;t the right fit?</p><p className="text-muted text-sm">A: We take fit seriously. If a match is not working for any reason — personality, communication style, anything — we work with the family to find a better match. Your loved one&apos;s comfort is the priority.</p></div>
      </>
    ),
  },

  "red-flags-home-care-agency": {
    title: "Red Flags When Choosing a Home Care Agency",
    date: "March 2026",
    description: "Some home care agencies cut corners in ways families never discover until care begins. These red flags can help South Carolina families avoid a costly mistake.",
    category: "Choosing Care",
    faq: [
      { q: "What is the biggest red flag when evaluating a home care agency?", a: "Independent contractor caregivers. When a caregiver is not a direct employee of the agency, the agency's workers' compensation and liability insurance may not fully cover them. If a contractor is injured in your home, your homeowner's insurance — or you personally — may be exposed. Always confirm that caregivers are direct employees." },
      { q: "What does it mean if an agency cannot clearly describe their caregiver screening process?", a: "It likely means the screening process is minimal. A quality agency is proud of its hiring standards and can describe the background check process, reference verification, in-person interview requirements, and disqualifying criteria in detail. Vague answers reflect vague standards." },
      { q: "How can I tell if a home care agency has high caregiver turnover?", a: "Ask directly: how long do caregivers typically stay with your agency? Also ask what they do to support caregiver retention. High turnover is disruptive to clients — especially those with dementia — and often reflects poor management, inadequate pay, or a pattern of hiring to fill shifts rather than for quality." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Most home care agencies present well. They have professional websites, warm customer service representatives, and reassuring language about quality and compassion. The problems usually do not show up in the sales conversation — they show up after care begins. These red flags are the signals families should watch for before they sign anything.</p>
        <h2>Red Flag #1 — Caregivers Are Independent Contractors</h2>
        <p>An agency that sends independent contractors rather than employees is shifting significant responsibility onto you. Independent contractors are not covered by the agency&apos;s workers' compensation or liability insurance. If a contractor is injured in your home, your homeowner's insurance — and potentially you personally — may be exposed. Always confirm that caregivers are direct employees of the agency.</p>
        <h2>Red Flag #2 — Vague Answers About the Hiring Process</h2>
        <p>If an agency cannot clearly describe their background check, reference verification, and screening process, be cautious. Quality agencies are proud of their standards and happy to explain them in detail. Vague answers often mean minimal standards.</p>
        <h2>Red Flag #3 — No Nurse Involvement in Care Planning</h2>
        <p>A care plan created without clinical input is a schedule, not a care plan. Ask whether a registered nurse is involved in the assessment process, care plan development, and supervisory visits. If the answer is no, the quality oversight you would expect may not exist.</p>
        <h2>Red Flag #4 — High Caregiver Turnover</h2>
        <p>Frequent caregiver changes are disruptive to clients and often indicate poor management, inadequate caregiver support, or a pattern of hiring anyone available to fill shifts. Ask how long caregivers typically stay with the agency and what the agency does to support caregiver retention.</p>
        <h2>Red Flag #5 — Pressure to Sign Immediately</h2>
        <p>A reputable agency wants you to feel comfortable before you commit. High-pressure sales tactics — urgency about availability, discounts that expire today, pressure to decide on the first call — are a sign of a company that prioritizes sales over service.</p>
        <h2>Red Flag #6 — Inconsistent Communication</h2>
        <p>If calls are not returned promptly, questions are answered unclearly, or you are passed between multiple people without consistent contact, expect that pattern to continue during care. How an agency communicates with you before you are a client is a preview.</p>
        <h2>Red Flag #7 — No Physical Office Presence</h2>
        <p>An agency with a local office has real accountability. An agency operating entirely remotely may not have the local presence to provide responsive support when something goes wrong.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I verify that an agency is licensed in South Carolina?</p><p className="text-muted text-sm">A: You can verify licensing through the South Carolina Department of Health and Environmental Control (DHEC). Ask any agency you are considering for their license number.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is Beyond Care employee-based?</p><p className="text-muted text-sm">A: Yes. Every caregiver is a Beyond Care employee — bonded, insured, and covered by workers&apos; compensation. We do not use independent contractors.</p></div>
      </>
    ),
  },

  "dementia-care-at-home-complete-guide": {
    title: "Dementia Care at Home — A Complete Guide for Families",
    date: "March 2026",
    description: "A comprehensive guide to supporting a loved one with dementia at home. Practical strategies, what to expect at each stage, and how professional home care helps.",
    category: "Memory Care",
    faq: [
      { q: "At what stage of dementia does professional home care become necessary?", a: "Most families can manage early-stage dementia with informal support, reminders, and safety modifications. Professional home care typically becomes necessary in the middle stage — when the person needs assistance with bathing and dressing, experiences behavioral changes, or requires closer supervision for safety. Starting earlier than necessary is rarely a mistake." },
      { q: "Why is consistency so important in dementia home care?", a: "Individuals with dementia experience confusion and anxiety when routines are disrupted or unfamiliar faces appear. Consistent caregiver assignments and predictable daily schedules reduce agitation, build trust, and support the familiarity that allows a person with dementia to feel secure in their own home." },
      { q: "Can Beyond Care provide 24-hour home care for a family member with late-stage dementia in South Carolina?", a: "Yes. Beyond Care coordinates rotating caregiver coverage for clients who require continuous supervision. This allows families to keep a loved one at home through the progression of the disease rather than transitioning to a memory care facility." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Caring for a loved one with dementia at home is one of the most demanding caregiving challenges a family can face. The disease progresses, needs evolve, and the emotional weight is substantial. This guide provides a practical, honest framework for understanding dementia care at home — what it involves, how it changes over time, and where professional home care fits into the picture.</p>
        <h2>Understanding Dementia Progression</h2>
        <p>Dementia is not a single disease — it is an umbrella term for conditions that affect memory, cognition, and behavior. The most common is Alzheimer's disease, followed by vascular dementia, Lewy body dementia, and frontotemporal dementia. All are progressive, though the pace and pattern of progression vary. Families benefit from understanding the typical stages, not to predict the future precisely, but to anticipate and plan for what lies ahead.</p>
        <h2>Early Stage — What Families Can Manage</h2>
        <p>In early dementia, many individuals can manage most daily activities with minimal support. Challenges typically involve short-term memory, word-finding, and some organizational tasks. Families often handle this stage through reminders, safety modifications, and increased communication. Professional care may begin as a few hours of companion care per week — providing engagement and observation while allowing the person to maintain as much independence as possible.</p>
        <h2>Middle Stage — When Care Needs Intensify</h2>
        <p>The middle stage is typically the longest — and the most demanding for families. Individuals may become confused about time and place, need assistance with bathing and dressing, experience behavioral changes such as agitation or sundowning, and require closer supervision for safety. This is when professional home care becomes genuinely necessary for most families. A consistent caregiver who knows the client, understands their triggers, and maintains a structured routine makes an enormous difference in this stage.</p>
        <h2>Late Stage — Full Support</h2>
        <p>In late-stage dementia, individuals typically need full assistance with all personal care tasks, may lose the ability to communicate verbally, and require constant supervision. At this stage, care is often around the clock. Beyond Care provides 24-hour home care options for families who want to keep a loved one at home through the end of the disease progression.</p>
        <h2>Home Safety for Dementia Clients</h2>
        <ul>
          <li><TB /><span>Remove or secure items that could cause injury — stoves, sharp utensils, cleaning products</span></li>
          <li><TB /><span>Install door alarms or locks that prevent unsupervised exit</span></li>
          <li><TB /><span>Reduce clutter and trip hazards throughout the home</span></li>
          <li><TB /><span>Use clear labeling on cabinets and rooms to support orientation</span></li>
          <li><TB /><span>Consider GPS tracking devices for individuals at high elopement risk</span></li>
        </ul>
        <h2>The Role of Routine in Dementia Care</h2>
        <p>Consistency is one of the most effective tools in dementia care. A predictable daily routine — same wake time, same meal schedule, same activities in the same order — significantly reduces agitation and confusion. Professional caregivers who maintain this routine provide a stability that family caregivers, managing many competing demands, often cannot deliver alone.</p>
        <h2>Supporting Family Caregivers</h2>
        <p>Caregiver burnout in dementia care is not a possibility — it is a near-certainty without adequate relief. Respite care is not a luxury in this context; it is what makes long-term home-based care sustainable. Beyond Care can provide scheduled respite — a few hours per week or full-day coverage — so that family caregivers can rest without guilt.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Do Beyond Care caregivers have experience with dementia?</p><p className="text-muted text-sm">A: Yes. Our caregivers receive ongoing training in dementia care, including behavioral approaches, safe redirection techniques, and routine-based care. Our nurse-led model means clinical oversight is always part of the picture.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can you help a dementia client who wanders?</p><p className="text-muted text-sm">A: Yes. Our caregivers are trained in elopement prevention and supervision strategies for clients who are at risk. We work with families to assess the home environment and put appropriate safeguards in place.</p></div>
      </>
    ),
  },

  "post-surgery-home-care-what-to-expect": {
    title: "Post-Surgery Home Care — What to Expect and How to Prepare",
    date: "March 2026",
    description: "Coming home after surgery can be overwhelming without support. Learn what post-surgery home care includes and how to prepare before discharge.",
    category: "Recovery Care",
    faq: [
      { q: "How soon after surgery should I arrange home care support in South Carolina?", a: "Contact a home care agency before the surgery date or at least 48 to 72 hours before the expected discharge. This allows time to develop a care plan, identify the right caregiver, and have support in place the day your loved one comes home — not days later." },
      { q: "What does post-surgery home care cover for a senior recovering at home?", a: "A Beyond Care caregiver assists with bathing, dressing, and grooming while mobility is limited; prepares meals appropriate to recovery dietary restrictions; provides medication reminders; transports to follow-up appointments; performs light housekeeping; and observes for any changes that warrant attention from the medical team." },
      { q: "How long is home care typically needed after surgery?", a: "Duration depends on the procedure, the patient's age and overall health, and pace of recovery. A hip or knee replacement in an otherwise healthy senior may need two to four weeks of intensive daily support. More complex procedures or patients managing multiple conditions may require longer-term care that adjusts as recovery progresses." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The day a loved one comes home from surgery is often more stressful than the surgery itself. The hospital handled the clinical piece. Now, everything that happens next is up to the family — and that is a lot of responsibility without a plan. Post-surgery home care from a professional agency changes that dynamic significantly. Here is what to expect and how to prepare.</p>
        <h2>Why the First Week Home Is Critical</h2>
        <p>Hospital readmission rates after surgery are highest in the first 30 days — and the greatest risk is in the first week. The reasons are consistent: patients are not taking medications correctly, are not eating or hydrating adequately, are falling, or are not following activity restrictions. Non-medical in-home care directly addresses each of these risks without requiring clinical nursing.</p>
        <h2>What Post-Surgery Home Care Covers</h2>
        <ul>
          <li><TB /><span>Assistance with bathing, dressing, and personal hygiene while mobility is limited</span></li>
          <li><TB /><span>Meal preparation that supports recovery and dietary restrictions</span></li>
          <li><TB /><span>Medication reminders to maintain the prescribed post-surgical schedule</span></li>
          <li><TB /><span>Transportation to follow-up appointments and physical therapy</span></li>
          <li><TB /><span>Light housekeeping to maintain a safe recovery environment</span></li>
          <li><TB /><span>Companionship and emotional support through the recovery period</span></li>
          <li><TB /><span>Observation for concerning changes that warrant contact with the care team</span></li>
        </ul>
        <h2>How to Prepare Before the Hospital Discharge</h2>
        <p>The biggest mistake families make is waiting until the day of discharge to think about home support. Discharge planners move quickly, and family members are often overwhelmed with the emotion of the moment. Reach out to a home care agency before the discharge date — ideally 48 to 72 hours in advance. Beyond Care can often begin care on the day of discharge when the family plans ahead.</p>
        <h2>Coordinating With Home Health</h2>
        <p>Many patients are also discharged with home health orders — skilled nursing or physical therapy provided at home. Home health and non-medical home care serve different functions and can run simultaneously. The home health nurse addresses clinical needs; the home care caregiver handles daily living support. They are complementary, not redundant.</p>
        <h2>How Long Is Post-Surgery Care Typically Needed?</h2>
        <p>It depends on the procedure, the patient&apos;s age and health, and the pace of recovery. For a hip or knee replacement in an otherwise healthy senior, a few weeks of daily support may be sufficient. For a more complex surgery, or for a patient managing multiple conditions, longer-term support may be appropriate. Beyond Care builds care plans that adjust as the patient&apos;s needs change.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How soon can care begin after hospital discharge?</p><p className="text-muted text-sm">A: With advance notice, we can begin care the day of discharge. Contact us before the discharge date — not the day of — to make this possible.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is post-surgery home care covered by insurance?</p><p className="text-muted text-sm">A: Non-medical home care after surgery is not typically covered by Medicare, but may be covered by long-term care insurance, VA benefits, or Medicaid Waiver. Contact us to discuss what applies.</p></div>
      </>
    ),
  },

  "companion-care-vs-personal-care": {
    title: "Companion Care vs Personal Care — Understanding the Difference",
    date: "March 2026",
    description: "Companion care and personal care serve different purposes. Learn the distinction so you can choose the right type of in-home support for your loved one.",
    category: "Understanding Care",
    faq: [
      { q: "What is the practical difference between companion care and personal care?", a: "Companion care focuses on social engagement, emotional support, and daily presence — conversation, activities, outings, and light assistance. Personal care is hands-on help with activities of daily living: bathing, dressing, grooming, toileting, and mobility support. Many care plans include both." },
      { q: "How do I know if my loved one needs companion care, personal care, or both?", a: "If the primary concern is isolation, loneliness, or cognitive stimulation, companion care is the right starting point. If your loved one needs physical assistance with bathing, dressing, or getting around safely, personal care is required. Most families find that both services, delivered by the same caregiver in a coordinated plan, provide the most meaningful support." },
      { q: "Can a Beyond Care caregiver provide both companion care and personal care in the same visit?", a: "Yes. In practice, companion care and personal care blend naturally during a visit. A caregiver who helps a client bathe and dress in the morning will also have breakfast with them, engage in conversation, and assist with whatever the day brings. The conceptual distinction matters for care planning; the operational reality is that both happen together." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Two of the most common home care services — companion care and personal care — are often confused or conflated. They are distinct services that meet different needs, and the distinction matters when you are designing a care plan. Here is a clear, practical explanation of each.</p>
        <h2>What Is Companion Care?</h2>
        <p>Companion care is primarily about social engagement, connection, and daily presence. A companion caregiver provides conversation, participates in activities, accompanies clients on outings, reads aloud, plays games, and generally helps a senior stay mentally and emotionally engaged. Companion care also includes light assistance — reminding clients about medications, helping with light tasks, observing for safety concerns — but it does not include hands-on personal care.</p>
        <h2>What Is Personal Care?</h2>
        <p>Personal care is hands-on assistance with activities of daily living (ADLs). This includes help with bathing, showering, grooming, dressing, oral hygiene, toileting, incontinence care, and mobility support — including transfers and ambulation. Personal care requires a caregiver trained in safe handling, dignity-preserving assistance, and appropriate physical technique.</p>
        <h2>The Overlap</h2>
        <p>Most care plans include elements of both. A caregiver who helps a client with bathing in the morning will also have breakfast with them and spend time in conversation. In practice, the services blend naturally. The distinction matters for care planning: if your loved one needs personal care assistance, make sure the agency confirms their caregivers are trained and equipped to provide it — not just companion services marketed broadly.</p>
        <h2>Which Does Your Loved One Need?</h2>
        <p>If your primary concern is isolation, cognitive stimulation, and daily engagement — companion care may be the right starting point. If your loved one needs physical assistance with bathing, dressing, or mobility — personal care is required. For many seniors, both are needed, and a care plan that includes both provides the most comprehensive support.</p>
        <h2>How Needs Change Over Time</h2>
        <p>A senior who begins with companion care often transitions to personal care as physical needs increase. One of the advantages of working with an established agency like Beyond Care is that the care plan evolves with the client — the relationship continues, and the level of support adjusts without the family needing to find a new provider.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a caregiver provide both companion care and personal care?</p><p className="text-muted text-sm">A: Yes. Beyond Care caregivers are trained to provide both. Most care visits combine elements of personal care with genuine companion interaction — the separation is conceptual, not operational.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is companion care less expensive than personal care?</p><p className="text-muted text-sm">A: Rates may vary depending on the care plan. Contact us for a free consultation where we can discuss services and pricing based on your specific situation.</p></div>
      </>
    ),
  },

  "how-much-does-home-care-cost": {
    title: "How Much Does Home Care Cost? A Clear Breakdown for Families",
    date: "March 2026",
    description: "Home care costs vary based on hours, care type, and location. A clear breakdown of what families can expect to pay for in-home care in South Carolina.",
    category: "Payment Options",
    faq: [
      { q: "What is the typical hourly rate for non-medical home care in South Carolina?", a: "Hourly rates for non-medical home care in South Carolina generally range from $20 to $30 per hour depending on the agency, care type, and level of service. Most agencies also have a minimum hours-per-visit requirement. Contact Beyond Care directly for accurate pricing based on your specific situation." },
      { q: "What funding sources can help reduce the cost of home care in South Carolina?", a: "Long-term care insurance, VA Aid and Attendance benefits, South Carolina's Medicaid Waiver (CLTC program), and voucher programs can all significantly reduce or eliminate out-of-pocket home care costs for qualifying individuals. Beyond Care can help you understand which programs may apply." },
      { q: "Is home care more or less expensive than a nursing facility in South Carolina?", a: "For many levels of care need, in-home care is comparable to or less expensive than a nursing facility — particularly when the senior does not require around-the-clock support. Even 24-hour home care is often competitive with facility costs, with the added benefit of the client remaining in their own home." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Cost is one of the first questions families ask — and one of the hardest to answer without context. Home care pricing varies by geography, care type, hours, and provider. This guide gives South Carolina families a realistic framework for understanding costs and the options available to reduce the out-of-pocket burden.</p>
        <h2>How Home Care Is Priced</h2>
        <p>Most non-medical home care agencies charge an hourly rate. The rate typically varies based on the type of care (companion care vs. personal care with hands-on ADL assistance), the number of hours per visit, and overnight or 24-hour coverage requirements. Most agencies also have a minimum hours-per-visit requirement — commonly two to four hours. This is worth asking about upfront.</p>
        <h2>What Drives Cost Up</h2>
        <ul>
          <li><TB /><span>Fewer hours per visit — minimum visit fees often make short visits proportionally more expensive</span></li>
          <li><TB /><span>Overnight and 24-hour coverage — extended coverage requires more caregiver hours and coordination</span></li>
          <li><TB /><span>Specialized care needs — clients with dementia or complex behavioral needs may require more caregiver skill and attention</span></li>
          <li><TB /><span>Short-notice scheduling — last-minute or irregular scheduling can affect rates</span></li>
        </ul>
        <h2>What Reduces the Out-of-Pocket Cost</h2>
        <p>Several funding sources can significantly reduce — or eliminate — the out-of-pocket cost of in-home care for qualifying individuals:</p>
        <ul>
          <li><TB /><span>Long-term care insurance policies often cover home care when the policyholder meets benefit triggers</span></li>
          <li><TB /><span>VA Aid &amp; Attendance benefits provide monthly payments to qualifying veterans and surviving spouses</span></li>
          <li><TB /><span>South Carolina&apos;s Medicaid Waiver and Community Long Term Care (CLTC) programs cover qualifying low-income individuals</span></li>
          <li><TB /><span>Voucher programs — Beyond Care accepts vouchers from qualifying programs</span></li>
        </ul>
        <h2>The Cost of Not Having Home Care</h2>
        <p>The financial calculus of home care is not only about the hourly rate. When a senior falls and is hospitalized, or when a family caregiver burns out and can no longer work, the financial and human costs are far greater than the cost of preventive in-home support. This context matters when families are evaluating affordability.</p>
        <h2>Getting an Accurate Quote</h2>
        <p>There is no honest way to give a single number without understanding a family&apos;s specific situation. Beyond Care offers free consultations — no commitment, no pressure — where we discuss the care needed, the hours involved, and the payment options available. The conversation is free. The information you get from it is valuable.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Medicare cover home care costs?</p><p className="text-muted text-sm">A: Medicare does not cover non-medical home care. It covers home health (skilled nursing, therapy) when physician-ordered and clinically justified. Non-medical home care — the kind Beyond Care provides — is a different category.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can we start with just a few hours per week and increase later?</p><p className="text-muted text-sm">A: Yes. Many families start small and adjust the care plan as needs evolve. There is no long-term contract requirement with Beyond Care.</p></div>
      </>
    ),
  },

  "does-insurance-cover-home-care": {
    title: "Does Insurance Cover Home Care? Medicare, Medicaid, and More",
    date: "March 2026",
    description: "Most families assume Medicare covers home care. It usually does not — but other options may apply. A clear guide to insurance coverage for home care in South Carolina.",
    category: "Payment Options",
    faq: [
      { q: "Does Medicare pay for non-medical home care such as personal care and companionship?", a: "No. Medicare covers skilled home health services — physician-ordered nursing care and therapy — when specific clinical criteria are met. It does not cover non-medical home care: personal care assistance, companion care, meal preparation, or housekeeping. This surprises most families and is one of the most important things to understand before a care need becomes urgent." },
      { q: "What insurance programs actually cover non-medical home care in South Carolina?", a: "Long-term care insurance is the most direct coverage for non-medical home care. South Carolina's Medicaid Waiver (CLTC program) covers qualifying low-income individuals. VA Aid and Attendance benefits cover qualifying veterans and surviving spouses. Private pay remains an option for those without qualifying coverage." },
      { q: "How do I find out if a long-term care insurance policy covers home care?", a: "Review the policy's benefit triggers — most modern policies cover non-medical home care when the insured cannot perform two or more activities of daily living. Contact the insurer directly to initiate a claim and confirm what documentation they require. Beyond Care can assist with the documentation process." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">One of the most common — and most costly — misconceptions in elder care is the belief that Medicare covers in-home care. For most families, it does not. Understanding what insurance actually covers, and what other options exist, is one of the most valuable conversations a family can have before a care crisis arrives.</p>
        <h2>What Medicare Covers (and Does Not)</h2>
        <p>Medicare covers skilled home health services — physician-ordered nursing care, physical therapy, occupational therapy — when specific clinical criteria are met. It does not cover non-medical home care: personal care, companion care, meal preparation, or housekeeping assistance. This surprises most families. Medicare was designed to cover acute medical needs, not long-term personal care assistance.</p>
        <h2>What Medicaid Covers in South Carolina</h2>
        <p>Medicaid is means-tested and covers a much broader range of services than Medicare. In South Carolina, the Community Long Term Care (CLTC) program and Medicaid Waiver programs can cover qualifying non-medical home care for eligible individuals. Eligibility depends on income, assets, and functional need. Beyond Care accepts Medicaid Waiver payments and can help families understand the application process.</p>
        <h2>Long-Term Care Insurance</h2>
        <p>Long-term care (LTC) insurance policies are specifically designed to cover services like home care, assisted living, and nursing facilities. Policies vary significantly in what they cover and when benefits trigger, but most modern LTC policies explicitly cover non-medical in-home care when the policyholder meets functional criteria (typically inability to perform two or more activities of daily living). If your loved one has a policy, review the benefit triggers carefully and contact the insurer to initiate a claim.</p>
        <h2>VA Benefits</h2>
        <p>Veterans and surviving spouses may qualify for VA Aid &amp; Attendance — a pension supplement that can help cover home care costs. The benefit is underutilized; many qualifying veterans have never applied. Contact us for guidance or work with a VA-accredited claims agent to explore eligibility.</p>
        <h2>Private Pay</h2>
        <p>Many families pay privately — from savings, retirement funds, or proceeds from a home sale. For families without insurance coverage or public program eligibility, private pay with a consistent, flexible schedule can still be significantly more affordable than facility-based care.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I find out if my loved one qualifies for Medicaid Waiver home care in SC?</p><p className="text-muted text-sm">A: Contact South Carolina&apos;s Department of Health and Human Services (SCDHHS) or call us. We work with families navigating CLTC and Medicaid Waiver applications regularly.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care work with long-term care insurance?</p><p className="text-muted text-sm">A: Yes. We work with most long-term care insurance policies and can assist with the documentation your insurer requires.</p></div>
      </>
    ),
  },

  "medicare-vs-medicaid-home-care": {
    title: "Medicare vs Medicaid for Home Care — What's the Difference?",
    date: "March 2026",
    description: "Medicare and Medicaid work differently when it comes to home care. Understanding the distinction helps South Carolina families access the right coverage.",
    category: "Payment Options",
    faq: [
      { q: "Does Medicare or Medicaid cover daily personal care and companion services at home?", a: "Medicaid — through South Carolina's Medicaid Waiver and CLTC program — covers non-medical home care for qualifying low-income individuals. Medicare covers only skilled clinical home health services ordered by a physician. For ongoing daily personal care and companionship, Medicaid Waiver is the relevant public program." },
      { q: "What is South Carolina's CLTC program and how does it relate to home care?", a: "CLTC stands for Community Long Term Care. It is South Carolina's program for delivering Medicaid-funded services — including non-medical in-home care — to eligible individuals who need help with activities of daily living and meet financial criteria. Beyond Care accepts CLTC and Medicaid Waiver payments." },
      { q: "How do I apply for Medicaid Waiver home care coverage in South Carolina?", a: "Applications are processed through the South Carolina Department of Health and Human Services (SCDHHS). We recommend contacting SCDHHS directly or reaching out to Beyond Care — we regularly help families navigate the application process and understand eligibility requirements." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Medicare and Medicaid are both federal health programs, and many families use the names interchangeably. They are not the same program, and for home care specifically, the differences are significant. Understanding how each works helps families find coverage that actually applies to their situation.</p>
        <h2>Medicare — Health Insurance for Seniors</h2>
        <p>Medicare is the federal health insurance program for Americans age 65 and older (and some younger individuals with disabilities). It is not means-tested — eligibility is based on age and work history, not income. Medicare Part A covers hospital care; Part B covers outpatient and physician services; Part D covers prescription drugs. Medicare does cover home health services — but only skilled clinical care ordered by a physician for a specific medical condition, with strict eligibility criteria. Non-medical personal care and companion care are explicitly excluded from Medicare coverage.</p>
        <h2>Medicaid — Health Coverage Based on Need</h2>
        <p>Medicaid is a joint federal-state program that covers healthcare costs for individuals and families with limited income and assets. Eligibility and covered services vary by state. In South Carolina, Medicaid Waiver and the Community Long Term Care (CLTC) program specifically cover non-medical in-home care for qualifying individuals who need help with activities of daily living and meet financial eligibility criteria.</p>
        <h2>The Key Difference for Home Care</h2>
        <p>Medicare covers short-term skilled home health after a qualifying hospitalization or for a specific medical condition. Medicaid — through South Carolina&apos;s CLTC and Waiver programs — covers ongoing non-medical home care for eligible low-income individuals who need personal care assistance. For most families navigating daily living support for a senior, Medicaid Waiver is the more relevant public program.</p>
        <h2>Dual Eligibility</h2>
        <p>Some individuals qualify for both Medicare and Medicaid (called dual eligible or dual eligible beneficiaries). For these individuals, Medicare covers the clinical services and Medicaid covers the daily living support — a combination that can provide comprehensive coverage.</p>
        <h2>What to Do If You Are Not Sure Which Applies</h2>
        <p>Contact us. We work with families navigating these programs regularly and can help you understand which program — if any — applies to your loved one&apos;s situation. Beyond Care accepts Medicaid Waiver payments and VA benefits, and can assist with documentation for long-term care insurance claims.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How do I apply for Medicaid Waiver home care in South Carolina?</p><p className="text-muted text-sm">A: Applications go through South Carolina DHHS and the CLTC program. We recommend contacting SCDHHS directly or calling us — we can point you in the right direction and explain the process.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can someone on Medicare use Beyond Care services?</p><p className="text-muted text-sm">A: Yes. Medicare may not cover our services, but many clients pay privately or through long-term care insurance, VA benefits, or Medicaid Waiver. We can help you explore what applies.</p></div>
      </>
    ),
  },

  "questions-to-ask-caregiver-interview": {
    title: "Questions to Ask When Interviewing a Home Caregiver",
    date: "March 2026",
    description: "The right questions reveal a caregiver's true character, experience, and values. Use these questions when interviewing a home caregiver for your loved one.",
    category: "Choosing Care",
    faq: [
      { q: "What questions best reveal a caregiver's true character during an interview?", a: "Questions that require real stories rather than rehearsed answers. Ask them to describe the most challenging client situation they have handled and how they managed it. Ask what they do when a client refuses care. Ask what they enjoy most about this work. Genuine caregivers give specific, personal answers — not generic phrases about compassion." },
      { q: "Should I interview a caregiver even when working with an agency?", a: "If the agency allows it, yes. Beyond Care facilitates introductions before the first visit and welcomes family involvement in the matching process. Your comfort with the caregiver — and your loved one's — is a priority, not an afterthought." },
      { q: "What is a reliable sign that a caregiver takes reliability seriously?", a: "Ask: 'What would you do if you were running late or had an emergency?' A reliable caregiver has a clear, immediate answer — they call ahead, they contact the agency, they ensure coverage is in place. Vagueness or defensiveness about the question is a warning sign." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Whether you are working with an agency or evaluating a caregiver directly, the interview is your best opportunity to understand who you are inviting into your loved one&apos;s home and life. Most candidates will say the right things when asked directly. The goal is to ask questions that surface the real character, experience, and values behind the standard answers.</p>
        <h2>Questions About Experience</h2>
        <ul>
          <li><TB /><span>&ldquo;What type of clients have you worked with most?&rdquo; — Look for specific conditions, not vague generalities.</span></li>
          <li><TB /><span>&ldquo;Describe the most challenging client situation you have handled and how you managed it.&rdquo; — Real experience produces real stories.</span></li>
          <li><TB /><span>&ldquo;Have you worked with clients who have dementia or memory challenges?&rdquo; — Directly relevant for many families.</span></li>
        </ul>
        <h2>Questions About Approach and Values</h2>
        <ul>
          <li><TB /><span>&ldquo;What do you do when a client refuses care?&rdquo; — This reveals patience, flexibility, and person-centered thinking.</span></li>
          <li><TB /><span>&ldquo;How do you make a client feel comfortable with personal care tasks?&rdquo; — Look for genuine empathy and dignity-focused language.</span></li>
          <li><TB /><span>&ldquo;What do you enjoy most about this work?&rdquo; — The answer reveals whether this is a calling or just employment.</span></li>
        </ul>
        <h2>Questions About Reliability</h2>
        <ul>
          <li><TB /><span>&ldquo;What would you do if you were running late or had an emergency?&rdquo; — Reliable caregivers have clear protocols.</span></li>
          <li><TB /><span>&ldquo;Have you ever left a client without coverage? What happened?&rdquo; — This tests honesty and accountability.</span></li>
        </ul>
        <h2>Questions About Communication</h2>
        <ul>
          <li><TB /><span>&ldquo;If you noticed a change in the client&apos;s condition, who would you contact and how?&rdquo; — Communication protocols matter.</span></li>
          <li><TB /><span>&ldquo;How do you handle a family member who is very involved and frequently calls?&rdquo; — Good caregivers see family as partners, not obstacles.</span></li>
        </ul>
        <h2>Questions About Logistics</h2>
        <ul>
          <li><TB /><span>&ldquo;Are you comfortable with our client&apos;s specific care needs?&rdquo; — Name the actual tasks — bathing, transfers, dementia supervision — and confirm comfort.</span></li>
          <li><TB /><span>&ldquo;What are your availability limitations?&rdquo; — Know the schedule constraints upfront.</span></li>
        </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Should I interview the caregiver before they start, even with an agency?</p><p className="text-muted text-sm">A: Yes, if the agency allows it. Beyond Care facilitates introductions before the first visit and welcomes family involvement in the matching process.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if a caregiver gives concerning answers?</p><p className="text-muted text-sm">A: Trust your instincts. If something feels wrong — evasiveness, lack of empathy, implausible answers — communicate this to the agency immediately. A quality agency will take this seriously.</p></div>
      </>
    ),
  },

  "home-care-abbeville-greenwood-sc": {
    title: "Home Care in Abbeville and Greenwood County, SC",
    date: "March 2026",
    description: "Families in Abbeville and Greenwood County, SC searching for in-home care. Learn how Beyond Care provides nurse-led support throughout this region of Upstate South Carolina.",
    category: "Local Resources",
    faq: [
      { q: "Does Beyond Care provide home care in Abbeville County, SC?", a: "Yes. Beyond Care serves families throughout Abbeville County from our Honea Path office in Anderson County. Call us at (864) 369-0222 to confirm coverage in your specific area and to schedule a free consultation." },
      { q: "What home care services are available to families in Greenwood County, SC?", a: "Beyond Care provides personal care, companion care, respite care, meal preparation, medication reminders, transportation, light housekeeping, and overnight or 24-hour care throughout Greenwood County. All services are delivered by direct employee caregivers under nurse-led clinical oversight." },
      { q: "How does Beyond Care handle payment for families in Abbeville and Greenwood who qualify for Medicaid?", a: "Beyond Care accepts South Carolina Medicaid Waiver (CLTC), VA Aid and Attendance, long-term care insurance, vouchers, and private pay. Many families in this region qualify for public benefits they have not yet applied for. Contact us to discuss eligibility and what funding sources may apply." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Families in Abbeville and Greenwood County, South Carolina have access to the same nurse-led, non-medical home care that Beyond Care provides throughout Upstate SC. If you are caring for an aging parent or loved one in this area and wondering what in-home support is available, this guide gives you a practical overview of what home care covers and how to access it.</p>
        <h2>About Beyond Care in Abbeville and Greenwood Counties</h2>
        <p>Beyond Care Home Care Services is headquartered in Honea Path, SC — centrally located in Anderson County — and serves families throughout Upstate South Carolina, including Abbeville County and Greenwood County. Our nurse-led model means every care plan is developed and overseen by a registered nurse, and our caregivers are employees of Beyond Care — not independent contractors.</p>
        <h2>Services Available in the Abbeville and Greenwood Area</h2>
        <ul>
          <li><TB /><span>Personal care assistance — bathing, grooming, dressing, hygiene</span></li>
          <li><TB /><span>Companion care — social engagement and daily presence</span></li>
          <li><TB /><span>Respite care — relief for family caregivers</span></li>
          <li><TB /><span>Meal preparation tailored to dietary needs</span></li>
          <li><TB /><span>Transportation to medical appointments and errands</span></li>
          <li><TB /><span>Medication reminders</span></li>
          <li><TB /><span>Light housekeeping and laundry</span></li>
          <li><TB /><span>Hospital discharge support</span></li>
          <li><TB /><span>Overnight and 24-hour care for clients who need continuous presence</span></li>
        </ul>
        <h2>Payment Options for Abbeville and Greenwood Families</h2>
        <p>Beyond Care works with families using private pay, long-term care insurance, South Carolina Medicaid Waiver (CLTC), VA Aid &amp; Attendance benefits, and voucher programs. Many families in this region qualify for Medicaid Waiver benefits and have not yet applied — contact us to discuss eligibility.</p>
        <h2>How to Get Started</h2>
        <p>The first step is a free, no-pressure consultation — by phone or in person. We will ask about your loved one&apos;s current needs, discuss what a care plan might look like, and answer every question you have. There is no commitment required. Call our Honea Path office at (864) 369-0222 or our Williamston office at (864) 841-2500.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Does Beyond Care serve all of Abbeville County?</p><p className="text-muted text-sm">A: We serve families throughout Abbeville County. Call us to confirm coverage in your specific area.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How quickly can care begin in Greenwood County?</p><p className="text-muted text-sm">A: Timelines vary based on current availability and the complexity of the care needed. Contact us as early as possible — we work to match families quickly, particularly in urgent situations.</p></div>
      </>
    ),
  },

  "24-hour-home-care-south-carolina": {
    title: "24-Hour Home Care in South Carolina — What It Is and When You Need It",
    date: "March 2026",
    description: "Some care needs require around-the-clock support. Learn what 24-hour home care includes, how it works, and when it becomes the right choice for South Carolina families.",
    category: "Our Services",
    faq: [
      { q: "What is 24-hour home care and how is it different from overnight care?", a: "True 24-hour home care involves rotating caregiver shifts — typically 8 or 12 hours — ensuring a rested, attentive caregiver is always present and awake. Overnight care covers nighttime hours only, with one caregiver who may rest when the client is sleeping. Twenty-four-hour care provides the highest level of continuous in-home support available." },
      { q: "Who typically needs 24-hour home care in South Carolina?", a: "Individuals with late-stage dementia who cannot safely be left alone; seniors recovering from major surgery or illness requiring continuous monitoring; clients with severe mobility limitations who need help moving at any time; and families who want to avoid nursing facility placement while ensuring comprehensive safety around the clock." },
      { q: "How does 24-hour home care compare in cost to a nursing home in South Carolina?", a: "For many families, 24-hour in-home care is comparable to or less expensive than a nursing facility when the full cost of facility care is calculated. The added benefit of remaining at home — familiar environment, personal belongings, family access — carries meaningful quality-of-life advantages that facility placement cannot replicate." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Twenty-four-hour home care is one of the most comprehensive — and most often misunderstood — levels of in-home support. It is not simply &ldquo;a lot of hours.&rdquo; It is a structured, continuous care model that keeps a loved one safe, supported, and in their own home around the clock. Here is what it actually involves and how to know when it is the right choice.</p>
        <h2>What 24-Hour Home Care Means</h2>
        <p>True 24-hour home care involves rotating caregiver coverage throughout the day and night — ensuring that a trained caregiver is always present, awake, and available to assist. This is distinct from live-in care, where a single caregiver is in the home overnight but is entitled to designated sleep hours and is not expected to be continuously awake and responsive. Twenty-four-hour care with rotating caregivers provides the highest level of continuous non-medical in-home support available.</p>
        <h2>Who Needs 24-Hour Home Care?</h2>
        <ul>
          <li><TB /><span>Individuals with late-stage dementia who require constant supervision and cannot be left alone safely</span></li>
          <li><TB /><span>Seniors recovering from major surgery or illness who need continuous monitoring</span></li>
          <li><TB /><span>Individuals with severe mobility limitations who require help any time they need to move</span></li>
          <li><TB /><span>Clients who are at high risk for falls or medical events at any time of day or night</span></li>
          <li><TB /><span>Families who want to avoid nursing home or facility placement while ensuring comprehensive safety</span></li>
        </ul>
        <h2>How Beyond Care Structures 24-Hour Coverage</h2>
        <p>Beyond Care coordinates caregiver scheduling to ensure continuous coverage. Caregivers rotate in shifts — typically 8-hour or 12-hour shifts — so that your loved one always has a rested, attentive caregiver present. Our nurse-led oversight ensures care plan consistency across all caregivers assigned to a client.</p>
        <h2>24-Hour Home Care vs. Nursing Home Placement</h2>
        <p>For many families, 24-hour home care is significantly less expensive than a nursing facility while providing a higher quality of life for the client. The familiar environment — personal belongings, established routines, family proximity — has meaningful health benefits, particularly for clients with dementia. Many families who have explored facility placement have found that 24-hour in-home care is both viable and preferable.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: How is 24-hour care paid for in South Carolina?</p><p className="text-muted text-sm">A: Long-term care insurance, Medicaid Waiver, VA benefits, and private pay are all possible funding sources. Contact us to discuss what applies to your situation.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Will the same caregivers be assigned consistently?</p><p className="text-muted text-sm">A: We assign consistent caregivers to each client and limit the total number of different caregivers whenever possible. Consistency is particularly important for clients with dementia.</p></div>
      </>
    ),
  },

  "hospital-discharge-planning-home-care": {
    title: "Hospital Discharge Planning — How to Set Up Home Care Before You Leave",
    date: "March 2026",
    description: "The discharge process moves fast. Learn how to plan ahead for in-home care before your loved one leaves the hospital — and why waiting until discharge day is too late.",
    category: "Hospital Discharge",
    faq: [
      { q: "When should I contact a home care agency during a hospital stay in South Carolina?", a: "As soon as a discharge date is on the horizon — ideally 48 to 72 hours before the expected discharge. This allows the agency to develop a care plan, identify a caregiver, and begin care the day your loved one returns home rather than days later." },
      { q: "What information should I have ready when calling Beyond Care about a hospital discharge?", a: "The diagnosis or procedure; any activity restrictions or wound care instructions from the discharge summary; the expected discharge date and time; the home address; and the name and contact of the primary physician. The more information we have upfront, the faster we can put care in place." },
      { q: "Can a Beyond Care caregiver work alongside home health nurses and therapists after discharge?", a: "Yes. Home health (skilled nursing, physical therapy) and non-medical home care serve different functions and run concurrently without conflict. The home health team handles clinical follow-up; Beyond Care handles daily personal care, meals, medication reminders, and companionship. Both are often needed in the weeks following discharge." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Hospital discharge planners work under real time pressure, and the process can feel abrupt for families. One day you are told your loved one is doing well; the next, discharge is in 24 hours. Families who plan ahead — who contact a home care agency before the discharge date — get a substantially better outcome than those who scramble at the last minute.</p>
        <h2>Why Discharge Planning Matters</h2>
        <p>The transition from hospital to home is one of the highest-risk periods in a senior&apos;s health trajectory. Research consistently shows that readmission risk is highest in the first 30 days after discharge, and that the primary drivers are medication errors, falls, inadequate nutrition, and lack of follow-up care. Non-medical in-home care directly addresses each of these risk factors.</p>
        <h2>What to Do Before Your Loved One Is Discharged</h2>
        <ul>
          <li><TB /><span>Contact a home care agency at least 48-72 hours before the expected discharge date</span></li>
          <li><TB /><span>Ask the hospital discharge planner to provide a written discharge summary and medication list before the day of discharge</span></li>
          <li><TB /><span>Confirm home health orders — if a physician has ordered home health services (skilled nursing, PT), ensure the referral is submitted before discharge</span></li>
          <li><TB /><span>Prepare the home before your loved one returns: remove trip hazards, ensure medications are accessible, arrange a comfortable recovery space</span></li>
          <li><TB /><span>Set up follow-up appointments with the primary care physician and any specialists before leaving the hospital</span></li>
        </ul>
        <h2>What Information to Have Ready for the Home Care Agency</h2>
        <p>When you contact Beyond Care, it helps to have the following ready: the diagnosis or procedure, any specific care restrictions (activity limitations, wound care instructions), the discharge date and time, the home address and any access considerations, and the name and contact information of the primary physician.</p>
        <h2>What Beyond Care Provides at Discharge</h2>
        <p>Beyond Care can begin care the day your loved one comes home, if contacted in advance. Our nurse-led team coordinates with the family to ensure the care plan aligns with the discharge instructions, and our caregivers provide daily living support — bathing assistance, meal preparation, medication reminders, transportation, and companionship — from the first day home.</p>
        <h2>Coordinating With Home Health</h2>
        <p>If your loved one is also receiving home health services (skilled nursing, physical therapy), our caregivers coordinate seamlessly alongside that team. Home health handles the clinical components. Beyond Care handles the daily living support. The two services complement each other and cover different aspects of the recovery.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can care start the same day as hospital discharge?</p><p className="text-muted text-sm">A: Yes, with advance notice. Contact us before the discharge date — not the morning of — to make same-day care starts possible.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if my loved one refuses care when they get home?</p><p className="text-muted text-sm">A: This is common. We start with a low-key introduction — companionship first, personal care later — to build comfort and trust before diving into hands-on care tasks.</p></div>
      </>
    ),
  },

  "personal-care-at-home-what-it-covers": {
    title: "Personal Care at Home — What It Covers and Why It Matters",
    date: "March 2026",
    description: "Personal care is the most hands-on home care service. A clear guide to what it covers, who it is for, and how to evaluate whether a caregiver is delivering it with dignity.",
    category: "Personal Care",
    faq: [
      { q: "What tasks are included in personal care at home?", a: "Personal care covers bathing and showering assistance, grooming (hair, shaving, nail care, oral hygiene), dressing, toileting and incontinence care, mobility and transfer support (bed to chair, in and out of vehicles), repositioning to prevent pressure injuries, and skin observation." },
      { q: "How do I know if a caregiver is providing personal care with appropriate dignity?", a: "A caregiver delivering dignified personal care explains each step before doing it, moves at the client's pace rather than their own schedule, maintains warmth and conversation throughout, and never expresses frustration or impatience. The difference between clinical efficiency and genuine compassion is visible — and it affects whether clients accept or resist care." },
      { q: "Does Beyond Care train caregivers specifically in personal care delivery?", a: "Yes. All Beyond Care caregivers receive training in safe transfer techniques, proper body mechanics, skin observation, and person-centered, dignity-preserving approaches to personal care. Regular supervisory visits by our nursing team verify that these standards are being maintained in the client's home." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Personal care is the most intimate category of home care — and the most essential for seniors who are losing the ability to manage daily hygiene and self-care independently. When it is done well, personal care preserves dignity and supports independence. When it is done poorly, it is embarrassing, uncomfortable, and sometimes harmful. Understanding what personal care actually covers — and what &ldquo;done well&rdquo; looks like — helps families make better decisions about the care they choose.</p>
        <h2>What Personal Care Covers</h2>
        <ul>
          <li><TB /><span>Bathing and showering assistance — including full bath support, sponge bathing, and hair washing</span></li>
          <li><TB /><span>Grooming — hair combing, shaving, nail care (basic), oral hygiene</span></li>
          <li><TB /><span>Dressing — selecting appropriate clothing, dressing, and undressing</span></li>
          <li><TB /><span>Toileting assistance — support with toilet use, commode transfers, and incontinence care</span></li>
          <li><TB /><span>Mobility and transfers — safe assistance moving from bed to chair, chair to standing, in and out of vehicles</span></li>
          <li><TB /><span>Positioning and repositioning — reducing pressure injury risk for clients with limited mobility</span></li>
          <li><TB /><span>Skin care — moisturizing, monitoring for skin breakdown or wounds (observation only, not treatment)</span></li>
        </ul>
        <h2>Who Needs Personal Care?</h2>
        <p>Personal care is appropriate for any individual who can no longer safely and adequately complete these tasks independently. This includes seniors with mobility limitations, individuals recovering from surgery or illness, adults with chronic conditions such as Parkinson&apos;s or stroke, and individuals with dementia who may need gentle redirection and assistance with self-care tasks they can no longer initiate on their own.</p>
        <h2>What Dignified Personal Care Looks Like</h2>
        <p>A caregiver who provides dignified personal care speaks directly to the client — not around them. They explain each step before they do it. They move at the client&apos;s pace, not their own schedule. They maintain warmth and conversation throughout what can feel like a vulnerable experience. They do not rush, do not express frustration, and do not treat the tasks as burdensome. The difference between clinical personal care and genuinely compassionate personal care is often the difference between a client who accepts help and one who refuses it.</p>
        <h2>How Beyond Care Trains for Personal Care</h2>
        <p>All Beyond Care caregivers receive training in personal care delivery that covers safe transfer techniques, proper body mechanics, skin observation, and person-centered, dignity-preserving approaches. Our nurse-led oversight includes regular supervisory visits to ensure quality standards are being met in the home.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if my loved one is embarrassed about receiving personal care?</p><p className="text-muted text-sm">A: Embarrassment is very common — and almost always diminishes once a consistent caregiver relationship is established. We start slowly, build trust, and always follow the client&apos;s lead on pace.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Can a family member be present during personal care visits?</p><p className="text-muted text-sm">A: Absolutely. Family members are always welcome, and many find that their presence initially helps the client feel more comfortable with the caregiver.</p></div>
      </>
    ),
  },

  "caregiver-employee-vs-contractor-difference": {
    title: "Caregiver as Employee vs. Independent Contractor — Why It Matters for Your Family",
    date: "March 2026",
    description: "Whether a caregiver is an agency employee or independent contractor affects your legal liability, insurance coverage, and quality assurance. What South Carolina families should know.",
    category: "Caregiver Standards",
    faq: [
      { q: "What is the real risk of using a home care agency that sends independent contractors in South Carolina?", a: "If an independent contractor caregiver is injured in your home, the agency's workers' compensation insurance may not cover them — leaving your homeowner's insurance or you personally exposed. Additionally, independent contractors are not subject to the same agency oversight, background check standards, or performance accountability as direct employees." },
      { q: "How can I confirm whether a home care agency's caregivers are employees or contractors?", a: "Ask directly: 'Are your caregivers employees of your agency or independent contractors?' A quality agency answers this immediately and clearly. If the response is evasive — 'it depends' or 'some are both' — press for specifics. The answer matters for your legal exposure and for the quality assurance you can expect." },
      { q: "Are all Beyond Care caregivers direct employees?", a: "Yes. Every caregiver placed by Beyond Care is a direct employee — bonded, insured, covered by workers' compensation, CPR certified, background-checked, and subject to our training and performance evaluation standards. We do not use independent contractors." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">The distinction between an employee caregiver and an independent contractor caregiver sounds like a technical employment classification. In practice, it has real consequences for your family — including your legal exposure, the insurance coverage in effect, and the quality oversight that does or does not exist. Here is what you need to understand before you choose a home care provider.</p>
        <h2>The Difference in Plain Terms</h2>
        <p>An employee caregiver works for the agency. The agency manages their schedule, trains them, evaluates their performance, pays their taxes, and carries workers&apos; compensation and liability insurance on their behalf. An independent contractor caregiver is hired by the agency to provide services but is not legally an employee — the agency&apos;s liability protections do not fully extend to them, and your exposure is different.</p>
        <h2>Why the Employee Model Is Better for Families</h2>
        <ul>
          <li><TB /><span>Workers&apos; compensation coverage — if an employee caregiver is injured in your home, the agency&apos;s workers&apos; comp covers it. An independent contractor injured in your home may look to your homeowner&apos;s insurance — or to you personally.</span></li>
          <li><TB /><span>Liability insurance — agency employees are covered by the agency&apos;s liability policy. Independent contractor arrangements may leave gaps in coverage.</span></li>
          <li><TB /><span>Background checks and training — agencies control the hiring, screening, and training of their employees. With independent contractors, this oversight is inconsistent.</span></li>
          <li><TB /><span>Performance accountability — employees can be disciplined, retrained, or terminated by the agency. Independent contractors have more autonomous relationships that are harder to manage.</span></li>
        </ul>
        <h2>How to Find Out</h2>
        <p>Ask directly: &ldquo;Are your caregivers employees of your agency or independent contractors?&rdquo; A quality agency will answer this question clearly and immediately. If the answer is evasive — &ldquo;it depends,&rdquo; &ldquo;some are employees and some are contractors&rdquo; — press for clarity. You need to know exactly what the arrangement is before care begins.</p>
        <h2>The Beyond Care Model</h2>
        <p>All Beyond Care caregivers are direct employees of Beyond Care Home Care Services. They are bonded, insured, covered by workers&apos; compensation, CPR certified, background-checked, and subject to our performance evaluation and training standards. This is not an exception — it is how we operate with every caregiver we place.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if I want to hire a private caregiver directly — not through an agency?</p><p className="text-muted text-sm">A: That is your choice, and it can reduce costs. However, be aware that when you hire directly, you become the employer — responsible for taxes, workers&apos; compensation, background checks, and liability. The agency model handles all of this for you.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is the employee model more expensive?</p><p className="text-muted text-sm">A: It is often comparable in total cost when the liability protections, quality oversight, and operational reliability are accounted for. The higher-quality outcome is reflected in the price — but families are not exposed to the additional risks of contractor-based care.</p></div>
      </>
    ),
  },

  // ── April 2026 — Seasonal Spring/Summer Posts ───────────────────────────

  "spring-wellness-tips-seniors-south-carolina": {
    title: "Spring Wellness Tips for Seniors in South Carolina",
    date: "April 2026",
    description: "Spring in South Carolina brings warmer weather and new opportunities for seniors to stay active and healthy. Practical tips on outdoor activity, allergy management, and hydration as temperatures rise.",
    category: "Health & Wellness",
    faq: [
      { q: "What outdoor activities are safe for seniors in South Carolina during spring?", a: "Short walks in the early morning or late afternoon, light gardening with proper support, and supervised porch sitting are all appropriate. The key is to avoid midday heat, stay hydrated, and have a caregiver or family member nearby in case of fatigue or unsteadiness." },
      { q: "How can seniors manage seasonal allergies without increasing fall risk?", a: "Work with a physician to identify allergy medications that do not cause drowsiness or dizziness. Many antihistamines increase fall risk in older adults. A home care caregiver can help monitor symptoms and ensure medication adjustments are followed correctly." },
      { q: "How much water should a senior drink during warmer spring weather?", a: "Most physicians recommend six to eight glasses of water per day for older adults, with increased intake during warmer weather or physical activity. Seniors often lose their sense of thirst with age, so consistent reminders from a caregiver are one of the most effective ways to prevent dehydration." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Spring in South Carolina is one of the most pleasant times of year — mild temperatures, longer days, and the kind of weather that invites people outdoors. For seniors, the season brings real opportunities to improve physical and emotional well-being. It also brings a few risks that families should be aware of. Here is how to help your loved one make the most of spring safely.</p>
        <h2>Getting Outside Safely</h2>
        <p>After months of shorter days and colder temperatures, spring is an ideal time for seniors to spend more time outdoors. Even light activity — a short walk around the yard, sitting on the porch, or gentle gardening — provides meaningful benefits for mood, circulation, and overall health. The key is timing and preparation.</p>
        <ul>
          <li><TB /><span>Schedule outdoor time for early morning or late afternoon when temperatures are mildest</span></li>
          <li><TB /><span>Ensure your loved one wears supportive, non-slip footwear — not sandals or house slippers</span></li>
          <li><TB /><span>Check outdoor walking paths for uneven surfaces, wet spots, or debris from winter storms</span></li>
          <li><TB /><span>A caregiver or family member should be present during outdoor activity, especially for seniors with balance or mobility concerns</span></li>
        </ul>
        <h2>Managing Spring Allergies</h2>
        <p>South Carolina&apos;s spring pollen season is aggressive. For seniors, seasonal allergies are more than an inconvenience — they can disrupt sleep, reduce appetite, and contribute to fatigue. More importantly, many common allergy medications carry side effects that increase fall risk in older adults.</p>
        <p>Families should work with their loved one&apos;s physician to identify allergy treatments that are safe for seniors. A home care caregiver can help by monitoring symptoms, ensuring medications are taken correctly, and keeping windows closed during high-pollen days.</p>
        <h2>Hydration Before the Heat Arrives</h2>
        <p>One of the most important spring wellness habits for seniors is establishing a consistent hydration routine before summer heat arrives. Older adults are at higher risk for dehydration because the body&apos;s thirst mechanism weakens with age. Many seniors simply do not feel thirsty until they are already dehydrated.</p>
        <p>A caregiver who provides regular hydration reminders throughout the day is one of the most effective safeguards against dehydration. Water, diluted juice, and herbal tea all count. Caffeinated beverages and alcohol should be limited, as both contribute to fluid loss.</p>
        <h2>Light Exercise and Mobility</h2>
        <p>Spring is a natural time to increase physical activity gradually. For seniors, this does not mean vigorous exercise — it means consistent, gentle movement. Walking, seated stretches, range-of-motion exercises, and supervised balance activities all support the kind of physical function that protects against falls and maintains independence.</p>
        <p>Beyond Care caregivers can assist with prescribed exercise routines and accompany seniors on short walks, providing both physical support and the social engagement that makes activity more enjoyable.</p>
        <h2>Emotional Well-Being and Social Connection</h2>
        <p>Longer days and warmer weather naturally create opportunities for social engagement. Seniors who were isolated during winter months benefit significantly from increased interaction — whether that means visits from family, outings with a companion caregiver, or simply more time spent in shared spaces rather than alone in a bedroom.</p>
        <h2>Spring Cleaning and Home Safety</h2>
        <p>Spring is also a practical time to reassess the home environment. Clear walkways, check smoke detectors, ensure adequate lighting, and remove any clutter that accumulated over winter. A Beyond Care caregiver who provides light housekeeping can support this process while maintaining the safe, clean environment that reduces fall risk year-round.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My parent barely left the house this winter. How do I encourage them to be more active this spring?</p><p className="text-muted text-sm">A: Start small. A few minutes on the porch, a short walk to the mailbox, or light gardening in a raised bed. A companion caregiver can make the transition easier by providing both encouragement and physical support.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Should I be concerned about sunburn for my elderly parent?</p><p className="text-muted text-sm">A: Yes. Seniors&apos; skin is thinner and more vulnerable to UV damage. Use a broad-spectrum SPF 30+ sunscreen, wear a hat, and limit direct sun exposure during peak hours (10 AM to 4 PM).</p></div>
      </>
    ),
  },

  "heat-safety-elderly-south-carolina-summer": {
    title: "Heat Safety for Elderly Adults in South Carolina — A Summer Guide",
    date: "April 2026",
    description: "South Carolina summers are dangerously hot for seniors. Learn the signs of heat exhaustion, how to keep elderly loved ones safe, and when to call for help.",
    category: "Safety",
    faq: [
      { q: "What are the early signs of heat exhaustion in elderly adults?", a: "Heavy sweating, cool or clammy skin, weakness, nausea, dizziness, headache, and muscle cramps. In seniors, confusion or unusual lethargy may be the most noticeable early sign — and it should be treated as urgent. Move the person to a cool environment, provide water, and contact a physician if symptoms do not improve within 30 minutes." },
      { q: "Why are seniors more vulnerable to heat-related illness?", a: "Aging reduces the body's ability to regulate temperature, decreases sweat production, and weakens the thirst response. Many common medications — including diuretics, beta-blockers, and antihistamines — further impair the body's heat response. These factors combine to make seniors significantly more vulnerable than younger adults." },
      { q: "What should I do if my elderly parent does not have reliable air conditioning?", a: "Contact your local Area Agency on Aging or 211 to ask about cooling assistance programs. Many South Carolina counties operate cooling centers during extreme heat. Beyond Care can also help by ensuring a caregiver is present during the hottest parts of the day to monitor conditions and provide transportation to cooler environments." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">South Carolina summers are beautiful — and dangerous for seniors. Temperatures regularly exceed 90 degrees with high humidity, creating conditions that can become life-threatening for elderly adults in a matter of hours. Heat-related illness is one of the most preventable causes of hospitalization and death among older adults. Here is what every family should know.</p>
        <h2>Why Seniors Are at Higher Risk</h2>
        <p>The human body&apos;s ability to regulate temperature declines with age. Seniors sweat less efficiently, have a weaker thirst response, and are more likely to take medications that interfere with heat regulation — including diuretics, beta-blockers, antihistamines, and certain psychiatric medications. Chronic conditions like heart disease, diabetes, and respiratory illness further increase vulnerability.</p>
        <h2>Know the Signs of Heat Exhaustion</h2>
        <p>Heat exhaustion is the body&apos;s warning before heatstroke. Recognizing it early can prevent a medical emergency.</p>
        <ul>
          <li><TB /><span>Heavy sweating with cool, clammy skin</span></li>
          <li><TB /><span>Weakness and fatigue</span></li>
          <li><TB /><span>Nausea or vomiting</span></li>
          <li><TB /><span>Dizziness or lightheadedness</span></li>
          <li><TB /><span>Headache</span></li>
          <li><TB /><span>Muscle cramps</span></li>
          <li><TB /><span>Confusion or unusual behavior — in seniors, this is often the most visible sign</span></li>
        </ul>
        <h2>Know the Signs of Heatstroke — This Is an Emergency</h2>
        <p>Heatstroke occurs when the body&apos;s temperature regulation fails entirely. Signs include a body temperature above 103 degrees, hot and dry skin (no sweating), rapid pulse, confusion, slurred speech, or loss of consciousness. Heatstroke is a medical emergency. Call 911 immediately. Move the person to a cool area and apply cool cloths to the skin while waiting for emergency services.</p>
        <h2>Keeping Your Loved One Safe at Home</h2>
        <ul>
          <li><TB /><span>Ensure air conditioning is functioning properly before summer begins — schedule a maintenance check in spring</span></li>
          <li><TB /><span>Keep the home at 78 degrees or below during peak heat</span></li>
          <li><TB /><span>Provide consistent hydration reminders throughout the day — do not wait for your loved one to say they are thirsty</span></li>
          <li><TB /><span>Avoid outdoor activity during peak heat hours (10 AM to 4 PM)</span></li>
          <li><TB /><span>Dress in lightweight, loose-fitting, light-colored clothing</span></li>
          <li><TB /><span>Close blinds and curtains on sun-facing windows during the afternoon</span></li>
          <li><TB /><span>Check on seniors living alone at least twice daily during extreme heat</span></li>
        </ul>
        <h2>The Role of a Home Care Caregiver in Heat Safety</h2>
        <p>A Beyond Care caregiver present during the day provides a critical layer of protection during summer heat. They ensure consistent hydration, monitor for early signs of heat-related illness, confirm that the home environment remains cool, prepare appropriate meals, and communicate any concerns to the family before a situation becomes an emergency.</p>
        <p>For seniors who live alone, having a caregiver present during the hottest part of the day can be the difference between a safe summer and a preventable hospitalization.</p>
        <h2>Medications and Heat — Talk to the Doctor</h2>
        <p>Families should review their loved one&apos;s medication list with a physician before summer. Some medications need dosage adjustments during extreme heat, and others require extra precautions. A Beyond Care caregiver can help track these changes and ensure medication routines are followed correctly during the transition.</p>
        <h2>When to Call for Help</h2>
        <p>If a senior shows signs of confusion, stops sweating in the heat, has a body temperature above 103 degrees, or loses consciousness — call 911. Do not wait to see if they improve. Heat-related emergencies in seniors can escalate rapidly, and early intervention saves lives.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Is it safe for my elderly parent to go outside at all during a South Carolina summer?</p><p className="text-muted text-sm">A: Yes, with precautions. Early morning (before 9 AM) and evening (after 6 PM) are generally safe for brief outdoor activity. Stay in shaded areas, bring water, and return indoors at the first sign of fatigue or overheating.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My parent says they feel fine and do not need to drink more water. Should I be concerned?</p><p className="text-muted text-sm">A: Yes. Seniors often do not feel thirsty until they are already dehydrated. Consistent hydration reminders — not relying on the senior to self-regulate — are essential during summer months.</p></div>
      </>
    ),
  },

  "caregiver-respite-planning-summer-south-carolina": {
    title: "Summer Respite Care Planning for South Carolina Families",
    date: "April 2026",
    description: "Planning a family vacation this summer? Learn how respite care ensures your elderly loved one receives consistent, quality care while you take a well-deserved break.",
    category: "Respite Care",
    faq: [
      { q: "How far in advance should I arrange respite care for a summer vacation?", a: "At least two to four weeks in advance is ideal, especially during peak summer months when demand increases. Early planning allows time for a proper care assessment, caregiver matching, and an introduction visit so your loved one is comfortable before you leave." },
      { q: "Can Beyond Care provide 24-hour coverage while I am away?", a: "Yes. Beyond Care offers flexible scheduling that includes extended shifts, overnight care, and 24-hour coverage for families who need continuous support during a vacation or extended absence. The care plan is built around the client's existing routine." },
      { q: "What if my loved one has dementia — is respite care still an option?", a: "Absolutely. Respite care for clients with memory loss requires additional planning — consistent caregiver assignment, detailed routine documentation, and familiarity with the client's triggers and preferences. Beyond Care's nurse-led team develops dementia-specific respite plans that prioritize the client's safety and comfort." },
    ],
    body: (
      <>
        <p className="body-lg mb-4">Summer brings family vacations, reunions, and travel — and for families who provide daily care for an elderly loved one, it also brings a difficult question: what happens to Mom or Dad while we are away? The answer does not have to be guilt, cancellation, or scrambling for last-minute help. With proper planning, respite care ensures your loved one is safe, comfortable, and well-cared-for while you take the break your family needs.</p>
        <h2>Why Summer Respite Planning Matters</h2>
        <p>Family caregivers provide an extraordinary amount of daily support — and burnout is one of the most well-documented risks of sustained caregiving. Taking time away is not a luxury; it is a necessary part of sustaining the care relationship long-term. Summer offers a natural opportunity because of school schedules, family gatherings, and the psychological lift that comes with a real break.</p>
        <p>But time away only works if the family trusts the care arrangement. Planning ahead eliminates the uncertainty that turns a vacation into a source of anxiety.</p>
        <h2>Start Planning Early</h2>
        <p>The most important step in summer respite planning is starting early — ideally two to four weeks before your trip. This window allows time for a proper care assessment, caregiver selection and matching, an introduction visit so your loved one meets the caregiver before you leave, and documentation of routines, preferences, and emergency contacts.</p>
        <p>Demand for respite care increases during summer months. Families who plan ahead have significantly more flexibility in caregiver selection and scheduling.</p>
        <h2>Documenting the Routine</h2>
        <p>Continuity of routine is critical — especially for seniors with cognitive changes. Before you leave, document the daily routine in detail: wake-up time, meal preferences and schedule, medication times and dosages, preferred activities, bedtime routine, and any behavioral patterns the caregiver should be aware of.</p>
        <p>Beyond Care builds this documentation into the care plan so that the caregiver can maintain the client&apos;s normal rhythm as closely as possible.</p>
        <h2>Choosing the Right Level of Coverage</h2>
        <p>Respite care is not one-size-fits-all. Some families need a few hours of daily support while a nearby family member checks in. Others need full 24-hour coverage for an extended trip. Beyond Care offers flexible scheduling that includes daytime companion or personal care visits, extended shifts covering morning through evening, overnight care for clients who need nighttime support, and continuous 24-hour coverage for families traveling out of state or for extended periods.</p>
        <h2>The Introduction Visit</h2>
        <p>One of the most effective ways to reduce anxiety — for both you and your loved one — is scheduling an introduction visit before your trip. The caregiver comes to the home, meets the client, walks through the routine together, and establishes familiarity. This is especially important for clients with dementia or anxiety about new people in the home.</p>
        <h2>Staying Connected While Away</h2>
        <p>Beyond Care provides regular updates to families during respite care periods. You will know how your loved one is doing, what activities they engaged in, how meals and medications went, and whether any concerns have arisen. This communication allows you to relax knowing that you are informed — without needing to manage the care from a distance.</p>
        <h2>Respite Care Is Not Just for Vacations</h2>
        <p>While summer vacations are a common reason families explore respite care, the service is valuable anytime a primary caregiver needs time away — for a medical procedure, a work commitment, a family emergency, or simply to rest and recharge. The infrastructure you build for a summer respite plan can serve your family throughout the year.</p>
        <h2>Returning Home</h2>
        <p>After your trip, Beyond Care can provide a transition summary — how the client responded to the respite period, any changes observed, and recommendations for ongoing support. Many families discover during a respite period that additional regular care would benefit their loved one — and themselves.</p>
        <h2>Frequently Asked Questions</h2>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: Will my loved one be upset that I am leaving?</p><p className="text-muted text-sm">A: Some initial adjustment is normal, especially for seniors with cognitive changes. The introduction visit, maintaining routine, and a trusted caregiver all minimize this. Most clients settle into the respite routine quickly once familiarity is established.</p></div>
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: What if something goes wrong while I am away?</p><p className="text-muted text-sm">A: Beyond Care maintains emergency protocols and communicates with families immediately if a concern arises. Our nurse-led oversight means that changes in condition are identified and addressed — and you are contacted promptly with clear information.</p></div>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return {
    title: `${post.title} | Beyond Care`,
    description: post.description,
    alternates: { canonical: `${SITE_DOMAIN}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_DOMAIN}/blog/${slug}`,
      type: "article",
    },
  };
}

function buildArticleSchema(slug: string, post: { title: string; date: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${SITE_DOMAIN}/blog/${slug}`,
    datePublished: post.date,
    dateModified:  post.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_DOMAIN,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_DOMAIN,
      logo: { "@type": "ImageObject", url: `${SITE_DOMAIN}/images/beyond-care-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_DOMAIN}/blog/${slug}` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose-beyond p:first-child"],
    },
  };
}

function buildFaqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function buildBreadcrumbSchema(slug: string, title: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: SITE_DOMAIN },
      { "@type": "ListItem", position: 2, name: "Blog",  item: `${SITE_DOMAIN}/blog` },
      { "@type": "ListItem", position: 3, name: title,   item: `${SITE_DOMAIN}/blog/${slug}` },
    ],
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.category);
  const articleSchema    = buildArticleSchema(slug, post);
  const breadcrumbSchema = buildBreadcrumbSchema(slug, post.title);
  const faqSchema = post.faq && post.faq.length > 0 ? buildFaqSchema(post.faq) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6"
              style={{ color: "var(--teal-light)" }}
            >
              ← All Articles
            </Link>
            <span className="eyebrow mb-2" style={{ color: "var(--teal-light)" }}>
              {post.category}
            </span>
            <h1
              className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {post.title}
            </h1>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {post.date} · Beyond Care Editorial Team
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            {/* Main content */}
            <article className="prose-beyond">{post.body}</article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card" style={{ background: "var(--teal-pale)", border: "none" }}>
                <h3 className="h-sm mb-3">Ready to get started?</h3>
                <p className="text-sm text-muted mb-4">
                  Free, no-pressure consultation. We&apos;ll answer all your questions.
                </p>
                <Link
                  href="/contact"
                  className="block btn-coral text-center justify-center mb-3 w-full"
                >
                  Free Consultation
                </Link>
                <a
                  href="tel:8648412500"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-teal-brand"
                >
                  864-841-2500
                </a>
              </div>
              <div className="card">
                <h3 className="h-sm mb-3">Our Services</h3>
                <ul className="space-y-1.5">
                  {[
                    "Personal Care",
                    "Companion Care",
                    "Respite Care",
                    "Meal Preparation",
                    "Transportation",
                    "Medication Reminders",
                    "Light Housekeeping",
                    "Hospital Discharge",
                  ].map((s) => (
                    <li key={s}>
                      <Link
                        href="/services"
                        className="text-sm text-teal-brand hover:text-teal-deep font-medium"
                      >
                        {s} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-canvas">
          <div className="wrap">
            <h2 className="h-sm mb-6" style={{ color: "var(--teal-deep)" }}>Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="card"
                  style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
                >
                  <div className="eyebrow mb-2">{rp.category}</div>
                  <h3 className="h-sm text-ink mb-3" style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.1rem)", flex: 1 }}>
                    {rp.title}
                  </h3>
                  <span className="text-sm font-bold" style={{ color: "var(--teal-brand)" }}>
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="bg-canvas">
        <div className="wrap py-8">
          <Link href="/blog" className="link-cta-teal">
            ← Back to all articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
