import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { footerPopularCourses, footerUsefulLinks } from "@/data/navigation";
import { SocialIcon } from "@/components/shared/icons/SocialIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/common/mbawizards-logo-darkbg.svg"
              alt="MBA Wizards"
              width={180}
              height={52}
              className={styles.footerLogo}
            />
          </div>
          <p className={styles.companyDesc}>
            Achieve your dream MBA with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and global admissions counseling.
            Personalized study plans, AI-based analytics, and proven success for Indian aspirants.
          </p>

          <div className={styles.contactList}>
            {siteConfig.addresses.map((loc) => (
              <div key={loc.label} className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>{loc.address}</span>
              </div>
            ))}
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>

          <div className={styles.initiativeNote}>
            <span className={styles.initiativeIcon}>🎓</span>
            <p className={styles.initiativeText}>
              <strong>MBA Wizards</strong> is an initiative managed &amp; powered by <strong>EduQuest</strong> — Empowering Future Leaders Since 2010
            </p>
          </div>

          <div className={styles.socialRow}>
            {siteConfig.socialLinks.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={`Visit our ${item.label} page`}
              >
                <SocialIcon platform={item.platform} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Popular Courses</h3>
          <ul className={styles.linkList}>
            {footerPopularCourses.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Useful Links</h3>
          <ul className={styles.linkList}>
            {footerUsefulLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarContainer}`}>
          <div>
            Copyright © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </div>
          <div>Personalized Test Prep & Global Admissions</div>
        </div>
      </div>
    </footer>
  );
}
