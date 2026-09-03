import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatCityFaq.module.css";

interface GmatCityFaqProps {
  city: string;
  faqs: FaqItem[];
}

export default function GmatCityFaq({ city, faqs }: GmatCityFaqProps) {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={faqs}
        pretitle={`${city} FAQ`}
        title="Frequently Asked Questions in"
        titleHighlight={city}
        subtitle={`Everything you need to know about preparing for the GMAT with MBA Wizards in ${city}.`}
      />
    </div>
  );
}
