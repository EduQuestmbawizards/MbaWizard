import React from "react";
import styles from "./BlogMockTestsSection.module.css";

export default function BlogMockTestsSection() {
  return (
    <section className={styles.mockSection} aria-label="Free CAT and GMAT Mock Tests">
      <div className={styles.header}>
        <div className={styles.rotatingBadgeWrap}>
          <div className={styles.badgeSpinner}></div>
          <span className={styles.badgeText}>⚡ FREE EXAM SIMULATORS</span>
        </div>
        <h3 className={styles.sectionTitle}>
          Attempt Official <span className={styles.titleHighlight}>CAT &amp; GMAT Mock Tests</span>
        </h3>
        <p className={styles.sectionSubtitle}>
          Benchmark your score under authentic computer-based algorithms, get instant sectional percentiles, and uncover critical time traps before test day.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {/* Card 1: CAT Mock Test */}
        <div className={styles.cardWrapper}>
          <div className={styles.rotatingBorderCat}></div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <div className={styles.rotatingIconRing}></div>
                <span className={styles.cardIcon}>🐯</span>
              </div>
              <div className={styles.cardTagCat}>IIM CAT 2026</div>
            </div>

            <h4 className={styles.cardTitle}>CAT Full-Length Mock Test</h4>
            <p className={styles.cardDesc}>
              Simulate authentic TCS-iON exam conditions with 66 questions, 120-minute countdown timers, negative marking (-1 / +3), and instant AI percentile analytics.
            </p>

            <ul className={styles.featuresList}>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>Authentic TCS-iON CBT screen &amp; calculator</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>Instant All-India Percentile &amp; AIR projection</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>AI mistake taxonomy (Concept vs Calculation vs Speed)</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>Curated by 99.8+%ile IIT Roorkee alumni mentors</span>
              </li>
            </ul>

            <div className={styles.ctaBox}>
              <a
                href="https://cat-mock.mbawizards.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonCat}
              >
                <span>Try Free Mock (CAT)</span>
                <span className={styles.btnArrow}>↗</span>
              </a>
              <span className={styles.ctaSubtext}>100% Free &bull; No Credit Card &bull; Instant Results</span>
            </div>
          </div>
        </div>

        {/* Card 2: GMAT Focus Mock Test */}
        <div className={styles.cardWrapper}>
          <div className={styles.rotatingBorderGmat}></div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap}>
                <div className={styles.rotatingIconRing}></div>
                <span className={styles.cardIcon}>🎯</span>
              </div>
              <div className={styles.cardTagGmat}>GMAT FOCUS</div>
            </div>

            <h4 className={styles.cardTitle}>GMAT Focus Adaptive Mock</h4>
            <p className={styles.cardDesc}>
              Experience real computer-adaptive algorithms, authentic question weighting, 3-edit review feature, and score calibration on the 205–805 official scale.
            </p>

            <ul className={styles.featuresList}>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>True Item-Response Theory adaptive question routing</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>Full coverage: Quant, Verbal &amp; Data Insights</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>Instant 205–805 score &amp; sectional percentiles</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span>Deep question-by-question timing &amp; accuracy log</span>
              </li>
            </ul>

            <div className={styles.ctaBox}>
              <a
                href="https://gmat-mock.mbawizards.co.in/#mock-tests"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonGmat}
              >
                <span>Try Free Mock (GMAT)</span>
                <span className={styles.btnArrow}>↗</span>
              </a>
              <span className={styles.ctaSubtext}>100% Free &bull; Focus Edition 2026 &bull; Instant Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
