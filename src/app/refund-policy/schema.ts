import type { Metadata } from "next";

export const refundMetadata: Metadata = {
  title: "Refund Policy — MBA Wizards",
  description:
    "Review MBA Wizards' official No-Refund Policy and transparent enrollment terms for all test prep and consulting programs.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/refund-policy",
  },
  openGraph: {
    title: "Refund Policy — MBA Wizards",
    description:
      "Review MBA Wizards' official No-Refund Policy and transparent enrollment terms for all test prep and consulting programs.",
    url: "https://www.mbawizards.co.in/refund-policy",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const refundJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Refund Policy",
      description: "Official Refund Policy and terms of enrollment for MBA Wizards services.",
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
          name: "Refund Policy",
          item: "https://www.mbawizards.co.in/refund-policy",
        },
      ],
    },
  ],
};
