import type { Metadata } from "next";

export const gmatGreMetadata: Metadata = {
  title: "GMAT & GRE Coaching by MBA Wizards | Dual Prep Program",
  description:
    "Master both GMAT and GRE with MBA Wizards' integrated dual coaching program. Tailored strategies, common syllabus optimization, and expert mentors.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-gre-coaching",
  },
  openGraph: {
    title: "GMAT & GRE Coaching by MBA Wizards | Dual Prep Program",
    description:
      "Master both GMAT and GRE with MBA Wizards' integrated dual coaching program. Tailored strategies, common syllabus optimization, and expert mentors.",
    url: "https://www.mbawizards.co.in/gmat-gre-coaching",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
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
  ],
};
