import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-chennai-schema";
import GmatCatChennaiContent from "./gmat-cat-coaching-in-chennai";

const data = gmatCatCitiesData.chennai;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatChennaiPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatChennaiContent />
    </>
  );
}
