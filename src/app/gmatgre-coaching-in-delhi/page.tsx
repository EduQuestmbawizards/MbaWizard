import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreDelhiContent from "./gmatgre-coaching-in-delhi";

export const metadata: Metadata = cityMetadata;

export default function GmatGreDelhiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreDelhiContent />
    </>
  );
}
