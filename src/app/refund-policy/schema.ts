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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy — MBA Wizards",
    description:
      "Review MBA Wizards' official No-Refund Policy and transparent enrollment terms for all test prep and consulting programs.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is MBA Wizards' fee refund policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards maintains a strict no-refund policy once enrollment is finalized and digital materials, portal credentials, or mentor slots are allocated.",
          },
        },
        {
          "@type": "Question",
          name: "Can I defer or pause my batch if my exam date changes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, students can request batch deferrals or pauses by writing to academic support, allowing course continuation at a later date without additional fees.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend a demo session before making payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, complimentary demo classes and 1-on-1 counseling sessions are available for all programs before enrollment to ensure full alignment with your learning goals.",
          },
        },
      ],
    },
  ],
};
