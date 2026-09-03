import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGrePuneContent from "./gmatgre-coaching-in-pune";

export const metadata: Metadata = cityMetadata;

export default function GmatGrePunePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGrePuneContent />
    </>
  );
}
