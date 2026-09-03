import { siteConfig } from "@/data/site-config";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <div className={styles.infoCard}>
      <h2 className={styles.cardTitle}>Our Centers</h2>

      <div className={styles.addressGroup}>
        {siteConfig.addresses.map((loc, idx) => (
          <div key={loc.label} className={styles.locationItem}>
            <span className={styles.locIcon}>📍</span>
            <div>
              <h3 className={styles.locLabel}>Center {idx + 1} — Gurgaon</h3>
              <p className={styles.locText}>{loc.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactGroup}>
        <div className={styles.contactRow}>
          <span>📞</span>
          <div>
            <strong>Direct Phone: </strong>
            <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
          </div>
        </div>

        <div className={styles.contactRow}>
          <span>✉️</span>
          <div>
            <strong>Email: </strong>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>

        <div className={styles.contactRow}>
          <span>💬</span>
          <div>
            <strong>WhatsApp: </strong>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Chat Directly with Admission Mentors
            </a>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-primary)", marginBottom: "10px" }}>
          Connect With Us
        </h4>
        <div className={styles.socialRow}>
          {siteConfig.socialLinks.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={`Visit our ${item.label} page`}
            >
              {item.platform === "facebook" && "f"}
              {item.platform === "youtube" && "▶"}
              {item.platform === "linkedin" && "in"}
              {item.platform === "instagram" && "ig"}
              {item.platform === "whatsapp" && "wa"}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
