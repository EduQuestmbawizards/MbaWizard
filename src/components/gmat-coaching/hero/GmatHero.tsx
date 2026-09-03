"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./GmatHero.module.css";

export default function GmatHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target GMAT 705+ Focus Edition</span>
        <h1 className={styles.title}>
          Top <span className={styles.titleHighlight}>GMAT Prep Coaching</span>
        </h1>
        <p className={styles.description}>
          Expert IIT/IIM faculty, personalized ability-based training, and guaranteed results for top global and Indian MBA admissions.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book a Free Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GMAT%20Coaching.`}
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
