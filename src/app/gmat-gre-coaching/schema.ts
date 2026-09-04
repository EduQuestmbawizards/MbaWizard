import type { Metadata } from "next";

export const gmatGreMetadata: Metadata = {
  title: "GMAT GRE Coaching | Personalized Test Prep — MBA Wizards",
  description:
    "Looking for expert GMAT GRE coaching? MBA Wizards offers personalized, adaptive coaching, small batches, comprehensive study material, and end-to-end admission consulting.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-gre-coaching",
  },
  openGraph: {
    title: "GMAT GRE Coaching | Personalized Test Prep — MBA Wizards",
    description:
      "Looking for expert GMAT GRE coaching? MBA Wizards offers personalized, adaptive coaching, small batches, comprehensive study material, and end-to-end admission consulting.",
    url: "https://www.mbawizards.co.in/gmat-gre-coaching",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAT GRE Coaching | Personalized Test Prep — MBA Wizards",
    description:
      "Looking for expert GMAT GRE coaching? MBA Wizards offers personalized, adaptive coaching, small batches, comprehensive study material, and end-to-end admission consulting.",
  },
};

export const gmatGreJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "GMAT & GRE Dual Prep Coaching",
      description:
        "Comprehensive dual test preparation course for students targeting both GMAT and GRE to maximize business school and graduate admissions options.",
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
          name: "GMAT & GRE Coaching",
          item: "https://www.mbawizards.co.in/gmat-gre-coaching",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is GMAT the only exam accepted for management courses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, the GRE is now accepted by over 90% of business schools worldwide for MBA and specialized master's admissions.",
          },
        },
        {
          "@type": "Question",
          name: "Is GRE only for non-management courses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, top global business schools including Harvard, Stanford, Wharton, and INSEAD accept both GMAT and GRE scores without bias.",
          },
        },
        {
          "@type": "Question",
          name: "What is the main difference between GMAT and GRE content-wise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GMAT emphasizes data analysis, critical reasoning, and integrated data insights with no calculator in quant. GRE places heavy emphasis on advanced vocabulary, text completion, and includes an on-screen calculator for quant.",
          },
        },
        {
          "@type": "Question",
          name: "Which exam format is more challenging?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GMAT is question-adaptive (each question adjusts to your previous answer), whereas GRE is section-adaptive (the difficulty of Section 2 depends on your score in Section 1).",
          },
        },
        {
          "@type": "Question",
          name: "Can I apply to business schools with either?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, almost all accredited business schools accept both tests equally, allowing applicants to submit whichever score is stronger.",
          },
        },
        {
          "@type": "Question",
          name: "If undecided, which exam should I take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your quantitative and logic skills are stronger, GMAT is recommended. If your vocabulary and verbal comprehension are stronger, or if you are considering non-MBA master's degrees, take the GRE.",
          },
        },
        {
          "@type": "Question",
          name: "How do costs and exam lengths compare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GMAT Focus costs approximately $250–$275 with a test duration of 2 hours 15 minutes. GRE costs approximately $220–$231 with a test duration of 1 hour 58 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "How long are scores valid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both GMAT and GRE scores remain valid for 5 years from the test date.",
          },
        },
        {
          "@type": "Question",
          name: "Can I retake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can take the GMAT up to 5 times within a 12-month period. You can take the GRE once every 21 days, up to 5 times within any continuous 12-month period.",
          },
        },
        {
          "@type": "Question",
          name: "Which test provides better MBA admission chances?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While business schools report no preference, achieving a high percentile on either exam is what matters most. MBA Wizards offers diagnostic benchmarking to help you target your highest percentile exam.",
          },
        },
      ],
    },
  ],
};
