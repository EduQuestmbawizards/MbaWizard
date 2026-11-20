"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CITYU_MBA_CONFIG, CITYU_KEY_FACTS } from "@/data/cityu-mba-data";
import styles from "./CityUMbaBanner.module.css";

const DISPLAY_DURATION_MS = 10000; // Stays on screen for 10 seconds
const RECURRING_INTERVAL_MS = 120000; // Re-appears every 2 minutes (120 seconds)
const INITIAL_DELAY_MS = 3000; // First appearance 3s after page load
const ANIMATION_DURATION_MS = 1400; // Ultra-smooth slow transition (1.4 seconds)

export default function CityUMbaBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const displayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Forward ref for scheduling next appearance
  const scheduleNextRef = useRef<() => void>(() => {});

  // Function to smoothly close the popup towards the RIGHT (1.4s slow transition)
  const triggerClose = useCallback(() => {
    if (displayTimerRef.current) {
      clearTimeout(displayTimerRef.current);
      displayTimerRef.current = null;
    }

    setIsExiting(true);
    // Wait 1400ms for slow animSlideOutRight to complete before unmounting
    setTimeout(() => {
      setIsPopupVisible(false);
      setIsExiting(false);
      console.log(
        "%c👉 [CityUHK MBA] Popup smoothly exited to RIGHT. Next appearance in 2 minutes.",
        "color: #64748b; font-weight: bold;"
      );
      scheduleNextRef.current();
    }, ANIMATION_DURATION_MS);
  }, []);

  // Function to show the popup from the LEFT (1.4s slow transition)
  const triggerOpen = useCallback(() => {
    setIsExiting(false);
    setIsPopupVisible(true);
    console.log(
      "%c👈 [CityUHK MBA] 80vh Centered Popup entered from LEFT. Stays for 10s.",
      "color: #1d4ed8; font-weight: bold; font-size: 13px;"
    );

    // Stays for 10 seconds then auto-slides out to the right
    displayTimerRef.current = setTimeout(() => {
      triggerClose();
    }, DISPLAY_DURATION_MS);
  }, [triggerClose]);

  // Schedule the 2-minute recurring interval
  const scheduleNextAppearance = useCallback(() => {
    if (intervalTimerRef.current) {
      clearTimeout(intervalTimerRef.current);
    }
    intervalTimerRef.current = setTimeout(() => {
      triggerOpen();
    }, RECURRING_INTERVAL_MS);
  }, [triggerOpen]);

  useEffect(() => {
    scheduleNextRef.current = scheduleNextAppearance;
  }, [scheduleNextAppearance]);

  // On initial mount: open after 3 seconds
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      triggerOpen();
    }, INITIAL_DELAY_MS);

    return () => {
      clearTimeout(initialTimer);
      if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
      if (intervalTimerRef.current) clearTimeout(intervalTimerRef.current);
    };
  }, [triggerOpen]);

  return (
    <>
      {/* ========================================================
          1. MINIMIZED SLEEK TOP BANNER (WHITE & BLUE WITH IMAGE)
          ======================================================== */}
      {isBannerVisible && (
        <aside
          className={styles.minBannerWrapper}
          aria-label="CityUHK MBA Promotion Banner"
        >
          <div className={styles.minBannerContainer}>
            {/* Left: Official Logo + Headline + Sub-text */}
            <div className={styles.minBannerLeft}>
              <div className={styles.bannerLogoWrapper}>
                <Image
                  src="/images/cityu-mba/cityu-logo-transparent.png"
                  alt="CityU Official Logo"
                  width={84}
                  height={50}
                  className={styles.bannerLogoImg}
                  priority
                />
              </div>

              <div className={styles.minBannerText}>
                <span className={styles.minBannerHeadline}>
                  Your Career Won&apos;t Wait. Why Should Your MBA?
                </span>
                <span className={styles.minBannerSubtext}>
                  Hong Kong | QS #86 | One-Year MBA
                </span>
              </div>
            </div>

            {/* Right: Make Your Move CTA + Close */}
            <div className={styles.minBannerRight}>
              <button
                type="button"
                onClick={() => {
                  if (!isPopupVisible) triggerOpen();
                }}
                className={styles.minBtnExplore}
                aria-label="Make Your Move - CityUHK MBA"
              >
                <span>MAKE YOUR MOVE</span>
                <span>→</span>
              </button>

              <button
                type="button"
                onClick={() => setIsBannerVisible(false)}
                className={styles.minBtnDismiss}
                aria-label="Dismiss banner"
                title="Minimize banner"
              >
                ✕
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ========================================================
          2. 100VH & 100% WIDTH FULLSCREEN POPUP SECTION
             - Full width & full height (100vw x 100vh)
             - Smooth slow entry from LEFT (1.4s)
             - Stays on screen for 10 seconds
             - Smooth slow exit to RIGHT (1.4s) and completely disappears
             - Clicking ✕ closes immediately to the right
             - Re-appears every 2 minutes
             - No countdown text anywhere
          ======================================================== */}
      {isPopupVisible && (
        <div className={styles.popupOverlayWrapper}>
          <div
            className={`${styles.centerCard80vh} ${isExiting ? styles.slideOutRight : styles.slideInLeft}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cityu-popup-title"
          >
            {/* 10-SECOND TOP PROGRESS BAR */}
            <div className={styles.topProgressTrack}>
              <div className={styles.topProgressBar} />
            </div>

            {/* POPUP TOP HEADER */}
            <header className={styles.popupHeader}>
              <div className={styles.brandGroup}>
                <div className={styles.popupLogoWrapper}>
                  <Image
                    src="/images/cityu-mba/cityu-logo-transparent.png"
                    alt="CityU Official Logo"
                    width={90}
                    height={54}
                    className={styles.popupLogoImg}
                    priority
                  />
                </div>
                <div className={styles.brandTexts}>
                  <h2>City University of Hong Kong</h2>
                  <p>College of Business • AACSB &amp; EQUIS Accredited</p>
                </div>
              </div>

              <div className={styles.headerRightGroup}>
                <a
                  href={CITYU_MBA_CONFIG.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.headerPortalBtn}
                >
                  Official Site ↗
                </a>
                <button
                  type="button"
                  onClick={triggerClose}
                  className={styles.closeIconBtn}
                  aria-label="Close popup"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </header>

            {/* MAIN 80VH CONTENT (CENTER-ALIGNED & SPACIOUS) */}
            <main className={styles.popupMain}>
              <span className={styles.eyebrowBadge}>
                <span className={styles.pulseDot} />
                Featured Global MBA • Admissions Open
              </span>

              <h1 id="cityu-popup-title" className={styles.heroHeading}>
                {CITYU_MBA_CONFIG.headline} <br />
                <span>Hong Kong&apos;s Gateway to Global Leadership</span>
              </h1>

              <p className={styles.heroSubtext}>
                {CITYU_MBA_CONFIG.subText} Accelerated 1-year STEM-enriched MBA
                programme empowering ambitious leaders with global immersion,
                FinTech mastery, and top Asian career mobility.
              </p>

              {/* 4 KEY STATS CARDS */}
              <div className={styles.statsGrid}>
                {CITYU_KEY_FACTS.slice(0, 4).map((fact) => (
                  <div key={fact.label} className={styles.statCard}>
                    <div className={styles.statNum}>{fact.metric}</div>
                    <div className={styles.statTitle}>{fact.label}</div>
                    <div className={styles.statDesc}>{fact.description}</div>
                  </div>
                ))}
              </div>

              {/* 3 MBA VALUE HIGHLIGHTS */}
              <div className={styles.mbaHighlightGrid}>
                <div className={styles.mbaHighlightCard}>
                  <span className={styles.mbaIcon}>🌏</span>
                  <div className={styles.mbaText}>
                    <h4>Strategic Gateway to Asia &amp; GBA</h4>
                    <p>
                      Prime Kowloon Tong campus connecting multinational corporate
                      headquarters with Mainland China and Greater Bay Area.
                    </p>
                  </div>
                </div>

                <div className={styles.mbaHighlightCard}>
                  <span className={styles.mbaIcon}>⚡</span>
                  <div className={styles.mbaText}>
                    <h4>1-Year Accelerated Graduation</h4>
                    <p>
                      Complete 40 credits in 12 months with STEM-enriched AI,
                      Financial Technology, and Professional Accounting tracks.
                    </p>
                  </div>
                </div>

                <div className={styles.mbaHighlightCard}>
                  <span className={styles.mbaIcon}>🎯</span>
                  <div className={styles.mbaText}>
                    <h4>Admissions &amp; Work Visa</h4>
                    <p>
                      Competitive GMAT Focus / GRE scores accepted with merit
                      scholarships and Hong Kong IANG post-study work visa eligibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className={styles.heroActions}>
                <Link
                  href={CITYU_MBA_CONFIG.hubPageUrl}
                  onClick={triggerClose}
                  className={styles.primaryCta}
                >
                  <span>Explore Full CityUHK MBA Hub</span>
                  <span>→</span>
                </Link>
                <a
                  href={CITYU_MBA_CONFIG.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryCta}
                >
                  <span>Visit Official CityUHK Portal ↗</span>
                </a>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
