import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-pune-schema";
import GmatCatPuneContent from "./gmat-cat-coaching-in-pune";

const data = gmatCatCitiesData.pune;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatPunePage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatPuneContent />
    </>
  );
}
