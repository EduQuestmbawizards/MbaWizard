import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-gurgaon-schema";
import GmatCatGurgaonContent from "./gmat-cat-coaching-in-gurgaon";

const data = gmatCatCitiesData.gurgaon;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatGurgaonPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatGurgaonContent />
    </>
  );
}
