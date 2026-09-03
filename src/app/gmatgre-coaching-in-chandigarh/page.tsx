import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreChandigarhContent from "./gmatgre-coaching-in-chandigarh";

export const metadata: Metadata = cityMetadata;

export default function GmatGreChandigarhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreChandigarhContent />
    </>
  );
}
