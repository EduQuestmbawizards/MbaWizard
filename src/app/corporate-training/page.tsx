import type { Metadata } from "next";
import { corporateMetadata, corporateJsonLd } from "./schema";
import CorporateTrainingContent from "./corporate-training";

export const metadata: Metadata = corporateMetadata;

export default function CorporateTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateJsonLd) }}
      />
      <CorporateTrainingContent />
    </>
  );
}
