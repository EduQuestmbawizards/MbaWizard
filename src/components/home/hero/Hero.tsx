"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleOpenDemo = () => {
    window.location.href = "/contact-us";
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-home.jpg"
          alt="MBA Wizards Academy Campus"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
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
            <Link
              href="/contact-us"
              className={styles.toolPill}
            >
              📅 Schedule A Free Trial Demo
            </Link>
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

        <div className={styles.heroStatsHighlight}>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>
              <AnimatedCounter end={780} />
            </span>
            <span className={styles.heroStatLabel}>Top GMAT Score</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>
              <AnimatedCounter end={99.8} decimals={1} suffix="%ile" />
            </span>
            <span className={styles.heroStatLabel}>CAT Percentile Record</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>
              <AnimatedCounter end={328} suffix="+" />
            </span>
            <span className={styles.heroStatLabel}>GRE Target Average</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatValue}>
              <AnimatedCounter end={98} suffix="%" />
            </span>
            <span className={styles.heroStatLabel}>M7 &amp; IIM Conversion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
