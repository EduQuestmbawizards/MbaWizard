import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-bangalore-schema";
import GmatCatBangaloreContent from "./gmat-cat-coaching-in-bangalore";

const data = gmatCatCitiesData.bangalore;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatBangalorePage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatBangaloreContent />
    </>
  );
}
