import type { Metadata } from "next";
import { catCitiesData } from "@/data/cat-city-copy";
import { generateSchema } from "./cat-coaching-in-hyderabad-schema";
import CatHyderabadContent from "./cat-coaching-in-hyderabad";

const data = catCitiesData.hyderabad;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CatHyderabadPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CatHyderabadContent />
    </>
  );
}
