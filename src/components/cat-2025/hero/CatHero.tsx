"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./CatHero.module.css";

export default function CatHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target 99+ Percentile</span>
        <h1 className={styles.title}>
          Crack CAT with <span className={styles.titleHighlight}>MBA Wizards</span>
        </h1>
        <p className={styles.description}>
          Discover the perfect CAT coaching experience powered by our proprietary Manthan Ability-Based Methodology. Small batches, IIT/IIM mentors, and proven 99%ile results.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book a Free Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20CAT%20Coaching.`}
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
