import Link from "next/link";
import styles from "./PrivacyContent.module.css";

export default function PrivacyContent() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>🛡️</span>
            <span>Legal Transparency &amp; Data Protection</span>
          </div>

          <h1 className={styles.title}>
            Privacy <span className={styles.titleHighlight}>Policy</span>
          </h1>

          <p className={styles.subtitle}>
            At MBA Wizards, safeguarding your personal, academic, and payment data is fundamental to our mentorship commitment. Here is how we collect, protect, and respect your privacy.
          </p>

          <div className={styles.metaRow}>
            <div className={styles.metaPill}>
              <span className={styles.metaIcon}>🔒</span>
              <span>256-Bit SSL Encrypted</span>
            </div>
            <div className={styles.metaPill}>
              <span className={styles.metaIcon}>📜</span>
              <span>DPDP &amp; IT Act Compliant</span>
            </div>
            <div className={styles.metaPill}>
              <span className={styles.metaIcon}>🚫</span>
              <span>Zero Third-Party Data Selling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.layout}`}>
          {/* Executive Summary Cards */}
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>🔐</div>
              <h3 className={styles.summaryTitle}>Encrypted &amp; Protected</h3>
              <p className={styles.summaryText}>All test scores, payment transactions, and identity documents are encrypted under industry-standard security protocols.</p>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>🚫</div>
              <h3 className={styles.summaryTitle}>Never Sold or Rented</h3>
              <p className={styles.summaryText}>We do not sell, rent, or trade your contact or academic details to any marketing networks or telecallers.</p>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>🎯</div>
              <h3 className={styles.summaryTitle}>Strict Educational Use</h3>
              <p className={styles.summaryText}>Your data is utilized strictly for mock test analysis, batch scheduling, personalized mentoring, and application reviews.</p>
            </div>
          </div>

          <div className={styles.contentContainer}>
            {/* Section 1 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>01</span>
                <div>
                  <h2 className={styles.blockTitle}>Information We Collect</h2>
                  <p className={styles.blockSub}>Types of personal and academic details gathered during your preparation</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>When you interact with MBA Wizards—by registering on our website, booking a free demo session, taking a diagnostic mock exam, or enrolling in our GMAT, GRE, CAT, or admissions consulting programs—we collect relevant information to deliver personalized coaching:</p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Identity &amp; Contact:</strong> Full name, verified mobile number, email address, and city of residence.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Academic History:</strong> Undergraduate degrees, GPA/percentage, target business schools, and test score targets.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Diagnostic Performance:</strong> Sectional mock test scores, diagnostic question breakdowns, and timing analytics.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Profile Documents (Consulting):</strong> Resume drafts, statement of purpose outlines, and letters of recommendation strictly for review.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 2 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>02</span>
                <div>
                  <h2 className={styles.blockTitle}>How We Use Your Personal Information</h2>
                  <p className={styles.blockSub}>Authorized educational, pedagogical, and administrative uses</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>We process your information solely for lawful, legitimate educational operations, including:</p>
                <ul className={styles.styledList}>
                  <li>Scheduling one-on-one demo classes, diagnostic evaluations, and mentor counseling appointments.</li>
                  <li>Delivering daily live classroom links, recording archives, study plans, and portal login credentials.</li>
                  <li>Continuously adapting our Ability-Based teaching curriculum based on your sectional strengths and weaknesses.</li>
                  <li>Communicating critical exam notification alerts, batch schedule modifications, and fee receipts.</li>
                  <li>Preventing unauthorized sharing of premium test portal access and defending website security.</li>
                </ul>
              </div>
            </article>

            {/* Section 3 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>03</span>
                <div>
                  <h2 className={styles.blockTitle}>Cookies and Learning Portal Analytics</h2>
                  <p className={styles.blockSub}>Ensuring seamless login sessions and optimized portal performance</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>
                  MBA Wizards utilizes standard session cookies and privacy-first web analytics to deliver a seamless online learning experience. These cookies allow our portal to remember your active quiz state, maintain your login session across practice modules, and measure page load speed across devices.
                </p>
                <div className={styles.noticeBox}>
                  <strong>Cookie Control:</strong> You can manage or block cookies through your browser settings at any time. Please note that disabling essential cookies may impact specific features of our live mock testing interface.
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>04</span>
                <div>
                  <h2 className={styles.blockTitle}>Protection &amp; Technical Precautions</h2>
                  <p className={styles.blockSub}>Rigorous data security architecture protecting your student profile</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>
                  We deploy comprehensive administrative, physical, and digital safeguards against unauthorized access, loss, tampering, or disclosure:
                </p>
                <ul className={styles.styledList}>
                  <li><strong>SSL/TLS Encryption:</strong> All data transmissions between your browser and our servers are encrypted via 256-bit SSL certificates.</li>
                  <li><strong>Zero Financial Storage:</strong> We do not store credit/debit card numbers, CVVs, or net banking credentials on our servers. All transactions are securely routed through PCI-DSS compliant Indian payment gateways.</li>
                  <li><strong>Restricted Access:</strong> Access to student personal profiles is strictly limited to authorized faculty leads, designated counselors, and academic managers.</li>
                </ul>
              </div>
            </article>

            {/* Section 5 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>05</span>
                <div>
                  <h2 className={styles.blockTitle}>Third-Party Disclosures &amp; Non-Sale Pledge</h2>
                  <p className={styles.blockSub}>Our unbreakable commitment to candidate confidentiality</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>
                  <strong>We do not sell, rent, or trade your personal data. Period.</strong> Your phone number and email are never disclosed to third-party telemarketers.
                </p>
                <p>
                  Disclosures only occur in limited circumstances with your direct request or under statutory mandate:
                </p>
                <ul className={styles.styledList}>
                  <li>Authorized study-abroad lending partners, only when you explicitly apply for education loan guidance.</li>
                  <li>Proctored testing software platforms used for official mock exam simulations.</li>
                  <li>Compliance with court orders, subpoenas, or legal law enforcement mandates.</li>
                </ul>
              </div>
            </article>

            {/* Section 6 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>06</span>
                <div>
                  <h2 className={styles.blockTitle}>Your Rights &amp; Data Correction</h2>
                  <p className={styles.blockSub}>Retain complete control over your academic records</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>Under applicable Indian data privacy regulations, you have the right to:</p>
                <ul className={styles.styledList}>
                  <li>Request a copy of the personal information retained in your active student profile.</li>
                  <li>Request immediate correction of inaccurate academic or contact details.</li>
                  <li>Opt out of non-essential promotional SMS, WhatsApp, or email notifications at any moment.</li>
                  <li>Request account deactivation and removal upon graduation or preparation conclusion.</li>
                </ul>
              </div>
            </article>

            {/* Section 7 - Official Contact Card */}
            <div className={styles.contactCard}>
              <div className={styles.contactHeader}>
                <div className={styles.contactBadge}>Official Support Desk</div>
                <h3 className={styles.contactTitle}>Have Privacy Questions or Grievances?</h3>
                <p className={styles.contactSub}>Our administrative team is available to assist with any data protection or account queries.</p>
              </div>

              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>✉️</span>
                  <div>
                    <span className={styles.contactItemLabel}>Email Inquiries</span>
                    <a href="mailto:info@mbawizards.co.in" className={styles.contactItemLink}>info@mbawizards.co.in</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>📞</span>
                  <div>
                    <span className={styles.contactItemLabel}>Official Helpline</span>
                    <a href="tel:+919958041888" className={styles.contactItemLink}>+91-9958041888</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>💬</span>
                  <div>
                    <span className={styles.contactItemLabel}>Counseling WhatsApp</span>
                    <a href="https://wa.me/919958041888" target="_blank" rel="noopener noreferrer" className={styles.contactItemLink}>Connect via WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
