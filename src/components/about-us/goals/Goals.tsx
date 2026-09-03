import styles from "./Goals.module.css";

const goals = [
  "Build a platform where students from varied academic and professional backgrounds receive an unmatched learning experience, conquer their weaknesses, and harness their greatest potential.",
  "Provide a classroom and mentoring environment where exceptionally talented coaches inspire students to exceed their target scores and educational milestones.",
  "Enable aspirants to solidify a fundamental mastery of core concepts, problem-solving strategies, and critical thinking skills that serve them during MBA entrance tests and beyond.",
  "Ignite genuine passion for analytical problem-solving and revolutionize the preparation process with humanized, responsive coaching.",
];

export default function Goals() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Commitments</span>
          <h2 className={styles.title}>
            Our <span className={styles.titleHighlight}>Goals</span>
          </h2>
        </div>

        <div className={styles.goalsList}>
          {goals.map((text, idx) => (
            <div key={idx} className={styles.goalCard}>
              <div className={styles.checkBadge}>✓</div>
              <p className={styles.goalText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
