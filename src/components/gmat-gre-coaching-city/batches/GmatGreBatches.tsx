"use client";

import styles from "./GmatGreBatches.module.css";

interface GmatGreBatchesProps {
  city: string;
}

export default function GmatGreBatches({ city }: GmatGreBatchesProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Investment &amp; Formats</span>
          <h2 className={styles.title}>
            GMAT+GRE Program Pricing in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            One combined 1-on-1 dual program that saves you ₹50,000+ versus enrolling in GMAT and GRE separately —
            with the full power of MBA Wizards&apos; dual-track Manthan methodology.
          </p>
        </div>

        <div className={styles.packagesGrid}>
          <div className={styles.packageCard}>
            <span className={styles.badge}>Dual Track Online</span>
            <h3 className={styles.pkgName}>GMAT+GRE 1-on-1 Online Live</h3>
            <div className={styles.priceBox}>
              <div className={styles.price}>₹1,50,000</div>
              <span className={styles.tax}>+ GST</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featItem}>100% private 1-on-1 dual coaching for GMAT Focus &amp; GRE</li>
              <li className={styles.featItem}>Synchronized curriculum covering shared Quant &amp; Verbal logic</li>
              <li className={styles.featItem}>Specialized clinics for GMAT Data Insights &amp; GRE Vocab</li>
              <li className={styles.featItem}>Flexible scheduling tailored for working professionals</li>
              <li className={styles.featItem}>Full computer-adaptive mock tests for both GMAT and GRE</li>
              <li className={styles.featItem}>AI-powered diagnostic dashboard for dual score tracking</li>
              <li className={styles.featItem}>Complete global MS &amp; MBA admissions strategy included</li>
            </ul>
            <button type="button" onClick={handleOpenDemo} className={styles.btn}>
              Enroll / Book Demo
            </button>
          </div>

          <div className={`${styles.packageCard} ${styles.featuredCard}`}>
            <span className={styles.badge}>Elite Dual Classroom</span>
            <h3 className={styles.pkgName}>GMAT+GRE 1-on-1 Offline Classroom</h3>
            <div className={styles.priceBox}>
              <div className={styles.price}>₹2,30,000</div>
              <span className={styles.tax}>+ GST</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featItem}>Exclusive in-person 1-on-1 dual mentorship at classroom center</li>
              <li className={styles.featItem}>Face-to-face guidance from senior IIT Roorkee alumni mentors</li>
              <li className={styles.featItem}>Complete physical study kits &amp; books for both GMAT and GRE</li>
              <li className={styles.featItem}>Dedicated quiet study lab &amp; proctored adaptive test environment</li>
              <li className={styles.featItem}>Intensive error log diagnosis &amp; personalized roadmap</li>
              <li className={styles.featItem}>End-to-end SOP, resume, essay review &amp; interview preparation</li>
              <li className={styles.featItem}>Unlimited sessions &amp; validity until final university admission</li>
            </ul>
            <button type="button" onClick={handleOpenDemo} className={`${styles.btn} ${styles.featuredBtn}`}>
              Enroll / Book Demo
            </button>
          </div>
        </div>

        <div className={styles.savingsNote}>
          <span className={styles.savingsIcon}>💡</span>
          <strong>Smart Economics:</strong> Separate 1-on-1 GMAT coaching (₹1,00,000) + separate 1-on-1 GRE coaching (₹1,00,000) = ₹2,00,000.
          Our combined 1-on-1 dual online package is ₹1,50,000 — saving you ₹50,000+ while maximizing global MS and MBA opportunities.
        </div>
      </div>
    </section>
  );
}
