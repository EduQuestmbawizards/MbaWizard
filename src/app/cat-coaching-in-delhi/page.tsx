import type { Metadata } from "next";
import { catCitiesData } from "@/data/cat-city-copy";
import { generateSchema } from "./cat-coaching-in-delhi-schema";
import CatDelhiContent from "./cat-coaching-in-delhi";

const data = catCitiesData.delhi;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CatDelhiPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CatDelhiContent />
    </>
  );
}
