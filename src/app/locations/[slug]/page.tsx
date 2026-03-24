import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { LOCATION_PAGES, OFFICES, PHONES } from "@/lib/constants"

type LocationData = {
  name: string
  description: string
  counties: string
  cities: string
  officeNote: string
}

const LOCATION_DATA: Record<string, LocationData> = {
  "honea-path": {
    name: "Honea Path",
    description:
      "Beyond Care provides trusted non-medical home care in Honea Path, SC and the surrounding Anderson County community. Our main office is located right here in Honea Path, making us a true neighbor to the families we serve.",
    counties: "Anderson County",
    cities: "Honea Path and surrounding communities including Williamston, Belton, and Iva",
    officeNote: "Our Honea Path office at 512A East Greer St is our main location.",
  },
  "williamston": {
    name: "Williamston",
    description:
      "Beyond Care serves families in Williamston, SC with personalized in-home care services. Our Williamston office at 103 Belton Dr makes us accessible and local to this community.",
    counties: "Anderson County",
    cities: "Williamston and surrounding Anderson County communities",
    officeNote: "Our Williamston office at 103 Belton Dr serves this area directly.",
  },
  "anderson-county": {
    name: "Anderson County",
    description:
      "Beyond Care provides comprehensive non-medical home care throughout Anderson County, SC. From Honea Path and Williamston to the city of Anderson, Belton, and Iva — we are here for families across the county.",
    counties: "Anderson County",
    cities: "Anderson, Honea Path, Williamston, Belton, Iva, Pendleton, Pelzer, and surrounding areas",
    officeNote: "We have two offices in Anderson County — Honea Path and Williamston.",
  },
  "greenville-county": {
    name: "Greenville County",
    description:
      "Beyond Care extends home care services into Greenville County, SC. Families in Greenville, Simpsonville, Mauldin, and Greer can access the same nurse-led, dependable care we are known for throughout the Upstate.",
    counties: "Greenville County",
    cities: "Greenville, Simpsonville, Mauldin, Greer, Taylors, and surrounding communities",
    officeNote: "We serve Greenville County from our offices in Honea Path and Williamston.",
  },
  "abbeville-county": {
    name: "Abbeville County",
    description:
      "Beyond Care provides in-home care services to families in Abbeville County, SC. Whether you are in the city of Abbeville, Donalds, or Due West, our team is here to help your loved one live safely at home.",
    counties: "Abbeville County",
    cities: "Abbeville, Donalds, Due West, Calhoun Falls, and surrounding communities",
    officeNote: "We serve Abbeville County from our offices in Honea Path and Williamston.",
  },
  "pickens-county": {
    name: "Pickens County",
    description:
      "Families in Pickens County can count on Beyond Care for personalized, nurse-led non-medical home care. We serve Easley, Pickens, Liberty, and Clemson with the same standards that have made us trusted throughout Upstate SC.",
    counties: "Pickens County",
    cities: "Easley, Pickens, Liberty, Clemson, Six Mile, and surrounding communities",
    officeNote: "We serve Pickens County from our offices in Honea Path and Williamston.",
  },
  "greenwood-county": {
    name: "Greenwood County",
    description:
      "Beyond Care provides in-home care support to families in Greenwood County, SC. From Greenwood to Ninety Six, our caregivers bring dependable, compassionate assistance directly to your loved one's home.",
    counties: "Greenwood County",
    cities: "Greenwood, Ninety Six, Ware Shoals, and surrounding communities",
    officeNote: "We serve Greenwood County from our offices in Honea Path and Williamston.",
  },
  "anderson": {
    name: "Anderson",
    description:
      "Beyond Care provides trusted non-medical home care in Anderson, SC — the heart of Anderson County. Our locally owned, nurse-led team serves families in the city of Anderson with personalized in-home support that helps seniors and adults live safely at home.",
    counties: "Anderson County",
    cities: "Anderson, SC and surrounding neighborhoods including North Anderson, Lakeside, and nearby communities",
    officeNote: "Our Honea Path office is just minutes from Anderson, SC — we know this community well.",
  },
  "belton": {
    name: "Belton",
    description:
      "Beyond Care serves families in Belton, SC with compassionate, nurse-led home care. Located in Anderson County, Belton families have relied on Beyond Care for personalized in-home support since 2013.",
    counties: "Anderson County",
    cities: "Belton and surrounding Anderson County communities including Williamston, Honea Path, and Iva",
    officeNote: "Our Williamston office at 103 Belton Dr serves the Belton community directly.",
  },
  "iva": {
    name: "Iva",
    description:
      "Beyond Care provides dependable non-medical home care for families in Iva, SC. Our locally owned team is rooted in Anderson County and brings nurse-led care directly to your loved one's home in Iva and surrounding areas.",
    counties: "Anderson County",
    cities: "Iva and surrounding Anderson County communities including Honea Path, Belton, and Starr",
    officeNote: "We serve Iva from our Honea Path office at 512A East Greer St.",
  },
  "greenville": {
    name: "Greenville",
    description:
      "Beyond Care extends nurse-led, locally owned home care services to families in Greenville, SC. Whether your loved one is in the heart of Greenville, a nearby neighborhood, or surrounding suburbs, our caregiver team brings dependable, compassionate support directly to the home.",
    counties: "Greenville County",
    cities: "Greenville, SC and surrounding areas including Taylors, Wade Hampton, Parker, and Berea",
    officeNote: "We serve Greenville from our offices in Honea Path and Williamston — reach us at (864) 841-2500.",
  },
  "simpsonville": {
    name: "Simpsonville",
    description:
      "Families in Simpsonville, SC can count on Beyond Care for personalized, nurse-led in-home care. Simpsonville is one of Greenville County's fastest-growing communities — and we are here to serve its seniors and families with the same standard of care we are known for throughout Upstate SC.",
    counties: "Greenville County",
    cities: "Simpsonville, SC and nearby communities including Fountain Inn, Mauldin, and Piedmont",
    officeNote: "We serve Simpsonville from our offices in Honea Path and Williamston.",
  },
  "mauldin": {
    name: "Mauldin",
    description:
      "Beyond Care provides trusted in-home care to families in Mauldin, SC. Our nurse-led team brings personalized, non-medical home care to Mauldin seniors and adults — helping them remain safely and comfortably at home.",
    counties: "Greenville County",
    cities: "Mauldin, SC and surrounding communities including Simpsonville, Greenville, and Fountain Inn",
    officeNote: "We serve Mauldin from our offices in Honea Path and Williamston.",
  },
  "greer": {
    name: "Greer",
    description:
      "Beyond Care serves families in Greer, SC with professional, nurse-led non-medical home care. Situated between Anderson and Greenville Counties, Greer families benefit from Beyond Care's deep roots in Upstate South Carolina and our commitment to individualized in-home support.",
    counties: "Greenville & Spartanburg Counties",
    cities: "Greer, SC and surrounding communities including Taylors, Duncan, and Lyman",
    officeNote: "We serve Greer from our offices in Honea Path and Williamston — call us at (864) 841-2500.",
  },
  "easley": {
    name: "Easley",
    description:
      "Beyond Care provides dependable, nurse-led in-home care for families in Easley, SC. As the largest city in Pickens County, Easley has a growing population of seniors and families who deserve the best in non-medical home care — and that is exactly what Beyond Care delivers.",
    counties: "Pickens County",
    cities: "Easley, SC and surrounding Pickens County communities including Powdersville, Pelzer, and Piedmont",
    officeNote: "We serve Easley from our offices in Honea Path and Williamston.",
  },
}

const VALID_SLUGS = LOCATION_PAGES.map(p => p.href.replace("/locations/", ""))

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const data = LOCATION_DATA[slug]
  if (!data) return {}
  return {
    title: `Home Care in ${data.name}, SC | Beyond Care`,
    description: `Beyond Care provides trusted non-medical home care in ${data.name}, ${data.counties}. Nurse-led, locally owned. Free consultation.`,
  }
}

export default async function LocationPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const data = LOCATION_DATA[slug]
  if (!data) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Home Care in {data.counties}</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Home Care in {data.name}, SC
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
            <div>
              <span className="eyebrow">Service Area</span>
              <h2 className="h-lg mt-2 mb-4">Serving {data.name} and Surrounding Communities</h2>
              <p className="body-lg text-muted mb-4" style={{ lineHeight: 1.8 }}>
                Beyond Care provides in-home care throughout {data.cities}. Our nurse-led team brings
                the same high standard of care to every client in this area.
              </p>
              <p className="body-lg text-muted mb-4" style={{ lineHeight: 1.8 }}>
                {data.officeNote} Call us to confirm coverage in your specific area — we are happy to help.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Services available in this area include personal care, companion care, respite care, meal
                preparation, light housekeeping, medication reminders, transportation, and more.
              </p>
            </div>
            <div>
              <span className="eyebrow">Our Offices</span>
              <h2 className="h-lg mt-2 mb-4">Reach Us Directly</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  {
                    name: OFFICES.honeaPath.name + " (Main)",
                    address: OFFICES.honeaPath.full,
                    phone: "(864) 841-2500",
                    phoneHref: OFFICES.honeaPath.phoneHref,
                    href: "/locations/honea-path",
                  },
                  {
                    name: OFFICES.williamston.name,
                    address: OFFICES.williamston.full,
                    phone: "(864) 369-0222",
                    phoneHref: OFFICES.williamston.phoneHref,
                    href: "/locations/williamston",
                  },
                ].map(o => (
                  <div key={o.name} className="card">
                    <h3 className="h-sm text-teal-brand mb-2">{o.name}</h3>
                    <address style={{ fontStyle: "normal", marginBottom: 10, fontSize: ".875rem", color: "var(--muted)" }}>
                      {o.address}
                    </address>
                    <a href={o.phoneHref} className="text-teal-brand font-bold" style={{ display: "block", marginBottom: 8 }}>{o.phone}</a>
                    <Link href={o.href} className="link-cta-teal" style={{ fontSize: ".875rem" }}>View Office Details</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="section bg-canvas">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Locally Owned</span>
            <h2 className="h-lg mt-2 mb-4">We Know This Community</h2>
            <p className="body-lg text-muted mb-6">
              Beyond Care is not a national franchise — we are a locally owned, nurse-led company rooted in
              Upstate South Carolina. We know {data.name}, we know {data.counties}, and we are personally
              invested in the families we serve here.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule-consultation" className="btn-coral">Request a Free Consultation</Link>
              <a href={PHONES.primaryHref} className="btn-outline">(864) 841-2500</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
