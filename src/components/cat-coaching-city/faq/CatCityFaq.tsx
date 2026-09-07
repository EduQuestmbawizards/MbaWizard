import FaqAccordion, { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

interface CatCityFaqProps {
  city: string;
  faqs: FaqItem[];
}

export default function CatCityFaq({ city, faqs }: CatCityFaqProps) {
  return (
    <FaqAccordion
      items={faqs}
      pretitle="FAQs"
      title={`Frequently Asked About CAT Coaching in`}
      titleHighlight={city}
      subtitle={`Common questions from students who joined our CAT coaching in ${city}.`}
    />
  );
}
