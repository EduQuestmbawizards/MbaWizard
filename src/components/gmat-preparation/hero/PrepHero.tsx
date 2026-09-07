"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./PrepHero.module.css";

export default function PrepHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-gmat.jpg"
          alt="GMAT Comprehensive Preparation"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>

        <span className={styles.preTitle}>Target 705+ Focus Edition</span>
        <h1 className={styles.title}>
          Comprehensive <span className={styles.titleHighlight}>GMAT Preparation</span>
        </h1>
        <p className={styles.description}>
          Everything you need to conquer the GMAT: pattern breakdowns, registration guides, level-based study plans, and 70+ hours of live mentor-led instruction.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book a Free Prep Session
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20planning%20my%20GMAT%20preparation.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Consult an Expert
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={705} suffix="+" />
            </div>
            <div className={styles.statLabel}>Target Score Track</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={70} suffix="+ Hrs" />
            </div>
            <div className={styles.statLabel}>Live Interactive Classes</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={120} suffix="+" />
            </div>
            <div className={styles.statLabel}>Mock &amp; Sectional Tests</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={99} suffix="%ile" />
            </div>
            <div className={styles.statLabel}>Mentor Percentile</div>
          </div>
        </div>
      </div>
    </section>
  );
}

