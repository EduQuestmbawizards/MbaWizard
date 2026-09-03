import styles from "./GreStructure.module.css";

const rows = [
  {
    section: "Quantitative Reasoning",
    questions: "27 questions",
    time: "47 minutes",
    desc: "Arithmetic, algebra, geometry, and data analysis shortcuts",
  },
  {
    section: "Verbal Reasoning",
    questions: "27 questions",
    time: "41 minutes",
    desc: "Reading comprehension, high-yield vocabulary & critical reasoning",
  },
  {
    section: "Analytical Writing (AWA)",
    questions: "1 task",
    time: "30 minutes",
    desc: "“Analyze an Issue” essay assessing logic, structure, and clarity",
  },
  {
    section: "Total Duration",
    questions: "55 questions + 1 essay",
    time: "~1 hr 58 min",
    desc: "Shorter, streamlined format (revised ETS GRE format)",
  },
];

export default function GreStructure() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Shorter Format Breakdown</span>
          <h2 className={styles.title}>
            GRE <span className={styles.titleHighlight}>Exam Structure</span>
          </h2>
          <p className={styles.subtitle}>
            Overview of the official ETS shorter GRE format currently administered globally.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Section</th>
                <th className={styles.th}>Questions</th>
                <th className={styles.th}>Time</th>
                <th className={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.section} className={`${styles.tr} ${i === rows.length - 1 ? styles.totalRow : ""}`}>
                  <td className={styles.td}><strong>{r.section}</strong></td>
                  <td className={styles.td}>{r.questions}</td>
                  <td className={styles.td}>{r.time}</td>
                  <td className={styles.td}>{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
