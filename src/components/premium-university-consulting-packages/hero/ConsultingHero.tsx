"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./ConsultingHero.module.css";

export default function ConsultingHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>M7, Ivy League &amp; European Elite Admits</span>
        <h1 className={styles.title}>
          Premium University <span className={styles.titleHighlight}>Consulting Packages</span>
        </h1>
        <p className={styles.description}>
          Tailored admissions consulting for ambitious students aiming for Harvard, Stanford, Wharton, LBS, and INSEAD. From compelling personal narratives to interview mastery.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Book Free Profile Evaluation
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20Admissions%20Consulting.`}
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
