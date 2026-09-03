import type { CatCityData } from "@/data/cat-city-copy";

export function generateSchema(data: CatCityData) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MBA Wizards",
    "description": data.metaDescription,
    "url": "https://www.mbawizards.co.in/cat-coaching-in-gurgaon",
    "telephone": data.phone,
    "email": data.email,
  };
}
