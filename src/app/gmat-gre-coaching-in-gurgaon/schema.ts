import type { Metadata } from "next";
import { gmatGreCitiesData } from "@/data/gmatgre-city-copy";

const data = gmatGreCitiesData.gurgaon;

export const cityMetadata: Metadata = {
  title: "GMAT GRE Coaching in Gurgaon | Best Test Prep — MBA Wizards",
  description:
    "Master both GMAT and GRE with MBA Wizards' comprehensive coaching in Gurgaon. Expert faculty, personalized training, and guaranteed results for top admissions.",
  alternates: {
    canonical: `https://www.mbawizards.co.in/${data.slug}`,
  },
  openGraph: {
    title: "GMAT GRE Coaching in Gurgaon | Best Test Prep — MBA Wizards",
    description:
      "Master both GMAT and GRE with MBA Wizards' comprehensive coaching in Gurgaon. Expert faculty, personalized training, and guaranteed results for top admissions.",
    url: `https://www.mbawizards.co.in/${data.slug}`,
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAT GRE Coaching in Gurgaon | Best Test Prep — MBA Wizards",
    description:
      "Master both GMAT and GRE with MBA Wizards' comprehensive coaching in Gurgaon. Expert faculty, personalized training, and guaranteed results for top admissions.",
  },
};

export const cityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: `MBA Wizards - GMAT+GRE Coaching in ${data.city}`,
      description:
        "Master both GMAT and GRE with MBA Wizards' comprehensive coaching in Gurgaon. Expert faculty, personalized training, and guaranteed results for top admissions.",
      url: `https://www.mbawizards.co.in/${data.slug}`,
      telephone: data.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mbawizards.co.in" },
        { "@type": "ListItem", position: 2, name: "GMAT+GRE Coaching", item: "https://www.mbawizards.co.in/gmat-gre-coaching" },
        { "@type": "ListItem", position: 3, name: data.city, item: `https://www.mbawizards.co.in/${data.slug}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why dual GMAT+GRE preparation instead of one test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dual preparation provides maximum admission flexibility across MBA and MS programs with over 70% shared quantitative and reasoning syllabus. MBA Wizards alumni like Rahul from DLF Phase 2 achieved both GMAT 720 and GRE 325 through our combined module.",
          },
        },
        {
          "@type": "Question",
          name: "How much time does dual prep take for working professionals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dual preparation typically requires 4 to 5 months. We offer specialized weekend batches (Saturday-Sunday, 6 hours total) and evening batches (7:00 PM to 9:00 PM) specifically tailored for working corporate professionals in Cyber City and Golf Course Road.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost difference?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our combined dual prep package is priced at ₹65,000 compared to ₹80,000 when purchased separately, saving ₹15,000 while including comprehensive study materials and full mock series for both exams.",
          },
        },
        {
          "@type": "Question",
          name: "How does the curriculum integrate both without overwhelming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We start with common mathematical foundations, critical reasoning, and reading comprehension (70% shared concepts), before transitioning to targeted alternate modules for GRE vocabulary and GMAT Data Insights.",
          },
        },
      ],
    },
  ],
};
