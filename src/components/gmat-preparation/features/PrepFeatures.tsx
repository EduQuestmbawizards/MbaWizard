import styles from "./PrepFeatures.module.css";

const features = [
  {
    icon: "⏱️",
    title: "70+ Minimum Live Class Hours",
    text: "Exhaustive classroom & live online instruction covering fundamentals, intermediate applications, and advanced 700+ problem sets.",
  },
  {
    icon: "🧮",
    title: "Hard Math Workshops",
    text: "Specialized weekend clinics dedicated strictly to high-difficulty Permutations, Probability, Geometry, and Number Theory tricks.",
  },
  {
    icon: "📝",
    title: "10 Full-Length Adaptive Mocks",
    text: "Official-standard test simulations with detailed sectional timing analyses, question-by-question review, and personalized feedback.",
  },
  {
    icon: "🔄",
    title: "Course Validity Till Admission",
    text: "Never worry about expiring packages. Attend refresher booster classes and mock reviews right up until you take your test and secure your admit.",
  },
  {
    icon: "👥",
    title: "Capped Small Batches",
    text: "Every batch is strictly capped to enable personalized interaction, dedicated doubt resolution, and custom milestone homework.",
  },
  {
    icon: "🚀",
    title: "Booster Sessions for 700+",
    text: "Complementary advanced sprint workshops designed specifically to push 650-level scorers across the 700+ line at no extra charge.",
  },
];

export default function PrepFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Value Deliverables</span>
          <h2 className={styles.title}>
            What You Receive With <span className={styles.titleHighlight}>MBA Wizards Prep</span>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive support ecosystem engineered for complete academic and psychological readiness.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
