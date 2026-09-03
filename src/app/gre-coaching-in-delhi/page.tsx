import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GreDelhiContent from "./gre-coaching-in-delhi";

export const metadata: Metadata = cityMetadata;

export default function GreDelhiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GreDelhiContent />
    </>
  );
}
