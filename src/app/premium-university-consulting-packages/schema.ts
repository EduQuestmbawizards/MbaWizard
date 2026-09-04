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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium University Consulting Packages | Top Global B-Schools — MBA Wizards",
    description:
      "End-to-end admissions consulting for Harvard, Stanford, Wharton, INSEAD, LBS, and ISB. Essay brainstorming, resume polishing, SOP mastery, and mock interviews.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does the MBA Wizards Admissions Consulting package include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our package includes 1-on-1 profile evaluation, target business school shortlisting, essay and SOP brainstorming and multi-round editing, resume revamp, recommendation strategy, and rigorous mock interviews.",
          },
        },
        {
          "@type": "Question",
          name: "Which business schools do your consultants specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our consultants specialize in US M7 programs (Harvard, Stanford, Wharton, Columbia, Booth, Kellogg, MIT Sloan), top European schools (INSEAD, LBS, Oxford Said, Cambridge Judge, HEC Paris), and ISB.",
          },
        },
        {
          "@type": "Question",
          name: "When should I sign up for MBA admissions consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally 6 to 12 months before application deadlines (Round 1 in Sept/Oct, Round 2 in Jan). This provides enough runway for strategic profile enhancement and multiple essay iterations.",
          },
        },
        {
          "@type": "Question",
          name: "Do you assist with scholarship applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, scholarship strategy is integrated into school selection and essay positioning. Our students have secured over $5 million in cumulative merit-based MBA scholarships.",
          },
        },
      ],
    },
  ],
};
