"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./ConsultingHero.module.css";

export default function ConsultingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-consulting.jpg"
          alt="Ivy League Collegiate Architecture"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>

        <span className={styles.preTitle}>M7, Ivy League &amp; European Elite Admits</span>
        <h1 className={styles.title}>
          Premium University <span className={styles.titleHighlight}>Consulting Packages</span>
        </h1>
        <p className={styles.description}>
          Tailored admissions consulting for ambitious students aiming for Harvard, Stanford, Wharton, LBS, and INSEAD. From compelling personal narratives to interview mastery.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Book Free Profile Evaluation
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20Admissions%20Consulting.`}
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
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className={styles.statLabel}>Top-15 Admit Rate</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={18} prefix="$" suffix="M+" />
            </div>
            <div className={styles.statLabel}>Scholarships Secured</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={45} suffix="+" />
            </div>
            <div className={styles.statLabel}>Global B-Schools</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className={styles.statLabel}>1-on-1 Mentorship</div>
          </div>
        </div>
      </div>
    </section>
  );
}

