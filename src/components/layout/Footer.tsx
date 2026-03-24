import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { SITE, OFFICES, PHONES, HOURS, AWARDS, SERVICES } from "@/lib/constants";

const RECENT_POSTS = [
  { title: "How Home Care Helps Seniors Stay Independent", href: "/blog/home-care-seniors-independence-south-carolina" },
  { title: "7 Signs Your Parent May Need Help at Home",    href: "/blog/signs-parent-needs-help-at-home" },
  { title: "Home Care vs Home Health — What Families Should Know", href: "/blog/home-care-vs-home-health-families" },
  { title: "Coming Home From the Hospital — Why In-Home Support Matters", href: "/blog/in-home-support-after-hospital-stay" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content={SITE.name} />
      <meta itemProp="url"  content={SITE.domain} />

      {/* ── CTA Band ── */}
      <div className="relative overflow-hidden" style={{ background: "var(--teal-mid)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 100% at 80% 50%, rgba(75,191,204,0.18) 0%, transparent 70%)" }} />
        <div className="wrap py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow mb-3" style={{ color: "var(--teal-light)", letterSpacing: "0.14em" }}>Get started today</p>
              <h2 className="text-white font-extrabold leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                Schedule a free<br />in-home consultation.
              </h2>
              <p className="leading-relaxed max-w-md"
                style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)" }}>
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
                    className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}>
                    <Phone size={14} className="text-teal-light flex-shrink-0" />
                    <span>{o.city}: {o.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)" }} />
      </div>

      {/* ── Main footer grid ── */}
      <div className="bg-teal-deep">
        <div className="wrap py-12 lg:py-16">

          {/* Brand row — full width on all sizes */}
          <div className="mb-10 pb-10 border-b border-white/10
                          flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="max-w-xs">
              <Link href="/">
                <Image
                  src="/images/beyond-care-logo-white.png"
                  alt={SITE.name}
                  width={220} height={211}
                  className="h-16 w-auto mb-4"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Locally owned, nurse-led non-medical home care in Upstate South Carolina.
                Serving seniors and adults with compassionate, dependable in-home support.
              </p>
              <div className="space-y-1 mb-4">
                {AWARDS.map(a => (
                  <p key={a.label} className="text-xs text-white/35 font-medium">
                    {a.label} — {a.org}
                  </p>
                ))}
              </div>
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

            {/* Contact info inline on desktop */}
            <div className="sm:text-right">
              {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
                <div key={o.name} className="mb-4"
                  itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-sm font-bold text-white/80 mb-1">{o.name}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(o.full)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2 sm:justify-end text-xs text-white/50 hover:text-white transition-colors mb-0.5">
                    <MapPin size={11} className="mt-0.5 flex-shrink-0 text-teal-light sm:order-last" />
                    <span>
                      <span itemProp="streetAddress">{o.address}</span>,{" "}
                      <span itemProp="addressLocality">{o.city}</span>,{" "}
                      <span itemProp="addressRegion">SC</span>
                    </span>
                  </a>
                  <a href={`tel:${o.phone.replace(/-/g,"")}`}
                    className="flex items-center gap-2 sm:justify-end text-xs text-white/50 hover:text-white transition-colors"
                    itemProp="telephone">
                    <Phone size={11} className="flex-shrink-0 text-teal-light sm:order-last" />
                    {o.phone}
                  </a>
                </div>
              ))}
              <div className="space-y-1">
                <div className="flex items-center gap-2 sm:justify-end text-xs text-white/35">
                  <Clock size={10} className="flex-shrink-0 sm:order-last" />
                  <span>{HOURS.weekdays}, {HOURS.hours}</span>
                </div>
                <a href={`mailto:${SITE.serviceEmail}`}
                  className="flex items-center gap-2 sm:justify-end text-xs text-white/35 hover:text-white/60 transition-colors"
                  itemProp="email">
                  <Mail size={10} className="flex-shrink-0 sm:order-last" />
                  {SITE.serviceEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation columns — symmetrical 2×2 on mobile, 4-col on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10">

            {/* Services */}
            <div>
              <p className="footer-heading">Services</p>
              <ul className="space-y-0.5">
                {SERVICES.slice(0, 8).map(s => (
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
                  ["About Us",           "/about"                  ],
                  ["Leadership",         "/about/leadership"       ],
                  ["Why Choose Us",      "/why-choose-beyond-care" ],
                  ["Caregiver Standards","/caregiver-standards"    ],
                  ["How Care Works",     "/how-care-works"         ],
                  ["Payment Options",    "/payment-options"        ],
                  ["Locations",          "/locations"              ],
                  ["Careers",            "/careers"                ],
                  ["Resources",          "/resources"              ],
                  ["FAQ",                "/faq"                    ],
                  ["Contact",            "/contact"                ],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — mobile only (desktop contact is in brand row above) */}
            <div className="sm:hidden md:block">
              <p className="footer-heading">Contact</p>
              {[OFFICES.honeaPath, OFFICES.williamston].map(o => (
                <div key={o.name} className="mb-4"
                  itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-sm font-bold text-white/80 mb-1">{o.name}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(o.full)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2 text-xs text-white/50 hover:text-white transition-colors mb-0.5">
                    <MapPin size={11} className="mt-0.5 flex-shrink-0 text-teal-light" />
                    <span itemProp="streetAddress">{o.address}, <span itemProp="addressLocality">{o.city}</span></span>
                  </a>
                  <a href={`tel:${o.phone.replace(/-/g,"")}`}
                    className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
                    itemProp="telephone">
                    <Phone size={11} className="flex-shrink-0 text-teal-light" />
                    {o.phone}
                  </a>
                </div>
              ))}
              <div className="pt-2 border-t border-white/10 space-y-1.5">
                <div className="flex items-start gap-2 text-xs text-white/35">
                  <Clock size={10} className="mt-0.5 flex-shrink-0" />
                  <span>{HOURS.weekdays}, {HOURS.hours}</span>
                </div>
                <a href={`mailto:${SITE.serviceEmail}`}
                  className="flex items-center gap-2 text-xs text-white/35 hover:text-white/60 transition-colors"
                  itemProp="email">
                  <Mail size={10} className="flex-shrink-0" />
                  {SITE.serviceEmail}
                </a>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <p className="footer-heading">From the Blog</p>
              <ul className="space-y-3">
                {RECENT_POSTS.map(p => (
                  <li key={p.href}>
                    <Link href={p.href}
                      className="footer-link text-xs sm:text-[13px] leading-snug block">
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/blog" className="footer-link text-teal-light font-semibold text-xs">
                    All Articles →
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ background: "var(--navy)" }}>
        <div className="wrap flex flex-col sm:flex-row items-center justify-between py-4 gap-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {year} {SITE.name}. All rights reserved. Beyond Care, LLC.
          </p>
          <div className="flex flex-wrap gap-4 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml"    className="hover:text-white/60 transition-colors">Sitemap</Link>
            <a href="/llms.txt"          className="hover:text-white/60 transition-colors">AI / LLMs</a>
            <Link href="/portal"         className="hover:text-white/60 transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
