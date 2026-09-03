import type { Metadata } from "next";

export const privacyMetadata: Metadata = {
  title: "Privacy Policy — MBA Wizards",
  description:
    "Learn about how MBA Wizards collects, protects, and handles student personal and academic data across our coaching and consulting services.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — MBA Wizards",
    description:
      "Learn about how MBA Wizards collects, protects, and handles student personal and academic data across our coaching and consulting services.",
    url: "https://www.mbawizards.co.in/privacy-policy",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const privacyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Privacy Policy",
      description: "Official Privacy Policy of MBA Wizards detailing data handling and student confidentiality.",
      publisher: {
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
          name: "Privacy Policy",
          item: "https://www.mbawizards.co.in/privacy-policy",
        },
      ],
    },
  ],
};
