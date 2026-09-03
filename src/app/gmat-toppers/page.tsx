import type { Metadata } from "next";
import { toppersMetadata, toppersJsonLd } from "./schema";
import GmatToppersContent from "./gmat-toppers";

export const metadata: Metadata = toppersMetadata;

export default function GmatToppersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toppersJsonLd) }}
      />
      <GmatToppersContent />
    </>
  );
}
