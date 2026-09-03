"use client";

import { siteConfig } from "@/data/site-config";
import styles from "./CatCityHero.module.css";

interface CatCityHeroProps {
  preTitle: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  city: string;
}

export default function CatCityHero({ preTitle, title, titleHighlight, subtitle, city }: CatCityHeroProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.preTitle}>{preTitle}</span>
        <h1 className={styles.title}>{title} <span className={styles.titleHighlight}>{titleHighlight}</span></h1>
        <p className={styles.description}>{subtitle}</p>
        <div className={styles.actions}>
          <button type="button" onClick={handleOpenDemo} className={styles.primaryBtn}>Book Free Demo in {city}</button>
          <a href={`${siteConfig.whatsappUrl}%2C%20i%27m%20inquiring%20about%20CAT%20coaching%20in%20${city}.`} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>💬 Chat with {city} Mentor</a>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}><div className={styles.statValue}>98%</div><div className={styles.statLabel}>Success Ratio</div></div>
          <div className={styles.statCard}><div className={styles.statValue}>5K+</div><div className={styles.statLabel}>Happy Students</div></div>
          <div className={styles.statCard}><div className={styles.statValue}>15+</div><div className={styles.statLabel}>Expert Faculty</div></div>
          <div className={styles.statCard}><div className={styles.statValue}>15+</div><div className={styles.statLabel}>Years of Service</div></div>
        </div>
      </div>
    </section>
  );
}
