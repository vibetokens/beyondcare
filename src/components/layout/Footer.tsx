import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { SITE, OFFICES, PHONES, HOURS, AWARDS, SERVICES, MEGA_NAV } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-deep" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content={SITE.name} />
      <meta itemProp="url"  content={SITE.domain} />

      {/* ── CTA Band ── */}
      <div className="border-b border-white/10">
        <div className="wrap py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-teal-light mb-3">Get started today</p>
              <h2 className="text-white font-extrabold leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                Schedule a free<br />in-home consultation.
              </h2>
              <p className="text-white/65 leading-relaxed max-w-md"
                style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)" }}>
                The first conversation is always free. We listen, answer your questions,
                and help you understand what care could look like — no pressure.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact"
                className="btn-coral text-base px-8 py-4 w-full lg:w-auto justify-center">
                Request a Free Consultation
              </Link>
              <div className="flex flex-col xs:flex-row gap-3 w-full lg:w-auto">
                {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
                  <a key={o.name} href={`tel:${o.phone.replace(/-/g,"")}`}
                    className="flex items-center gap-2 border border-white/20 rounded-full px-5 py-3 text-sm font-semibold text-white hover:border-white/50 transition-colors">
                    <Phone size={14} className="text-teal-light flex-shrink-0" />
                    <span>{o.city}: {o.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="wrap py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/beyond-care-logo-white.png"
                alt={SITE.name}
                width={170}
                height={56}
                className="h-11 w-auto mb-5"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
              Locally owned, nurse-led non-medical home care in Upstate South Carolina.
              Serving seniors and adults with compassionate, dependable in-home support.
            </p>
            {/* Awards */}
            <div className="space-y-1.5 mb-5">
              {AWARDS.map(a => (
                <p key={a.label} className="text-xs text-white/35 font-medium">
                  {a.label} — {a.org}
                </p>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-3">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer"
                aria-label="Beyond Care on Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 text-white/60 hover:text-white transition-all">
                <Facebook size={15} />
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"
                aria-label="Beyond Care on Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 text-white/60 hover:text-white transition-all">
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="footer-heading">Services</p>
            <ul className="space-y-0.5">
              {SERVICES.slice(0,8).map(s => (
                <li key={s.slug}>
                  <Link href={s.slug} className="footer-link">{s.title}</Link>
                </li>
              ))}
              <li><Link href="/services" className="footer-link text-teal-light font-semibold">All Services →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="footer-heading">Company</p>
            <ul className="space-y-0.5">
              {[
                ["About Us",           "/about"                    ],
                ["Leadership",         "/about/leadership"         ],
                ["Why Choose Us",      "/why-choose-beyond-care"   ],
                ["Caregiver Standards","/caregiver-standards"      ],
                ["How Care Works",     "/how-care-works"           ],
                ["Payment Options",    "/payment-options"          ],
                ["Locations",          "/locations"                ],
                ["Careers",            "/careers"                  ],
                ["Resources",          "/resources"                ],
                ["Blog",               "/blog"                     ],
                ["FAQ",                "/faq"                      ],
                ["Contact",            "/contact"                  ],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Contact</p>
            {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
              <div key={o.name} className="mb-5"
                itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className="text-sm font-bold text-white/80 mb-1.5">{o.name}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(o.full)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-white/55 hover:text-white transition-colors mb-1">
                  <MapPin size={12} className="mt-0.5 flex-shrink-0 text-teal-light" />
                  <span>
                    <span itemProp="streetAddress">{o.address}</span>,{" "}
                    <span itemProp="addressLocality">{o.city}</span>,{" "}
                    <span itemProp="addressRegion">SC</span>{" "}
                    <span itemProp="postalCode">{o.zip}</span>
                  </span>
                </a>
                <a href={`tel:${o.phone.replace(/-/g,"")}`}
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
                  itemProp="telephone">
                  <Phone size={12} className="flex-shrink-0 text-teal-light" />
                  {o.phone}
                </a>
              </div>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-start gap-2 text-xs text-white/40">
                <Clock size={11} className="mt-0.5 flex-shrink-0" />
                <span>{HOURS.weekdays}, {HOURS.hours}</span>
              </div>
              <a href={`mailto:${SITE.serviceEmail}`}
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                itemProp="email">
                <Mail size={11} className="flex-shrink-0" />
                {SITE.serviceEmail}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between py-4 gap-2">
          <p className="text-xs text-white/25">
            © {year} {SITE.name}. All rights reserved. Beyond Care, LLC.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-white/25">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml"    className="hover:text-white/60 transition-colors">Sitemap</Link>
            <a href="/llms.txt"          className="hover:text-white/60 transition-colors">AI / LLMs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
