import type { Metadata } from "next";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import { generateSchema } from "./gmat-cat-coaching-in-chandigarh-schema";
import GmatCatChandigarhContent from "./gmat-cat-coaching-in-chandigarh";

const data = gmatCatCitiesData.chandigarh;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GmatCatChandigarhPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GmatCatChandigarhContent />
    </>
  );
}
