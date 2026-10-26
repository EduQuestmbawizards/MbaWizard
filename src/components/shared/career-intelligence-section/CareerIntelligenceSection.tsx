"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./CareerIntelligenceSection.module.css";

const TOOL_EXTERNAL_URL = "https://carrer.analysis.ai.mbawizards.co.in/";

const showcaseCards = [
  {
    id: "prompt",
    title: "1. Real-Time Roadmap Query Engine",
    subtitle: "Custom admissions prompt & strategic queries",
    image: "/images/career-intelligence/roadmap-prompt-engine.png",
    alt: "MBA Wizards AI Career Intelligence Roadmap Prompt Bar",
    tag: "Roadmap Prompt",
  },
  {
    id: "pillars",
    title: "2. 5-Pillar Admissions Diagnostic",
    subtitle: "End-to-end applicant evaluation architecture",
    image: "/images/career-intelligence/platform-pillars-header.png",
    alt: "Platform Diagnostic 5 Pillars",
    tag: "System Architecture",
  },
  {
    id: "intake1",
    title: "3. Candidate Coordinate Archiving",
    subtitle: "Step 1 of 5 Intake: Contact & profile parameters",
    image: "/images/career-intelligence/step1-personal-info.png",
    alt: "Intake Profile Personal Coordinates",
    tag: "Intake Profile",
  },
  {
    id: "intake2",
    title: "4. Undergrad Rigor & Degree Evaluation",
    subtitle: "Step 2 of 5: Pedigree, quantitative background & GPA",
    image: "/images/career-intelligence/step2-education-pedigree.png",
    alt: "Intake Profile Education Pedigree",
    tag: "Academic Rigor",
  },
  {
    id: "report",
    title: "5. Strategic Assessment & Mitigation Dossier",
    subtitle: "Direct advisory, profile gaps, and action blueprint",
    image: "/images/career-intelligence/report-dossier-output.png",
    alt: "Strategic Intelligence Dossier and Critical Gaps",
    tag: "Intelligence Dossier",
  },
];

const sampleChips = [
  { icon: "🎓", label: "Which Course Should I Take?" },
  { icon: "📝", label: "GMAT vs CAT vs GRE Advice" },
  { icon: "🇮🇳", label: "CAT (IIMs) vs GMAT (Global/ISB)" },
  { icon: "🚀", label: "MBA vs MS in Business Analytics" },
  { icon: "🏛️", label: "Harvard Business School MBA" },
  { icon: "💼", label: "MBA Specialization for Tech" },
];

export default function CareerIntelligenceSection() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through the 3D showcase cards when not hovered
  useEffect(() => {
    if (!isRotating || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseCards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isRotating, isHovered]);

  // Don't render the global promo section on the dedicated landing page itself
  if (pathname === "/career-intelligence") {
    return null;
  }

  const activeCard = showcaseCards[activeIndex];

  return (
    <section className={styles.sectionWrapper} aria-labelledby="career-ai-heading">
      <div className={styles.glowBackdrop} aria-hidden="true" />
      <div className={styles.meshGrid} aria-hidden="true" />

      <div className="container">
        <div className={styles.cardContainer}>
          {/* Top Brand Tag */}
          <div className={styles.topBadgeWrapper}>
            <span className={styles.sparkleIcon}>✦</span>
            <span className={styles.topBadgeText}>
              GRADUATE ADMISSIONS & CAREER INTELLIGENCE PLATFORM
            </span>
            <span className={styles.sparkleIcon}>✦</span>
          </div>

          {/* Heading & Subtitle */}
          <div className={styles.headerBlock}>
            <h2 id="career-ai-heading" className={styles.mainTitle}>
              Engineering Your Global MBA & Master’s Roadmap With{" "}
              <span className={styles.goldGradientText}>AI Career Intelligence</span>
            </h2>
            <p className={styles.subTitle}>
              Personalized course recommendations, GMAT vs CAT vs GRE diagnostic decisioning,
              and elite business school roadmaps engineered for MBA and Master’s candidates.
            </p>
          </div>

          {/* Prompt Bar Simulator */}
          <div className={styles.promptBarBox}>
            <div className={styles.promptInputRow}>
              <span className={styles.promptDiamond}>◆</span>
              <span className={styles.promptText}>
                Admissions roadmap & exam strategy for The International School of Bangalore for career leadership
              </span>
              <a
                href={TOOL_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.promptActionBtn}
                title="Launch AI Career Intelligence Tool"
              >
                <span>Generate Roadmap</span>
                <span className={styles.arrowIcon}>→</span>
              </a>
            </div>

            {/* Quick Chips */}
            <div className={styles.chipsRow}>
              {sampleChips.map((chip) => (
                <a
                  key={chip.label}
                  href={`${TOOL_EXTERNAL_URL}?query=${encodeURIComponent(chip.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.chipPill}
                >
                  <span className={styles.chipIcon}>{chip.icon}</span>
                  <span className={styles.chipLabel}>{chip.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Main Visual: 3D Rotating on Axis Stage */}
          <div className={styles.showcaseGrid}>
            {/* Left Column: 3D Axis Rotating Stage */}
            <div
              className={styles.stageWrapper}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={styles.stageHeader}>
                <div className={styles.stageHeaderLeft}>
                  <span className={styles.liveIndicator}>
                    <span className={styles.liveDot} />
                    3D AXIS VIEW
                  </span>
                  <span className={styles.stageActiveTag}>{activeCard.tag}</span>
                </div>
                <div className={styles.stageControls}>
                  <button
                    type="button"
                    onClick={() => setIsRotating((prev) => !prev)}
                    className={styles.controlBtn}
                    aria-label={isRotating ? "Pause 3D rotation" : "Play 3D rotation"}
                  >
                    {isRotating ? "⏸ Pause Axis" : "▶ Rotate Axis"}
                  </button>
                </div>
              </div>

              {/* 3D Perspective Axis Container */}
              <div className={styles.perspectiveStage}>
                <div
                  className={`${styles.axisRotatingCard} ${
                    isRotating && !isHovered ? styles.axisAnimationActive : ""
                  }`}
                >
                  <div className={styles.imageGlassFrame}>
                    <div className={styles.windowBar}>
                      <span className={styles.windowDotRed} />
                      <span className={styles.windowDotYellow} />
                      <span className={styles.windowDotGreen} />
                      <span className={styles.windowUrl}>
                        https://carrer.analysis.ai.mbawizards.co.in
                      </span>
                    </div>

                    <div className={styles.screenshotWrap}>
                      <Image
                        src={activeCard.image}
                        alt={activeCard.alt}
                        width={900}
                        height={460}
                        className={styles.screenshotImg}
                        priority
                      />
                      <div className={styles.shineOverlay} />
                    </div>
                  </div>
                </div>

                {/* 3D Axis Floor Shadow */}
                <div className={styles.floorReflection} />
              </div>

              {/* Step Selector Tabs */}
              <div className={styles.tabsRow}>
                {showcaseCards.map((card, idx) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsRotating(false);
                    }}
                    className={`${styles.tabBtn} ${
                      idx === activeIndex ? styles.tabBtnActive : ""
                    }`}
                  >
                    <span className={styles.tabNumber}>{idx + 1}</span>
                    <span className={styles.tabName}>{card.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Platform Intelligence Details */}
            <div className={styles.intelDetailsBox}>
              <div className={styles.intelCardHeader}>
                <span className={styles.intelBadge}>EXECUTIVE BRIEF & REPORT PREVIEW</span>
                <h3 className={styles.intelTitle}>What the Platform Architected:</h3>
              </div>

              <div className={styles.dossierSnippet}>
                <div className={styles.verdictCallout}>
                  <span className={styles.verdictIcon}>🎯</span>
                  <div className={styles.verdictText}>
                    <strong>Definitive Strategic Verdict:</strong> Target specialized master’s in
                    Finance or Financial Engineering at top-tier global programs (MIT, UC Berkeley),
                    sprint GMAT Focus to 650–720+, and position technical CS foundation.
                  </div>
                </div>

                {/* 4 Assessment Pillars Mini-Grid */}
                <div className={styles.miniPillarsGrid}>
                  <div className={styles.miniPillarItem}>
                    <span className={styles.miniPillarTitle}>📊 Academic Rigor</span>
                    <span className={styles.miniPillarDesc}>92% CGPA Tier-1 institute</span>
                  </div>
                  <div className={styles.miniPillarItem}>
                    <span className={styles.miniPillarTitle}>💼 Experience</span>
                    <span className={styles.miniPillarDesc}>2–4 years progressive tech</span>
                  </div>
                  <div className={styles.miniPillarItem}>
                    <span className={styles.miniPillarTitle}>🎯 Prescribed Course</span>
                    <span className={styles.miniPillarDesc}>MS in Finance / Fin Eng</span>
                  </div>
                  <div className={styles.miniPillarItem}>
                    <span className={styles.miniPillarTitle}>💰 Compensation Moat</span>
                    <span className={styles.miniPillarDesc}>$120,000 – $180,000 avg</span>
                  </div>
                </div>

                {/* Critical Gap Mitigation Alert */}
                <div className={styles.gapMitigationAlert}>
                  <div className={styles.gapHeader}>
                    <span>🚨</span>
                    <strong>Critical Gap & Strategic Mitigation</strong>
                  </div>
                  <p className={styles.gapBody}>
                    <strong>Identified Gap:</strong> Low GMAT score (222) →{" "}
                    <strong>MBAWizards Mitigation:</strong> 4–6 month sprint for GMAT Focus 665–715+
                    benchmarks with targeted Data Insights & Quant modules.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionsGroup}>
                <Link href="/career-intelligence" className={styles.primaryExploreBtn}>
                  <span>Explore Full Platform & Dossier</span>
                  <span className={styles.arrowIcon}>→</span>
                </Link>

                <a
                  href={TOOL_EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLaunchBtn}
                >
                  <span>Launch AI Tool Live</span>
                  <span className={styles.launchIcon}>↗</span>
                </a>
              </div>

              {/* Micro Trust Indicators */}
              <div className={styles.trustFooter}>
                <span className={styles.trustItem}>✓ 100% Free Diagnostic</span>
                <span className={styles.trustItem}>✓ M7 & IIM Rubrics</span>
                <span className={styles.trustItem}>✓ Instant Dossier Export</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
