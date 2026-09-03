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
            One combined package that saves you ₹15,000+ versus purchasing GMAT and GRE courses
            separately — with the full power of MBA Wizards&apos; dual-track Manthan methodology.
          </p>
        </div>

        <div className={styles.packagesGrid}>
          <div className={styles.packageCard}>
            <h3 className={styles.pkgName}>Online Dual Live (Group)</h3>
            <div className={styles.priceBox}>
              <div className={styles.price}>₹45,000</div>
              <span className={styles.tax}>+ GST</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featItem}>Live GMAT + GRE sessions (online)</li>
              <li className={styles.featItem}>Recorded access for unlimited revision</li>
              <li className={styles.featItem}>Alternating GMAT and GRE mock tests</li>
              <li className={styles.featItem}>AI test generator for both formats</li>
              <li className={styles.featItem}>Performance analytics dashboard</li>
              <li className={styles.featItem}>Graduate admissions guidance</li>
            </ul>
            <button type="button" onClick={handleOpenDemo} className={styles.btn}>
              Book Free Demo
            </button>
          </div>

          <div className={`${styles.packageCard} ${styles.featuredCard}`}>
            <span className={styles.badge}>Best Value</span>
            <h3 className={styles.pkgName}>Dual Prep Weekend Batch</h3>
            <div className={styles.priceBox}>
              <div className={styles.price}>₹65,000</div>
              <span className={styles.tax}>+ GST (Save ₹15,000+)</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featItem}>Morning GMAT + Afternoon GRE sessions</li>
              <li className={styles.featItem}>Intensive Saturday-Sunday dual training</li>
              <li className={styles.featItem}>Full mock series for both GMAT &amp; GRE</li>
              <li className={styles.featItem}>Comparative score analysis report</li>
              <li className={styles.featItem}>Test selection strategy counseling</li>
              <li className={styles.featItem}>SOP + admissions essay guidance</li>
            </ul>
            <button type="button" onClick={handleOpenDemo} className={`${styles.btn} ${styles.featuredBtn}`}>
              Enroll Now
            </button>
          </div>

          <div className={styles.packageCard}>
            <span className={styles.badge2}>Premium</span>
            <h3 className={styles.pkgName}>1-on-1 Dual Coaching</h3>
            <div className={styles.priceBox}>
              <div className={styles.price}>₹95,000</div>
              <span className={styles.tax}>+ GST</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featItem}>100% private sessions for GMAT + GRE</li>
              <li className={styles.featItem}>Founder-led bespoke dual mentorship</li>
              <li className={styles.featItem}>Fully customized schedule and pace</li>
              <li className={styles.featItem}>Unlimited classes till target scores</li>
              <li className={styles.featItem}>Complete admissions consulting</li>
              <li className={styles.featItem}>Score guarantee for retakers</li>
            </ul>
            <button type="button" onClick={handleOpenDemo} className={styles.btn}>
              Book Free Demo
            </button>
          </div>
        </div>

        <div className={styles.savingsNote}>
          <span className={styles.savingsIcon}>💡</span>
          <strong>Smart Economics:</strong> Separate GMAT coaching (₹45,000) + separate GRE coaching (₹35,000) = ₹80,000.
          Our combined dual package starts at ₹65,000 — saving you ₹15,000 while doubling your admission chances.
        </div>
      </div>
    </section>
  );
}
