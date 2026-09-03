import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Since 1995</span>
          <h1 className={styles.title}>
            Our <span className={styles.titleHighlight}>Story</span>
          </h1>
        </div>

        <div className={styles.contentCard}>
          <p className={styles.paragraph}>
            We started off as an Education Consultant in 1995 under the visionary leadership of Mr. Surinder Gupta, an IIT Roorkee graduate who previously served as an architect in multinational corporations. Having prepared for MBA entrance examinations in India and abroad, he observed firsthand the gaps in traditional coaching institutes and took a determined decision to create a superior educational pathway for aspirants.
          </p>

          <div className={styles.highlightBox}>
            <p className={styles.highlightText}>
              &ldquo;Learning has to be customized and personalized, else it is useless to teach.&rdquo;
            </p>
          </div>

          <p className={styles.paragraph}>
            Transforming personal expectations into actionable pedagogy, he invented the proprietary <strong>Ability-Based Model</strong> of MBA coaching. This model systematically diagnoses student competencies across individual sub-sections, preparing all learners for consistent, measurable score improvements.
          </p>

          <p className={styles.paragraph}>
            After years of proven results in Roorkee and expanding to Gurgaon, Delhi-NCR, Mumbai, and Bangalore, our faculty coaches students through the Manthan Methodology — empowering thousands of aspirants to secure admits to leading business schools in India and globally.
          </p>

          <div className={styles.statBadge}>
            <span className={styles.statNumber}>
              <AnimatedCounter end={22400} suffix="+" />
            </span>
            <span className={styles.statLabel}>Students Enrolled & Mentored</span>
          </div>
        </div>
      </div>
    </section>
  );
}
