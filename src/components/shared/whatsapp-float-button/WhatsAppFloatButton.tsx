import { siteConfig } from "@/data/site-config";
import styles from "./WhatsAppFloatButton.module.css";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Chat with MBA Wizards on WhatsApp"
    >
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.235-.245-.586-.494-.506-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.244 5.146 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351zM12.04 2c-5.523 0-10 4.477-10 10 0 1.769.459 3.493 1.332 5.013L2 22l5.127-1.345C8.61 21.494 10.298 22 12.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
      </svg>
      <span className={styles.whatsappText}>Chat with Us</span>
    </a>
  );
}
