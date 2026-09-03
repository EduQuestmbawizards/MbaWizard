import type { Metadata } from "next";

export const greMetadata: Metadata = {
  title: "GRE Coaching Classes | Elite Test Prep & Admissions — MBA Wizards",
  description:
    "Crack the GRE with confidence. MBA Wizards offers expert GRE coaching, shorter exam format preparation, vocabulary mastery, and elite MS/MBA admissions counseling.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gre-coaching-classes",
  },
  openGraph: {
    title: "GRE Coaching Classes | Elite Test Prep & Admissions — MBA Wizards",
    description:
      "Crack the GRE with confidence. MBA Wizards offers expert GRE coaching, shorter exam format preparation, vocabulary mastery, and elite MS/MBA admissions counseling.",
    url: "https://www.mbawizards.co.in/gre-coaching-classes",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const greJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "GRE Coaching Classes",
      description:
        "Comprehensive preparation for the revised shorter GRE exam including Quantitative Reasoning, Verbal Reasoning, and Analytical Writing.",
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
          name: "GRE Coaching Classes",
          item: "https://www.mbawizards.co.in/gre-coaching-classes",
        },
      ],
    },
  ],
};
