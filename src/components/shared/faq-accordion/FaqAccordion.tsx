"use client";

import { useState } from "react";
import styles from "./FaqAccordion.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  pretitle?: string;
}

export default function FaqAccordion({
  items,
  title = "Frequently Asked",
  titleHighlight = "Questions",
  subtitle = "Find quick answers to common questions about our coaching programs and admissions process.",
  pretitle = "Got Questions?",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.headerArea}>
          {pretitle && <span className={styles.sectionPre}>{pretitle}</span>}
          <h2 className={styles.sectionTitle}>
            {title} {titleHighlight && <span className={styles.sectionTitleHighlight}>{titleHighlight}</span>}
          </h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        <div className={styles.accordionList}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={item.question} className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={styles.questionButton}
                  onClick={() => toggleIndex(index)}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">+</span>
                </button>

                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.answerPanel}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
