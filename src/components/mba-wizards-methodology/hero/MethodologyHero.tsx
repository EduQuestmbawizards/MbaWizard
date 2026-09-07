"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./MethodologyHero.module.css";

export default function MethodologyHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Ability-Based Pedagogy</span>
        <h1 className={styles.title}>
          The <span className={styles.titleHighlight}>Manthan Methodology</span>
        </h1>
        <p className={styles.description}>
          Our proprietary, scientific adaptive model designed for mental perseverance. Engineered by IIT Roorkee alumni to turn weaknesses into top percentile scores.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Experience A Class Demo
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27d%20like%20to%20learn%20more%20about%20your%20methodology.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Speak to an IIT Mentor
          </a>
        </div>

        <div className={styles.heroStatsRow}>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={5} />
            </span>
            <span className={styles.heroStatLabel}>Adaptive Ability Tiers</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={100} suffix="%" />
            </span>
            <span className={styles.heroStatLabel}>Personalized Mentorship</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNum}>
              <AnimatedCounter end={30} suffix="+" />
            </span>
            <span className={styles.heroStatLabel}>Years IIT Roorkee Pedagogy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
