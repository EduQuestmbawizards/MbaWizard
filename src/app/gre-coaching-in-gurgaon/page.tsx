import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GreGurgaonContent from "./gre-coaching-in-gurgaon";

export const metadata: Metadata = cityMetadata;

export default function GreGurgaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GreGurgaonContent />
    </>
  );
}
