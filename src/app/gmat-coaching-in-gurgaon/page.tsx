import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGurgaonContent from "./gmat-coaching-in-gurgaon";

export const metadata: Metadata = cityMetadata;

export default function GmatGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGurgaonContent />
    </>
  );
}
