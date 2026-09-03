"use client";

import { useState } from "react";
import styles from "./MythVsFact.module.css";

export interface MythFactPair {
  myth: string;
  fact: string;
  takeaway?: string;
}

interface MythVsFactProps {
  exam: string;
  items: MythFactPair[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function MythVsFact({
  exam,
  items,
  title = "Myths vs Reality:",
  titleHighlight,
  subtitle,
}: MythVsFactProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const computedHighlight = titleHighlight || `${exam} Facts`;
  const computedSubtitle =
    subtitle ||
    `Cut through rumors, internet misinformation, and outdated test prep advice. Here is the verified truth about ${exam} preparation.`;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Truth &amp; Strategy</span>
          <h2 className={styles.title}>
            {title} <span className={styles.titleHighlight}>{computedHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{computedSubtitle}</p>
        </div>

        <div className={styles.accordionList}>
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const btnId = `myth-btn-${idx}`;
            const panelId = `myth-panel-${idx}`;

            return (
              <div key={idx} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                >
                  <div className={styles.mythRow}>
                    <span className={styles.mythBadge}>❌ Myth</span>
                    <span className={styles.mythText}>{item.myth}</span>
                  </div>
                  <span className={styles.chevron} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className={styles.panel}>
                    <div className={styles.factRow}>
                      <span className={styles.factBadge}>✅ Fact</span>
                      <p className={styles.factText}>{item.fact}</p>
                    </div>
                    {item.takeaway && (
                      <div className={styles.takeawayBox}>
                        <span className={styles.takeawayLabel}>💡 Strategic Takeaway:</span>
                        <span className={styles.takeawayText}>{item.takeaway}</span>
                      </div>
                    )}
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
