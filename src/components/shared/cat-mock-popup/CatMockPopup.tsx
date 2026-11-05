"use client";

import React, { useEffect, useState } from "react";
import styles from "./CatMockPopup.module.css";

interface CatMockPopupProps {
  triggerElementId?: string;
}

export default function CatMockPopup({ triggerElementId = "cat-mock-trigger-section-10" }: CatMockPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in the current browser session
    try {
      if (sessionStorage.getItem("cat_mock_popup_dismissed") === "true") {
        setHasDismissed(true);
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    let triggered = false;

    const handleScrollCheck = () => {
      if (triggered || hasDismissed) return;

      // 1. Check custom trigger element (placed right after 10th section)
      const triggerElem = document.getElementById(triggerElementId);
      if (triggerElem) {
        const rect = triggerElem.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.95) {
          triggered = true;
          setIsOpen(true);
          return;
        }
      }

      // 2. Or check if 10 sections have scrolled past
      const sections = document.querySelectorAll("section");
      if (sections.length >= 10) {
        const tenthSection = sections[9];
        const rect = tenthSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          triggered = true;
          setIsOpen(true);
          return;
        }
      }

      // 3. Fallback: scroll depth greater than 55%
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 1200 && window.scrollY / scrollHeight >= 0.55) {
        triggered = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScrollCheck, { passive: true });
    // Check on initial load if user refreshed mid-page
    handleScrollCheck();

    return () => {
      window.removeEventListener("scroll", handleScrollCheck);
    };
  }, [triggerElementId, hasDismissed]);

  const handleDismiss = () => {
    setIsOpen(false);
    setHasDismissed(true);
    try {
      sessionStorage.setItem("cat_mock_popup_dismissed", "true");
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} role="dialog" aria-modal="true" aria-labelledby="cat-popup-title">
      <div className={styles.popupBackdrop} onClick={handleDismiss} />
      
      <div className={styles.popupCard}>
        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className={styles.closeBtn}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className={styles.popupContent}>
          {/* Eyebrow Badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <span className={styles.livePulse}></span>
              <span>FREE CAT 2026 MOCK TEST</span>
            </div>
          </div>

          <h3 id="cat-popup-title" className={styles.popupTitle}>
            Ready to Test Your Real <span className={styles.highlight}>IIM Percentile</span>?
          </h3>

          <p className={styles.popupDescription}>
            Simulate authentic TCS-iON exam conditions with 66 questions, 120-minute countdown, negative marking, and instant AI-driven diagnostic scorecards.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureChip}>
              <span className={styles.chipIcon}>🖥️</span>
              <span>Exact IIM Interface</span>
            </div>
            <div className={styles.featureChip}>
              <span className={styles.chipIcon}>📈</span>
              <span>Instant All-India Rank</span>
            </div>
            <div className={styles.featureChip}>
              <span className={styles.chipIcon}>🧠</span>
              <span>AI Error Taxonomy</span>
            </div>
            <div className={styles.featureChip}>
              <span className={styles.chipIcon}>🆓</span>
              <span>100% Free Access</span>
            </div>
          </div>

          <div className={styles.popupActions}>
            <a
              href="https://cat-mock.mbawizards.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
              onClick={handleDismiss}
            >
              <span>Try Free Mock Now</span>
              <span className={styles.arrowIcon}>↗</span>
            </a>
            <button
              type="button"
              onClick={handleDismiss}
              className={styles.secondaryBtn}
            >
              Maybe Later
            </button>
          </div>

          <p className={styles.footerNote}>
            🔒 No credit card required &bull; Immediate solution review &bull; Desktop &amp; mobile
          </p>
        </div>
      </div>
    </div>
  );
}
