"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./GreHero.module.css";

export default function GreHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target GRE 320+ Score</span>
        <h1 className={styles.title}>
          Crack the GRE with Confidence – <span className={styles.titleHighlight}>Elite Coaching Program</span>
        </h1>
        <p className={styles.description}>
          Tailored Strategies. Expert Mentors. Top Global MBA & MS Admits. Start your 3-day trial demo today.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book a Free Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GRE%20Coaching.`}
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
