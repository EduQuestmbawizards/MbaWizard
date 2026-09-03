import styles from "./LendersTable.module.css";

const lenders = [
  { name: "SBI (State Bank of India)", scheme: "Global Ed-Vantage", rate: "9.65% – 10.15%", maxLoan: "Up to ₹1.5 Cr", collateral: "Yes (Property / FD)" },
  { name: "Punjab National Bank (PNB)", scheme: "PNB Udaan", rate: "9.25% – 10.50%", maxLoan: "Up to ₹2.0 Cr", collateral: "Yes (Property / FD)" },
  { name: "ICICI Bank", scheme: "iSMART Education Loan", rate: "10.25% – 11.25%", maxLoan: "Up to ₹1.5 Cr", collateral: "Secured & Unsecured" },
  { name: "Axis Bank", scheme: "Prime Abroad", rate: "11.00% – 11.50%", maxLoan: "Up to ₹1.0 Cr", collateral: "Unsecured Available" },
  { name: "HDFC Credila", scheme: "Specialized Study Abroad", rate: "11.00% – 13.00%", maxLoan: "Up to ₹75 Lakhs", collateral: "Non-Collateral" },
  { name: "Avanse Financial", scheme: "Global Student Loan", rate: "11.50% – 14.00%", maxLoan: "Up to ₹50 Lakhs", collateral: "Non-Collateral" },
  { name: "MPower Financing", scheme: "International Currency ($)", rate: "9.99% Fixed", maxLoan: "Up to $100,000", collateral: "No Collateral / No Co-signer" },
  { name: "Prodigy Finance", scheme: "Community Financed", rate: "10.50% – 14.00%", maxLoan: "Up to ₹50+ Lakhs", collateral: "No Collateral Needed" },
];

export default function LendersTable() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Transparent Comparison</span>
          <h2 className={styles.title}>
            Lending Partners &amp; <span className={styles.titleHighlight}>Interest Rates</span>
          </h2>
          <p className={styles.subtitle}>
            Compare top public sector banks, private institutions, NBFCs, and international lenders to find your lowest borrowing cost.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Lender Name</th>
                <th className={styles.th}>Scheme</th>
                <th className={styles.th}>Interest Rate</th>
                <th className={styles.th}>Max Amount</th>
                <th className={styles.th}>Collateral Requirement</th>
              </tr>
            </thead>
            <tbody>
              {lenders.map((l) => (
                <tr key={l.name} className={styles.tr}>
                  <td className={`${styles.td} ${styles.lenderName}`}>{l.name}</td>
                  <td className={styles.td}>{l.scheme}</td>
                  <td className={`${styles.td} ${styles.rateBadge}`}>{l.rate}</td>
                  <td className={styles.td}>{l.maxLoan}</td>
                  <td className={styles.td}>{l.collateral}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
