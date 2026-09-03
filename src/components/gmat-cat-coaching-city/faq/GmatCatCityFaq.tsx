import FaqAccordion, { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

interface GmatCatCityFaqProps {
  city: string;
  faqs: FaqItem[];
}

export default function GmatCatCityFaq({ city, faqs }: GmatCatCityFaqProps) {
  return (
    <FaqAccordion
      items={faqs}
      pretitle="FAQs"
      title="Frequently Asked About GMAT+CAT Coaching in"
      titleHighlight={city}
      subtitle={`Common questions from students joining our dual GMAT+CAT coaching in ${city}.`}
    />
  );
}
