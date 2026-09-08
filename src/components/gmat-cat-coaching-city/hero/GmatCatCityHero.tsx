"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./GmatCatCityHero.module.css";

interface GmatCatCityHeroProps {
  preTitle: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  city: string;
}

export default function GmatCatCityHero({
  preTitle,
  title,
  titleHighlight,
  subtitle,
  city,
}: GmatCatCityHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-cat.jpg"
          alt={`GMAT & CAT Coaching in ${city} - MBA Wizards`}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={styles.ambientGlow} />
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>{preTitle}</span>
        <h1 className={styles.title}>
          {title} <span className={styles.titleHighlight}>{titleHighlight}</span>
        </h1>
        <p className={styles.description}>{subtitle}</p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book Free Demo in {city}
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20inquiring%20about%20GMAT%2BCAT%20coaching%20in%20${city}.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Chat with {city} Mentor
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className={styles.statLabel}>Success Ratio</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <div className={styles.statLabel}>Happy Students</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className={styles.statLabel}>Expert Faculty</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className={styles.statLabel}>Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}

