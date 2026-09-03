import type { Metadata } from "next";
import { gmatGreCitiesData } from "@/data/gmatgre-city-copy";

const data = gmatGreCitiesData.gurgaon;

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
      name: `MBA Wizards - GMAT+GRE Coaching in ${data.city}`,
      description: data.metaDescription,
      url: `https://www.mbawizards.co.in/${data.slug}`,
      telephone: data.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mbawizards.co.in" },
        { "@type": "ListItem", position: 2, name: "GMAT+GRE Coaching", item: "https://www.mbawizards.co.in/gmat-gre-coaching" },
        { "@type": "ListItem", position: 3, name: data.city, item: `https://www.mbawizards.co.in/${data.slug}` },
      ],
    },
  ],
};
