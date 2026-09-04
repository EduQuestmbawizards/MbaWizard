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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — MBA Wizards",
    description:
      "Learn about how MBA Wizards collects, protects, and handles student personal and academic data across our coaching and consulting services.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What personal information does MBA Wizards collect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We collect basic contact details (name, email, phone number), academic transcripts, test scores, and application materials shared during consultations or enrollments.",
          },
        },
        {
          "@type": "Question",
          name: "How is my personal data secured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement industry-standard SSL encryption, secure access controls, and strict internal confidentiality standards to ensure student information is protected.",
          },
        },
        {
          "@type": "Question",
          name: "Does MBA Wizards share or sell student data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, MBA Wizards does not sell, rent, or trade student personal data with external third parties or advertisers under any circumstances.",
          },
        },
      ],
    },
  ],
};
