import type { Metadata } from "next";
import { prepMetadata, prepJsonLd } from "./schema";
import GmatPreparationContent from "./gmat-preparation";

export const metadata: Metadata = prepMetadata;

export default function GmatPreparationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prepJsonLd) }}
      />
      <GmatPreparationContent />
    </>
  );
}
