"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export interface HeroFeatureItem {
  id: string;
  badge: string;
  cardTitle: string;
  cardSubtitle: string;
  title: string;
  titleHighlight: string;
  description: string;
  highlights: string[];
  ctaText: string;
  href: string;
  isExternal: boolean;
  videoMp4: string;
  videoWebm: string;
  poster: string;
  gradient: string;
  activeColor: string;
}

export const heroItems: HeroFeatureItem[] = [
  {
    id: "consulting",
    badge: "M7 & TOP 25 GLOBAL MBA ADMITS",
    cardTitle: "ADMISSION CONSULTING",
    cardSubtitle: "Global MBA, M7, ISB, IIMs, MS, Ivy League & Top 25...",
    title: "MBA ADMISSION CONSULTING",
    titleHighlight: "& B-SCHOOL STRATEGY",
    description:
      "End-to-end mentorship with IIT Roorkee & elite B-School alumni. Comprehensive profile evaluation, narrative crafting, CV overhaul, recommendation strategy, essay review, and blind mock interviews for Ivy League, M7, Europe & top Indian MBA programs.",
    highlights: [
      "98% M7 & Top Global MBA Conversion Rate",
      "$4.2M+ In Merit Scholarships Secured (2024–26)",
      "Direct 1-on-1 Mentorship With Surinder Gupta",
      "Wharton, INSEAD, Columbia & IIM Alumni Panel",
    ],
    ctaText: "+ Explore Consulting Packages",
    href: "/premium-university-consulting-packages",
    isExternal: false,
    videoMp4: "/videos/tool-consulting.mp4",
    videoWebm: "/videos/tool-consulting.webm",
    poster: "/videos/tool-consulting-poster.jpg",
    gradient: "linear-gradient(135deg, #2b3a67 0%, #151f38 100%)",
    activeColor: "#818CF8",
  },
  {
    id: "gmat-prep",
    badge: "TARGET 705+ FOCUS PREP",
    cardTitle: "GMAT PREP COURSE",
    cardSubtitle: "Target 705+ Focus prep, 1-on-1 faculty, ability model!",
    title: "GMAT FOCUS EDITION PREP",
    titleHighlight: "PERSONALIZED 1-ON-1 TRACK",
    description:
      "Master the new GMAT Focus Edition with our proprietary Ability-Based Model. Personalized study plans, Quantitative Reasoning shortcuts, Data Insights drills, and 1-on-1 strategy sessions engineered for 99th percentile admits.",
    highlights: [
      "Target 705+ Score (99th Percentile Focus Edition)",
      "20+ Years Experienced IIT/IIM Lead Faculty",
      "Adaptive Ability-Based Batches & Study Roadmaps",
      "Official Guide Walkthroughs & Personal Doubt Clearing",
    ],
    ctaText: "+ Explore GMAT Course",
    href: "/gmat-coaching",
    isExternal: false,
    videoMp4: "/videos/tool-gmat-prep.mp4",
    videoWebm: "/videos/tool-gmat-prep.webm",
    poster: "/videos/tool-gmat-prep-poster.jpg",
    gradient: "linear-gradient(135deg, #3f4d2f 0%, #222c19 100%)",
    activeColor: "#A3E635",
  },
  {
    id: "gmat-mocks",
    badge: "FULL-LENGTH IRT 205-805 SUITE",
    cardTitle: "GMAT PRACTICE TESTS",
    cardSubtitle: "Full-length IRT mocks + 51 sectional mocks!",
    title: "GMAT ADAPTIVE MOCK TESTS",
    titleHighlight: "IRT-CALIBRATED EXAM SUITE",
    description:
      "High-fidelity computer-adaptive test environment that replicates the exact 205–805 scoring algorithm and time-pressure conditions of the GMAT Focus Edition. Deep question-level pacing, trap diagnostics, and ±10 point score prediction.",
    highlights: [
      "Item Response Theory (IRT) Algorithm Matching GMAC",
      "4,000+ Calibrated Fresh Question Pool Across Q/V/DI",
      "±10 Point Accurate Benchmark Predicts Real Exam",
      "Sectional Heatmaps & Pacing Trap Diagnostics",
    ],
    ctaText: "+ Practice GMAT Mocks",
    href: "https://gmat-mock.mbawizards.co.in/#mock-tests",
    isExternal: true,
    videoMp4: "/videos/tool-gmat-mocks.mp4",
    videoWebm: "/videos/tool-gmat-mocks.webm",
    poster: "/videos/tool-gmat-mocks-poster.jpg",
    gradient: "linear-gradient(135deg, #1b6d7a 0%, #0d3b42 100%)",
    activeColor: "#2DD4BF",
  },
  {
    id: "cat-coaching",
    badge: "TARGET 99+ %ILE & IIM CALLS",
    cardTitle: "CAT COACHING",
    cardSubtitle: "Target 99+ %ile, IIM alumni faculty, QA shortcuts & WAT-PI!",
    title: "CAT COACHING & MENTORSHIP",
    titleHighlight: "IIM ALUMNI PEDAGOGY",
    description:
      "Achieve top percentiles in CAT with our ability-based batch structure. Master advanced QA shortcuts, VARC comprehension techniques, DILR matrix solvers, and get complete IIM WAT-PI personal interview preparation included.",
    highlights: [
      "99.8%ile CAT Benchmark Achieved By Students",
      "Target IIM Ahmedabad, Bangalore, Calcutta Calls",
      "Ability-Based Adaptive Batches & QA Shortcuts",
      "Complete WAT-PI Personal Interview Mentorship",
    ],
    ctaText: "+ Explore CAT Programs",
    href: "/cat",
    isExternal: false,
    videoMp4: "/videos/tool-cat-coaching.mp4",
    videoWebm: "/videos/tool-cat-coaching.webm",
    poster: "/videos/tool-cat-coaching-poster.jpg",
    gradient: "linear-gradient(135deg, #7a236c 0%, #43123b 100%)",
    activeColor: "#E879F9",
  },
  {
    id: "ai-cat",
    badge: "EXCLUSIVE AI INNOVATION",
    cardTitle: "AI CAT INTERVIEWER",
    cardSubtitle: "Real-time IIM WAT-PI simulator, eye-contact & speech analytics!",
    title: "AI CAT MOCK INTERVIEWER",
    titleHighlight: "REAL-TIME IIM WAT-PI ENGINE",
    description:
      "Engineered specifically for CAT aspirants targeting top IIMs to master composure. Computer vision tracks eye-contact, gaze, head stability, and speech cadence (WPM) with dynamic cross-questioning on your resume, stream, and current affairs.",
    highlights: [
      "Live Facial & Eye-Contact AI Computer Vision",
      "Speech Analytics (WPM Cadence & Filler Word Counter)",
      "Dynamic IIM Cross-Questioning On Resume & Academics",
      "100-Point Diagnostic Radar Report Generated Instantly",
    ],
    ctaText: "+ Launch AI CAT Simulator",
    href: "https://interview.cat.mbawizards.co.in/",
    isExternal: true,
    videoMp4: "/videos/tool-ai-cat.mp4",
    videoWebm: "/videos/tool-ai-cat.webm",
    poster: "/videos/tool-ai-cat-poster.jpg",
    gradient: "linear-gradient(135deg, #185f8f 0%, #0d344f 100%)",
    activeColor: "#38BDF8",
  },
  {
    id: "ai-gmat",
    badge: "GLOBAL B-SCHOOL ADMISSIONS",
    cardTitle: "AI GMAT INTERVIEWER",
    cardSubtitle: "M7 & ISB admissions simulator, STAR framework grader!",
    title: "AI GMAT INTERVIEWER",
    titleHighlight: "M7, EUROPE & ISB SIMULATOR",
    description:
      "Practice high-stakes behavioral and leadership questions for Wharton, INSEAD, Columbia, LBS, and ISB admissions panels. Evaluates STAR structure (Situation, Task, Action, Result), executive presence, and storytelling impact.",
    highlights: [
      "STAR-Method Answer Structure Grader",
      "Leadership Storytelling & Executive Presence Metrics",
      "School-Specific Personas Reflecting Target B-School Culture",
      "Actionable Feedback on Rambling, Pauses & Delivery",
    ],
    ctaText: "+ Launch AI GMAT Simulator",
    href: "https://gmat.mbawizards.co.in/",
    isExternal: true,
    videoMp4: "/videos/tool-ai-gmat.mp4",
    videoWebm: "/videos/tool-ai-gmat.webm",
    poster: "/videos/tool-ai-gmat-poster.jpg",
    gradient: "linear-gradient(135deg, #8f2b2b 0%, #4d1616 100%)",
    activeColor: "#F87171",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentItem = heroItems[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroItems.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  }, []);

  // Auto-cycle carousel every 8s unless user pauses or interacts
  useEffect(() => {
    if (isPausedByUser) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [handleNext, isPausedByUser]);

  // When slide changes, reload and play video smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      className={styles.heroSection}
      aria-label="MBA Wizards Programs and AI Tools Showcase"
      onMouseEnter={() => setIsPausedByUser(true)}
      onMouseLeave={() => setIsPausedByUser(false)}
    >
      {/* Background ambient mesh */}
      <div className={styles.ambientMesh} />

      <div className={`container ${styles.heroContainer}`}>
        {/* ==================================================================
            MAIN CAROUSEL SLIDE (Top: Left Video Frame + Right About & CTA)
            ================================================================== */}
        <div className={styles.carouselSlideWrapper}>
          {/* Navigation Arrows on Left and Right of Carousel */}
          <button
            type="button"
            onClick={handlePrev}
            className={`${styles.navArrow} ${styles.prevArrow}`}
            aria-label="Previous Slide"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleNext}
            className={`${styles.navArrow} ${styles.nextArrow}`}
            aria-label="Next Slide"
          >
            ›
          </button>

          <div className={styles.carouselSlide}>
            {/* Left Column: Video Frame Player */}
            <div className={styles.videoPlayerColumn}>
              <div className={styles.videoFrame}>
                {/* Video Header Bar */}
                <div className={styles.videoHeaderBar}>
                  <div className={styles.videoHeaderLeft}>
                    <span className={styles.liveDot} />
                    <span className={styles.videoHeaderTitle}>
                      {currentItem.title}
                    </span>
                  </div>
                  <div className={styles.videoHeaderBadge}>
                    <span>{currentItem.badge}</span>
                  </div>
                </div>

                {/* Video Container */}
                <div className={styles.videoWrapper}>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    poster={currentItem.poster}
                    className={styles.toolVideo}
                    aria-label={`${currentItem.title} video preview`}
                  >
                    <source src={currentItem.videoWebm} type="video/webm" />
                    <source src={currentItem.videoMp4} type="video/mp4" />
                  </video>

                  {/* Video Overlay Controls */}
                  <div className={styles.videoControlsOverlay}>
                    <button
                      type="button"
                      onClick={togglePlay}
                      className={styles.controlBtn}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? "❚❚" : "▶"}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      className={styles.controlBtn}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? "🔇" : "🔊"}
                    </button>

                    <div className={styles.videoProgressBar}>
                      <div className={styles.videoProgressFill} />
                    </div>

                    <span className={styles.videoWatermark}>
                      MBA WIZARDS ✦ 1080P
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About, Description & CTA Button */}
            <div className={styles.infoColumn}>
              <div className={styles.badgeRow}>
                <span className={styles.badgeTag}>{currentItem.badge}</span>
              </div>

              <h1 className={styles.slideTitle}>
                {currentItem.title}
                {currentItem.titleHighlight && (
                  <span className={styles.titleHighlight}>
                    {" "}{currentItem.titleHighlight}
                  </span>
                )}
              </h1>

              <p className={styles.slideDescription}>
                {currentItem.description}
              </p>

              {/* Highlight Bullets */}
              <ul className={styles.highlightsList}>
                {currentItem.highlights.map((h, i) => (
                  <li key={i} className={styles.highlightItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Action Area */}
              <div className={styles.actionRow}>
                {currentItem.isExternal ? (
                  <a
                    href={currentItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.exploreBtn}
                    style={{
                      background: currentItem.activeColor,
                      color: "#05164d",
                    }}
                  >
                    <span>{currentItem.ctaText}</span>
                    <span className={styles.btnArrow}>→</span>
                  </a>
                ) : (
                  <Link
                    href={currentItem.href}
                    className={styles.exploreBtn}
                    style={{
                      background: currentItem.activeColor,
                      color: "#05164d",
                    }}
                  >
                    <span>{currentItem.ctaText}</span>
                    <span className={styles.btnArrow}>→</span>
                  </Link>
                )}

                <Link
                  href="/contact-us"
                  className={styles.consultBtn}
                >
                  <span>Schedule Free Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            BOTTOM CARDS ROW (Exact match to user's second image)
            Clicking any card updates the active slide above with pointer arrow
            ================================================================== */}
        <div className={styles.bottomCardsContainer}>
          <div className={styles.bottomCardsRow} role="tablist" aria-label="Programs and Tools">
            {heroItems.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCurrentIndex(idx)}
                  className={`${styles.bottomCard} ${isActive ? styles.activeCard : ""}`}
                  style={{
                    background: item.gradient,
                    borderColor: isActive ? item.activeColor : "transparent",
                  }}
                >
                  {/* Active Indicator Pointer (White triangle pointing up) */}
                  {isActive && (
                    <div
                      className={styles.activePointer}
                      style={{ borderBottomColor: item.activeColor }}
                      aria-hidden="true"
                    />
                  )}

                  <div className={styles.cardInner}>
                    <h2 className={styles.cardHeaderTitle}>{item.cardTitle}</h2>
                    <p className={styles.cardHeaderSub}>{item.cardSubtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
