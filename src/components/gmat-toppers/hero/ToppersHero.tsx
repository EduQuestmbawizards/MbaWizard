import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import styles from "./ToppersHero.module.css";

export default function ToppersHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="/images/heroes/hero-toppers.jpg"
          alt="Top MBA Graduating Achievers"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
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
            <span className={styles.statNumber}>
              <AnimatedCounter end={780} />
            </span>
            <span className={styles.statLabel}>Highest Score</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              <AnimatedCounter end={740} suffix="+" />
            </span>
            <span className={styles.statLabel}>Batch Average (Toppers Club)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              <AnimatedCounter end={500} suffix="+" />
            </span>
            <span className={styles.statLabel}>M7 &amp; ISB Admits</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              <AnimatedCounter end={99} suffix="%" />
            </span>
            <span className={styles.statLabel}>Success Ratio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
