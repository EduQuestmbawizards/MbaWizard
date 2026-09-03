import styles from "./GmatCatOverview.module.css";

const reasons = [
  {
    icon: "🧮",
    title: "Common Quantitative Backbone",
    text: "Arithmetic, algebra, and number properties form over 70% of both tests. Building mastery in these areas builds dual capability effortlessly.",
  },
  {
    icon: "📚",
    title: "Advanced Reading Comprehension",
    text: "CAT RC passages demand speed and inference; GMAT verbal demands logic and critical deduction. Combined drills elevate both skillsets.",
  },
  {
    icon: "📊",
    title: "Data Interpretation & Reasoning",
    text: "CAT DILR sets and GMAT Data Insights both test analytical reasoning and data filtration under tight time constraints.",
  },
  {
    icon: "⏱️",
    title: "Transferable Test Temperament",
    text: "Practicing high-pressure speed and sectional pacing across both formats develops elite mental stamina for exam day.",
  },
  {
    icon: "🏫",
    title: "Complete Application Coverage",
    text: "Use CAT for 2-year IIM programs and GMAT for 1-year Executive MBA (ISB, IIM-A PGPX, INSEAD, LBS) without starting from scratch.",
  },
  {
    icon: "🚀",
    title: "Adaptive Study Circle",
    text: "Small batches with unlimited doubt clearing allow you to switch priorities as CAT November or GMAT intake deadlines approach.",
  },
];

export default function GmatCatOverview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Strategic Synergy</span>
          <h2 className={styles.title}>
            Why Prepare for <span className={styles.titleHighlight}>GMAT &amp; CAT Together?</span>
          </h2>
          <p className={styles.subtitle}>
            One unified preparation cycle opens doors to both premier Indian management institutes and prestigious international business schools.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.icon}>{r.icon}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardText}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
