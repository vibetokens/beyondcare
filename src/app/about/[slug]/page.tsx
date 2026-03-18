import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { OWNER, AWARDS, OFFICES } from "@/lib/constants"

const VALID_SLUGS = ["leadership", "awards"]

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  if (slug === "leadership") return {
    title: `Meet ${OWNER.name}, ${OWNER.credentials} | Beyond Care Leadership`,
    description: `${OWNER.name} is the owner and founder of Beyond Care Home Care Services — a Registered Nurse with over ${OWNER.yearsNursing} years of nursing experience serving Upstate South Carolina.`,
  }
  if (slug === "awards") return {
    title: "Awards & Recognition | Beyond Care Home Care Services",
    description: "Beyond Care has been recognized by Best of Home Care for Leader in Experience, Top 100 in Experience, and Provider of Choice. Serving Upstate South Carolina.",
  }
  return {}
}

export default async function AboutSlugPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  if (!VALID_SLUGS.includes(slug)) notFound()

  // ─── Leadership ───────────────────────────────────────────────────────────
  if (slug === "leadership") {
    return (
      <>
        <section className="section-sm bg-teal-deep">
          <div className="wrap">
            <div className="max-w-2xl">
              <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Our Leadership</span>
              <h1 className="text-white font-extrabold mt-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
                Meet {OWNER.name}, {OWNER.credentials}
              </h1>
              <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
                {OWNER.title} — with over {OWNER.yearsNursing} years of nursing experience and a deep
                commitment to the families of Upstate South Carolina.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="wrap">
            <div className="grid-2" style={{ gap: 64, alignItems: "start" }}>

              {/* Bio */}
              <div>
                <span className="eyebrow">Background</span>
                <h2 className="h-lg mt-2 mb-5">A Nurse Who Saw a Better Way</h2>
                <p className="body-lg text-muted mb-5" style={{ lineHeight: 1.85 }}>
                  {OWNER.name} founded Beyond Care Home Care Services out of firsthand experience with the
                  gaps in non-medical home care in South Carolina. As a Registered Nurse with over{" "}
                  {OWNER.yearsNursing} years of clinical experience, she had seen families struggle to find
                  home care that was truly dependable, professionally managed, and compassionately delivered.
                </p>
                <p className="body-lg text-muted mb-5" style={{ lineHeight: 1.85 }}>
                  Her solution was to build it herself — a company where every caregiver is a vetted,
                  trained employee; where clinical oversight is built into operations from the top; and where
                  families in the Upstate region could trust that someone with real healthcare experience was
                  accountable for the quality of care their loved ones received.
                </p>
                <p className="body-lg text-muted mb-5" style={{ lineHeight: 1.85 }}>
                  Today, {OWNER.name} remains actively involved in the daily operations of Beyond Care —
                  conducting home visits, overseeing caregiver performance, reviewing care plans, and
                  maintaining direct relationships with the families the company serves. She is not a remote
                  executive. She is present, engaged, and personally committed to the standard she built
                  this company around.
                </p>
                <p className="body-lg text-muted" style={{ lineHeight: 1.85, fontStyle: "italic" }}>
                  &ldquo;The families we serve deserve better than what most home care companies offer.
                  That belief is why Beyond Care exists — and why we hold ourselves to the standards we do.&rdquo;
                </p>
                <p className="text-muted mt-3" style={{ fontSize: ".875rem" }}>
                  — {OWNER.name}, {OWNER.credentials}
                </p>
              </div>

              {/* Credentials box */}
              <div>
                <div className="bg-navy" style={{ borderRadius: 12, padding: 36 }}>
                  <h3 className="h-sm text-white mb-6">Credentials &amp; Background</h3>
                  {[
                    { label: "Credentials", value: OWNER.credentials },
                    { label: "Title", value: OWNER.title },
                    { label: "Years in Nursing", value: `${OWNER.yearsNursing} years` },
                    { label: "Company Founded", value: "2013" },
                    { label: "Offices", value: "Honea Path &amp; Williamston, SC" },
                  ].map(item => (
                    <div key={item.label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                      <div style={{ fontSize: ".75rem", fontWeight: 700, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>
                        {item.label}
                      </div>
                      <div className="text-teal-light" style={{ fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  <Link href="/caregiver-standards" className="btn-teal" style={{ textAlign: "center" }}>
                    Our Caregiver Standards
                  </Link>
                  <Link href="/why-choose-beyond-care" className="btn-outline" style={{ textAlign: "center" }}>
                    Why Choose Beyond Care
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section bg-teal-pale">
          <div className="wrap">
            <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow">Connect with Our Team</span>
              <h2 className="h-lg mt-2 mb-4">Ready to Talk?</h2>
              <p className="body-lg text-muted mb-6">
                Request a free consultation and meet the team that will be caring for your loved one.
                No pressure, no obligation.
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

  // ─── Awards ───────────────────────────────────────────────────────────────
  return (
    <>
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Recognition</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Awards &amp; Recognition
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Beyond Care has been recognized by the home care industry&apos;s most respected third-party
              benchmarking organization for consistently exceptional client satisfaction and outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Best of Home Care</span>
            <h2 className="h-lg mt-2">Recognized for Excellence</h2>
            <p className="body-lg text-muted mt-3 mb-0" style={{ maxWidth: 640, margin: "12px auto 0" }}>
              Best of Home Care awards are given by Home Care Pulse — an independent, third-party organization
              that surveys home care clients and caregivers to benchmark quality. These awards are earned through
              client satisfaction data, not self-reported metrics.
            </p>
          </div>

          <div className="grid-3" style={{ gap: 24, maxWidth: 900, margin: "0 auto" }}>
            {AWARDS.map(a => (
              <div key={a.label} className="card text-center">
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>&#9733;</div>
                <h3 className="h-sm text-teal-brand mb-2">{a.label}</h3>
                <p className="text-muted" style={{ fontSize: ".875rem" }}>{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-canvas">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <span className="eyebrow">What These Awards Mean</span>
            <h2 className="h-lg mt-2 mb-6">Earned Through Client Feedback</h2>
            {[
              {
                heading: "Leader in Experience",
                body: "The Leader in Experience award recognizes home care agencies that consistently deliver an exceptional client experience as measured by independent client satisfaction surveys. Agencies must meet or exceed established benchmarks across multiple dimensions of care quality.",
              },
              {
                heading: "Top 100 in Experience",
                body: "Top 100 in Experience distinguishes the top 100 home care agencies across North America for client-reported satisfaction. Being included in this group places Beyond Care among the highest-performing agencies in the country by this measure.",
              },
              {
                heading: "Provider of Choice",
                body: "The Provider of Choice designation recognizes agencies that score highest in client-reported satisfaction on independent surveys. It reflects that the families and individuals who receive Beyond Care services rate their experience consistently and highly.",
              },
            ].map(s => (
              <div key={s.heading} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: "1px solid var(--rule)" }}>
                <h3 className="h-md text-teal-brand mb-3">{s.heading}</h3>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}

            <div style={{ background: "var(--teal-pale)", borderRadius: 10, padding: 28 }}>
              <h3 className="h-sm text-teal-brand mb-3">What This Means for Your Family</h3>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                These awards are not self-reported. They reflect what real clients and caregivers have said
                about their experience with Beyond Care through independent third-party surveys. When you
                choose Beyond Care, you are choosing a company that has demonstrated, measurable satisfaction
                from the families we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-teal-pale">
        <div className="wrap text-center">
          <h2 className="h-lg mb-4">Experience the Difference Yourself</h2>
          <p className="body-lg text-muted mb-6">
            Request a free, no-obligation consultation and see why families across Upstate SC choose Beyond Care.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
            <Link href="/about" className="btn-outline">About Beyond Care</Link>
          </div>
        </div>
      </section>
    </>
  )
}
