import styles from "./PrivacyContent.module.css";

export default function PrivacyContent() {
  return (
    <div>
      <div className={styles.heroHeader}>
        <div className="container">
          <h1 className={styles.title}>
            Privacy <span className={styles.titleHighlight}>Policy</span>
          </h1>
          <p className={styles.updated}>Last Updated: January 2025</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={`container ${styles.body}`}>
          <p className={styles.paragraph}>
            Your privacy is important to <strong>MBA Wizards</strong>. So we have developed a Privacy Policy that covers how we collect, use, disclose, transfer, and store your personal and educational information.
          </p>

          <h2 className={styles.heading}>Collection and Use of Personal Information</h2>
          <p className={styles.paragraph}>
            Personal information is data that can be used to uniquely identify or contact a single person. You may be asked to provide your personal information anytime you are in contact with MBA Wizards or our authorized counselors.
          </p>
          <p className={styles.paragraph}>
            When you register on MBA Wizards, sign up for diagnostic mock tests, request counseling, or enroll in our GMAT, GRE, CAT, or Admissions Consulting programs, we may collect information including your name, email address, phone number, city of residence, target universities, and past academic scores.
          </p>

          <h2 className={styles.heading}>How We Use Your Personal Information</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>To schedule personalized demo classes, counseling appointments, and test diagnostics.</li>
            <li className={styles.listItem}>To communicate academic schedules, test score progress, batch timings, and mentor notes.</li>
            <li className={styles.listItem}>To improve our proprietary curriculum, teaching algorithms, portal resources, and student experience.</li>
            <li className={styles.listItem}>To comply with applicable legal obligations and dispute resolutions.</li>
          </ul>

          <h2 className={styles.heading}>Cookies and Web Analytics</h2>
          <p className={styles.paragraph}>
            MBA Wizards website and web applications may use cookies, pixel tags, and analytics tags to understand student behavior, measure the performance of our educational resources, and maintain secure authenticated student sessions. You may disable cookies through your browser settings, though certain interactive features of our portal may become limited.
          </p>

          <h2 className={styles.heading}>Protection of Personal Information</h2>
          <p className={styles.paragraph}>
            MBA Wizards takes administrative, technical, and physical precautions to safeguard your personal data against loss, theft, unauthorized access, and alteration. All online payment transactions and lead captures are secured using modern SSL/TLS 256-bit encryption.
          </p>

          <h2 className={styles.heading}>Third-Party Disclosures</h2>
          <p className={styles.paragraph}>
            We never sell, rent, or lease your personal information to third parties for independent marketing purposes. Information may only be shared with authorized education loan partners, university application software systems, or proctored testing portals strictly with your consent for the execution of services you enrolled in.
          </p>

          <h2 className={styles.heading}>Contacting Our Privacy Team</h2>
          <p className={styles.paragraph}>
            If you have questions or concerns regarding this Privacy Policy or wish to request data correction or deletion, please contact us at <strong>info@mbawizards.co.in</strong> or call our administrative desk at <strong>+91-9958041888</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
