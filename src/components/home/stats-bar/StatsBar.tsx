import AnimatedCounter from "@/components/shared/animated-counter/AnimatedCounter";
import styles from "./StatsBar.module.css";

const stats = [
  { value: 99, suffix: "%", label: "Success Ratio" },
  { value: 10, suffix: "K+", label: "Happy Students" },
  { value: 25, suffix: "+", label: "Expert Faculty" },
  { value: 30, suffix: "+", label: "Years of Service" },
];

export default function StatsBar() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsCard}>
          {stats.map((item) => (
            <div key={item.label} className={styles.statItem}>
              <div className={styles.numberValue}>
                <AnimatedCounter end={item.value} suffix={item.suffix} />
              </div>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
