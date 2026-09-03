import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h2 className={styles.cardTitle}>Our Vision</h2>
            <p className={styles.cardText}>
              Our vision is of a future in which all our students benefit from a world-class education by implementing effective learning models and adaptive strategies. We create an intellectually vibrant environment that encourages our students to participate in active learning, critical thinking, and decisive exam performance.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🚀</div>
            <h2 className={styles.cardTitle}>Our Mission</h2>
            <p className={styles.cardText}>
              MBA Wizards is a center of excellence where the aspirations of ambitious candidates and corporate professionals are fulfilled. Candidates undergo unique and practically proven facilitation in order to become masters of standardized test concepts and holistic business school admissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
