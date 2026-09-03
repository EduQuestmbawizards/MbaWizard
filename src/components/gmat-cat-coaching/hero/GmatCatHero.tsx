"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./GmatCatHero.module.css";

export default function GmatCatHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Dual Track Prep</span>
        <h1 className={styles.title}>
          Supercharge Your <span className={styles.titleHighlight}>GMAT &amp; CAT Prep</span>
        </h1>
        <p className={styles.description}>
          Maximize your MBA admission opportunities in India (IIMs, ISB) and abroad (Harvard, INSEAD) with unified concept coaching.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book a Free Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GMAT%26CAT%20Coaching.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
