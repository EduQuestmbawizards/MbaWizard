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
    locale: "en_US",
    type: "website",
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
  ],
};
