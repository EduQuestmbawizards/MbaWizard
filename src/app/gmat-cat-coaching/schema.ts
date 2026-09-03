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
    locale: "en_US",
    type: "website",
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
  ],
};
