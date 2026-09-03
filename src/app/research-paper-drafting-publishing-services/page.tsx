import type { Metadata } from "next";
import { researchMetadata, researchJsonLd } from "./schema";
import ResearchPaperContent from "./research-paper-drafting-publishing-services";

export const metadata: Metadata = researchMetadata;

export default function ResearchPaperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
      />
      <ResearchPaperContent />
    </>
  );
}
