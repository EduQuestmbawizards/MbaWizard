import styles from "./ToppersHero.module.css";

export default function ToppersHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>Hall of Fame</span>
        <h1 className={styles.title}>
          MBA Wizards <span className={styles.titleHighlight}>GMAT Toppers</span>
        </h1>
        <p className={styles.description}>
          Meet our high achievers who cracked 780, 770, and 760 on the GMAT and secured admits into Harvard, Wharton, Kellogg, INSEAD, and ISB.
        </p>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>780</span>
            <span className={styles.statLabel}>Highest Score</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>740+</span>
            <span className={styles.statLabel}>Batch Average (Toppers Club)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>M7 &amp; ISB Admits</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>99%</span>
            <span className={styles.statLabel}>Success Ratio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
