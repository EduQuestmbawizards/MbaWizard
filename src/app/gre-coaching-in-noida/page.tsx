import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GreNoidaContent from "./gre-coaching-in-noida";

export const metadata: Metadata = cityMetadata;

export default function GreNoidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GreNoidaContent />
    </>
  );
}
