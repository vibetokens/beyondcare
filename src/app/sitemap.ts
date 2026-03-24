import type { MetadataRoute } from "next";
import { SITE, SERVICES, LOCATION_PAGES, AUDIENCE_PAGES } from "@/lib/constants";

const base = SITE.domain;

const staticRoutes: MetadataRoute.Sitemap = [
  { url: base,                           priority: 1.0,  changeFrequency: "weekly"  },
  { url: `${base}/about`,                priority: 0.8,  changeFrequency: "monthly" },
  { url: `${base}/about/leadership`,     priority: 0.6,  changeFrequency: "monthly" },
  { url: `${base}/about/awards`,         priority: 0.6,  changeFrequency: "monthly" },
  { url: `${base}/services`,             priority: 0.9,  changeFrequency: "monthly" },
  { url: `${base}/who-we-serve`,         priority: 0.8,  changeFrequency: "monthly" },
  { url: `${base}/locations`,            priority: 0.9,  changeFrequency: "monthly" },
  { url: `${base}/payment-options`,      priority: 0.8,  changeFrequency: "monthly" },
  { url: `${base}/payment-options/private-pay`,             priority: 0.7, changeFrequency: "monthly" },
  { url: `${base}/payment-options/long-term-care-insurance`,priority: 0.7, changeFrequency: "monthly" },
  { url: `${base}/payment-options/medicaid-waiver`,         priority: 0.7, changeFrequency: "monthly" },
  { url: `${base}/payment-options/va-benefits`,             priority: 0.7, changeFrequency: "monthly" },
  { url: `${base}/how-care-works`,       priority: 0.7,  changeFrequency: "monthly" },
  { url: `${base}/why-choose-beyond-care`,priority: 0.7, changeFrequency: "monthly" },
  { url: `${base}/caregiver-standards`,  priority: 0.7,  changeFrequency: "monthly" },
  { url: `${base}/careers`,              priority: 0.7,  changeFrequency: "weekly"  },
  { url: `${base}/careers/caregiver-jobs`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${base}/careers/apply`,        priority: 0.8,  changeFrequency: "monthly" },
  { url: `${base}/blog`,                 priority: 0.8,  changeFrequency: "weekly"  },
  { url: `${base}/faq`,                  priority: 0.7,  changeFrequency: "monthly" },
  { url: `${base}/resources`,            priority: 0.7,  changeFrequency: "monthly" },
  { url: `${base}/resources/home-care-vs-home-health`,      priority: 0.6, changeFrequency: "monthly" },
  { url: `${base}/resources/when-its-time`,                 priority: 0.6, changeFrequency: "monthly" },
  { url: `${base}/resources/preparing-for-consultation`,    priority: 0.6, changeFrequency: "monthly" },
  { url: `${base}/contact`,             priority: 0.8,  changeFrequency: "monthly" },
  { url: `${base}/schedule-consultation`,priority: 0.9, changeFrequency: "monthly" },
  { url: `${base}/privacy-policy`,      priority: 0.3,  changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url:             `${base}${s.slug}`,
    priority:        0.8,
    changeFrequency: "monthly" as const,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATION_PAGES.map(l => ({
    url:             `${base}${l.href}`,
    priority:        0.8,
    changeFrequency: "monthly" as const,
  }));

  const audienceRoutes: MetadataRoute.Sitemap = AUDIENCE_PAGES
    .filter(a => a.href.startsWith("/who-we-serve"))
    .map(a => ({
      url:             `${base}${a.href}`,
      priority:        0.7,
      changeFrequency: "monthly" as const,
    }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...audienceRoutes];
}
