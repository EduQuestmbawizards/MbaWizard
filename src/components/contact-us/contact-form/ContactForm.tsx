import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Send Us a Message</h2>
        <p className={styles.formSubtitle}>
          Fill out the form below to book a free trial demo, profile evaluation, or discuss admissions counseling.
        </p>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe
          src="https://admin.funnelai.in/widget/form/69980e0615246"
          style={{ width: "100%", height: "600px", border: "none", borderRadius: "3px" }}
          id="inline-69980e0615246"
          data-form-name="MBAWizards Black Font"
          data-layout-iframe-id="inline-69980e0615246"
          data-form-id="69980e0615246"
          data-height="600"
          title="MBAWizards Black Font"
        />
      </div>
    </div>
  );
}
