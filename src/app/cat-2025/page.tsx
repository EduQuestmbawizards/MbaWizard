import type { Metadata } from "next";
import { catMetadata, catJsonLd } from "./schema";
import Cat2025Content from "./cat-2025";

export const metadata: Metadata = catMetadata;

export default function Cat2025Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catJsonLd) }}
      />
      <Cat2025Content />
    </>
  );
}
