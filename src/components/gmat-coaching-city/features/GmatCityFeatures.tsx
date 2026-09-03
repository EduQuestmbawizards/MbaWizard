import styles from "./GmatCityFeatures.module.css";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface GmatCityFeaturesProps {
  city: string;
  features: Feature[];
}

export default function GmatCityFeatures({ city, features }: GmatCityFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Key Advantages</span>
          <h2 className={styles.title}>
            Why Choose MBA Wizards in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            Empowering students in {city} with verified 700+ GMAT Focus preparation frameworks.
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
