import type { Metadata } from "next";

export const toppersMetadata: Metadata = {
  title: "GMAT Toppers Hall of Fame | Top GMAT Scores 760 - 780 — MBA Wizards",
  description:
    "Meet MBA Wizards GMAT toppers who scored 760, 770, and 780 and secured admissions into Harvard, Stanford, Wharton, Kellogg, INSEAD, and ISB.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-toppers",
  },
  openGraph: {
    title: "GMAT Toppers Hall of Fame | Top GMAT Scores 760 - 780 — MBA Wizards",
    description:
      "Meet MBA Wizards GMAT toppers who scored 760, 770, and 780 and secured admissions into Harvard, Stanford, Wharton, Kellogg, INSEAD, and ISB.",
    url: "https://www.mbawizards.co.in/gmat-toppers",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAT Toppers Hall of Fame | Top GMAT Scores 760 - 780 — MBA Wizards",
    description:
      "Meet MBA Wizards GMAT toppers who scored 760, 770, and 780 and secured admissions into Harvard, Stanford, Wharton, Kellogg, INSEAD, and ISB.",
  },
};

export const toppersJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "GMAT Toppers Hall of Fame",
      description:
        "Verified student high scores and admits from MBA Wizards GMAT preparation programs.",
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
          name: "GMAT Toppers",
          item: "https://www.mbawizards.co.in/gmat-toppers",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the highest GMAT score achieved by an MBA Wizards student?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our students have achieved scores up to 780 on the legacy GMAT and equivalent 99th+ percentile marks (715+) on the GMAT Focus Edition.",
          },
        },
        {
          "@type": "Question",
          name: "Which business schools have MBA Wizards toppers been admitted to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards alumni have secured admits with substantial scholarships to Harvard Business School, Stanford GSB, Wharton, INSEAD, London Business School, Kellogg, Columbia, and ISB.",
          },
        },
        {
          "@type": "Question",
          name: "What average score improvement do students see at MBA Wizards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students typically see an average score improvement of 110+ points (or 15+ percentile jump on GMAT Focus) through our Ability-Based Manthan pedagogy.",
          },
        },
        {
          "@type": "Question",
          name: "How does MBA Wizards help students reach 700+ / 98th percentile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through personalized error logs, targeted weak-area remediation drills, timing strategy masterclasses, and 1-on-1 mentorship with 99th percentile instructors.",
          },
        },
      ],
    },
  ],
};
