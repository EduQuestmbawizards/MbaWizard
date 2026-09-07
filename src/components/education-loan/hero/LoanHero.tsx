"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import { siteConfig } from "@/data/site-config";
import styles from "./LoanHero.module.css";

export default function LoanHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-loan.jpg"
          alt="International Study Abroad University Campus"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={`container ${styles.content}`}>

        <span className={styles.preTitle}>Hassle-Free Study Abroad Funding</span>
        <h1 className={styles.title}>
          Education Loans for <span className={styles.titleHighlight}>Study Abroad</span>
        </h1>
        <p className={styles.description}>
          Fund 100% of your tuition, living expenses, health insurance, and travel for top universities in the US, UK, Canada, and Europe. Secured &amp; unsecured options with competitive interest rates.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            Check Loan Eligibility
          </Link>
          <a
            href={`${siteConfig.whatsappUrl}%2C%20i%27m%20looking%20for%20Education%20Loan%20assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            💬 Speak to a Loan Specialist
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className={styles.statLabel}>Funding Coverage</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className={styles.statLabel}>Partner Banks &amp; NBFCs</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={48} suffix=" Hrs" />
            </div>
            <div className={styles.statLabel}>Fast Sanction Window</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedCounter end={0} prefix="₹" suffix=" Margin" />
            </div>
            <div className={styles.statLabel}>Collateral Free Options</div>
          </div>
        </div>
      </div>
    </section>
  );
}

