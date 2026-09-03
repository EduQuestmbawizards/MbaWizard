interface GmatCatCityCenterProps {
  city: string;
  centerType: string;
  address?: string;
  phone: string;
  email: string;
}

import styles from "./GmatCatCityCenter.module.css";

export default function GmatCatCityCenter({ city, centerType, address, phone, email }: GmatCatCityCenterProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Find Us in {city}</span>
          <h2 className={styles.title}>GMAT+CAT Coaching <span className={styles.titleHighlight}>Center Details</span></h2>
        </div>
        <div className={styles.card}>
          <span className={styles.tag}>{centerType}</span>
          <div className={styles.addressGrid}>
            <div className={styles.addressBox}>
              <div className={styles.addressLabel}>📍 Center 1 — Gurugram</div>
              <div className={styles.addressText}>Office No. 1212 &amp; 1212A, Galleria Boulevard, DLF Phase 4, Sector 28, Gurugram, Haryana 122001</div>
            </div>
            <div className={styles.addressBox}>
              <div className={styles.addressLabel}>📍 Center 2 — Gurgaon</div>
              <div className={styles.addressText}>F-45, South City 2, Sector 50, Gurgaon, Haryana 122018</div>
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.contactItem}><span className={styles.contactIcon}>📞</span><span>{phone}</span></div>
            <div className={styles.contactItem}><span className={styles.contactIcon}>✉️</span><span>{email}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
