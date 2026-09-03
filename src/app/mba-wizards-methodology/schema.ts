import type { Metadata } from "next";

export const methodologyMetadata: Metadata = {
  title: "MBA Wizards Methodology | Manthan Ability-Based Learning Model",
  description:
    "Discover the MBA Wizards Manthan Methodology: an ability-based adaptive model built by IIT Roorkee alumni. 5-step scientific system for GMAT and CAT success.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/mba-wizards-methodology",
  },
  openGraph: {
    title: "MBA Wizards Methodology | Manthan Ability-Based Learning Model",
    description:
      "Discover the MBA Wizards Manthan Methodology: an ability-based adaptive model built by IIT Roorkee alumni. 5-step scientific system for GMAT and CAT success.",
    url: "https://www.mbawizards.co.in/mba-wizards-methodology",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const methodologyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "MBA Wizards Methodology - Manthan Ability-Based Model",
      description:
        "Comprehensive breakdown of the proprietary test preparation methodology engineered by MBA Wizards for GMAT and CAT aspirants.",
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
          name: "Methodology",
          item: "https://www.mbawizards.co.in/mba-wizards-methodology",
        },
      ],
    },
  ],
};
