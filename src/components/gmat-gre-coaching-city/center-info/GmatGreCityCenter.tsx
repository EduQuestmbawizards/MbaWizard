"use client";

import styles from "./GmatGreCityCenter.module.css";

interface GmatGreCityCenterProps {
  city: string;
  centerType: string;
  address?: string;
  phone: string;
  email: string;
}

export default function GmatGreCityCenter({
  city,
  centerType,
  address,
  phone,
  email,
}: GmatGreCityCenterProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.info}>
            <span className={styles.tag}>{centerType}</span>
            <h2 className={styles.title}>MBA Wizards {city} Dual Prep Center</h2>
            {address && <p className={styles.address}>📍 {address}</p>}
            <div className={styles.contactRow}>
              <span>
                📞 Call: <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className={styles.contactLink}>{phone}</a>
              </span>
              <span>
                ✉️ Email: <a href={`mailto:${email}`} className={styles.contactLink}>{email}</a>
              </span>
            </div>
          </div>

          <div className={styles.btnCol}>
            <button type="button" onClick={handleOpenDemo} className={styles.actionBtn}>
              Schedule {city} Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
