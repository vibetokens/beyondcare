import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";
import MobileCTA from "@/components/MobileCTA";
import PostHogProvider from "@/components/PostHogProvider";
import { Suspense } from "react";
import { SITE, LOCAL_BUSINESS_SCHEMA, AI_CONTEXT } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default:  "Beyond Care Home Care Services | Upstate South Carolina",
    template: "%s | Beyond Care Home Care Services",
  },
  description: SITE.description,
  keywords: AI_CONTEXT.keywords,
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator:  SITE.name,
  publisher: SITE.name,
  openGraph: {
    type:      "website",
    locale:    "en_US",
    url:       SITE.domain,
    siteName:  SITE.name,
    title:     "Beyond Care Home Care Services | Upstate South Carolina",
    description: SITE.description,
    images: [{
      url:    `${SITE.domain}/images/og-default.jpg`,
      width:  1200,
      height: 630,
      alt:    "Beyond Care Home Care Services — Upstate South Carolina",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Beyond Care Home Care Services | Upstate South Carolina",
    description: SITE.description,
    images:      [`${SITE.domain}/images/og-default.jpg`],
  },
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:           true,
      follow:          true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE.domain,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── LocalBusiness schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />

        {/* ── AI/LLM context meta tags ── */}
        {/* These help LLMs and AI overviews accurately represent Beyond Care */}
        <meta name="description"       content={SITE.description} />
        <meta name="ai-context"        content={AI_CONTEXT.summary} />
        <meta name="organization-type" content="LocalBusiness, HomeCareProfessional" />
        <meta name="service-area"      content="Upstate South Carolina, Anderson County, Greenville County, Abbeville County, Pickens County, Greenwood County" />
        <meta name="owner"             content="Sarah Atkin, RN, BSN" />
        <meta name="nursing-experience"content="20+ years" />
        <meta name="services"          content="Personal Care, Companion Care, Respite Care, Meal Preparation, Transportation, Medication Reminders, Light Housekeeping, Hospital Discharge Support, 24-Hour Home Care" />
        <meta name="phone-honea-path"  content="864-369-0222" />
        <meta name="phone-williamston" content="864-841-2500" />
        <meta name="payment-options"   content="Private Pay, Long-Term Care Insurance, CLTC, Medicaid Waiver, VA Benefits, Vouchers" />

        {/* ── Geo meta ── */}
        <meta name="geo.region"        content="US-SC" />
        <meta name="geo.placename"     content="Honea Path, South Carolina" />
        <meta name="geo.position"      content="34.4515;-82.3849" />
        <meta name="ICBM"              content="34.4515, -82.3849" />

        {/* ── Preconnect for performance ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ── Material Symbols (Stitch design icons) ── */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FeedbackWidget />
        <MobileCTA />
        <Suspense fallback={null}><PostHogProvider /></Suspense>

        {/* ── Scroll reveal ── */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var io = new IntersectionObserver(function(entries){
              entries.forEach(function(e){
                if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
              });
            },{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
            function run(){
              document.querySelectorAll('.reveal').forEach(function(el){
                el.classList.add('will-animate');
                io.observe(el);
              });
            }
            if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',run); } else { run(); }
          })();
        `}} />
      </body>
    </html>
  );
}
