import type { Metadata } from "next";
import { gmatCitiesData } from "@/data/gmat-city-copy";

const data = gmatCitiesData.bangalore;

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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export const cityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: `MBA Wizards - GMAT Coaching in ${data.city}`,
      description: data.metaDescription,
      url: `https://www.mbawizards.co.in/${data.slug}`,
      telephone: data.phone,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mbawizards.co.in" },
        { "@type": "ListItem", position: 2, name: "GMAT Coaching", item: "https://www.mbawizards.co.in/gmat-coaching" },
        { "@type": "ListItem", position: 3, name: data.city, item: `https://www.mbawizards.co.in/${data.slug}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
