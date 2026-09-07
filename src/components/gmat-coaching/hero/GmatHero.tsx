"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./GmatHero.module.css";

export default function GmatHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-gmat.jpg"
          alt="GMAT Executive Amphitheatre"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target GMAT 705+ Focus Edition</span>

        <h1 className={styles.title}>
          Top <span className={styles.titleHighlight}>GMAT Prep Coaching</span>
        </h1>
        <p className={styles.description}>
          Expert IIT/IIM faculty, personalized ability-based training, and guaranteed results for top global and Indian MBA admissions.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book a Free Demo
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GMAT%20Coaching.`}
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
              <AnimatedCounter end={705} suffix="+" />
            </span>
            <span className={styles.heroStatLabel}>Target Focus Score</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={98} suffix="%" />
            </span>
            <span className={styles.heroStatLabel}>B-School Admit Rate</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={500} suffix="+" />
            </span>
            <span className={styles.heroStatLabel}>M7 &amp; ISB Admits</span>
          </div>
        </div>
      </div>
    </section>
  );
}
