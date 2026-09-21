"use client";

import { useState } from "react";
import LeadMagnetModal from "./LeadMagnetModal";
import styles from "./LeadMagnet.module.css";

interface LeadMagnetBannerProps {
  sourceSlug?: string;
  title?: string;
  subtitle?: string;
  blogTitle?: string;
}

export default function LeadMagnetBanner({
  sourceSlug = "gmat-gurgaon-blog",
  title = "Download Free GMAT Focus Gurgaon Mastery Guide (PDF)",
  subtitle = "Complete 100-Day Study Timetable, 805 Scoring Framework, Section-Wise Pacing Traps & IIT Roorkee Mentorship.",
  blogTitle,
}: LeadMagnetBannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const effectiveBlogTitle = blogTitle || title;

  return (
    <>
      <div className={styles.leadMagnetBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.badge}>🎁 Free Premium Downloadable Resource</div>
          <h3 className={styles.bannerTitle}>
            {title.includes("GMAT") ? (
              <>
                {title.split("GMAT")[0]}
                <span className={styles.goldHighlight}>GMAT Focus Edition</span>
                {title.split("GMAT")[1]?.replace("Focus Edition", "")}
              </>
            ) : (
              title
            )}
          </h3>
          <p className={styles.bannerDesc}>{subtitle}</p>

          <div className={styles.featurePills}>
            <span className={styles.pill}>✓ 100-Day Day-by-Day Study Plan</span>
            <span className={styles.pill}>✓ Quant / Verbal / DI Formulas</span>
            <span className={styles.pill}>✓ Mentor: Surinder Gupta (IIT Roorkee)</span>
            <span className={styles.pill}>✓ Instant PDF Download with Blog Blueprint</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={styles.bannerBtn}
          >
            📥 Download Free PDF Guide
          </button>
        </div>
      </div>

      <LeadMagnetModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        sourceSlug={sourceSlug}
        guideTitle={title}
        blogTitle={effectiveBlogTitle}
      />
    </>
  );
}
