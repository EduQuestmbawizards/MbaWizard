import type { GmatCatCityData } from "@/data/gmatcat-city-copy";

export function generateSchema(data: GmatCatCityData) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MBA Wizards",
    "description": data.metaDescription,
    "url": "https://www.mbawizards.co.in/gmat-cat-coaching-in-hyderabad",
    "telephone": data.phone,
    "email": data.email,
  };
}
