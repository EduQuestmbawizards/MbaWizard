interface Feature { icon: string; title: string; desc: string; }

interface GmatCatCityFeaturesProps {
  city: string;
  features: Feature[];
}

import styles from "./GmatCatCityFeatures.module.css";

export default function GmatCatCityFeatures({ city, features }: GmatCatCityFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>What Sets Us Apart</span>
          <h2 className={styles.title}>Why Choose MBA Wizards for GMAT+CAT in <span className={styles.titleHighlight}>{city}</span></h2>
          <p className={styles.subtitle}>A unique dual-track coaching ecosystem built around the 75% overlapping syllabus of GMAT and CAT — preparing you for IIMs and global B-schools simultaneously.</p>
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
