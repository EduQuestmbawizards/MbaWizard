"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CareerIntelligence.module.css";

const TOOL_EXTERNAL_URL = "https://carrer.analysis.ai.mbawizards.co.in/";

const screenshots = [
  {
    id: "prompt-engine",
    step: "01",
    tag: "Roadmap Engine",
    title: "Admissions Roadmap & Query Engine",
    subtitle: "Custom candidate prompt bar with high-leverage decision query chips.",
    image: "/images/career-intelligence/roadmap-prompt-engine.png",
    alt: "AI Roadmap Prompt Input and Query Chips",
    features: [
      "Natural language profile prompt intake",
      "One-click decision prompts (GMAT vs CAT vs GRE, MBA vs MSBA)",
      "Instant algorithmic strategy synthesis",
    ],
  },
  {
    id: "platform-pillars",
    step: "02",
    tag: "Platform Architecture",
    title: "5 Core Diagnostic Intelligence Pillars",
    subtitle: "End-to-end framework evaluating profile rigor, courses, tests, schools, and milestones.",
    image: "/images/career-intelligence/platform-pillars-header.png",
    alt: "5 Platform Intelligence Diagnostic Pillars",
    features: [
      "Pillar 1: Applicant Pedigree & Rigor Assessment",
      "Pillar 2: Course & Specialization Recommendation",
      "Pillar 3: GMAT vs CAT vs GRE Exam Engine",
      "Pillar 4: Curated University & Scholarship Matching",
      "Pillar 5: Personalised Application Roadmap",
    ],
  },
  {
    id: "intake-personal",
    step: "03",
    tag: "Candidate Coordinates",
    title: "Step 1 of 5: Personal Intake Profile",
    subtitle: "Candidate coordinates required for profile archiving and counselor briefing.",
    image: "/images/career-intelligence/step1-personal-info.png",
    alt: "Intake Profile Personal Coordinates",
    features: [
      "Full name and verified WhatsApp coordinates",
      "Profile archiving for counselor briefing",
      "Confidential candidate data encryption",
    ],
  },
  {
    id: "intake-education",
    step: "04",
    tag: "Pedigree & Rigor",
    title: "Step 2 of 5: Education & Major Rigor",
    subtitle: "Evaluating undergraduate pedigree, quantitative rigor, and GPA caliber.",
    image: "/images/career-intelligence/step2-education-pedigree.png",
    alt: "Intake Profile Education Rigor and Major",
    features: [
      "Current education level & graduation status",
      "Undergraduate major & technical rigor benchmarking",
      "Tier 1/2 institution weighting algorithms",
    ],
  },
  {
    id: "report-output",
    step: "05",
    tag: "Intelligence Dossier",
    title: "Strategic Admissions Report & Gap Mitigations",
    subtitle: "Lead Strategist direct advisory, quantified verdicts, and critical profile gap mitigations.",
    image: "/images/career-intelligence/report-dossier-output.png",
    alt: "Strategic Intelligence Dossier and Critical Gaps",
    features: [
      "Executive Brief with Definitive Strategic Verdict",
      "4-Quadrant Applicant Assessment (Academics, Experience, Moat, Alignment)",
      "Critical Profile Gaps with MBAWizards Mitigations",
    ],
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

export default function CareerIntelligencePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [userQuery, setUserQuery] = useState(
    "Admissions roadmap & exam strategy for The International School of Bangalore for career leadership"
  );
  const [copiedLink, setCopiedLink] = useState(false);

  // Auto rotation loop for the 3D axis stage
  useEffect(() => {
    if (!isRotating) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isRotating]);

  const handleChipClick = (label: string) => {
    setUserQuery(label);
  };

  const handleGenerateRoadmap = () => {
    const targetUrl = `${TOOL_EXTERNAL_URL}?query=${encodeURIComponent(userQuery)}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const handlePrintDossier = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const currentScreenshot = screenshots[activeStep];

  return (
    <div className={styles.pageRoot}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackdropGlow} aria-hidden="true" />
        <div className={styles.gridOverlay} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroContent}>
            {/* Top Tagline Badge */}
            <div className={styles.topBadge}>
              <span className={styles.badgeSparkle}>✦</span>
              <span>MBAWIZARDS · GRADUATE ADMISSIONS & CAREER INTELLIGENCE PLATFORM</span>
              <span className={styles.badgeSparkle}>✦</span>
            </div>

            {/* Main Title */}
            <h1 className={styles.heroHeading}>
              Graduate Admissions &<br />
              <span className={styles.goldSerifItalic}>Career Intelligence Platform</span>
            </h1>

            {/* Subheading */}
            <p className={styles.heroSubheading}>
              Personalized course recommendations, GMAT vs CAT vs GRE diagnostic decisioning,
              and elite business school roadmaps engineered for MBA and Master’s candidates.
            </p>

            {/* 5 Pillars Quick Navigation Pills */}
            <div className={styles.heroPillarsNav}>
              <span className={styles.pillarPill}>✦ 1. Applicant Assessment</span>
              <span className={styles.pillarPill}>✦ 2. Course & Specialization</span>
              <span className={styles.pillarPill}>✦ 3. GMAT vs CAT vs GRE Exam Engine</span>
              <span className={styles.pillarPill}>✦ 4. University & Scholarship Matching</span>
              <span className={styles.pillarPill}>✦ 5. Personalised Application Roadmap</span>
            </div>

            {/* Interactive Prompt Simulator Bar */}
            <div className={styles.promptSimulatorWrapper}>
              <div className={styles.promptInputBox}>
                <span className={styles.promptDiamond}>◆</span>
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Enter your target school, current score, or dream program..."
                  className={styles.promptInput}
                  aria-label="Admissions Prompt"
                />
                <button
                  type="button"
                  onClick={handleGenerateRoadmap}
                  className={styles.generateBtn}
                >
                  <span>Generate Roadmap</span>
                  <span className={styles.btnArrow}>→</span>
                </button>
              </div>

              {/* Sample Chips */}
              <div className={styles.chipsContainer}>
                {sampleChips.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => handleChipClick(chip.label)}
                    className={`${styles.queryChip} ${
                      userQuery === chip.label ? styles.queryChipActive : ""
                    }`}
                  >
                    <span>{chip.icon}</span>
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hero CTAs */}
            <div className={styles.heroActionButtons}>
              <a
                href={TOOL_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLaunchBtn}
              >
                <span>Launch Live AI Platform</span>
                <span className={styles.launchIcon}>↗</span>
              </a>

              <a href="#intelligence-dossier" className={styles.secondaryScrollBtn}>
                <span>View Sample Intelligence Dossier</span>
                <span>↓</span>
              </a>
            </div>

            {/* Hero Trust Points */}
            <div className={styles.heroTrustRow}>
              <span>⚡ Instant Algorithmic Diagnostic</span>
              <span>•</span>
              <span>🎓 Harvard, Stanford, INSEAD & IIM Benchmarks</span>
              <span>•</span>
              <span>🔒 100% Free Candidate Evaluation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3D ROTATING AXIS SHOWCASE SECTION */}
      <section className={styles.axisShowcaseSection}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionPretitle}>INTERACTIVE 3D PLATFORM PREVIEW</span>
            <h2 className={styles.sectionTitle}>
              Inside the <span className={styles.goldSpan}>Intelligence Engine</span>
            </h2>
            <p className={styles.sectionDescription}>
              Watch the platform architecture rotate in real-time 3D space. From initial candidate
              coordinates to rigorous pedigree analysis and custom admissions blueprints.
            </p>
          </div>

          <div className={styles.stageGrid}>
            {/* 3D Rotating Stage Box */}
            <div className={styles.perspectiveBox}>
              <div className={styles.stageToolbar}>
                <div className={styles.stageTagGroup}>
                  <span className={styles.liveTag}>● 3D AXIS ACTIVE</span>
                  <span className={styles.stepCounter}>
                    STEP {currentScreenshot.step} OF 05
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsRotating((prev) => !prev)}
                  className={styles.axisToggleBtn}
                >
                  {isRotating ? "⏸ Pause Rotation" : "▶ Resume 3D Axis"}
                </button>
              </div>

              {/* The 3D Rotating Container */}
              <div className={styles.turntableStage}>
                <div
                  className={`${styles.turntableCard} ${
                    isRotating ? styles.continuousRotation : ""
                  }`}
                >
                  <div className={styles.cardGlassFrame}>
                    <div className={styles.browserWindowBar}>
                      <span className={styles.windowDotRed} />
                      <span className={styles.windowDotYellow} />
                      <span className={styles.windowDotGreen} />
                      <span className={styles.windowUrl}>
                        https://carrer.analysis.ai.mbawizards.co.in/
                      </span>
                    </div>

                    <div className={styles.imageInnerFrame}>
                      <Image
                        src={currentScreenshot.image}
                        alt={currentScreenshot.alt}
                        width={920}
                        height={480}
                        className={styles.stageImage}
                        priority
                      />
                      <div className={styles.glassReflectEffect} />
                    </div>
                  </div>
                </div>

                {/* 3D Floor Shadow */}
                <div className={styles.turntableShadow} />
              </div>

              {/* Interactive Stage Tabs */}
              <div className={styles.stageTabsRow}>
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setActiveStep(idx);
                      setIsRotating(false);
                    }}
                    className={`${styles.stepTab} ${
                      idx === activeStep ? styles.stepTabActive : ""
                    }`}
                  >
                    <span className={styles.stepTabNum}>{s.step}</span>
                    <span className={styles.stepTabLabel}>{s.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Step Detailed Breakdown */}
            <div className={styles.stepInfoCard}>
              <span className={styles.stepEyebrow}>MODULE BREAKDOWN</span>
              <h3 className={styles.stepTitle}>{currentScreenshot.title}</h3>
              <p className={styles.stepSubtitle}>{currentScreenshot.subtitle}</p>

              <div className={styles.featuresList}>
                {currentScreenshot.features.map((feat, i) => (
                  <div key={i} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className={styles.stepCtaWrap}>
                <a
                  href={TOOL_EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stepLaunchBtn}
                >
                  <span>Experience This Step Live</span>
                  <span className={styles.btnArrow}>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 5 CORE DIAGNOSTIC PILLARS ARCHITECTURE */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionPretitle}>STRATEGIC METHODOLOGY</span>
            <h2 className={styles.sectionTitle}>
              The 5 Pillars of <span className={styles.goldSpan}>Admissions Architecture</span>
            </h2>
            <p className={styles.sectionDescription}>
              How MBA Wizards translates raw candidate parameters into high-odds admissions offers
              at elite institutions worldwide.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>📊</div>
              <span className={styles.pillarStepBadge}>PILLAR 01</span>
              <h3 className={styles.pillarHeading}>Applicant Profile Assessment</h3>
              <p className={styles.pillarDesc}>
                Diagnostic evaluation of undergraduate pedigree, quantitative rigor, GPA caliber,
                and career trajectory. Identifies critical gaps early to engineer strategic mitigations.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>🎯</div>
              <span className={styles.pillarStepBadge}>PILLAR 02</span>
              <h3 className={styles.pillarHeading}>Course & Specialization Recommendation</h3>
              <p className={styles.pillarDesc}>
                Algorithmic fit between global MBA, specialized Master’s (MS in Finance, MSBA,
                Financial Engineering), and tech leadership pathways based on post-grad salary targets.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>📝</div>
              <span className={styles.pillarStepBadge}>PILLAR 03</span>
              <h3 className={styles.pillarHeading}>GMAT vs CAT vs GRE Exam Engine</h3>
              <p className={styles.pillarDesc}>
                Diagnostic decisioning based on section strengths, geography fit (US M7, Europe,
                Singapore vs IIMs/ISB), and score benchmarks (e.g. GMAT Focus 665–715+).
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>🏛️</div>
              <span className={styles.pillarStepBadge}>PILLAR 04</span>
              <h3 className={styles.pillarHeading}>University & Scholarship Matching</h3>
              <p className={styles.pillarDesc}>
                Curated school matching evaluated against eligibility, tuition costs, scholarships,
                and median compensation. Segmented into Ambitious, Target, and Safe tiers.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>🚀</div>
              <span className={styles.pillarStepBadge}>PILLAR 05</span>
              <h3 className={styles.pillarHeading}>Personalised Application Roadmap</h3>
              <p className={styles.pillarDesc}>
                Sprint-by-sprint execution plan across test prep, profile positioning narrative,
                school-specific essay stories, and STAR mock interview masterclasses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE COMPLETE INTELLIGENCE DOSSIER / SAMPLE REPORT */}
      <section id="intelligence-dossier" className={styles.dossierSection}>
        <div className="container">
          <div className={styles.dossierHeaderBox}>
            <div className={styles.dossierTopBar}>
              <div className={styles.dossierBrand}>
                <span className={styles.dossierCrest}>🏛️</span>
                <div>
                  <div className={styles.dossierOrgName}>MBAWIZARDS</div>
                  <div className={styles.dossierSubOrg}>
                    Graduate Admissions & Career Intelligence Platform · Intelligence Dossier
                  </div>
                </div>
              </div>

              <div className={styles.dossierActions}>
                <button
                  type="button"
                  onClick={handlePrintDossier}
                  className={styles.dossierPrintBtn}
                >
                  <span>🖨️</span>
                  <span>Print / PDF</span>
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  className={styles.dossierShareBtn}
                >
                  <span>🔗</span>
                  <span>{copiedLink ? "Link Copied!" : "Share Dossier"}</span>
                </button>
              </div>
            </div>

            {/* Dossier Title Banner */}
            <div className={styles.dossierTitleBanner}>
              <span className={styles.dossierSerial}>EXECUTIVE ADVISORY DOSSIER #MBAW-9284</span>
              <h2 className={styles.dossierMainTitle}>
                Strategic Admissions Roadmap: Admissions roadmap & exam strategy for The International
                School of Bangalore for career leadership
              </h2>
              <div className={styles.candidateMeta}>
                <span><strong>Candidate:</strong> Priya Mahajan</span>
                <span>•</span>
                <span><strong>Focus:</strong> Financial Engineering & Specialized Master’s</span>
                <span>•</span>
                <span><strong>Advisory Lead:</strong> Mr. Surinder Gupta (IIT Roorkee Alum)</span>
              </div>
              <p className={styles.dossierSummaryText}>
                Diagnostic evaluation, course prescription, GMAT/CAT/GRE exam strategy, university
                matching, and milestone execution blueprint.
              </p>
            </div>
          </div>

          {/* Dossier Document Body */}
          <div className={styles.dossierPaper}>
            {/* Executive Brief */}
            <div className={styles.docSection}>
              <div className={styles.sectionTagRow}>
                <span className={styles.goldStar}>★</span>
                <span className={styles.sectionDocTitle}>
                  Lead Strategist&apos;s Direct Advisory · Executive Brief
                </span>
              </div>

              <div className={styles.advisoryBox}>
                <div className={styles.advisoryHeader}>
                  <span>💡</span>
                  <strong>
                    Direct Analysis: Admissions roadmap & exam strategy for The International School
                    of Bangalore for career leadership
                  </strong>
                </div>
                <div className={styles.advisoryContent}>
                  <p>
                    Priya, given your stellar academic performance with a <strong>92% CGPA</strong>{" "}
                    from a top-tier institution, you&apos;re well-positioned to pursue a specialized
                    master&apos;s program. However, we need to clarify a misconception; The
                    International School of Bangalore is not a graduate business school. If your aim
                    is leadership in finance through a specialized master&apos;s like MS in Finance or
                    Financial Engineering, you&apos;ll want to focus on programs at renowned global
                    universities.
                  </p>
                  <p>
                    Your current GMAT score of <strong>222</strong> indicates a significant need for
                    improvement to reach competitive thresholds for top programs in the US, typically
                    around <strong>650–720</strong>. Additionally, a focus on gaining quality work
                    experience post-graduation will strengthen your application profile. You should
                    aim for a comprehensive prep plan to boost your GMAT scores and consider GRE as
                    an alternative depending on the schools&apos; preferences.
                  </p>
                </div>

                <div className={styles.definitiveVerdictCard}>
                  <span className={styles.verdictTargetIcon}>🎯</span>
                  <div>
                    <span className={styles.verdictLabel}>Definitive Strategic Verdict:</span>
                    <p className={styles.verdictMessage}>
                      Focus on improving your GMAT score significantly, gain 2–3 years of relevant
                      work experience, and target specialized master&apos;s programs in finance or
                      financial engineering at top-tier universities globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 1. Applicant Profile Assessment */}
            <div className={styles.docSection}>
              <h3 className={styles.sectionHeadingNum}>1. 📊 Applicant Profile Assessment</h3>
              <div className={styles.profileAssessGrid}>
                <div className={styles.assessItem}>
                  <div className={styles.assessTitle}>Academic & Quantitative Rigor</div>
                  <p className={styles.assessDesc}>
                    Your 92% CGPA from a Tier 1 institution demonstrates strong academic
                    capabilities and quantitative proficiency, essential for finance-related
                    graduate programs.
                  </p>
                </div>

                <div className={styles.assessItem}>
                  <div className={styles.assessTitle}>Professional Experience & Leadership</div>
                  <p className={styles.assessDesc}>
                    While you have 2–4 years of work experience, it will be crucial to show
                    progression and leadership potential in your roles to align with top school
                    expectations.
                  </p>
                </div>

                <div className={styles.assessItem}>
                  <div className={styles.assessTitle}>Skills & Functional Moat</div>
                  <p className={styles.assessDesc}>
                    Your background in computer science provides a solid technical foundation,
                    beneficial for roles in financial engineering or quantitative analysis.
                  </p>
                </div>

                <div className={styles.assessItem}>
                  <div className={styles.assessTitle}>Post-Grad Career Alignment</div>
                  <p className={styles.assessDesc}>
                    Your interest in a specialized master&apos;s aligns with careers in high-demand
                    areas such as quantitative finance, with potential salaries of $120k–$150k+ in
                    the US.
                  </p>
                </div>
              </div>

              {/* Critical Profile Gaps & Strategic Mitigations */}
              <div className={styles.gapsBox}>
                <div className={styles.gapsHeader}>
                  <span>🚨</span>
                  <span>Critical Profile Gaps & Strategic Mitigations</span>
                </div>

                <div className={styles.gapEntry}>
                  <div className={styles.gapRow}>
                    <span className={styles.gapBadge}>Identified Gap</span>
                    <span className={styles.gapText}>Low GMAT score (222)</span>
                    <span className={styles.gapArrow}>→</span>
                    <span className={styles.mitigationBadge}>MBAWizards Mitigation</span>
                    <span className={styles.mitigationText}>
                      Enroll in intensive GMAT prep to target 650+ scores
                    </span>
                  </div>
                  <Link href="/gmat-coaching" className={styles.mitigationLink}>
                    Explore MBAWizards GMAT Focus Coaching ↗
                  </Link>
                </div>

                <div className={styles.gapEntry}>
                  <div className={styles.gapRow}>
                    <span className={styles.gapBadge}>Identified Gap</span>
                    <span className={styles.gapText}>Limited international exposure</span>
                    <span className={styles.gapArrow}>→</span>
                    <span className={styles.mitigationBadge}>MBAWizards Mitigation</span>
                    <span className={styles.mitigationText}>
                      Seek global work assignments or internships to enhance your profile.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Prescribed Course & Specialization Recommendation */}
            <div className={styles.docSection}>
              <h3 className={styles.sectionHeadingNum}>
                2. 🎯 Prescribed Course & Specialization Recommendation
              </h3>
              <p className={styles.sectionIntroText}>
                Based on your academic background, quantitative foundation, and career aspirations,
                here is your high-leverage program prescription:
              </p>

              <div className={styles.primaryCourseBox}>
                <div className={styles.primaryCourseHeader}>
                  <span className={styles.primaryStar}>★</span>
                  <span>Primary Course Recommendation</span>
                </div>
                <h4 className={styles.primaryCourseTitle}>
                  MS in Finance or Financial Engineering
                </h4>
                <p className={styles.primaryCourseReason}>
                  <strong>Why This Fits Your Profile:</strong> Your strong quantitative skills from a
                  computer science background can be directly leveraged in finance, where
                  analytical and technical acumen are paramount. This course aligns with your
                  interest in financial leadership roles.
                </p>

                <div className={styles.courseMetaRow}>
                  <div className={styles.courseMetaCol}>
                    <span className={styles.metaColIcon}>💼</span>
                    <div>
                      <span className={styles.metaColLabel}>Target Post-Grad Roles</span>
                      <strong className={styles.metaColVal}>
                        Quant Analyst, Financial Engineer, Risk Manager
                      </strong>
                    </div>
                  </div>

                  <div className={styles.courseMetaCol}>
                    <span className={styles.metaColIcon}>💰</span>
                    <div>
                      <span className={styles.metaColLabel}>Avg Global Compensation</span>
                      <strong className={styles.metaColVal}>
                        $120,000 - $180,000 / ₹25L - ₹50L
                      </strong>
                    </div>
                  </div>

                  <div className={styles.courseMetaCol}>
                    <span className={styles.metaColIcon}>⏱️</span>
                    <div>
                      <span className={styles.metaColLabel}>Typical Program Duration</span>
                      <strong className={styles.metaColVal}>1–2 Years</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative / Backup */}
              <div className={styles.backupCourseBox}>
                <div className={styles.backupHeader}>Alternative / Backup Course Pathway</div>
                <h5 className={styles.backupTitle}>Master&apos;s in Business Analytics</h5>
                <p className={styles.backupDesc}>
                  If your GMAT scores or work experience aren&apos;t competitive enough for top
                  finance programs, consider pivoting to a Business Analytics program, which also
                  leverages your technical skills and has robust career opportunities.
                </p>
              </div>
            </div>

            {/* 3. Exam Decision Engine: GMAT vs CAT vs GRE */}
            <div className={styles.docSection}>
              <h3 className={styles.sectionHeadingNum}>
                3. 📝 Exam Decision Engine: GMAT vs CAT vs GRE
              </h3>

              <div className={styles.examVerdictBadge}>
                <span className={styles.verdictIcon}>🎯</span>
                <div>
                  <strong>MBAWizards Exam Verdict For You:</strong> GMAT Focus Edition
                  <p>
                    The GMAT Focus Edition is recommended as it aligns with your target of pursuing
                    a specialized master&apos;s in finance or financial engineering at top global
                    universities. Aim for a score of <strong>650–720</strong> to be competitive.
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className={styles.tableResponsiveWrap}>
                <table className={styles.examTable}>
                  <thead>
                    <tr>
                      <th>Standardized Exam</th>
                      <th>Primary Program & Country Fit</th>
                      <th>Syllabus & Scoring Focus</th>
                      <th>Your Target Benchmark</th>
                      <th>MBAWizards Prep Resource</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.highlightTableRow}>
                      <td>
                        <strong>GMAT Focus Edition</strong>
                        <span className={styles.recommendedPill}>Recommended</span>
                      </td>
                      <td>Global MBA (US M7, Europe, Singapore) & Indian Executive/ISB</td>
                      <td>
                        Data Insights, Problem Solving, Critical Reasoning (No Geometry, No Essay)
                      </td>
                      <td>
                        <strong className={styles.benchmarkGold}>665 - 715+ (93rd-99th %ile)</strong>
                      </td>
                      <td>
                        <Link href="/gmat-coaching" className={styles.tableLink}>
                          GMAT Prep ↗
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>GRE (General)</strong>
                      </td>
                      <td>
                        Specialized Master&apos;s (MSBA, MSF), Dual Degrees, Top US/European Universities
                      </td>
                      <td>
                        Advanced Vocabulary, Quantitative Reasoning (includes Geometry), Analytical
                        Writing
                      </td>
                      <td>324 - 332+</td>
                      <td>
                        <Link href="/gre-coaching-classes" className={styles.tableLink}>
                          GRE Classes ↗
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>CAT</strong>
                      </td>
                      <td>IIMs (Ahmedabad, Bangalore, Calcutta) & Top Tier-1 Indian B-Schools</td>
                      <td>VARC, DILR, Quantitative Aptitude (Intense speed & accuracy)</td>
                      <td>99.0+ %ile</td>
                      <td>
                        <Link href="/cat" className={styles.tableLink}>
                          CAT Coaching ↗
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Recommended Sprint Timeline */}
              <div className={styles.sprintTimelineBox}>
                <div className={styles.sprintHeader}>
                  <span>⚡</span>
                  <strong>Recommended Exam Sprint & Timeline</strong>
                </div>
                <p>
                  Allocate <strong>4–6 months</strong> for GMAT preparation. Focus on quantitative
                  and verbal reasoning, leveraging mock tests to improve speed and accuracy.
                  Consider a structured study plan with MBAWizards.
                </p>
                <div className={styles.sprintLinks}>
                  <Link href="/gmat-coaching" className={styles.sprintBtn}>
                    🎯 GMAT Focus Coaching at MBAWizards
                  </Link>
                  <Link href="/gre-coaching-classes" className={styles.sprintBtn}>
                    📘 GRE Classes at MBAWizards
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. University & Programme Matching */}
            <div className={styles.docSection}>
              <h3 className={styles.sectionHeadingNum}>4. 🏛️ University & Programme Matching</h3>
              <p className={styles.sectionIntroText}>
                Curated school matching evaluated against eligibility, tuition costs, scholarships,
                and career placement outcomes.
              </p>

              <div className={styles.tierCardsContainer}>
                {/* Dream Tier */}
                <div className={styles.tierCardDream}>
                  <div className={styles.tierHeader}>
                    <span className={styles.tierBadgeDream}>🌟 AMBITIOUS / DREAM TIER</span>
                    <span className={styles.tierOdds}>Selective Reach</span>
                  </div>
                  <h4 className={styles.tierSchoolName}>
                    Massachusetts Institute of Technology (MIT) — MS in Finance
                  </h4>
                  <div className={styles.tierDetailsGrid}>
                    <div>
                      <span className={styles.tierDetailLabel}>Eligibility & Cutoffs:</span>
                      <p>GMAT 720+, competitive GPA, strong work experience</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Tuition & Living Costs:</span>
                      <p>$90,000 per year (inclusive of living expenses)</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Scholarships:</span>
                      <p>Limited merit-based scholarships available</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Career Outcomes:</span>
                      <p>
                        Median salary <strong>$150,000</strong>; top recruiters include Goldman
                        Sachs, Morgan Stanley
                      </p>
                    </div>
                  </div>
                </div>

                {/* Target Tier */}
                <div className={styles.tierCardTarget}>
                  <div className={styles.tierHeader}>
                    <span className={styles.tierBadgeTarget}>🎯 TARGET TIER</span>
                    <span className={styles.tierOdds}>Competitive Alignment</span>
                  </div>
                  <h4 className={styles.tierSchoolName}>
                    University of California, Berkeley — Master of Financial Engineering
                  </h4>
                  <div className={styles.tierDetailsGrid}>
                    <div>
                      <span className={styles.tierDetailLabel}>Eligibility & Cutoffs:</span>
                      <p>GMAT 680+, relevant work experience, quantitative background</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Tuition & Living Costs:</span>
                      <p>$80,000 per year</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Scholarships:</span>
                      <p>Opportunities for assistantships and merit-based awards</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Career Outcomes:</span>
                      <p>
                        Median salary <strong>$140,000</strong>; strong placement in tech finance
                        roles
                      </p>
                    </div>
                  </div>
                </div>

                {/* Safe Tier */}
                <div className={styles.tierCardSafe}>
                  <div className={styles.tierHeader}>
                    <span className={styles.tierBadgeSafe}>🛡️ SAFE / HIGH-VALUE TIER</span>
                    <span className={styles.tierOdds}>Strong Admit & Funding Odds</span>
                  </div>
                  <h4 className={styles.tierSchoolName}>
                    University of Texas at Austin — MS in Finance
                  </h4>
                  <div className={styles.tierDetailsGrid}>
                    <div>
                      <span className={styles.tierDetailLabel}>Eligibility & Cutoffs:</span>
                      <p>GMAT 650+, relevant academic background</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Tuition & Living Costs:</span>
                      <p>$60,000 per year</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Scholarships:</span>
                      <p>High probability of merit scholarships</p>
                    </div>
                    <div>
                      <span className={styles.tierDetailLabel}>Career Outcomes:</span>
                      <p>Regional placement in finance roles with salary $120,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Personalised Application Roadmap */}
            <div className={styles.docSection}>
              <h3 className={styles.sectionHeadingNum}>5. 🚀 Personalised Application Roadmap</h3>

              <div className={styles.roadmapStepsGrid}>
                <div className={styles.roadmapCard}>
                  <span className={styles.roadmapStepNum}>01</span>
                  <h5>Standardized Tests Sprint</h5>
                  <p>
                    <strong>Primary Exam:</strong> GMAT Focus Edition<br />
                    <strong>Preparation Sprint:</strong> 4–6 months to achieve target score of 650+
                  </p>
                </div>

                <div className={styles.roadmapCard}>
                  <span className={styles.roadmapStepNum}>02</span>
                  <h5>Profile Positioning & Narrative Moat</h5>
                  <p>
                    Emphasize your technical acumen and leadership potential in finance, showcasing
                    projects or roles that highlight these skills.
                  </p>
                </div>

                <div className={styles.roadmapCard}>
                  <span className={styles.roadmapStepNum}>03</span>
                  <h5>Essays & Statement of Purpose Strategy</h5>
                  <p>
                    Craft essays that narrate your journey from computer science to finance, your
                    career ambitions, and why these programs are the perfect fit.
                  </p>
                </div>

                <div className={styles.roadmapCard}>
                  <span className={styles.roadmapStepNum}>04</span>
                  <h5>Admissions Interview Strategy</h5>
                  <p>
                    Prepare for behavioral interviews using the STAR method, and be ready to
                    discuss your technical contributions and leadership experiences.
                  </p>
                </div>
              </div>

              {/* Execution Milestones */}
              <div className={styles.milestonesBox}>
                <div className={styles.milestonesTitle}>
                  <span>📅</span>
                  <strong>Application Execution Milestones (Round 1 & Round 2)</strong>
                </div>

                <div className={styles.milestoneTimeline}>
                  <div className={styles.milestoneItem}>
                    <span className={styles.milestoneMonth}>Months 1–2</span>
                    <span className={styles.milestoneAction}>
                      Test prep sprint (GMAT/CAT/GRE), school shortlist finalization, recommender
                      outreach & briefing.
                    </span>
                  </div>

                  <div className={styles.milestoneItem}>
                    <span className={styles.milestoneMonth}>Months 3–4</span>
                    <span className={styles.milestoneAction}>
                      Resume reconstruction to global MBA format, drafting school-specific essay
                      stories, mock reviews.
                    </span>
                  </div>

                  <div className={styles.milestoneItem}>
                    <span className={styles.milestoneMonth}>Month 5</span>
                    <span className={styles.milestoneAction}>
                      Application submission, video essay recordings, and mock interview
                      intensives with MBAWizards.
                    </span>
                  </div>
                </div>

                <div className={styles.consultingBanner}>
                  <Link
                    href="/premium-university-consulting-packages"
                    className={styles.consultingBannerBtn}
                  >
                    🏛️ Explore MBAWizards M7 & Global B-School Consulting Packages ↗
                  </Link>
                </div>
              </div>
            </div>

            {/* Dossier Footer Advisory Links */}
            <div className={styles.dossierAdvisoryFooter}>
              <div className={styles.advisoryFooterHeader}>
                <span className={styles.advisoryFooterBadge}>MBAWIZARDS EXECUTIVE ADVISORY</span>
                <h4>Turn Your Admissions Ambitions Into Top-Tier Offers</h4>
                <p>
                  Elite business school applications are engineered, not left to chance. Schedule a
                  dedicated 1-on-1 profile evaluation with our former M7 & top IIM admissions
                  advisors.
                </p>
              </div>

              <div className={styles.advisoryLinksGrid}>
                <Link href="/gmat-coaching" className={styles.advisoryLink}>
                  GMAT Coaching ↗
                </Link>
                <Link href="/cat" className={styles.advisoryLink}>
                  CAT Coaching ↗
                </Link>
                <Link href="/gre-coaching-classes" className={styles.advisoryLink}>
                  GRE Classes ↗
                </Link>
                <Link href="/gmat-cat-coaching" className={styles.advisoryLink}>
                  GMAT + CAT Track ↗
                </Link>
                <Link href="/education-loan" className={styles.advisoryLink}>
                  Education Loans ↗
                </Link>
                <Link href="/contact-us" className={styles.advisoryLinkHighlight}>
                  Book Free Demo ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY THIS ENGINE OUTPERFORMS GENERIC ADVISORS */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionPretitle}>ALGORITHMIC ADVANTAGE</span>
            <h2 className={styles.sectionTitle}>
              AI Career Intelligence vs <span className={styles.goldSpan}>Generic Consulting</span>
            </h2>
            <p className={styles.sectionDescription}>
              Why thousands of candidates trust MBA Wizards&apos; data-driven admissions framework
              over outdated, subjective counseling advice.
            </p>
          </div>

          <div className={styles.comparisonTableWrap}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Feature Dimension</th>
                  <th className={styles.highlightColHeader}>
                    MBA Wizards AI Intelligence Platform
                  </th>
                  <th>Traditional Study-Abroad Agents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Diagnostic Speed</strong></td>
                  <td className={styles.highlightCol}>Instant real-time algorithmic generation</td>
                  <td>3–7 days of back-and-forth emails</td>
                </tr>
                <tr>
                  <td><strong>B-School Tier Matching</strong></td>
                  <td className={styles.highlightCol}>Objective GMAT/GPA cutoffs with 15-year benchmarks</td>
                  <td>Biased towards commission-paying partner universities</td>
                </tr>
                <tr>
                  <td><strong>Exam Decisioning</strong></td>
                  <td className={styles.highlightCol}>GMAT Focus vs CAT vs GRE analytical suitability scoring</td>
                  <td>One-size-fits-all generic recommendations</td>
                </tr>
                <tr>
                  <td><strong>Critical Gap Mitigations</strong></td>
                  <td className={styles.highlightCol}>Precise remediation sprints & scoring roadmaps</td>
                  <td>Vague feedback like &quot;improve your profile&quot;</td>
                </tr>
                <tr>
                  <td><strong>Mentor Continuity</strong></td>
                  <td className={styles.highlightCol}>Direct briefing with IIT Roorkee & M7 alumni mentors</td>
                  <td>Rotated between non-specialist sales executives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionPretitle}>COMMON INQUIRIES</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <span className={styles.goldSpan}>Questions</span>
            </h2>
          </div>

          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                How does the Graduate Admissions & Career Intelligence Platform work?
              </h3>
              <p className={styles.faqAnswer}>
                The platform utilizes proprietary admissions data calibrated from 15+ years of
                M7, Top 20 Global, and IIM admits. By ingesting your academic CGPA, undergraduate
                institution tier, quantitative foundation, work experience duration, and target
                career ambitions, it calculates your exact percentile competitiveness and generates
                a strategic blueprint.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Is the AI Career Intelligence diagnostic free to use?
              </h3>
              <p className={styles.faqAnswer}>
                Yes, 100% free. Any student or working professional can visit{" "}
                <a
                  href={TOOL_EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.faqLink}
                >
                  {TOOL_EXTERNAL_URL}
                </a>
                , configure their candidate parameters, and generate their personalized roadmap
                without any credit card or upfront charge.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Can I transition from the AI roadmap to dedicated 1-on-1 human coaching?
              </h3>
              <p className={styles.faqAnswer}>
                Absolutely. Your AI intelligence dossier can be directly imported into our
                mentorship system. Lead mentor Mr. Surinder Gupta (IIT Roorkee Alum) and our M7
                consulting team will review your diagnostic during your free 1-on-1 session to
                execute the test sprints and essay narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL LAUNCH CTA HERO BANNER */}
      <section className={styles.finalLaunchSection}>
        <div className="container">
          <div className={styles.finalCardBox}>
            <span className={styles.finalEyebrow}>START YOUR ADMISSIONS ENGINE TODAY</span>
            <h2 className={styles.finalTitle}>
              Ready to Architect Your <span className={styles.goldSpan}>Global B-School Admit</span>?
            </h2>
            <p className={styles.finalDesc}>
              Stop guessing your eligibility. Get an unvarnished, data-backed diagnostic roadmap
              customized for your target score, pedigree, and dream career.
            </p>

            <div className={styles.finalActions}>
              <a
                href={TOOL_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.finalPrimaryBtn}
              >
                <span>Launch Live AI Career Intelligence Platform</span>
                <span className={styles.btnArrow}>↗</span>
              </a>

              <Link href="/contact-us" className={styles.finalSecondaryBtn}>
                <span>Schedule 1-on-1 Mentor Evaluation</span>
                <span className={styles.btnArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
