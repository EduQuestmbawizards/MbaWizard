"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./MethodologyHero.module.css";

export default function MethodologyHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Ability-Based Pedagogy</span>
        <h1 className={styles.title}>
          The <span className={styles.titleHighlight}>Manthan Methodology</span>
        </h1>
        <p className={styles.description}>
          Our proprietary, scientific adaptive model designed for mental perseverance. Engineered by IIT Roorkee alumni to turn weaknesses into top percentile scores.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Experience A Class Demo
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27d%20like%20to%20learn%20more%20about%20your%20methodology.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Speak to an IIT Mentor
          </a>
        </div>
      </div>
    </section>
  );
}
