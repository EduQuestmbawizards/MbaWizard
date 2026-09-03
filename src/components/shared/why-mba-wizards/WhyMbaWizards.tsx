import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import styles from "./WhyMbaWizards.module.css";

interface WhyMbaWizardsProps {
  exam: string;
}

export default function WhyMbaWizards({ exam }: WhyMbaWizardsProps) {
  const reasons = [
    { icon: "🧠", title: "Ability-Based Manthan Model", desc: "Our proprietary pedagogy adapts entirely to your individual cognitive baseline — not a fixed curriculum. Self-assessment, Litmus test, and 5 performance tiers ensure personalized progression." },
    { icon: "🎓", title: "IIT Roorkee Founded & Led", desc: "Founded by Mr. Surinder Gupta, IIT Roorkee graduate, with decades of experience transforming students into 700+ GMAT scorers, 99+ CAT percentilers, and 325+ GRE achievers." },
    { icon: "📊", title: "AI-Powered Score Analytics", desc: "Real-time performance dashboards, question-level tracking, percentile prediction, and personalized weak-area reports after every mock test." },
    { icon: "🔄", title: "Validity Till Admission", desc: "Your course remains active until you secure your target MBA admission — not just until the last class. Unlimited doubt sessions and booster clinics are always available." },
    { icon: "🏆", title: "Dual Pathway Strategy", desc: "Whether your goal is a top IIM via CAT, ISB via GMAT, or Stanford MS via GRE — we have proven systems for each. Our dual GMAT+CAT and GMAT+GRE programs maximize your options." },
    { icon: "👥", title: "Small Batch Personalized Care", desc: "Maximum 10–12 students per batch ensures every student gets direct faculty attention, customized feedback, and weekly individual milestone tracking." },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>The MBA Wizards Difference</span>
          <h2 className={styles.title}>
            Why India&apos;s Serious {exam} Aspirants Choose <span className={styles.titleHighlight}>MBA Wizards</span>
          </h2>
          <p className={styles.subtitle}>
            We do not just teach — we enter into a mentoring partnership. Our adaptive Manthan system
            treats every student as a unique individual and guarantees measurable, verified score improvement.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.icon}>{r.icon}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className={styles.statLabel}>Success Ratio</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>
              <AnimatedCounter end={5} suffix="K+" />
            </div>
            <div className={styles.statLabel}>Happy Students</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>
              <AnimatedCounter end={25} suffix="+" />
            </div>
            <div className={styles.statLabel}>Expert Faculty</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>
              <AnimatedCounter end={30} suffix="+" />
            </div>
            <div className={styles.statLabel}>Years of Excellence</div>
          </div>
        </div>

        <div className={styles.founderBox}>
          <img
            src="/images/common/mbawizards-logo.png"
            alt="MBA Wizards Leadership"
            className={styles.founderImg}
          />
          <div>
            <h3 className={styles.founderTitle}>Mr. Surinder Gupta</h3>
            <div className={styles.founderSub}>Founder &amp; Lead Mentor — IIT Roorkee Alumni</div>
            <p className={styles.founderDesc}>
              &ldquo;The Manthan philosophy is built on a simple truth: there are no weak students, only misaligned preparation methods.
              Every student has an achiever inside them — our job is to build the right system to bring it out.
              We have taken students from 600 to 750 on the GMAT, 85th to 99th percentile on CAT, and 305 to 330 on the GRE.
              The method works. Come experience it firsthand.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
