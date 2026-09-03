"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./GmatGreHero.module.css";

export default function GmatGreHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Dual Test Preparation Track</span>
        <h1 className={styles.title}>
          GMAT &amp; GRE Coaching by <span className={styles.titleHighlight}>MBA Wizards</span>
        </h1>
        <p className={styles.description}>
          Tailored Strategies. Expert Mentors. Top MBA Admits. Double your admission odds across global business schools and MS programs.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book a Free Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GMAT%26GRE%20Coaching.`}
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
