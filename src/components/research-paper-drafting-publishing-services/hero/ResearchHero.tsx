"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./ResearchHero.module.css";

export default function ResearchHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Stand Out in Global Admissions</span>
        <h1 className={styles.title}>
          Research Paper Drafting &amp; <span className={styles.titleHighlight}>Publishing Services</span>
        </h1>
        <p className={styles.description}>
          Unlock academic distinction for middle school, high school, and undergraduate students. From topic ideation and literature review to peer-reviewed international publication.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book Free Consultation
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20inquiring%20about%20Research%20Paper%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Speak to Research Lead
          </a>
        </div>
      </div>
    </section>
  );
}
