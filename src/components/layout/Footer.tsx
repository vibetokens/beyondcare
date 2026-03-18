import Image from "next/image"

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Beyond Care Home Care Services" width={160} height={46} style={{ height: 46, width: "auto" }} />
            <p>Locally owned, nurse-led non-medical home care in Upstate South Carolina. Serving Anderson, Greenville, Abbeville, Pickens, and Greenwood counties.</p>
            <div className="footer-contact">
              <a href="tel:8648412500">(864) 841-2500 — Honea Path</a>
              <a href="tel:8643690222">(864) 369-0222 — Williamston</a>
              <a href="mailto:service@beyondcarehc.com">service@beyondcarehc.com</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            {[["Personal Care","/services/personal-care"],["Companion Care","/services/companion-care"],["Respite Care","/services/respite-care"],["Transportation","/services/transportation-assistance"],["24-Hour Care","/services"],["Veterans Care","/payment-options"]].map(([l,h])=><a key={h} href={h}>{l}</a>)}
          </div>

          <div className="footer-col">
            <h5>Locations</h5>
            {[["Honea Path","/locations/honea-path"],["Williamston","/locations/williamston"],["Anderson County","/locations/anderson-county"],["Greenville County","/locations/greenville-county"],["Abbeville County","/locations/abbeville-county"],["All Locations","/locations"]].map(([l,h])=><a key={h} href={h}>{l}</a>)}
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            {[["About Us","/about"],["Why Beyond Care","/why-choose-beyond-care"],["Caregiver Standards","/caregiver-standards"],["Payment Options","/payment-options"],["Careers","/careers"],["Contact","/contact"]].map(([l,h])=><a key={h} href={h}>{l}</a>)}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Beyond Care, LLC — beyondcarehc.com</p>
          <p>Mon–Fri 8:00 AM – 4:00 PM · After-hours urgent calls forwarded to on-call staff</p>
        </div>
      </div>
    </footer>
  )
}
