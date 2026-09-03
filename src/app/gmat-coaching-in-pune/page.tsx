import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatPuneContent from "./gmat-coaching-in-pune";

export const metadata: Metadata = cityMetadata;

export default function GmatPunePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatPuneContent />
    </>
  );
}
