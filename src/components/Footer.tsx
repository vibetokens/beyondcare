import Image from "next/image"

const SERVICES = [
  { label: "Personal Care", href: "/services/personal-care" },
  { label: "Companion Care", href: "/services/companion-care" },
  { label: "Respite Care", href: "/services/respite-care" },
  { label: "Meal Preparation", href: "/services/meal-preparation" },
  { label: "Light Housekeeping", href: "/services/light-housekeeping" },
  { label: "Transportation", href: "/services/transportation-assistance" },
  { label: "Medication Reminders", href: "/services/medication-reminders" },
  { label: "Hospital Discharge", href: "/services/hospital-discharge-support" },
]

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Beyond Care", href: "/why-choose-beyond-care" },
  { label: "Caregiver Standards", href: "/caregiver-standards" },
  { label: "How Care Works", href: "/how-care-works" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

const LOCATIONS = [
  { label: "Locations Overview", href: "/locations" },
  { label: "Honea Path, SC", href: "/locations/honea-path" },
  { label: "Williamston, SC", href: "/locations/williamston" },
  { label: "Anderson County", href: "/locations/anderson-county" },
  { label: "Greenville County", href: "/locations/greenville-county" },
  { label: "Abbeville County", href: "/locations/abbeville-county" },
]

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Beyond Care Home Care Services" width={160} height={44} style={{ height: 44, width: "auto" }} />
            <p>
              Compassionate, nurse-led non-medical home care serving families across Upstate South Carolina.
              Locally owned. Bonded &amp; insured.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="footer-contact-item">
                <span>📞</span>
                <div>
                  <a href="tel:8648412500" style={{ color: "rgba(255,255,255,.8)", display: "block" }}>(864) 841-2500</a>
                  <a href="tel:8643690222" style={{ color: "rgba(255,255,255,.5)", fontSize: ".8125rem", display: "block" }}>(864) 369-0222</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <a href="mailto:service@beyondcarehc.com" style={{ color: "rgba(255,255,255,.7)" }}>service@beyondcarehc.com</a>
              </div>
              <div className="footer-contact-item">
                <span>🕐</span>
                <span>Mon–Fri 8:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            {SERVICES.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            {COMPANY.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          <div className="footer-col">
            <h5>Locations</h5>
            {LOCATIONS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Beyond Care Home Care Services. All rights reserved.</p>
          <p>Serving Anderson, Greenville, Abbeville, Pickens &amp; Greenwood counties, SC.</p>
        </div>
      </div>
    </footer>
  )
}
