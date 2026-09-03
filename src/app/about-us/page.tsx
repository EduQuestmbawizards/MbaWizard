import type { Metadata } from "next";
import { aboutMetadata, aboutJsonLd } from "./schema";
import AboutUsContent from "./about-us";

export const metadata: Metadata = aboutMetadata;

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutUsContent />
    </>
  );
}
