import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreNoidaContent from "./gmatgre-coaching-in-noida";

export const metadata: Metadata = cityMetadata;

export default function GmatGreNoidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreNoidaContent />
    </>
  );
}
