import type { Metadata } from "next";

export const prepMetadata: Metadata = {
  title: "GMAT Exam Preparation 2025 / 2026 | Strategy, Pattern & Study Plans — MBA Wizards",
  description:
    "Comprehensive GMAT exam preparation by IIT Roorkee alumni. Complete pattern guide, registration steps, level-based study plans, and 70+ hours of live classes.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-preparation",
  },
  openGraph: {
    title: "GMAT Exam Preparation 2025 / 2026 | Strategy, Pattern & Study Plans — MBA Wizards",
    description:
      "Comprehensive GMAT exam preparation by IIT Roorkee alumni. Complete pattern guide, registration steps, level-based study plans, and 70+ hours of live classes.",
    url: "https://www.mbawizards.co.in/gmat-preparation",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const prepJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "GMAT Exam Preparation Program",
      description:
        "Comprehensive 70+ hour GMAT preparation course with adaptive testing, level-wise training, and validity till admission.",
      provider: {
        "@type": "Organization",
        name: "MBA Wizards",
        sameAs: "https://www.mbawizards.co.in",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mbawizards.co.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "GMAT Preparation",
          item: "https://www.mbawizards.co.in/gmat-preparation",
        },
      ],
    },
  ],
};
