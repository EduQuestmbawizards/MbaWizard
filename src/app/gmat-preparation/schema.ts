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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAT Exam Preparation 2025 / 2026 | Strategy, Pattern & Study Plans — MBA Wizards",
    description:
      "Comprehensive GMAT exam preparation by IIT Roorkee alumni. Complete pattern guide, registration steps, level-based study plans, and 70+ hours of live classes.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many months are recommended for GMAT preparation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most aspirants require 3 to 4 months of structured preparation dedicating 15 to 20 hours per week, depending on diagnostic baseline scores.",
          },
        },
        {
          "@type": "Question",
          name: "What is tested on the GMAT Focus Edition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GMAT Focus consists of 3 equally weighted 45-minute sections: Quantitative Reasoning (21 questions), Verbal Reasoning (23 questions), and Data Insights (20 questions).",
          },
        },
        {
          "@type": "Question",
          name: "How can I assess my current GMAT preparation level?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards provides a diagnostic assessment that maps your performance across quant, critical reasoning, and data interpretation, delivering an estimated percentile range and custom study plan.",
          },
        },
        {
          "@type": "Question",
          name: "What score should I target on the GMAT Focus Edition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A score of 645+ corresponds to the 89th percentile (approx. 700 on legacy GMAT), and 695+ corresponds to the 98th percentile, making you competitive for global top-10 MBA programs.",
          },
        },
      ],
    },
  ],
};
