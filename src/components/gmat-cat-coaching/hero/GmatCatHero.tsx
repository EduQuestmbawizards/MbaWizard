"use client";

import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./GmatCatHero.module.css";

export default function GmatCatHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={styles.ambientGlow} />
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

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={99} suffix=".8 %ile" />
            </div>
            <div className={styles.statLabel}>Top CAT Result</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={720} suffix="+" />
            </div>
            <div className={styles.statLabel}>Top GMAT Score</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={21} suffix=" IIMs" />
            </div>
            <div className={styles.statLabel}>IIM Calls Converted</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className={styles.statLabel}>Mentorship Track</div>
          </div>
        </div>
      </div>
    </section>
  );
}

