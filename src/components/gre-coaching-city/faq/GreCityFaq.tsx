import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GreCityFaq.module.css";

interface GreCityFaqProps {
  city: string;
  faqs: FaqItem[];
}

export default function GreCityFaq({ city, faqs }: GreCityFaqProps) {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={faqs}
        pretitle={`${city} GRE FAQ`}
        title="Frequently Asked Questions in"
        titleHighlight={city}
        subtitle={`Key answers about GRE preparation, batch timings, and admissions support in ${city}.`}
      />
    </div>
  );
}
