import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatMumbaiContent from "./gmat-coaching-in-mumbai";

export const metadata: Metadata = cityMetadata;

export default function GmatMumbaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatMumbaiContent />
    </>
  );
}
