import type { Metadata } from "next";
import { greCitiesData } from "@/data/gre-city-copy";

const data = greCitiesData.mumbai;

export const cityMetadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://www.mbawizards.co.in/${data.slug}`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://www.mbawizards.co.in/${data.slug}`,
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const cityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: `MBA Wizards - GRE Coaching in ${data.city}`,
      description: data.metaDescription,
      url: `https://www.mbawizards.co.in/${data.slug}`,
      telephone: data.phone,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mbawizards.co.in" },
        { "@type": "ListItem", position: 2, name: "GRE Coaching", item: "https://www.mbawizards.co.in/gre-coaching-classes" },
        { "@type": "ListItem", position: 3, name: data.city, item: `https://www.mbawizards.co.in/${data.slug}` },
      ],
    },
  ],
};
