import type { Metadata } from "next";
import { catCitiesData } from "@/data/cat-city-copy";
import { generateSchema } from "./cat-coaching-in-mumbai-schema";
import CatMumbaiContent from "./cat-coaching-in-mumbai";

const data = catCitiesData.mumbai;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CatMumbaiPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CatMumbaiContent />
    </>
  );
}
