import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-hyderabad-schema";
import GmatCatHyderabadContent from "./gmat-cat-coaching-in-hyderabad";

const data = gmatCatCitiesData.hyderabad;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatHyderabadPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatHyderabadContent />
    </>
  );
}
