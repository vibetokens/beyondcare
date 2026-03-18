// ─── SITE ─────────────────────────────────────────────────────────────────
export const SITE = {
  name:        "Beyond Care Home Care Services",
  shortName:   "Beyond Care",
  domain:      "https://beyondcarehc.com",
  email:       "info@beyondcarehc.com",
  serviceEmail:"service@beyondcarehc.com",
  description: "Locally owned, nurse-led non-medical home care in Upstate South Carolina. Serving seniors and adults with dependable in-home support, personal care, companionship, and flexible scheduling.",
  founded:     "2013",
  facebook:    "https://www.facebook.com/beyondcarellc",
  instagram:   "https://www.instagram.com/beyond.care.llc.1",
};

// ─── PHONES ───────────────────────────────────────────────────────────────
export const PHONES = {
  honeaPath:       "864-369-0222",
  honeaPathHref:   "tel:8643690222",
  williamston:     "864-841-2500",
  willistonHref:   "tel:8648412500",
  primary:         "864-841-2500",
  primaryHref:     "tel:8648412500",
  careers:         "864-338-7145",
  careersHref:     "tel:8643387145",
};

// ─── OFFICES ──────────────────────────────────────────────────────────────
export const OFFICES = {
  honeaPath: {
    name:      "Honea Path Office",
    address:   "512A East Greer St",
    city:      "Honea Path",
    state:     "SC",
    zip:       "29654",
    phone:     PHONES.honeaPath,
    phoneHref: PHONES.honeaPathHref,
    full:      "512A East Greer St, Honea Path, SC 29654",
    slug:      "honea-path",
    county:    "Anderson County",
  },
  williamston: {
    name:      "Williamston Office",
    address:   "103 Belton Dr",
    city:      "Williamston",
    state:     "SC",
    zip:       "29697",
    phone:     PHONES.williamston,
    phoneHref: PHONES.willistonHref,
    full:      "103 Belton Dr, Williamston, SC 29697",
    slug:      "williamston",
    county:    "Anderson County",
  },
};

// ─── OWNER ────────────────────────────────────────────────────────────────
export const OWNER = {
  name:        "Sarah Atkin",
  credentials: "RN, BSN",
  title:       "Owner & Registered Nurse",
  yearsNursing: "20+",
  photo:       "/images/sarah-atkin-owner.jpg",
};

// ─── HOURS ────────────────────────────────────────────────────────────────
export const HOURS = {
  weekdays:   "Monday – Friday",
  hours:      "8:00 AM – 4:00 PM",
  afterHours: "After-hours calls forwarded to on-call staff for urgent needs",
};

// ─── AWARDS ───────────────────────────────────────────────────────────────
export const AWARDS = [
  { label: "Leader in Experience",  org: "Best of Home Care" },
  { label: "Top 100 in Experience", org: "Best of Home Care" },
  { label: "Provider of Choice",    org: "Best of Home Care" },
];

// ─── PAYMENT OPTIONS ──────────────────────────────────────────────────────
export const PAYMENT_OPTIONS = [
  { label: "Private Pay",                   href: "/payment-options/private-pay"                },
  { label: "Long-Term Care Insurance",      href: "/payment-options/long-term-care-insurance"   },
  { label: "Community Long Term Care (CLTC)",href: "/payment-options"                           },
  { label: "Medicaid Waiver",               href: "/payment-options/medicaid-waiver"            },
  { label: "VA Benefits",                   href: "/payment-options/va-benefits"                },
  { label: "Vouchers",                      href: "/payment-options"                            },
];

// ─── SERVICES ─────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    title: "Personal Care",
    slug:  "/services/personal-care",
    desc:  "Bathing, grooming, dressing, hygiene, and mobility support delivered with dignity.",
    icon:  "Heart",
    tagline: "Hands-on help that preserves independence and dignity.",
    benefits: [
      "Bathing, showering, and personal hygiene assistance",
      "Grooming, oral care, and dressing support",
      "Incontinence care and skin care",
      "Mobility assistance and safe transfers",
      "Positioning and repositioning for comfort and safety",
    ],
    whoFor: "Ideal for seniors or adults who need hands-on help with daily self-care tasks but want to remain at home.",
  },
  {
    title: "Companion Care",
    slug:  "/services/companion-care",
    desc:  "Meaningful daily connection that combats isolation and keeps spirits up.",
    icon:  "Users",
    tagline: "Real connection that brightens every visit.",
    benefits: [
      "Conversation, reading aloud, and shared activities",
      "Card and board games, puzzles, hobbies",
      "Accompaniment to community events and outings",
      "Monitoring for changes in mood or behavior",
      "Emotional support and genuine friendship",
    ],
    whoFor: "Perfect for seniors living alone, those at risk for social isolation, or anyone who benefits from consistent, caring company.",
  },
  {
    title: "Respite Care",
    slug:  "/services/respite-care",
    desc:  "Planned relief for family caregivers — hours, days, or weekend coverage.",
    icon:  "RefreshCcw",
    tagline: "Rest for you. Consistent care for your loved one.",
    benefits: [
      "Flexible scheduling — a few hours to full-day coverage",
      "Weekend and overnight respite blocks",
      "Seamless handoff with your loved one's existing routine",
      "Reliable, familiar caregiver presence",
      "Peace of mind while you recharge",
    ],
    whoFor: "Designed for family caregivers who need a reliable break without disrupting their loved one's care.",
  },
  {
    title: "Meal Preparation",
    slug:  "/services/meal-preparation",
    desc:  "Nutritious home-cooked meals built around preferences and dietary needs.",
    icon:  "UtensilsCrossed",
    tagline: "Home-cooked nutrition, made to order.",
    benefits: [
      "Meal planning around dietary restrictions and preferences",
      "Grocery list assistance and pantry organization",
      "Cooking and plating in the client's own kitchen",
      "Hydration reminders and snack preparation",
      "Light kitchen clean-up after meals",
    ],
    whoFor: "Great for seniors who can no longer cook safely or independently, or anyone who needs nutritional support at home.",
  },
  {
    title: "Transportation",
    slug:  "/services/transportation",
    desc:  "Reliable, safe rides to appointments, errands, and social activities.",
    icon:  "Car",
    tagline: "Safe, dependable rides — wherever the day takes them.",
    benefits: [
      "Medical appointments, therapy, and specialist visits",
      "Pharmacy pickups and prescription management",
      "Grocery shopping and essential errands",
      "Social outings, church, and community events",
      "Door-to-door assistance in and out of the vehicle",
    ],
    whoFor: "Essential for seniors who no longer drive or need assistance getting to appointments reliably.",
  },
  {
    title: "Medication Reminders",
    slug:  "/services/medication-reminders",
    desc:  "Consistent on-schedule reminders so nothing gets missed.",
    icon:  "Bell",
    tagline: "Consistent reminders that keep schedules on track.",
    benefits: [
      "On-schedule verbal reminders for each medication",
      "Assistance organizing pill boxes and weekly trays",
      "Documentation of adherence for family awareness",
      "Communication with family if doses are refused or missed",
      "Coordination with caregiver shift notes",
    ],
    whoFor: "Beneficial for anyone managing multiple medications who needs consistent, non-medical support to stay on schedule.",
  },
  {
    title: "Light Housekeeping",
    slug:  "/services/light-housekeeping",
    desc:  "Laundry, tidying, and household tasks that maintain a safe, clean home.",
    icon:  "Home",
    tagline: "A clean, safe home without lifting a finger.",
    benefits: [
      "Vacuuming, dusting, and surface wiping",
      "Laundry, folding, and linen changes",
      "Kitchen tidying and dish washing",
      "Bathroom cleaning and sanitizing",
      "Trash removal and clutter reduction for fall prevention",
    ],
    whoFor: "Ideal for seniors or adults who need help maintaining a clean, safe living environment but do not require heavy housecleaning.",
  },
  {
    title: "Hospital Discharge Support",
    slug:  "/services/hospital-discharge-support",
    desc:  "Seamless care at home after surgery, rehab, or a hospital stay.",
    icon:  "Activity",
    tagline: "A smoother, safer recovery at home.",
    benefits: [
      "Safe transition from hospital or rehab to home",
      "Following discharge instructions with caregiver support",
      "Medication reminder support post-discharge",
      "Monitoring for warning signs and reporting to family",
      "Help with meals, hygiene, and mobility during recovery",
    ],
    whoFor: "Critical for patients returning home after surgery, a hospital stay, or rehabilitation who need support but not skilled nursing.",
  },
  {
    title: "Mobility & Transfers",
    slug:  "/services/mobility-transfer-support",
    desc:  "Safe assistance with movement, transfers, and fall prevention.",
    icon:  "MoveHorizontal",
    tagline: "Confident movement, fewer falls, more independence.",
    benefits: [
      "Safe assistance with standing, sitting, and repositioning",
      "Bed-to-chair and chair-to-wheelchair transfers",
      "Walker, cane, and wheelchair assistance",
      "Fall prevention setup and environment awareness",
      "Encouragement with prescribed home exercise routines",
    ],
    whoFor: "Appropriate for clients with limited mobility, balance concerns, or fall risk who need a skilled, attentive caregiver for safe movement.",
  },
  {
    title: "24-Hour Home Care",
    slug:  "/services/24-hour-home-care",
    desc:  "Around-the-clock in-home support for those who need continuous assistance.",
    icon:  "Clock",
    tagline: "Someone there every hour — day and night.",
    benefits: [
      "Continuous caregiver presence across rotating shifts",
      "Day, evening, and overnight coverage",
      "Emergency response and family notification",
      "All personal care, meals, and companion services included",
      "Consistent caregiver team for familiarity and routine",
    ],
    whoFor: "For clients with advanced care needs, cognitive decline, or safety concerns who require constant supervision and support.",
  },
  {
    title: "Overnight Care",
    slug:  "/services/overnight-care",
    desc:  "Nighttime monitoring and support for safety and peace of mind.",
    icon:  "Moon",
    tagline: "Peaceful nights for the whole family.",
    benefits: [
      "Caregiver present through the night for monitoring",
      "Assistance with nighttime needs and bathroom trips",
      "Incontinence support and repositioning",
      "Response to disorientation, wandering, or distress",
      "Morning routine assistance to start the day right",
    ],
    whoFor: "Best for families who are concerned about nighttime safety, wandering, falls, or simply need overnight peace of mind.",
  },
];

// ─── AUDIENCE PAGES ───────────────────────────────────────────────────────
export const AUDIENCE_PAGES = [
  { title: "Home Care for Seniors",             href: "/who-we-serve/seniors"           },
  { title: "Adults with Disabilities",          href: "/who-we-serve/adults-disabilities"},
  { title: "Support for Family Caregivers",     href: "/who-we-serve/family-caregivers" },
  { title: "Aging in Place",                    href: "/who-we-serve/aging-in-place"    },
  { title: "Help After a Hospital Stay",        href: "/who-we-serve/hospital-discharge"},
  { title: "When It's Time for Home Care",      href: "/resources/when-its-time"        },
];

// ─── LOCATION PAGES ───────────────────────────────────────────────────────
export const LOCATION_PAGES = [
  { title: "Honea Path",      href: "/locations/honea-path"         },
  { title: "Williamston",     href: "/locations/williamston"        },
  { title: "Anderson County", href: "/locations/anderson-county"    },
  { title: "Greenville County",href:"/locations/greenville-county"  },
  { title: "Abbeville County",href: "/locations/abbeville-county"   },
  { title: "Pickens County",  href: "/locations/pickens-county"     },
  { title: "Greenwood County",href: "/locations/greenwood-county"   },
];

// ─── MEGA NAV ─────────────────────────────────────────────────────────────
export const MEGA_NAV = [
  {
    label: "About",
    href:  "/about",
    groups: [
      {
        heading: "Our Company",
        links: [
          { label: "About Beyond Care",  href: "/about",                      desc: "Our story, mission, and values"        },
          { label: "Leadership",         href: "/about/leadership",            desc: "Meet Sarah Atkin, RN, BSN"             },
          { label: "Why Choose Us",      href: "/why-choose-beyond-care",      desc: "What sets us apart"                    },
          { label: "Awards & Recognition",href:"/about/awards",               desc: "Best of Home Care recognition"         },
        ],
      },
      {
        heading: "How We Work",
        links: [
          { label: "How Care Works",     href: "/how-care-works",              desc: "Our 5-step care process"               },
          { label: "Caregiver Standards",href: "/caregiver-standards",         desc: "Screening, training, accountability"   },
          { label: "FAQ",                href: "/faq",                         desc: "Common questions answered"             },
        ],
      },
    ],
  },
  {
    label: "Services",
    href:  "/services",
    groups: [
      {
        heading: "Personal Support",
        links: [
          { label: "Personal Care",        href: "/services/personal-care",            desc: "Bathing, grooming, hygiene"         },
          { label: "Companion Care",       href: "/services/companion-care",           desc: "Engagement and connection"          },
          { label: "Meal Preparation",     href: "/services/meal-preparation",         desc: "Nutrition at home"                  },
          { label: "Light Housekeeping",   href: "/services/light-housekeeping",       desc: "Safe, clean home environment"       },
          { label: "Medication Reminders", href: "/services/medication-reminders",     desc: "On-schedule reminders"              },
        ],
      },
      {
        heading: "Specialized Care",
        links: [
          { label: "Respite Care",         href: "/services/respite-care",             desc: "Relief for family caregivers"       },
          { label: "Transportation",       href: "/services/transportation",           desc: "Rides to appointments & errands"    },
          { label: "Hospital Discharge",   href: "/services/hospital-discharge-support",desc:"Support after a hospital stay"     },
          { label: "Mobility & Transfers", href: "/services/mobility-transfer-support",desc:"Safe movement and fall prevention"  },
          { label: "24-Hour Home Care",    href: "/services/24-hour-home-care",        desc: "Around-the-clock in-home support"   },
          { label: "Overnight Care",       href: "/services/overnight-care",           desc: "Nighttime monitoring and support"   },
        ],
      },
      {
        heading: "Who We Serve",
        links: [
          { label: "Seniors & Older Adults",    href: "/who-we-serve/seniors",            desc: "Aging in place support"           },
          { label: "Adults with Disabilities",  href: "/who-we-serve/adults-disabilities",desc: "Non-medical disability support"  },
          { label: "Family Caregivers",         href: "/who-we-serve/family-caregivers",  desc: "Respite and backup care"         },
          { label: "After Hospital Discharge",  href: "/who-we-serve/hospital-discharge", desc: "Recovery at home"                },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href:  "/locations",
    groups: [
      {
        heading: "Our Offices",
        links: [
          { label: "Honea Path Office",    href: "/locations/honea-path",        desc: "512A East Greer St"               },
          { label: "Williamston Office",   href: "/locations/williamston",       desc: "103 Belton Dr"                    },
        ],
      },
      {
        heading: "Counties We Serve",
        links: [
          { label: "Anderson County",      href: "/locations/anderson-county",   desc: "Home care in Anderson County"     },
          { label: "Greenville County",    href: "/locations/greenville-county", desc: "Home care in Greenville County"   },
          { label: "Abbeville County",     href: "/locations/abbeville-county",  desc: "Home care in Abbeville County"   },
          { label: "Pickens County",       href: "/locations/pickens-county",    desc: "Home care in Pickens County"     },
          { label: "Greenwood County",     href: "/locations/greenwood-county",  desc: "Home care in Greenwood County"   },
        ],
      },
    ],
  },
  {
    label: "Payment",
    href:  "/payment-options",
    groups: [
      {
        heading: "Payment Options",
        links: [
          { label: "All Payment Options",        href: "/payment-options",                           desc: "Overview of all options"          },
          { label: "Private Pay",                href: "/payment-options/private-pay",               desc: "Out-of-pocket care options"       },
          { label: "Long-Term Care Insurance",   href: "/payment-options/long-term-care-insurance",  desc: "Using your LTC policy"            },
          { label: "Medicaid Waiver",            href: "/payment-options/medicaid-waiver",           desc: "SC Medicaid waiver programs"      },
          { label: "VA Benefits",                href: "/payment-options/va-benefits",               desc: "Aid & Attendance, VA Respite"     },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href:  "/resources",
    groups: [
      {
        heading: "Family Guides",
        links: [
          { label: "Family Resources Hub",       href: "/resources",                        desc: "Guides for families navigating care" },
          { label: "Home Care vs. Home Health",  href: "/resources/home-care-vs-home-health",desc:"Know the difference"                },
          { label: "When It's Time for Care",    href: "/resources/when-its-time",          desc: "Signs your loved one needs help"    },
          { label: "Preparing for a Consultation",href:"/resources/preparing-for-consultation",desc:"What to expect"                  },
        ],
      },
      {
        heading: "More",
        links: [
          { label: "Blog",    href: "/blog",     desc: "Articles and tips for families"    },
          { label: "FAQ",     href: "/faq",      desc: "Common questions answered"         },
          { label: "Contact", href: "/contact",  desc: "Reach our team"                    },
        ],
      },
    ],
  },
  {
    label: "Careers",
    href:  "/careers",
    groups: [
      {
        heading: "Join Our Team",
        links: [
          { label: "Careers Overview",        href: "/careers",                    desc: "Why work at Beyond Care"           },
          { label: "Caregiver Jobs in SC",    href: "/careers/caregiver-jobs",     desc: "Open caregiver positions"          },
          { label: "Benefits & Training",     href: "/careers/benefits-training",  desc: "Competitive pay and real benefits" },
          { label: "Apply Now",               href: "/careers/apply",              desc: "Start your application"            },
        ],
      },
    ],
  },
];

// ─── PROCESS STEPS ────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { n: "01", title: "Free Consultation",  body: "We talk with you and your family — by phone or in person — to understand your situation and answer every question with no pressure." },
  { n: "02", title: "Care Assessment",    body: "Our nurse-led team evaluates your loved one's needs and builds a clear, honest picture of what support will help most." },
  { n: "03", title: "Personalized Plan",  body: "We design a flexible care plan around real daily needs — a few hours a week to around-the-clock support." },
  { n: "04", title: "Caregiver Match",    body: "We match your family with a screened, trained caregiver who fits your loved one's personality and daily routine." },
  { n: "05", title: "Ongoing Support",    body: "Care is monitored continuously. We stay in close contact and adjust the plan as needs evolve over time." },
];

// ─── TRUST SIGNALS ────────────────────────────────────────────────────────
export const TRUST_SIGNALS = [
  "Employee caregivers — not contractors",
  "Bonded and insured",
  "Workers' compensation covered",
  "CPR certified",
  "Ongoing skills training and assessments",
  "Regular performance evaluations",
  "Selective hiring and screening",
  "Nurse-led daily operations and home visits",
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { quote: "I am very pleased with my services. My caregiver is amazing, and goes above and beyond what she is required to do.", name: "Betty F.",  city: "Honea Path, SC"   },
  { quote: "Beyond Care gave our family real peace of mind. Knowing someone dependable was there every day made all the difference.", name: "James M.", city: "Anderson, SC"     },
  { quote: "The team was professional from the very first call. They matched my mother with the perfect caregiver.", name: "Carol T.", city: "Williamston, SC" },
];

// ─── JSON-LD SCHEMA ───────────────────────────────────────────────────────
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "name": SITE.name,
  "url": SITE.domain,
  "logo": `${SITE.domain}/images/beyond-care-logo.png`,
  "image": `${SITE.domain}/images/hero-home.jpg`,
  "description": SITE.description,
  "telephone": "+1-864-841-2500",
  "email": SITE.serviceEmail,
  "foundingDate": SITE.founded,
  "address": [
    { "@type": "PostalAddress", "streetAddress": OFFICES.honeaPath.address,   "addressLocality": OFFICES.honeaPath.city,   "addressRegion": "SC", "postalCode": OFFICES.honeaPath.zip,   "addressCountry": "US" },
    { "@type": "PostalAddress", "streetAddress": OFFICES.williamston.address, "addressLocality": OFFICES.williamston.city, "addressRegion": "SC", "postalCode": OFFICES.williamston.zip, "addressCountry": "US" },
  ],
  "geo": { "@type": "GeoCoordinates", "latitude": "34.4515", "longitude": "-82.3849" },
  "areaServed": [
    { "@type": "County", "name": "Anderson County", "containedInPlace": { "@type": "State", "name": "South Carolina" } },
    { "@type": "County", "name": "Greenville County","containedInPlace": { "@type": "State", "name": "South Carolina" } },
    { "@type": "County", "name": "Abbeville County", "containedInPlace": { "@type": "State", "name": "South Carolina" } },
    { "@type": "County", "name": "Pickens County",   "containedInPlace": { "@type": "State", "name": "South Carolina" } },
    { "@type": "County", "name": "Greenwood County", "containedInPlace": { "@type": "State", "name": "South Carolina" } },
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "16:00" }
  ],
  "sameAs": [SITE.facebook, SITE.instagram],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Care Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Care",        "description": "Non-medical personal care including bathing, grooming, and hygiene support."  } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Companion Care",       "description": "Companionship, conversation, and daily engagement for seniors at home."        } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Respite Care",         "description": "Temporary relief care for family caregivers."                                 } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meal Preparation",     "description": "Home-cooked meal preparation tailored to dietary needs."                      } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transportation",       "description": "Safe rides to medical appointments and errands."                              } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medication Reminders", "description": "Consistent reminders to support medication adherence."                        } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Light Housekeeping",   "description": "Light household tasks to maintain a safe, clean home."                       } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Discharge Support","description":"In-home support following surgery, rehab, or hospitalization."           } },
    ],
  },
};

// ─── AI / LLM INCLUSION META (for llms.txt + structured data) ────────────
export const AI_CONTEXT = {
  summary: "Beyond Care Home Care Services is a locally owned, nurse-led non-medical home care company headquartered in Honea Path and Williamston, South Carolina. Founded and operated by Sarah Atkin, RN, BSN, who has over 20 years of nursing experience. Provides personal care, companion care, respite care, meal preparation, transportation, medication reminders, light housekeeping, and hospital discharge support throughout Upstate South Carolina. All caregivers are employees (not contractors), bonded, insured, CPR certified, and undergo ongoing training and performance evaluations. Payment options include private pay, long-term care insurance, Community Long Term Care (CLTC), Medicaid Waiver, VA Benefits, and vouchers. Two office locations: 512A East Greer St, Honea Path SC 29654 (864-369-0222) and 103 Belton Dr, Williamston SC 29697 (864-841-2500). Office hours Monday–Friday 8AM–4PM with after-hours on-call staff.",
  keywords: ["home care South Carolina","non-medical home care","senior care Upstate SC","in-home care Anderson County","nurse-led home care","personal care Honea Path","companion care Williamston SC"],
};
