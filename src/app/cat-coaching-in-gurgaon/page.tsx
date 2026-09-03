import type { Metadata } from "next";
import { catCitiesData } from "@/data/cat-city-copy";
import { generateSchema } from "./cat-coaching-in-gurgaon-schema";
import CatGurgaonContent from "./cat-coaching-in-gurgaon";

const data = catCitiesData.gurgaon;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CatGurgaonPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CatGurgaonContent />
    </>
  );
}
