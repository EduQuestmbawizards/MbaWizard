import type { Metadata } from "next";

export const corporateMetadata: Metadata = {
  title: "Corporate Training & Campus Placement Preparation | MBA Wizards",
  description:
    "Comprehensive corporate training, campus placement aptitude modules, and TCS-iON CCQT preparation by MBA Wizards. University partnerships and executive coaching.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/corporate-training",
  },
  openGraph: {
    title: "Corporate Training & Campus Placement Preparation | MBA Wizards",
    description:
      "Comprehensive corporate training, campus placement aptitude modules, and TCS-iON CCQT preparation by MBA Wizards. University partnerships and executive coaching.",
    url: "https://www.mbawizards.co.in/corporate-training",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const corporateJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Corporate Training & Campus Placement Preparation",
      description:
        "Institutional placement training and corporate qualification courses covering aptitude, GDs, technical and HR interviews, and TCS-iON CCQT.",
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
          name: "Corporate Training",
          item: "https://www.mbawizards.co.in/corporate-training",
        },
      ],
    },
  ],
};
