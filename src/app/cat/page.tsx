import type { Metadata } from "next";
import { catMetadata, catJsonLd } from "./schema";
import CatContent from "./cat";

export const metadata: Metadata = catMetadata;

export default function CatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catJsonLd) }}
      />
      <CatContent />
    </>
  );
}
