"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./LoanHero.module.css";

export default function LoanHero() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Hassle-Free Study Abroad Funding</span>
        <h1 className={styles.title}>
          Education Loans for <span className={styles.titleHighlight}>Study Abroad</span>
        </h1>
        <p className={styles.description}>
          Fund 100% of your tuition, living expenses, health insurance, and travel for top universities in the US, UK, Canada, and Europe. Secured &amp; unsecured options with competitive interest rates.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>
            Check Loan Eligibility
          </button>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20Education%20Loan%20assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Speak to a Loan Specialist
          </a>
        </div>
      </div>
    </section>
  );
}
