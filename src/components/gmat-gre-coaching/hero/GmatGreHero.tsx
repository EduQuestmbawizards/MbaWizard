"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./GmatGreHero.module.css";

export default function GmatGreHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-gre.jpg"
          alt="GMAT & GRE Dual Track Coaching"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>

        <span className={styles.preTitle}>Dual Test Preparation Track</span>
        <h1 className={styles.title}>
          GMAT &amp; GRE Coaching by <span className={styles.titleHighlight}>MBA Wizards</span>
        </h1>
        <p className={styles.description}>
          Tailored Strategies. Expert Mentors. Top MBA Admits. Double your admission odds across global business schools and MS programs.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book a Free Demo
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20GMAT%26GRE%20Coaching.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Talk to an Expert
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={720} suffix="+" />
            </div>
            <div className={styles.statLabel}>Avg GMAT Target</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={325} suffix="+" />
            </div>
            <div className={styles.statLabel}>Avg GRE Target</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className={styles.statLabel}>Dual Admit Success</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className={styles.statLabel}>Global Admits</div>
          </div>
        </div>
      </div>
    </section>
  );
}

