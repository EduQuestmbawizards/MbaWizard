import styles from "./PlacementPrep.module.css";

const stages = [
  {
    icon: "📢",
    title: "Pre-Placement Profiling",
    text: "Understanding target company hiring benchmarks, corporate culture expectations, and role-specific qualification metrics before day one.",
  },
  {
    icon: "✍️",
    title: "Written Aptitude & Reasoning",
    text: "Mastering Quantitative, Logical, and Verbal speed tests used by top recruiters, MNCs, and premier consulting and IT firms.",
  },
  {
    icon: "🗣️",
    title: "Group Discussion (GD) Labs",
    text: "Live moderated GD simulations focusing on content articulation, respectful turn-taking, consensus building, and body language.",
  },
  {
    icon: "💻",
    title: "Technical & Domain Interviews",
    text: "Tailored mock interviews assessing academic fundamentals, live project case studies, and engineering/management problem solving.",
  },
  {
    icon: "👔",
    title: "Executive HR Interviews",
    text: "Preparation for behavioral, situational, and cultural fitment questions, personal narrative framing, and salary negotiation skills.",
  },
  {
    icon: "📄",
    title: "Resume & Portfolio Polishing",
    text: "Drafting high-impact, ATS-friendly one-page resumes highlighting key internships, leadership roles, and measurable contributions.",
  },
];

export default function PlacementPrep() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Campus To Corporate</span>
          <h2 className={styles.title}>
            The 6-Stage <span className={styles.titleHighlight}>Placement Architecture</span>
          </h2>
          <p className={styles.subtitle}>
            A structured, holistic framework designed to bridge the gap between academic theory and corporate recruiter expectations.
          </p>
        </div>

        <div className={styles.grid}>
          {stages.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
