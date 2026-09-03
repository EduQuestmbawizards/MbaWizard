import type { Metadata } from "next";

export const gmatMetadata: Metadata = {
  title: "Best GMAT Coaching | Expert Preparation Classes | MBA Wizards",
  description:
    "Expert faculty, personalized training, and guaranteed results for top MBA admissions. Prepare for GMAT Focus Edition with 705+ scorers in small batches.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-coaching",
  },
  openGraph: {
    title: "Best GMAT Coaching | Expert Preparation Classes | MBA Wizards",
    description:
      "Expert faculty, personalized training, and guaranteed results for top MBA admissions. Prepare for GMAT Focus Edition with 705+ scorers in small batches.",
    url: "https://www.mbawizards.co.in/gmat-coaching",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const gmatJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "GMAT Prep Coaching — Focus Edition",
      description:
        "Comprehensive, ability-based coaching for the GMAT Focus Edition covering Quantitative Reasoning, Verbal Reasoning, and Data Insights with 1-on-1 strategy sessions.",
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
          name: "GMAT Coaching",
          item: "https://www.mbawizards.co.in/gmat-coaching",
        },
      ],
    },
  ],
};
