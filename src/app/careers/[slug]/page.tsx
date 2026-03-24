import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PHONES } from "@/lib/constants"
import CareersApplyForm from "@/components/CareersApplyForm"

const VALID_SLUGS = ["caregiver-jobs", "benefits-training", "apply"]

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  if (slug === "caregiver-jobs") return {
    title: "Caregiver Jobs in South Carolina | Beyond Care",
    description: "Open caregiver positions at Beyond Care Home Care Services in Upstate South Carolina. Competitive pay, weekly pay, flexible scheduling.",
  }
  if (slug === "benefits-training") return {
    title: "Caregiver Benefits & Training | Beyond Care",
    description: "Beyond Care offers competitive pay, weekly pay, health insurance, paid training, and flexible scheduling for caregivers in Upstate South Carolina.",
  }
  if (slug === "apply") return {
    title: "Apply Now | Beyond Care Home Care Services",
    description: "Start your caregiver application with Beyond Care Home Care Services in Upstate South Carolina.",
  }
  return {}
}


export default async function CareerSlugPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  if (!VALID_SLUGS.includes(slug)) notFound()

  // ─── Caregiver Jobs ───────────────────────────────────────────────────────
  if (slug === "caregiver-jobs") {
    return (
      <>
        <section className="section-sm bg-teal-deep">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Join Our Team</span>
              <h1 className="text-white font-extrabold mt-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
                Caregiver Jobs in Upstate South Carolina
              </h1>
              <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
                Beyond Care is hiring compassionate, dependable caregivers to serve families throughout Upstate SC.
                Competitive pay, weekly pay, flexible scheduling, and work that genuinely matters.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
              <div>
                <span className="eyebrow">Open Positions</span>
                <h2 className="h-lg mt-2 mb-6">We Are Currently Hiring</h2>
                {[
                  {
                    title: "Home Care Aide",
                    type: "Full Time / Part Time",
                    desc: "Provide personal care, companion care, meal preparation, light housekeeping, and other daily living support to clients in their homes throughout Anderson, Greenville, and surrounding counties.",
                    requirements: ["High school diploma or equivalent", "Valid SC driver's license", "Reliable transportation", "Compassionate, reliable, and professional attitude"],
                  },
                  {
                    title: "Companion Caregiver",
                    type: "Part Time",
                    desc: "Build meaningful relationships with seniors and adults who benefit from consistent, caring company. Includes conversation, light activities, errands, and monitoring.",
                    requirements: ["Friendly, patient, and dependable personality", "Valid SC driver's license preferred", "Comfort building relationships with older adults", "Reliable transportation"],
                  },
                  {
                    title: "Overnight Caregiver",
                    type: "Full Time",
                    desc: "Provide nighttime monitoring, personal care, and safety support for clients with higher-level needs. Overnight shifts available.",
                    requirements: ["Experience with overnight care preferred", "Strong reliability and communication skills", "Comfort with personal care and safety monitoring"],
                  },
                ].map(p => (
                  <div key={p.title} className="card mb-5">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                      <h3 className="h-sm text-ink">{p.title}</h3>
                      <span className="eyebrow" style={{ marginBottom: 0 }}>{p.type}</span>
                    </div>
                    <p className="text-muted mb-4" style={{ lineHeight: 1.75 }}>{p.desc}</p>
                    <h4 className="text-ink" style={{ fontSize: ".875rem", fontWeight: 700, marginBottom: 8 }}>Requirements:</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {p.requirements.map(r => (
                        <li key={r} className="check-item">
                          <span className="check-dot" />
                          <span className="text-muted" style={{ fontSize: ".875rem" }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                <div className="bg-teal-pale" style={{ borderRadius: 12, padding: 32, marginBottom: 24 }}>
                  <h2 className="h-md text-teal-brand mb-4">What We Offer</h2>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {["Competitive wages", "Weekly pay", "Health insurance (available upon hire)", "Paid training and orientation", "Flexible scheduling", "Meaningful, rewarding work"].map(b => (
                      <li key={b} className="check-item">
                        <span className="check-dot" />
                        <span className="text-ink">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card text-center">
                  <h3 className="h-sm text-ink mb-3">Ready to Apply?</h3>
                  <p className="text-muted mb-4">Apply through our online portal or call our careers line.</p>
                  <a href="https://2920.axiscare.com" target="_blank" rel="noopener noreferrer" className="btn-coral" style={{ display: "block", textAlign: "center", marginBottom: 12 }}>Apply Online</a>
                  <a href={PHONES.careersHref} className="btn-outline" style={{ display: "block", textAlign: "center" }}>{PHONES.careers}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  // ─── Benefits & Training ──────────────────────────────────────────────────
  if (slug === "benefits-training") {
    return (
      <>
        <section className="section-sm bg-teal-deep">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Benefits &amp; Training</span>
              <h1 className="text-white font-extrabold mt-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
                Real Benefits. Real Training.
              </h1>
              <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
                Beyond Care invests in the people who make our care possible. Here is what you can expect
                when you join our team.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="wrap">
            <div className="text-center mb-10">
              <span className="eyebrow">What We Offer</span>
              <h2 className="h-lg mt-2">Caregiver Benefits at Beyond Care</h2>
            </div>
            <div className="grid-2" style={{ gap: 24, marginBottom: 64 }}>
              {[
                {
                  title: "Competitive Pay",
                  body: "We offer competitive wages that reflect the real value of caregiving work. We believe caregivers deserve fair compensation for the important work they do every day.",
                },
                {
                  title: "Weekly Pay",
                  body: "Payday is every week — no waiting two weeks or more. We know your time and effort are valuable and want you to have access to your earnings promptly.",
                },
                {
                  title: "Health Insurance",
                  body: "Health insurance benefits are available to all employees upon hire — not just full-time staff. Taking care of our team's health is as important to us as taking care of our clients.",
                },
                {
                  title: "401(k) Retirement",
                  body: "We offer 401(k) retirement savings options for eligible employees, helping you plan for your financial future while you build a meaningful career.",
                },
                {
                  title: "Paid Training",
                  body: "Every new caregiver goes through a paid orientation and skills training program. You will never be sent into a client's home without proper preparation.",
                },
                {
                  title: "Flexible Scheduling",
                  body: "We work with your availability to create a schedule that fits your life. Full-time and part-time positions are available. Tell us what works for you.",
                },
              ].map(b => (
                <div key={b.title} className="card">
                  <h3 className="h-sm text-teal-brand mb-2">{b.title}</h3>
                  <p className="text-muted" style={{ lineHeight: 1.75 }}>{b.body}</p>
                </div>
              ))}
            </div>

            <div className="rule mb-12" />

            <div className="text-center mb-10">
              <span className="eyebrow">Our Training Program</span>
              <h2 className="h-lg mt-2">How We Prepare Our Caregivers</h2>
            </div>
            <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                { title: "Paid Orientation", body: "All new hires complete a comprehensive paid orientation that covers Beyond Care's care protocols, client interaction expectations, documentation procedures, and safety practices." },
                { title: "CPR Certification", body: "Every Beyond Care caregiver holds CPR certification, completed through required training. This certification is kept current throughout employment." },
                { title: "In-Service Training", body: "Caregivers complete ongoing in-service training hours throughout the year. Topics include personal care skills, communication, emergency response, and client-specific care needs." },
                { title: "Skills Assessments", body: "Regular skills assessments ensure that every caregiver maintains a high standard of care. Performance is monitored and supported through structured evaluations." },
              ].map((t, idx) => (
                <div key={t.title} style={{
                  display: "flex", gap: 24, alignItems: "flex-start",
                  paddingBottom: idx < 3 ? 32 : 0,
                  borderBottom: idx < 3 ? "1px solid var(--rule)" : "none",
                }}>
                  <div style={{
                    flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                    background: "var(--teal-deep)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "1rem",
                  }}>{idx + 1}</div>
                  <div style={{ paddingTop: 6 }}>
                    <h3 className="h-sm text-ink mb-2">{t.title}</h3>
                    <p className="text-muted" style={{ lineHeight: 1.75 }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-teal-pale">
          <div className="wrap text-center">
            <h2 className="h-lg mb-4">Join a Team That Values You</h2>
            <p className="body-lg text-muted mb-6">
              Apply today and start building a rewarding career with Beyond Care.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/careers/apply" className="btn-coral">Apply Now</Link>
              <a href={PHONES.careersHref} className="btn-outline">{PHONES.careers}</a>
            </div>
          </div>
        </section>
      </>
    )
  }

  // ─── Apply ────────────────────────────────────────────────────────────────
  return (
    <>
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Apply Now</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Start Your Application
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Apply online through our applicant portal for the fastest response — or fill out the form below
              and we will reach out promptly.
            </p>
            <div className="mt-6">
              <a
                href="https://2920.axiscare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base transition-all"
                style={{ background: "#fff", color: "#00343e" }}
              >
                Apply Online — Applicant Portal
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>

            {/* Application form */}
            <div>
              <h2 className="h-md mb-6">Caregiver Application</h2>
              <CareersApplyForm />
            </div>

            {/* Side info */}
            <div>
              <div className="bg-teal-pale" style={{ borderRadius: 12, padding: 32, marginBottom: 24 }}>
                <h2 className="h-md text-teal-brand mb-4">Apply Online</h2>
                <p className="text-muted mb-4">
                  Use our applicant portal for the fastest response and automatic interview scheduling.
                </p>
                <a
                  href="https://2920.axiscare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal"
                  style={{ display: "block", textAlign: "center", marginBottom: 16 }}
                >
                  Open Applicant Portal
                </a>
                <p className="text-muted" style={{ fontSize: ".875rem", marginBottom: 8 }}>Or call our careers line:</p>
                <a href={PHONES.careersHref} className="btn-outline" style={{ display: "block", textAlign: "center" }}>{PHONES.careers}</a>
              </div>
              <div className="card">
                <h3 className="h-sm text-ink mb-3">What Happens Next</h3>
                <ol style={{ paddingLeft: 20, color: "var(--muted)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>We review your application and contact you within 1–2 business days</li>
                  <li>A brief phone conversation to learn more about you</li>
                  <li>An in-person interview at one of our offices</li>
                  <li>Background check and reference verification</li>
                  <li>Paid orientation and training before you start</li>
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
