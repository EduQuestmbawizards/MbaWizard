import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatChandigarhContent from "./gmat-coaching-in-chandigarh";

export const metadata: Metadata = cityMetadata;

export default function GmatChandigarhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatChandigarhContent />
    </>
  );
}
