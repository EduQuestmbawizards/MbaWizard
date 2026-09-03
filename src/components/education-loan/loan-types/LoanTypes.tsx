import styles from "./LoanTypes.module.css";

export default function LoanTypes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Choose Your Path</span>
          <h2 className={styles.title}>
            Secured vs. <span className={styles.titleHighlight}>Unsecured Loans</span>
          </h2>
          <p className={styles.subtitle}>
            Explore flexible options whether you have property/collateral to pledge or prefer collateral-free financing.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardTag}>Option 1</span>
            <h3 className={styles.cardTitle}>Secured Loan (With Collateral)</h3>
            <p className={styles.cardDesc}>
              Backed by residential/commercial property, fixed deposits (FD), or government bonds. Ideal for families seeking the lowest interest rates and highest borrowing capacity.
            </p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Loan Limits:</strong> Up to ₹1.5 Cr – ₹2.0 Crores</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Interest Rates:</strong> Starts at 9.25% – 10.15% p.a.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Tenure:</strong> Long flexible tenure up to 15 years</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Lenders:</strong> SBI Global Ed-Vantage, PNB Udaan, Bank of Baroda</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <span className={styles.cardTag}>Option 2</span>
            <h3 className={styles.cardTitle}>Unsecured Loan (Non-Collateral)</h3>
            <p className={styles.cardDesc}>
              Requires no property pledge. Evaluated based on co-applicant income, student academic record, and university ranking. Fast processing within 3 to 7 working days.
            </p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Loan Limits:</strong> Up to ₹50 Lakhs – ₹1.5 Crores</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Interest Rates:</strong> 10.25% – 13.5% p.a.</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>International Options:</strong> MPower ($100k) &amp; Prodigy (No Indian co-signer)</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span><strong>Lenders:</strong> ICICI, Axis Bank, HDFC Credila, Avanse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
