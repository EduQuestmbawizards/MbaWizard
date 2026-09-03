interface Feature { icon: string; title: string; desc: string; }
interface CatCityFeaturesProps { city: string; features: Feature[]; }
import styles from "./CatCityFeatures.module.css";

export default function CatCityFeatures({ city, features }: CatCityFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Why MBA Wizards</span>
          <h2 className={styles.title}>What Sets Our CAT Coaching in <span className={styles.titleHighlight}>{city}</span> Apart</h2>
          <p className={styles.subtitle}>A comprehensive, ability-based CAT coaching ecosystem designed to transform Gurgaon professionals and students into IIM-ready candidates.</p>
        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
