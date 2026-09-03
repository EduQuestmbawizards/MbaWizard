import styles from "./CatSyllabus.module.css";

const sections = [
  {
    icon: "📐",
    title: "Quantitative Aptitude (QA)",
    topics: [
      "Arithmetic (Percentages, Profit/Loss, Ratios, Time-Work)",
      "Algebra (Linear/Quadratic, Inequalities, Logarithms)",
      "Geometry, Mensuration & Coordinate Geometry",
      "Number Systems & Modern Math (P&C, Probability)",
    ],
  },
  {
    icon: "🧩",
    title: "Data Interpretation & LR (DILR)",
    topics: [
      "Caselets, Tables, Multi-dimensional Bar & Line Graphs",
      "Arrangements (Linear, Circular, Matrix)",
      "Games & Tournaments, Seating Plans & Puzzles",
      "Set Theory, Venn Diagrams & Syllogisms",
    ],
  },
  {
    icon: "📖",
    title: "Verbal Ability & RC (VARC)",
    topics: [
      "Reading Comprehension (Philosophy, Economics, Tech)",
      "Para Jumbles & Out of Context Sentences (Odd-One-Out)",
      "Para Summary & Critical Reasoning deductions",
      "Eliminating deceptive trap options under speed",
    ],
  },
];

export default function CatSyllabus() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>IIM Pattern Breakdown</span>
          <h2 className={styles.title}>
            CAT Comprehensive <span className={styles.titleHighlight}>Syllabus</span>
          </h2>
          <p className={styles.subtitle}>
            Master every question archetype across QA, DILR, and VARC with stepwise accuracy and speed drills.
          </p>
        </div>

        <div className={styles.grid}>
          {sections.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <div className={styles.topicsList}>
                {s.topics.map((t) => (
                  <div key={t} className={styles.topicItem}>
                    <span className={styles.check}>✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
