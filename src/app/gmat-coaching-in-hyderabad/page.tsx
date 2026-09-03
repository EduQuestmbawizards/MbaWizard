import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatHyderabadContent from "./gmat-coaching-in-hyderabad";

export const metadata: Metadata = cityMetadata;

export default function GmatHyderabadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatHyderabadContent />
    </>
  );
}
