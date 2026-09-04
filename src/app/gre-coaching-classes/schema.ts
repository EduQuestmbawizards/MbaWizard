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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRE Coaching Classes | Elite Test Prep & Admissions — MBA Wizards",
    description:
      "Crack the GRE with confidence. MBA Wizards offers expert GRE coaching, shorter exam format preparation, vocabulary mastery, and elite MS/MBA admissions counseling.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the new shorter GRE exam pattern?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current GRE General Test takes just 1 hour 58 minutes. It contains 1 Analytical Writing task (30 min), 2 Quantitative Reasoning sections (27 questions total, 47 min), and 2 Verbal Reasoning sections (27 questions total, 41 min).",
          },
        },
        {
          "@type": "Question",
          name: "Is the GRE accepted for top MBA programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, over 90% of business schools worldwide, including Stanford GSB, Harvard Business School, Wharton, INSEAD, and ISB, accept GRE General Test scores on par with the GMAT.",
          },
        },
        {
          "@type": "Question",
          name: "What is considered a good GRE score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A total score of 320+ (160+ Quant, 160+ Verbal) is competitive for top-50 universities worldwide. For Ivy League and elite STEM/MBA programs, a 325+ score is strongly recommended.",
          },
        },
        {
          "@type": "Question",
          name: "How does MBA Wizards help with GRE vocabulary and quant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our proprietary vocabulary mnemonic systems, frequency lists, and ability-based quant drills help students conquer high-frequency GRE words and master advanced quantitative problem-solving in under 3 months.",
          },
        },
      ],
    },
  ],
};
