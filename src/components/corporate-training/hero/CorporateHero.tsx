"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./CorporateHero.module.css";

export default function CorporateHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Campus Placements &amp; Corporate Excellence</span>
        <h1 className={styles.title}>
          Corporate Training &amp; <span className={styles.titleHighlight}>Placement Prep</span>
        </h1>
        <p className={styles.description}>
          Equipping college graduates and young professionals with corporate readiness, TCS-iON CCQT certification mastery, aptitude problem solving, and executive interview techniques.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book Institutional Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20interested%20in%20Corporate%20Training.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Talk to Training Head
          </a>
        </div>
      </div>
    </section>
  );
}
