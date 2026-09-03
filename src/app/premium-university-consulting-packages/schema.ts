import type { Metadata } from "next";

export const consultingMetadata: Metadata = {
  title: "Premium University Consulting Packages | Top Global B-Schools — MBA Wizards",
  description:
    "End-to-end admissions consulting for Harvard, Stanford, Wharton, INSEAD, LBS, and ISB. Essay brainstorming, resume polishing, SOP mastery, and mock interviews.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/premium-university-consulting-packages",
  },
  openGraph: {
    title: "Premium University Consulting Packages | Top Global B-Schools — MBA Wizards",
    description:
      "End-to-end admissions consulting for Harvard, Stanford, Wharton, INSEAD, LBS, and ISB. Essay brainstorming, resume polishing, SOP mastery, and mock interviews.",
    url: "https://www.mbawizards.co.in/premium-university-consulting-packages",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const consultingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Premium University Admissions Consulting",
      description:
        "Comprehensive admissions consulting service for top global business schools and universities, covering profile evaluation, essay writing, SOP crafting, and mock interviews.",
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
          name: "Premium University Consulting Packages",
          item: "https://www.mbawizards.co.in/premium-university-consulting-packages",
        },
      ],
    },
  ],
};
