import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreMumbaiContent from "./gmatgre-coaching-in-mumbai";

export const metadata: Metadata = cityMetadata;

export default function GmatGreMumbaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreMumbaiContent />
    </>
  );
}
