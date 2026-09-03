import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GreMumbaiContent from "./gre-coaching-in-mumbai";

export const metadata: Metadata = cityMetadata;

export default function GreMumbaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GreMumbaiContent />
    </>
  );
}
