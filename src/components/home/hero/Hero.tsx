"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.contentWrapper}`}>
        <span className={styles.preTitle}>🎓 MbaWizards India</span>

        <h1 className={styles.mainTitle}>
          Don&apos;t Just Prepare. <span className={styles.titleSpan}>Get Admitted.</span>
        </h1>

        <p className={styles.paragraph}>
          Thousands of Indian students prepare for GMAT, GRE, and CAT every year. Only a fraction convert their score into a top MBA admit. The difference is <strong>strategy, story, and execution.</strong> We give you all three.
        </p>

        <div className={styles.actionArea}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCtaBtn}
          >
            📋 Book Your Free MBA Profile Evaluation Today
          </a>

          <div className={styles.secondaryRow}>
            <button
              type="button"
              onClick={handleOpenDemo}
              className={styles.toolPill}
            >
              📅 Schedule A Free Trial Demo
            </button>
            <a
              href="https://cat.interview.mbawizards.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolPill}
            >
              🤖 AI CAT Interviewer
            </a>
            <a
              href="https://gmat.mbawizards.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolPill}
            >
              🤖 AI GMAT Interviewer
            </a>
          </div>

          <span className={styles.promiseText}>No commitment. Just an honest, strategic assessment.</span>
        </div>
      </div>
    </section>
  );
}
