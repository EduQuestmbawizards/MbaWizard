"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import styles from "./CtaSection.module.css";

interface CtaSectionProps {
  pretitle?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CtaSection({
  pretitle = "Take The First Step",
  title = "Start Your Journey to a",
  titleHighlight = "Top MBA Admit",
  description = "Join hundreds of successful candidates who transformed their scores and profiles with MBA Wizards. Get personalized mentoring from 99th percentile instructors today.",
  primaryButtonText = "Book Free Demo Session",
  primaryButtonHref,
  secondaryButtonText = "Chat on WhatsApp",
  secondaryButtonHref = siteConfig.whatsappUrl,
}: CtaSectionProps) {
  const handlePrimaryClick = () => {
    if (!primaryButtonHref) {
      window.dispatchEvent(new CustomEvent("open-book-demo"));
    }
  };

  return (
    <section className="container">
      <div className={styles.ctaContainer}>
        <div className={styles.contentWrapper}>
          {pretitle && <span className={styles.preTitle}>{pretitle}</span>}
          <h2 className={styles.title}>
            {title} {titleHighlight && <span className={styles.titleHighlight}>{titleHighlight}</span>}
          </h2>
          {description && <p className={styles.description}>{description}</p>}

          <div className={styles.actionButtons}>
            {primaryButtonHref ? (
              <Link href={primaryButtonHref} className={styles.primaryBtn}>
                {primaryButtonText}
              </Link>
            ) : (
              <button
                type="button"
                onClick={handlePrimaryClick}
                className={styles.primaryBtn}
              >
                {primaryButtonText}
              </button>
            )}

            {secondaryButtonHref && (
              <a
                href={secondaryButtonHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <span>💬</span>
                <span>{secondaryButtonText}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
