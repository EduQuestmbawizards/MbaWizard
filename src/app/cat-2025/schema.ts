import type { Metadata } from "next";

export const catMetadata: Metadata = {
  title: "Crack CAT 2025 / 2026 with MBA Wizards | Best CAT Coaching",
  description:
    "Top CAT coaching by IIT Roorkee alumni. Master Quantitative Aptitude, DILR, and VARC with our ability-based Manthan Methodology. Classroom & online options.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/cat-2025",
  },
  openGraph: {
    title: "Crack CAT 2025 / 2026 with MBA Wizards | Best CAT Coaching",
    description:
      "Top CAT coaching by IIT Roorkee alumni. Master Quantitative Aptitude, DILR, and VARC with our ability-based Manthan Methodology. Classroom & online options.",
    url: "https://www.mbawizards.co.in/cat-2025",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crack CAT 2025 / 2026 with MBA Wizards | Best CAT Coaching",
    description:
      "Top CAT coaching by IIT Roorkee alumni. Master Quantitative Aptitude, DILR, and VARC with our ability-based Manthan Methodology. Classroom & online options.",
  },
};

export const catJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "CAT Coaching Program",
      description:
        "Comprehensive preparation for the Common Admission Test (CAT) targeting IIMs and top Indian business schools, covering QA, DILR, and VARC.",
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
          name: "CAT 2025",
          item: "https://www.mbawizards.co.in/cat-2025",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the eligibility criteria for CAT 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Candidates must hold a Bachelor’s Degree with at least 50% marks or equivalent CGPA (45% for SC/ST/PwD), or be in the final year of their bachelor's degree.",
          },
        },
        {
          "@type": "Question",
          name: "What is the structure of the CAT exam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The CAT exam is a 2-hour computer-based test comprising 3 sections: Verbal Ability & Reading Comprehension (VARC - 40 min), Data Interpretation & Logical Reasoning (DILR - 40 min), and Quantitative Aptitude (QA - 40 min).",
          },
        },
        {
          "@type": "Question",
          name: "What percentile is required for top IIMs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For older IIMs (IIM Ahmedabad, Bangalore, Calcutta), competitive general category applicants typically need a 99+ percentile, though composite score criteria also evaluate academics, work experience, and gender/academic diversity.",
          },
        },
        {
          "@type": "Question",
          name: "How does MBA Wizards prepare students for CAT 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Ability-Based Manthan model offers personalized diagnostic assessments, 99+ percentile IIM mentors, comprehensive mock test series with AI analytics, and complete WAT-PI preparation.",
          },
        },
      ],
    },
  ],
};
