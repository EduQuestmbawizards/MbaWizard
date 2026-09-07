"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./CatHero.module.css";

export default function CatHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-cat.jpg"
          alt="IIM Campus Architecture"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target 99+ Percentile</span>

        <h1 className={styles.title}>
          Crack CAT with <span className={styles.titleHighlight}>MBA Wizards</span>
        </h1>
        <p className={styles.description}>
          Discover the perfect CAT coaching experience powered by our proprietary Manthan Ability-Based Methodology. Small batches, IIT/IIM mentors, and proven 99%ile results.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book a Free Demo
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20CAT%20Coaching.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Talk to an Expert
          </a>
        </div>

        <div className={styles.heroStatsRow}>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={99.8} decimals={1} suffix="%ile" />
            </span>
            <span className={styles.heroStatLabel}>Highest CAT Percentile</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={21} />
            </span>
            <span className={styles.heroStatLabel}>All 21 IIMs Coverage</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={12} prefix="Max " />
            </span>
            <span className={styles.heroStatLabel}>Students Per Batch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
