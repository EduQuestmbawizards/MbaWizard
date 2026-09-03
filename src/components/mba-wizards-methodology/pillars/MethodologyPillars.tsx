import styles from "./MethodologyPillars.module.css";

const pillars = [
  {
    icon: "🎯",
    title: "Ability-Based Adaptive Model",
    text: "Tutors adapt to your cognitive pace. We build a true partnership where individual roadmaps dynamically evolve based on actual milestone mastery.",
  },
  {
    icon: "🧠",
    title: "Mental Perseverance Training",
    text: "Success on the GMAT and CAT is 50% psychology. We train stamina, stress control, and emotional resilience through calibrated multi-difficulty test sets.",
  },
  {
    icon: "📚",
    title: "50,000+ Question Bank",
    text: "Access an unmatched repository of targeted drills, official-standard tricky traps, and AI-enabled test generation categorized by concept and difficulty.",
  },
  {
    icon: "⏱️",
    title: "Time Efficiency Drills",
    text: "Learn non-standard elimination strategies, mental estimation, and speed frameworks that save 30–45 seconds per problem on test day.",
  },
  {
    icon: "👥",
    title: "Small Batch & 1-on-1 Focus",
    text: "Capped batch sizes ensure every student receives individualized doubt clearance, diagnostic reviews, and direct founder mentorship.",
  },
  {
    icon: "🏆",
    title: "Guaranteed Score Growth",
    text: "Our structured pedagogy consistently delivers 70–100+ point improvements for re-takers and 700+ baseline scores for first-time aspirants.",
  },
];

export default function MethodologyPillars() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Why It Works</span>
          <h2 className={styles.title}>
            Core Advantages of <span className={styles.titleHighlight}>Our Pedagogy</span>
          </h2>
          <p className={styles.subtitle}>
            Discover why MBA Wizards achieves one of the highest success ratios in the test preparation industry.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
