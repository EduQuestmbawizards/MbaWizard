import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreGurgaonContent from "./gmat-gre-coaching-in-gurgaon";

export const metadata: Metadata = cityMetadata;

export default function GmatGreGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreGurgaonContent />
    </>
  );
}
