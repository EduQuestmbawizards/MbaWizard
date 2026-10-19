import Link from "next/link";
import styles from "./PrepTools.module.css";

interface ToolItem {
  id: string;
  badge: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  href: string;
  isExternal: boolean;
  highlightTag?: string;
}

const prepTools: ToolItem[] = [
  {
    id: "free-trial-demo",
    badge: "1-on-1 Faculty Mentorship",
    emoji: "📅",
    title: "Schedule A Free Trial Demo",
    subtitle: "Personalized Diagnostic & Strategy Roadmap",
    description:
      "Experience our pedagogy firsthand before making any commitment. Sit down 1-on-1 with an IIT/IIM alumni mentor for a tailored audit of your prep baseline.",
    features: [
      "Live 1-on-1 Mentor Consultation: Direct interaction with 20+ yr experienced lead faculty",
      "Comprehensive Diagnostic Test: Benchmark your baseline in Quant, Verbal & Reasoning",
      "Personalized Score Roadmap: Custom week-by-week study schedule tailored to your work hours",
      "Profile & B-School Audit: Candid evaluation of GPA, work experience & target college shortlist",
    ],
    ctaText: "Schedule Free Demo Class",
    href: "/contact-us",
    isExternal: false,
    highlightTag: "100% Free • No Commitment",
  },
  {
    id: "ai-cat-interviewer",
    badge: "Exclusive AI Innovation",
    emoji: "🤖",
    title: "AI CAT Mock Interviewer",
    subtitle: "Real-Time IIM WAT-PI Simulation Engine",
    description:
      "Engineered specifically for CAT aspirants targeting IIM Ahmedabad, Bangalore, Calcutta, and top B-Schools to overcome interview anxiety and master delivery.",
    features: [
      "Facial & Eye-Contact Analysis: AI computer vision tracks gaze, head stability & composure",
      "Speech Analytics & WPM Cadence: Real-time calculation of Words Per Minute & filler words",
      "Dynamic IIM Cross-Questioning: Generates adaptive follow-ups on your resume, stream & GK",
      "100-Point Diagnostic Report: Multi-parameter radar chart measuring domain mastery & logic",
    ],
    ctaText: "Launch AI CAT Interviewer",
    href: "https://interview.cat.mbawizards.co.in/",
    isExternal: true,
    highlightTag: "Live Interactive Simulator",
  },
  {
    id: "ai-gmat-interviewer",
    badge: "Global B-School Prep",
    emoji: "🤖",
    title: "AI GMAT Interviewer",
    subtitle: "Admissions Interview Simulator for M7, Europe & ISB",
    description:
      "Practice high-stakes behavioral and leadership questions for top MBA admissions panels including Wharton, INSEAD, Columbia, London Business School, and ISB.",
    features: [
      "STAR-Method Answer Evaluation: Audits Situation, Task, Action & Result structure",
      "Leadership Storytelling Metrics: Verifies executive presence, impact, and goal clarity",
      "School-Specific Interview Personas: Tailored question styles reflecting target B-School culture",
      "Instant Actionable Feedback: Pinpoints rambling, pauses, and opportunities to strengthen impact",
    ],
    ctaText: "Launch AI GMAT Interviewer",
    href: "https://gmat.mbawizards.co.in/",
    isExternal: true,
    highlightTag: "STAR Framework Grader",
  },
  {
    id: "gmat-mock-tests",
    badge: "GMAT Focus Edition 2026",
    emoji: "📝",
    title: "GMAT Adaptive Mock Tests",
    subtitle: "Full-Length IRT-Calibrated Practice Exam Suite",
    description:
      "A high-fidelity computer-adaptive test environment that replicates the exact 205–805 scoring algorithm and time-pressure conditions of the GMAT Focus Edition.",
    features: [
      "Item Response Theory (IRT) Engine: Question-level adaptive calibration matching GMAC standards",
      "4,000+ Calibrated Question Bank: Fresh, non-repeating questions across Quant, Verbal & DI",
      "Pacing & Trap Diagnostic Heatmaps: Isolates time-sink questions, rush errors & cognitive fatigue",
      "±10 Point Score Prediction: Validated benchmark predicting your real exam performance",
    ],
    ctaText: "Practice GMAT Mock Tests",
    href: "https://gmat-mock.mbawizards.co.in/#mock-tests",
    isExternal: true,
    highlightTag: "IRT Adaptive Algorithm",
  },
];

export default function PrepTools() {
  return (
    <section id="ai-prep-ecosystem" className={styles.section} aria-label="MBA Wizards AI and Prep Tools Ecosystem">
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowBottom} />

      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Smart Prep &amp; AI Ecosystem</span>
          <h2 className={styles.title}>
            Next-Gen Tools Built To Give You An{" "}
            <span className={styles.titleHighlight}>Unfair Advantage</span>
          </h2>
          <p className={styles.subtitle}>
            Explore our suite of proprietary AI interview simulators, computer-adaptive mock tests,
            and 1-on-1 diagnostic sessions engineered to convert your score into top B-School admits.
          </p>
        </div>

        <div className={styles.grid}>
          {prepTools.map((tool) => (
            <article key={tool.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconAndBadge}>
                  <span className={styles.cardEmoji} role="img" aria-label={tool.title}>
                    {tool.emoji}
                  </span>
                  <span className={styles.badge}>{tool.badge}</span>
                </div>
                {tool.highlightTag && (
                  <span className={styles.highlightPill}>{tool.highlightTag}</span>
                )}
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{tool.title}</h3>
                <p className={styles.cardSubtitle}>{tool.subtitle}</p>
                <p className={styles.cardDescription}>{tool.description}</p>

                <div className={styles.featuresSection}>
                  <h4 className={styles.featuresHeading}>What You Get:</h4>
                  <ul className={styles.featuresList}>
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <svg
                          className={styles.checkIcon}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.cardFooter}>
                {tool.isExternal ? (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                    aria-label={`${tool.ctaText} (opens in a new tab)`}
                  >
                    <span>{tool.ctaText}</span>
                    <svg
                      className={styles.arrowIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link href={tool.href} className={styles.ctaButton}>
                    <span>{tool.ctaText}</span>
                    <svg
                      className={styles.arrowIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
