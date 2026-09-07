"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./GreHero.module.css";

export default function GreHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-gre.jpg"
          alt="Graduate University Research Library"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Target GRE 325+ Score</span>

        <h1 className={styles.title}>
          Crack the GRE with Confidence – <span className={styles.titleHighlight}>Elite Coaching Program</span>
        </h1>
        <p className={styles.description}>
          Tailored Strategies. Expert Mentors. Top Global MBA &amp; MS Admits. Start your 3-day trial demo today.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book a Free Demo
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GRE%20Coaching.`}
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
              <AnimatedCounter end={325} suffix="+" />
            </span>
            <span className={styles.heroStatLabel}>Target GRE Score</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={95} suffix="%" />
            </span>
            <span className={styles.heroStatLabel}>Top MBA Acceptance</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={1300} suffix="+" />
            </span>
            <span className={styles.heroStatLabel}>Global Universities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
