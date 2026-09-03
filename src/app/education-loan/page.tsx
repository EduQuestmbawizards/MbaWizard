import type { Metadata } from "next";
import { loanMetadata, loanJsonLd } from "./schema";
import EducationLoanContent from "./education-loan";

export const metadata: Metadata = loanMetadata;

export default function EducationLoanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loanJsonLd) }}
      />
      <EducationLoanContent />
    </>
  );
}
