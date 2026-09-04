import type { Metadata } from "next";

export const methodologyMetadata: Metadata = {
  title: "MBA Wizards Methodology | Manthan Ability-Based Learning Model",
  description:
    "Discover the MBA Wizards Manthan Methodology: an ability-based adaptive model built by IIT Roorkee alumni. 5-step scientific system for GMAT and CAT success.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/mba-wizards-methodology",
  },
  openGraph: {
    title: "MBA Wizards Methodology | Manthan Ability-Based Learning Model",
    description:
      "Discover the MBA Wizards Manthan Methodology: an ability-based adaptive model built by IIT Roorkee alumni. 5-step scientific system for GMAT and CAT success.",
    url: "https://www.mbawizards.co.in/mba-wizards-methodology",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Wizards Methodology | Manthan Ability-Based Learning Model",
    description:
      "Discover the MBA Wizards Manthan Methodology: an ability-based adaptive model built by IIT Roorkee alumni. 5-step scientific system for GMAT and CAT success.",
  },
};

export const methodologyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "MBA Wizards Methodology - Manthan Ability-Based Model",
      description:
        "Comprehensive breakdown of the proprietary test preparation methodology engineered by MBA Wizards for GMAT and CAT aspirants.",
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
          name: "Methodology",
          item: "https://www.mbawizards.co.in/mba-wizards-methodology",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Manthan Ability-Based Learning Model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Manthan Model is our proprietary pedagogy developed by IIT Roorkee alumni. It moves beyond standard lecture memorization to assess individual cognitive strengths, diagnose failure points, and dynamically tailor practice problems.",
          },
        },
        {
          "@type": "Question",
          name: "How does the 5-step scientific system work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 5 steps are: (1) Cognitive Diagnostic Assessment, (2) Foundational Concept Calibration, (3) Adaptive Question Drilling, (4) Timing & Strategy Optimization, and (5) Exam Simulation with Predictive Analytics.",
          },
        },
        {
          "@type": "Question",
          name: "Why is ability-based prep more effective than traditional coaching?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional coaching treats all students identically. Ability-based prep prevents high scorers from plateauing and provides foundational scaffolding for students with weaker quant or verbal backgrounds, maximizing score improvements in less time.",
          },
        },
        {
          "@type": "Question",
          name: "Does this methodology apply to both GMAT and CAT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the core analytical frameworks apply equally to GMAT Focus Edition (Quant, Verbal, Data Insights) and CAT (QA, DILR, VARC).",
          },
        },
      ],
    },
  ],
};
