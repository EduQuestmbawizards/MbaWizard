import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GreChandigarhContent from "./gre-coaching-in-chandigarh";

export const metadata: Metadata = cityMetadata;

export default function GreChandigarhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GreChandigarhContent />
    </>
  );
}
