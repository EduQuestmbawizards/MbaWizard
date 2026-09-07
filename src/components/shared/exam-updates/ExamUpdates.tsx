"use client";

import { useState } from "react";
import styles from "./ExamUpdates.module.css";

export type ExamKey = "GMAT" | "GRE" | "CAT";

interface UpdateItem {
  id: string;
  badge: string;
  badgeType: "urgent" | "feature" | "strategy" | "verified";
  date: string;
  title: string;
  desc: string;
  source: string;
  impact: string;
}

const updatesData: Record<ExamKey, UpdateItem[]> = {
  GMAT: [
    {
      id: "gmat-1",
      badge: "Application Alert",
      badgeType: "urgent",
      date: "Sep – Oct 2026",
      title: "Round 1 Application Deadlines Active",
      desc: "Top global business schools (Harvard, Stanford, Wharton, INSEAD, and ISB) have opened Round 1 deadlines for the 2027 intake. GMAT Focus scores are universally accepted on the 205–805 scale.",
      source: "GMAC & Global B-School Portals",
      impact: "Round 1 High-Admit Window",
    },
    {
      id: "gmat-2",
      badge: "Testing Feature",
      badgeType: "feature",
      date: "2026 Official",
      title: "Question Review & Edit Window",
      desc: "Test-takers can bookmark challenging questions and edit up to 3 answers per section before final submission — providing immense tactical flexibility under timed pressure.",
      source: "GMAC Testing Protocol",
      impact: "Bookmark & Review 3 Answers",
    },
    {
      id: "gmat-3",
      badge: "Exam Strategy",
      badgeType: "strategy",
      date: "2026 Official",
      title: "Full Section Order Choice",
      desc: "Candidates have complete control to choose their preferred section order (Quant, Verbal, Data Insights) to align with individual mental peak stamina and strategic strengths.",
      source: "GMAC Official Guidelines",
      impact: "6 Flexible Section Sequences",
    },
    {
      id: "gmat-4",
      badge: "Score Analytics",
      badgeType: "verified",
      date: "2026 Official",
      title: "Free Official Diagnostic Analytics",
      desc: "Official GMAT Focus Score Reports now include deep diagnostic breakdowns: time per question, performance by topic, and percentile ranking included at zero extra charge.",
      source: "Official GMAC Score Reports",
      impact: "Granular Topic-Level Diagnostic",
    },
    {
      id: "gmat-5",
      badge: "Official Policy",
      badgeType: "verified",
      date: "2026 Verified",
      title: "Online & Test Center 100% Equivalence",
      desc: "GMAC and all top business school admissions deans confirm complete parity between online proctored and testing-center scores with zero admission bias.",
      source: "GMAC Deans Advisory Council",
      impact: "100% Equal Admissions Parity",
    },
    {
      id: "gmat-6",
      badge: "Score Validity",
      badgeType: "strategy",
      date: "Valid 2026–2031",
      title: "5-Year Score Window & Attempt Policy",
      desc: "All GMAT Focus scores remain valid for 5 full admissions cycles. Candidates can attempt the exam up to 5 times in a rolling 12-month window (8 lifetime attempts max).",
      source: "GMAC Regulations",
      impact: "Valid Across 5 Admission Cycles",
    },
  ],
  GRE: [
    {
      id: "gre-1",
      badge: "Format Benchmark",
      badgeType: "urgent",
      date: "2026 Official",
      title: "Shorter Format (1h 58m) Benchmarks",
      desc: "The streamlined GRE test under 2 hours has achieved record candidate completion rates. Eliminating the unscored section reduced exam fatigue substantially without altering scoring validity.",
      source: "ETS Official Research",
      impact: "Test Time Under 2 Hours",
    },
    {
      id: "gre-2",
      badge: "MBA Acceptance",
      badgeType: "verified",
      date: "2026 Verified",
      title: "MBA Acceptance Crosses 95%",
      desc: "Over 1,300 global MBA programs — including Harvard, Stanford GSB, Wharton, MIT Sloan, and Columbia — officially accept GRE on equal footing with GMAT.",
      source: "ETS Global MBA Network",
      impact: "1,300+ Top B-Schools Accept GRE",
    },
    {
      id: "gre-3",
      badge: "Testing Delivery",
      badgeType: "feature",
      date: "2026 Official",
      title: "24/7 At-Home Testing in 180+ Countries",
      desc: "Enhanced live remote proctoring allows candidates to schedule their exam at home with 24 hours advance notice, ideal for working professionals and international applicants.",
      source: "ETS ProctorU System",
      impact: "Schedule 24 Hours in Advance",
    },
    {
      id: "gre-4",
      badge: "Score Strategy",
      badgeType: "strategy",
      date: "2026 Official",
      title: "ScoreSelect Strategic Advantage",
      desc: "ETS ScoreSelect allows candidates to take multiple attempts and send only their single highest score to prospective graduate and MBA programs with complete confidentiality.",
      source: "ETS ScoreSelect Policy",
      impact: "Report Only Your Highest Score",
    },
    {
      id: "gre-5",
      badge: "MS & PhD Intake",
      badgeType: "urgent",
      date: "Fall 2027 Portals",
      title: "STEM MS & Ph.D. Intake Open",
      desc: "Leading US institutions have opened Fall 2027 admissions portals with merit-based assistantships and fellowships tied to 325+ GRE scores.",
      source: "Graduate Admissions Council",
      impact: "Scholarship & Assistantship Eligibility",
    },
    {
      id: "gre-6",
      badge: "Financial Aid",
      badgeType: "verified",
      date: "2026 Verified",
      title: "Integrated Fee Waivers & Reductions",
      desc: "Expanded financial assistance and fee reduction vouchers are actively available for eligible graduate school aspirants in India through official ETS channels.",
      source: "ETS Outreach Program",
      impact: "Direct Official Fee Subsidies",
    },
  ],
  CAT: [
    {
      id: "cat-1",
      badge: "Admissions Live",
      badgeType: "urgent",
      date: "Aug – Sep 2026",
      title: "CAT 2026 Registration Active",
      desc: "Official registration is live on iimcat.ac.in for the exam scheduled on November 29, 2026 across 170+ test cities nationwide. Admit cards release in late October.",
      source: "iimcat.ac.in Official Portal",
      impact: "Exam Date: Nov 29, 2026",
    },
    {
      id: "cat-2",
      badge: "Selection Criteria",
      badgeType: "feature",
      date: "2027–2029 Batch",
      title: "Higher Work-Ex Weightage at Top IIMs",
      desc: "IIM Ahmedabad, Bangalore, and Calcutta have enhanced the composite scoring weightage for 24–36 months of corporate experience for the upcoming admissions batch.",
      source: "IIMA & IIMB Admission Policies",
      impact: "Boost for 2–3 Year Work Experience",
    },
    {
      id: "cat-3",
      badge: "Testing Standard",
      badgeType: "verified",
      date: "2026 Official",
      title: "AI-Monitored Computer Based Testing",
      desc: "Strict biometric and AI proctoring standards maintained across all 3 test slots to ensure absolute integrity and seamless test execution across 170+ cities.",
      source: "IIM CAT Convenor Committee",
      impact: "3 Standardized Test Slots",
    },
    {
      id: "cat-4",
      badge: "Exam Pattern",
      badgeType: "strategy",
      date: "2026 Pattern",
      title: "Evolving DILR Puzzle Sets",
      desc: "Recent exam patterns feature unconventional situational logic sets (tournaments, network paths) that test lateral thinking over formulaic templates.",
      source: "CAT Analysis Board",
      impact: "Unconventional Puzzle Strategy",
    },
    {
      id: "cat-5",
      badge: "Scoring Model",
      badgeType: "verified",
      date: "2026 Standard",
      title: "Multi-Slot Normalization System",
      desc: "Rigorous equi-percentile equating formula applied across morning, afternoon, and evening slots for equitable and fair scoring nationwide.",
      source: "IIM Psychometric Advisory",
      impact: "Equi-Percentile Score Normalization",
    },
    {
      id: "cat-6",
      badge: "Seat Expansion",
      badgeType: "verified",
      date: "2027 Admissions",
      title: "Expanded Seats Across 21 IIMs",
      desc: "Over 5,500 total seats available across 21 IIMs, plus premier non-IIM institutions like FMS Delhi, SPJIMR Mumbai, and MDI Gurgaon accepting CAT 2026 scores.",
      source: "Ministry of Education & IIM Council",
      impact: "5,500+ Top Tier MBA Seats",
    },
  ],
};

interface ExamUpdatesProps {
  defaultExam?: ExamKey;
}

export default function ExamUpdates({ defaultExam = "GMAT" }: ExamUpdatesProps) {
  const [activeExam, setActiveExam] = useState<ExamKey>(defaultExam);
  const updates = updatesData[activeExam];

  const handleOpenDemo = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-book-demo"));
    }
  };

  return (
    <section className={styles.section} id="exam-updates" aria-label="Latest Exam Updates">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.liveBadge}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span className={styles.liveBadgeText}>Verified 2026 Admissions Intelligence</span>
          </div>

          <h2 className={styles.title}>
            Latest Exam <span className={styles.titleHighlight}>Updates &amp; Policy Changes</span>
          </h2>

          <p className={styles.subtitle}>
            Direct official updates, testing modifications, and admissions criteria tracked from GMAC™, ETS®, and IIM convenors.
          </p>
        </div>

        {/* Tab Selector */}
        <div className={styles.tabContainer} role="tablist" aria-label="Select Exam Updates">
          {(["GMAT", "GRE", "CAT"] as ExamKey[]).map((exam) => {
            const isActive = activeExam === exam;
            return (
              <button
                key={exam}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveExam(exam)}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              >
                <span className={styles.tabIcon}>
                  {exam === "GMAT" ? "🎯" : exam === "GRE" ? "🎓" : "🏛️"}
                </span>
                <span className={styles.tabLabel}>{exam} Focus 2026</span>
                <span className={styles.tabBadge}>6 Verified</span>
              </button>
            );
          })}
        </div>

        {/* Updates Grid */}
        <div className={styles.grid}>
          {updates.map((item) => (
            <article key={item.id} className={styles.card}>
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <span className={`${styles.badge} ${styles[item.badgeType]}`}>
                  <span className={styles.badgeIndicator} />
                  {item.badge}
                </span>
                <span className={styles.dateBadge}>
                  <svg className={styles.calendarIcon} viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>

              {/* Card Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.sourceTag}>
                  <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item.source}</span>
                </div>
                <div className={styles.impactPill}>
                  {item.impact}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Strategic Guidance Action Callout */}
        <div className={styles.strategyCallout}>
          <div className={styles.calloutContent}>
            <div className={styles.calloutIconBox}>
              <span className={styles.calloutIcon}>💡</span>
            </div>
            <div className={styles.calloutText}>
              <h4 className={styles.calloutTitle}>
                How do these 2026 {activeExam} changes impact your target timeline?
              </h4>
              <p className={styles.calloutDesc}>
                Book a 1-on-1 diagnostic evaluation with IIT Roorkee alumni mentors to design your score strategy.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleOpenDemo}
            className={styles.calloutBtn}
          >
            <span>Book Free Strategy Session</span>
            <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
