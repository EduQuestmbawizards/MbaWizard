import styles from "./EduQuestBar.module.css";

export default function EduQuestBar() {
  return (
    <aside className={styles.bar} aria-label="Organization affiliation">
      <div className={`container ${styles.barContainer}`}>
        <div className={styles.badge}>
          <span className={styles.icon}>🎓</span>
          <span className={styles.text}>
            <strong>MBA Wizards</strong> is an initiative managed &amp; powered by <strong>EduQuest</strong> — Empowering Future Leaders Since 2010
          </span>
        </div>
        <div className={styles.tag}>IIT Roorkee Mentorship Pedagogy</div>
      </div>
    </aside>
  );
}
