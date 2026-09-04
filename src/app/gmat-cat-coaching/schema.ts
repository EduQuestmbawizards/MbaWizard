import type { Metadata } from "next";

export const gmatCatMetadata: Metadata = {
  title: "GMAT + CAT Coaching | Comprehensive MBA Prep — MBA Wizards",
  description:
    "Prepare for both GMAT and CAT with MBA Wizards. Unified quantitative, verbal, and data interpretation syllabus designed for IIMs, ISB, and global business schools.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-cat-coaching",
  },
  openGraph: {
    title: "GMAT + CAT Coaching | Comprehensive MBA Prep — MBA Wizards",
    description:
      "Prepare for both GMAT and CAT with MBA Wizards. Unified quantitative, verbal, and data interpretation syllabus designed for IIMs, ISB, and global business schools.",
    url: "https://www.mbawizards.co.in/gmat-cat-coaching",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAT + CAT Coaching | Comprehensive MBA Prep — MBA Wizards",
    description:
      "Prepare for both GMAT and CAT with MBA Wizards. Unified quantitative, verbal, and data interpretation syllabus designed for IIMs, ISB, and global business schools.",
  },
};

export const gmatCatJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "GMAT + CAT Dual Coaching Program",
      description:
        "Comprehensive training covering core quantitative aptitude, verbal ability, reading comprehension, and data interpretation for both CAT and GMAT exams.",
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
          name: "GMAT + CAT Coaching",
          item: "https://www.mbawizards.co.in/gmat-cat-coaching",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I prepare for CAT and GMAT together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, with consistent effort and a structured approach, preparing for CAT and GMAT together is highly feasible since more than 75% of the quantitative and verbal syllabus overlaps.",
          },
        },
        {
          "@type": "Question",
          name: "Is CAT preparation enough for GMAT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While CAT provides a solid foundation in quant and data interpretation, GMAT tests unique question patterns such as Sentence Correction, Critical Reasoning, and Data Insights that require specific targeted preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Which is easier, CAT or GMAT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GMAT offers a more clearly structured, question-adaptive syllabus with flexible test dates year-round, whereas CAT is an unpredictable, high-stakes single-day exam with sectional time locks.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If starting from scratch, 6 to 8 months of dedicated dual preparation is recommended to master foundational concepts and take ample full-length adaptive mocks.",
          },
        },
        {
          "@type": "Question",
          name: "How should I approach dual prep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with CAT foundations in Quantitative Aptitude and Verbal Ability, then introduce GMAT-specific strategies, computer-adaptive mock tests, and Data Insights sections.",
          },
        },
        {
          "@type": "Question",
          name: "Are coaching classes available for combined prep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, MBA Wizards offers a specialized dual GMAT+CAT coaching program designed by IIT and IIM alumni mentors with tailored milestone tracks.",
          },
        },
        {
          "@type": "Question",
          name: "How do they differ in exam pattern?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CAT consists of 3 fixed 40-minute sections (total 2 hours) with no calculator for VARC/DILR and basic screen calculator for Quant. GMAT Focus has 3 flexible 45-minute sections (total 2 hours 15 minutes) with question review and editing capabilities.",
          },
        },
        {
          "@type": "Question",
          name: "Is GMAT valid for IIMs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, top IIMs (such as IIM Ahmedabad PGPX, IIM Bangalore EPGP, and IIM Calcutta MBAEx) accept GMAT for executive MBA programs, while CAT is required for 2-year flagship PGP programs.",
          },
        },
      ],
    },
  ],
};
