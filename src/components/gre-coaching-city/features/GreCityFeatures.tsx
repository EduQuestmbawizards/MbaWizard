import styles from "./GreCityFeatures.module.css";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface GreCityFeaturesProps {
  city: string;
  features: Feature[];
}

export default function GreCityFeatures({ city, features }: GreCityFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Key Advantages</span>
          <h2 className={styles.title}>
            Why Choose MBA Wizards for GRE in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            Proven Verbal &amp; Quant pedagogy designed to secure 320+ scores for students across {city}.
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
