import styles from "./DualBenefits.module.css";

const benefits = [
  {
    icon: "🎯",
    title: "Maximum School Flexibility",
    text: "Applying with both GMAT and GRE preparation allows you to target elite US & European MBA programs as well as specialized STEM Master's degrees.",
  },
  {
    icon: "⚡",
    title: "Shared Quantitative Foundations",
    text: "Over 70% of arithmetic, algebra, and number properties overlap. Master core concepts once, then apply them with targeted speed tactics.",
  },
  {
    icon: "📈",
    title: "Double the Test Attempts",
    text: "If you feel your score on one exam does not reflect your true potential, having GRE readiness provides an immediate backup without restarting prep.",
  },
  {
    icon: "🧠",
    title: "Comprehensive Verbal Muscle",
    text: "GRE builds extensive vocabulary and reading speed, while GMAT refines razor-sharp argument logic. Together they make you an unstoppable verbal candidate.",
  },
  {
    icon: "⏳",
    title: "Optimized 3–4 Month Timeline",
    text: "Our structured track teaches common core syllabus first, followed by dedicated exam-specific mocks and simulation testing.",
  },
  {
    icon: "🏆",
    title: "Dual Admission Consulting",
    text: "Our mentors help you decide school-by-school whether to submit your GMAT or GRE score to maximize scholarship opportunities.",
  },
];

export default function DualBenefits() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Strategic Advantages</span>
          <h2 className={styles.title}>
            Why Prepare for <span className={styles.titleHighlight}>GMAT &amp; GRE Simultaneously?</span>
          </h2>
          <p className={styles.subtitle}>
            Leverage syllabus synergy to expand your program choices while saving months of redundant test preparation.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((b) => (
            <div key={b.title} className={styles.card}>
              <div className={styles.icon}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardText}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
