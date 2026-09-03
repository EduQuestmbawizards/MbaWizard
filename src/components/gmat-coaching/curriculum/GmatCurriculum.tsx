import styles from "./GmatCurriculum.module.css";

const modules = [
  {
    icon: "📊",
    title: "Quantitative Reasoning",
    topics: [
      "Arithmetic, Algebra & Number Systems",
      "Advanced Problem Solving shortcuts",
      "Time management & mental math tricks",
      "Official Guide question-by-question dissection",
    ],
  },
  {
    icon: "📖",
    title: "Verbal Reasoning",
    topics: [
      "Critical Reasoning argument deconstruction",
      "Reading Comprehension speed & main-point mastery",
      "Eliminating trap answers with logic frameworks",
      "Contextual vocabulary & inference drills",
    ],
  },
  {
    icon: "📈",
    title: "Data Insights (DI)",
    topics: [
      "Data Sufficiency & Multi-Source Reasoning",
      "Tables, Graphs & Multi-step interpretation",
      "Two-Part Analysis decision making",
      "Computer-adaptive test pacing strategies",
    ],
  },
];

export default function GmatCurriculum() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Focus Edition Aligned</span>
          <h2 className={styles.title}>
            Comprehensive <span className={styles.titleHighlight}>Curriculum</span>
          </h2>
          <p className={styles.subtitle}>
            Every section of the GMAT Focus Edition covered from fundamental concept building to 705+ advanced problem-solving.
          </p>
        </div>

        <div className={styles.grid}>
          {modules.map((m) => (
            <div key={m.title} className={styles.card}>
              <div className={styles.cardIcon}>{m.icon}</div>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <div className={styles.topicsList}>
                {m.topics.map((t) => (
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
