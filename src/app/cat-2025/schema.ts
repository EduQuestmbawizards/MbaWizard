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
    locale: "en_US",
    type: "website",
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
  ],
};
