"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./ResearchHero.module.css";

export default function ResearchHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-research.jpg"
          alt="Academic Research Innovation Laboratory"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>

        <span className={styles.preTitle}>Stand Out in Global Admissions</span>
        <h1 className={styles.title}>
          Research Paper Drafting &amp; <span className={styles.titleHighlight}>Publishing Services</span>
        </h1>
        <p className={styles.description}>
          Unlock academic distinction for middle school, high school, and undergraduate students. From topic ideation and literature review to peer-reviewed international publication.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book Free Consultation
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20inquiring%20about%20Research%20Paper%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Speak to Research Lead
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className={styles.statLabel}>Publication Success</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className={styles.statLabel}>Papers Published</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={35} suffix="+" />
            </div>
            <div className={styles.statLabel}>Peer-Reviewed Journals</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <div className={styles.statLabel}>Countries Represented</div>
          </div>
        </div>
      </div>
    </section>
  );
}

