import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreHyderabadContent from "./gmatgre-coaching-in-hyderabad";

export const metadata: Metadata = cityMetadata;

export default function GmatGreHyderabadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreHyderabadContent />
    </>
  );
}
