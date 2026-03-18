import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy | Beyond Care Home Care Services",
  description:
    "Privacy policy for Beyond Care Home Care Services. How we collect, use, and protect information gathered through our website.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-sm bg-teal-deep">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>Legal</span>
            <h1 className="text-white font-extrabold mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75 }}>
              Last updated: March 2025
            </p>
          </div>
        </div>
      </section>

      {/* Policy text */}
      <section className="section bg-white">
        <div className="wrap">
          <div style={{ maxWidth: "65ch", margin: "0 auto", lineHeight: 1.8, color: "var(--ink)" }}>

            <h2 className="h-md mt-0 mb-4">Introduction</h2>
            <p className="text-muted mb-6">
              Beyond Care Home Care Services (&ldquo;Beyond Care,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard information when you visit our website at{" "}
              <a href={SITE.domain} className="text-teal-brand">{SITE.domain}</a>{" "}
              or contact us by phone or email. Please read this policy carefully.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Information We Collect</h2>
            <p className="text-muted mb-4">We may collect the following types of information:</p>
            <ul className="text-muted mb-6" style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Contact information</strong> — name, phone number, email address, and mailing address provided when you fill out a form or contact us directly.</li>
              <li><strong>Care-related information</strong> — details about a loved one&apos;s care needs shared during a consultation request or intake process.</li>
              <li><strong>Usage data</strong> — standard web server logs including IP address, browser type, pages visited, and referring URL. This data is anonymous and used for site performance analysis.</li>
              <li><strong>Communication records</strong> — copies of messages sent through our website contact forms.</li>
            </ul>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">How We Use Your Information</h2>
            <p className="text-muted mb-4">We use collected information to:</p>
            <ul className="text-muted mb-6" style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Respond to consultation requests and inquiries</li>
              <li>Provide, coordinate, and improve our home care services</li>
              <li>Communicate with clients and families about care</li>
              <li>Process employment applications and contact job applicants</li>
              <li>Analyze website traffic and improve user experience</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="text-muted mb-6">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted mb-6">
              Our website may use cookies or similar technologies to improve your browsing experience and
              analyze site traffic. These technologies do not collect personally identifiable information.
              You may disable cookies in your browser settings, though some site features may be affected.
              We may use third-party analytics services (such as Google Analytics) that collect anonymized
              usage data governed by their own privacy policies.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Information Sharing and Disclosure</h2>
            <p className="text-muted mb-4">We may share your information only in the following circumstances:</p>
            <ul className="text-muted mb-6" style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Service providers</strong> — third-party vendors who assist with website operation, form processing, or communications (e.g., form submission processors). These parties are contractually bound to keep information confidential.</li>
              <li><strong>Legal requirements</strong> — when required by law, court order, or governmental authority.</li>
              <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, with appropriate notice to affected individuals.</li>
              <li><strong>With your consent</strong> — in any other circumstances, only with your explicit consent.</li>
            </ul>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Data Security</h2>
            <p className="text-muted mb-6">
              We implement reasonable administrative, technical, and physical safeguards to protect your
              information from unauthorized access, disclosure, alteration, or destruction. However, no
              internet transmission or electronic storage is completely secure. We encourage you to use
              caution when sharing sensitive information online.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Your Rights and Choices</h2>
            <p className="text-muted mb-4">You have the right to:</p>
            <ul className="text-muted mb-6" style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Request access to personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information, subject to legal requirements</li>
              <li>Opt out of any future marketing communications</li>
            </ul>
            <p className="text-muted mb-6">
              To exercise any of these rights, contact us using the information below.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Children&apos;s Privacy</h2>
            <p className="text-muted mb-6">
              Our website is not directed to children under the age of 13. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected information
              from a child, please contact us immediately.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Links to Third-Party Sites</h2>
            <p className="text-muted mb-6">
              Our website may contain links to external websites (such as Facebook or Google). We are not
              responsible for the privacy practices of those sites and encourage you to review their
              privacy policies before sharing information.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Changes to This Policy</h2>
            <p className="text-muted mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated &ldquo;Last updated&rdquo; date. Continued use of our website after changes are posted
              constitutes your acceptance of the revised policy.
            </p>

            <div className="rule mb-8" />

            <h2 className="h-md mb-4">Contact Us</h2>
            <p className="text-muted mb-2">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <address style={{ fontStyle: "normal" }} className="text-muted">
              <strong className="text-ink">Beyond Care Home Care Services</strong><br />
              512A East Greer St, Honea Path, SC 29654<br />
              <a href={`mailto:${SITE.email}`} className="text-teal-brand">{SITE.email}</a><br />
              <a href="tel:8648412500" className="text-teal-brand">(864) 841-2500</a>
            </address>

          </div>
        </div>
      </section>
    </>
  )
}
