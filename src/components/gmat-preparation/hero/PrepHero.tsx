"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./PrepHero.module.css";

export default function PrepHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target 705+ Focus Edition</span>
        <h1 className={styles.title}>
          Comprehensive <span className={styles.titleHighlight}>GMAT Preparation</span>
        </h1>
        <p className={styles.description}>
          Everything you need to conquer the GMAT: pattern breakdowns, registration guides, level-based study plans, and 70+ hours of live mentor-led instruction.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book a Free Prep Session
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20planning%20my%20GMAT%20preparation.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Consult an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
