"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./CorporateHero.module.css";

export default function CorporateHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-corporate.jpg"
          alt="Corporate Leadership Boardroom"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>

        <span className={styles.preTitle}>Campus Placements &amp; Corporate Excellence</span>
        <h1 className={styles.title}>
          Corporate Training &amp; <span className={styles.titleHighlight}>Placement Prep</span>
        </h1>
        <p className={styles.description}>
          Equipping college graduates and young professionals with corporate readiness, TCS-iON CCQT certification mastery, aptitude problem solving, and executive interview techniques.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book Institutional Demo
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20interested%20in%20Corporate%20Training.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Talk to Training Head
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className={styles.statLabel}>Corporate &amp; Campus Clients</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <div className={styles.statLabel}>Graduates Trained</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className={styles.statLabel}>Assessment Clear Rate</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={25} suffix="+" />
            </div>
            <div className={styles.statLabel}>Custom Modules</div>
          </div>
        </div>
      </div>
    </section>
  );
}

