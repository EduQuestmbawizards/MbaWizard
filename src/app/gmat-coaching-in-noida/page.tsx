import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatNoidaContent from "./gmat-coaching-in-noida";

export const metadata: Metadata = cityMetadata;

export default function GmatNoidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatNoidaContent />
    </>
  );
}
