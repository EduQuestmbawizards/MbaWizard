import Link from "next/link";
import styles from "./Programs.module.css";

const programs = [
  {
    tag: "Target 705+ Score",
    title: "Personalized GMAT Focus Prep",
    description:
      "Master Data Insights, Quant, and Verbal with personalized study roadmaps, AI diagnostics, and 1-on-1 strategy sessions.",
    features: ["Section-wise diagnostic tests", "Official Guide walkthroughs", "1-on-1 mentor strategy sessions"],
    href: "/gmat-coaching",
  },
  {
    tag: "Target 99+ Percentile",
    title: "CAT Coaching & Mentorship",
    description:
      "Crack CAT with our Ability-Based Model, rigorous sectional drills, QA shortcuts, and expert mentor evaluation.",
    features: ["Ability-based adaptive batches", "VARC comprehension mastery", "Comprehensive mock series with AI"],
    href: "/cat",
  },
  {
    tag: "Target 320+ Score",
    title: "Top GRE Coaching Classes",
    description:
      "Score 320+ on the GRE with high-frequency vocabulary techniques, analytical writing review, and Quant drills.",
    features: ["Contextual vocab mastery", "AWA rubric reviews", "Computer-adaptive test simulation"],
    href: "/gre-coaching-classes",
  },
  {
    tag: "Dual Strategy Prep",
    title: "GMCAT (GMAT + CAT) Program",
    description:
      "Ace both global and domestic MBA entrances simultaneously with our optimized dual-curriculum track.",
    features: ["Unified syllabus coverage", "Flexible test timing", "Dual admissions strategy"],
    href: "/gmat-cat-coaching",
  },
  {
    tag: "Target 325+ Score",
    title: "GMAT + GRE Integrated Track",
    description:
      "Maximum flexibility for global business schools and graduate admissions across USA, Europe, and Asia.",
    features: ["Dual test readiness", "B-School shortlisting", "Scholarship profile strategy"],
    href: "/gmat-gre-coaching",
  },
  {
    tag: "Top 25 Global Admits",
    title: "University Admissions Consulting",
    description:
      "End-to-end support: narrative crafting, resume overhaul, essay editing, recommendation strategy, and mock interviews.",
    features: ["Ivy League & M7 mentors", "Comprehensive essay polishing", "Blind mock interview prep"],
    href: "/premium-university-consulting-packages",
  },
];

export default function Programs() {
  return (
    <section className={styles.programsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.preTitle}>Tailored Test Prep</span>
          <h2 className={styles.mainTitle}>
            Achieve Your <span className={styles.mainTitleHighlight}>MBA Dream</span>
          </h2>
          <p className={styles.subtitle}>
            Industry-leading programs engineered for high test scores and elite business school admissions.
          </p>
        </div>

        <div className={styles.programsGrid}>
          {programs.map((prog) => (
            <div key={prog.title} className={styles.programCard}>
              <div>
                <span className={styles.cardTag}>{prog.tag}</span>
                <h3 className={styles.cardTitle}>{prog.title}</h3>
                <p className={styles.cardDescription}>{prog.description}</p>
                <div className={styles.cardFeatures}>
                  {prog.features.map((feat) => (
                    <div key={feat} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href={prog.href} className={styles.cardLink}>
                <span>Know More</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
