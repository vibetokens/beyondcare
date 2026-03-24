import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

const TB = () => <span style={{ color: "var(--teal-brand)" }}>→</span>;

const POSTS: Record<string, {
  title: string;
  date: string;
  description: string;
  category: string;
  body: React.ReactNode;
}> = {
  "home-care-seniors-independence-south-carolina": {
    title: "How Home Care Helps Seniors Stay Independent in South Carolina",
    date: "March 2026",
    description: "In-home care supports independence for South Carolina seniors — learn how non-medical home care helps aging adults stay safe, comfortable, and in control at home.",
    category: "Senior Independence",
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
        <div className="bg-canvas rounded-xl p-5 mb-4"><p className="font-bold text-ink mb-2">Q: My loved one doesn't want a caregiver. What do I do?</p><p className="text-muted text-sm">A: This is a common challenge. We recommend starting with short, low-key visits focused on companionship rather than personal care — allowing the client to build trust with the caregiver over time. Contact us to discuss strategies.</p></div>
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
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
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
