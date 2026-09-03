import styles from "./ResearchPricing.module.css";

const pricingTiers = [
  { count: "1 Research Paper", fee: "₹ 30,000" },
  { count: "2 Research Papers", fee: "₹ 60,000" },
  { count: "3 Research Papers", fee: "₹ 90,000" },
  { count: "4 Research Papers", fee: "₹ 1,20,000" },
  { count: "5 Research Papers", fee: "₹ 1,40,000" },
  { count: "6 Research Papers", fee: "₹ 1,60,000" },
  { count: "7 Research Papers", fee: "₹ 1,70,000" },
  { count: "8 Research Papers", fee: "₹ 1,90,000" },
  { count: "9 Research Papers", fee: "₹ 2,00,000" },
  { count: "10 Research Papers", fee: "₹ 2,20,000" },
];

export default function ResearchPricing() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Transparent Investment</span>
          <h2 className={styles.title}>
            Research Papers <span className={styles.titleHighlight}>Fee Structure</span>
          </h2>
          <p className={styles.subtitle}>
            Comprehensive mentoring from ideation to final indexed publication with no hidden charges.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Number of Papers</th>
                <th className={styles.th}>Mentorship &amp; Publishing Fees</th>
              </tr>
            </thead>
            <tbody>
              {pricingTiers.map((p) => (
                <tr key={p.count} className={styles.tr}>
                  <td className={styles.td}><strong>{p.count}</strong></td>
                  <td className={`${styles.td} ${styles.feeHighlight}`}>{p.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
