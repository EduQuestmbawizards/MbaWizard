import type { Metadata } from "next";
import { catCitiesData } from "@/data/cat-city-copy";
import { generateSchema } from "./cat-coaching-in-chandigarh-schema";
import CatChandigarhContent from "./cat-coaching-in-chandigarh";

const data = catCitiesData.chandigarh;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CatChandigarhPage() {
  const schema = generateSchema(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CatChandigarhContent />
    </>
  );
}
