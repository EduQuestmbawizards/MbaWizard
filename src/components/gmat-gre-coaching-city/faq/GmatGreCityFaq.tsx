import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatGreCityFaq.module.css";

interface GmatGreCityFaqProps {
  city: string;
  faqs: FaqItem[];
}

export default function GmatGreCityFaq({ city, faqs }: GmatGreCityFaqProps) {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={faqs}
        pretitle={`${city} Dual Prep FAQ`}
        title="Frequently Asked Questions in"
        titleHighlight={city}
        subtitle={`Everything you need to know about preparing for both GMAT and GRE in ${city}.`}
      />
    </div>
  );
}
