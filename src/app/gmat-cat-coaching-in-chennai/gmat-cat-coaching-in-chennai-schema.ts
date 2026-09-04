import type { GmatCatCityData } from "@/data/gmatcat-city-copy";

export function generateSchema(data: GmatCatCityData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: `MBA Wizards - GMAT+CAT Coaching in ${data.city}`,
        description: data.metaDescription,
        url: `https://www.mbawizards.co.in/${data.slug}`,
        telephone: data.phone,
        email: data.email,
        ...(data.address
          ? {
              address: {
                "@type": "PostalAddress",
                streetAddress: data.address,
                addressLocality: data.city,
                addressCountry: "IN",
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mbawizards.co.in" },
          { "@type": "ListItem", position: 2, name: "GMAT+CAT Coaching", item: "https://www.mbawizards.co.in/gmat-cat-coaching" },
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
}
