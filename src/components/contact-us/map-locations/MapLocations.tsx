import styles from "./MapLocations.module.css";

export default function MapLocations() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Visit Our Offline Centers</span>
          <h2 className={styles.title}>
            Center Locations &amp; <span className={styles.titleHighlight}>Google Maps</span>
          </h2>
          <p className={styles.subtitle}>
            Both of our premium Gurgaon centers are equipped with high-speed testing labs, library rooms, and dedicated faculty cabins for 1-on-1 mentoring.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Center 1 */}
          <div className={styles.centerCard}>
            <div className={styles.cardHeader}>
              <span className={styles.centerBadge}>Center 1 — Galleria DLF Phase 4</span>
              <h3 className={styles.centerName}>Galleria Market Campus</h3>
              <p className={styles.centerAddress}>
                📍 Office No. 1212 and 1212A, 12th Floor, Galleria Boulevard, DLF Phase 4, Sector 28, Gurugram, Haryana 122001
              </p>
              <div className={styles.metaRow}>
                <span>🚇 <strong>Metro:</strong> IFFCO Chowk / MG Road (Yellow Line)</span>
                <span>🕒 <strong>Hours:</strong> Mon–Sun: 9:00 AM – 8:30 PM</span>
                <span>📞 <strong>Direct:</strong> +91-9958041888</span>
              </div>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                title="MBA Wizards Galleria Campus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.241514787941!2d77.08051787610174!3d28.472288091334648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19213824f2b9%3A0x8ef439b1ceccb710!2sGalleria%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Center 2 */}
          <div className={styles.centerCard}>
            <div className={styles.cardHeader}>
              <span className={styles.centerBadge}>Center 2 — Sector 50 Campus</span>
              <h3 className={styles.centerName}>South City 2 Campus</h3>
              <p className={styles.centerAddress}>
                📍 F-45, South City 2, Sector-50, Golf Course Extension Road, Gurugram, Haryana 122018
              </p>
              <div className={styles.metaRow}>
                <span>🚇 <strong>Metro:</strong> Sector 55-56 Rapid Metro / Huda City Centre</span>
                <span>🕒 <strong>Hours:</strong> Mon–Sun: 9:00 AM – 8:30 PM</span>
                <span>📞 <strong>Direct:</strong> +91-9958041888</span>
              </div>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                title="MBA Wizards Sector 50 Campus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3242095907483!2d77.05436667609939!3d28.40938639417855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22880c58e6df%3A0x6b7729f270bca5d1!2sSector%2050%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
