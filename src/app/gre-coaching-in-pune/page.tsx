import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GrePuneContent from "./gre-coaching-in-pune";

export const metadata: Metadata = cityMetadata;

export default function GrePunePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GrePuneContent />
    </>
  );
}
