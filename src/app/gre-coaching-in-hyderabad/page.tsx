import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GreHyderabadContent from "./gre-coaching-in-hyderabad";

export const metadata: Metadata = cityMetadata;

export default function GreHyderabadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GreHyderabadContent />
    </>
  );
}
