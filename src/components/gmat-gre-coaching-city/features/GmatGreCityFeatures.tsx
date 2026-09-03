import styles from "./GmatGreCityFeatures.module.css";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface GmatGreCityFeaturesProps {
  city: string;
  features: Feature[];
}

export default function GmatGreCityFeatures({ city, features }: GmatGreCityFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Key Advantages</span>
          <h2 className={styles.title}>
            Why Choose MBA Wizards Dual Prep in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            One unified coaching roadmap preparing you for top percentiles on both GMAT and GRE in {city}.
          </p>
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
