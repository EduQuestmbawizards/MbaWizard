import React from "react";
import styles from "./CatMockSection.module.css";

interface CatMockSectionProps {
  city?: string;
  title?: string;
  subtitle?: string;
}

export default function CatMockSection({ city, title, subtitle }: CatMockSectionProps) {
  const displayTitle =
    title ||
    (city
      ? `Simulate Real CAT 2026 Exam Conditions for ${city} Aspirants`
      : "Simulate Real CAT 2026 Exam Conditions");

  const displaySubtitle =
    subtitle ||
    "Practice with our official computer-based CAT mock test platform featuring authentic TCS-iON interface, sectional timers, negative marking (-1 / +3), and instant AI-driven percentile prediction.";

  return (
    <section className={styles.mockSection} id="cat-mock-test-section">
      <div className="container">
        <div className={styles.innerContainer}>
          {/* Section Header */}
          <div className={styles.header}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badge}>
                <span className={styles.liveDot}></span>
                OFFICIAL CAT MOCK TEST PLATFORM
              </span>
            </div>
            <h2 className={styles.title}>
              {displayTitle}{" "}
              <span className={styles.titleHighlight}>&amp; Instant AI Percentile</span>
            </h2>
            <p className={styles.subtitle}>{displaySubtitle}</p>
          </div>

          {/* Main Card Content */}
          <div className={styles.cardWrapper}>
            <div className={styles.cardBody}>
              {/* Left Column: Feature List */}
              <div className={styles.featuresColumn}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>🖥️</span>
                  </div>
                  <div>
                    <h3 className={styles.featureHeading}>Authentic TCS-iON Interface Replica</h3>
                    <p className={styles.featureDesc}>
                      Exact question palette, 40-minute sectional lockouts, on-screen calculator, and answer status tracking identical to the real CAT exam.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>📈</span>
                  </div>
                  <div>
                    <h3 className={styles.featureHeading}>Instant All-India Percentile &amp; Scaled Score</h3>
                    <p className={styles.featureDesc}>
                      Calibrated against 50,000+ actual IIM aspirant score distributions to predict your real sectional and overall percentile accurately.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>🧠</span>
                  </div>
                  <div>
                    <h3 className={styles.featureHeading}>AI-Powered Error Taxonomy</h3>
                    <p className={styles.featureDesc}>
                      Granular diagnostics categorize your mistakes into conceptual gaps, calculation traps, and time-pressure misses across QA, DILR &amp; VARC.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>⏱️</span>
                  </div>
                  <div>
                    <h3 className={styles.featureHeading}>66 Questions / 120 Mins + Sectional Drills</h3>
                    <p className={styles.featureDesc}>
                      Full-length 3-section simulation with 24 VARC, 20 DILR, and 22 QA questions curated by IIT Roorkee alumni faculty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Simulator CTA Card with Zoom In/Out Animation */}
              <div className={styles.simulatorColumn}>
                <div className={styles.simulatorCard}>
                  <div className={styles.simulatorHeader}>
                    <div className={styles.windowControls}>
                      <span className={styles.winDotRed}></span>
                      <span className={styles.winDotYellow}></span>
                      <span className={styles.winDotGreen}></span>
                    </div>
                    <span className={styles.simulatorTag}>CAT 2026 LIVE SIMULATION</span>
                  </div>

                  <div className={styles.testMeta}>
                    <div className={styles.testBadge}>Full-Length Diagnostic Mock #1</div>
                    <div className={styles.sectionChips}>
                      <span className={styles.chip}>VARC (24 Questions &bull; 40 Mins)</span>
                      <span className={styles.chip}>DILR (20 Questions &bull; 40 Mins)</span>
                      <span className={styles.chip}>QA (22 Questions &bull; 40 Mins)</span>
                    </div>
                  </div>

                  <div className={styles.pricingPill}>
                    <span className={styles.freeTag}>100% FREE ACCESS</span>
                    <span className={styles.freeSub}>No credit card required &bull; Instant activation</span>
                  </div>

                  <div className={styles.actionWrap}>
                    <a
                      href="https://cat-mock.mbawizards.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaButton}
                    >
                      <span className={styles.ctaButtonText}>Try Free CAT Mock Test</span>
                      <span className={styles.ctaArrow}>↗</span>
                    </a>
                    <p className={styles.guaranteeText}>
                      🔒 Instant report &bull; Detailed video &amp; text solutions &bull; 99%ile benchmark
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
