import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-mumbai-schema";
import GmatCatMumbaiContent from "./gmat-cat-coaching-in-mumbai";

const data = gmatCatCitiesData.mumbai;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatMumbaiPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatMumbaiContent />
    </>
  );
}
