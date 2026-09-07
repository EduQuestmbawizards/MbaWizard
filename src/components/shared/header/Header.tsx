"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { navigationItems } from "@/data/navigation";
import { SocialIcon } from "@/components/shared/icons/SocialIcons";
import styles from "./Header.module.css";

interface HeaderProps {
  onOpenDemo?: () => void;
}

export default function Header({ onOpenDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);

  const toggleMobileGroup = (title: string) => {
    setExpandedMobileGroup((prev) => (prev === title ? null : title));
  };

  const handleBookDemoClick = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = "/contact-us";
    }
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarContact}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.topBarItem} aria-label="Call MBA Wizards">
              <span>📞</span>
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className={`${styles.topBarItem} ${styles.topBarEmail}`} aria-label="Email MBA Wizards">
              <span>✉️</span>
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className={styles.topBarSocial}>
            {siteConfig.socialLinks.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label={`Visit our ${item.label} page`}
              >
                <SocialIcon platform={item.platform} size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className={styles.mainNav} aria-label="Main Navigation">
        <div className={`container ${styles.mainNavContainer}`}>
          <Link href="/" className={styles.logoLink} aria-label="MBA Wizards Homepage">
            <Image
              src="/images/common/mbawizards-logo.svg"
              alt="MBA Wizards"
              width={185}
              height={46}
              priority
              className={styles.logoImg}
            />
          </Link>

          <ul className={styles.desktopNavList}>
            {navigationItems.map((item) => {
              const hasDropdown = Boolean(item.groups || item.subItems);

              return (
                <li key={item.title} className={styles.navItem}>
                  {item.href && !hasDropdown ? (
                    <Link href={item.href} className={styles.navLink}>
                      {item.title}
                    </Link>
                  ) : (
                    <span className={styles.navLink} tabIndex={0} role="button" aria-haspopup="true">
                      {item.title}
                      <span className={styles.chevron}>▾</span>
                    </span>
                  )}

                  {item.groups && (
                    <div className={styles.dropdownMenu}>
                      {item.groups.map((group) => (
                        <div key={group.title} className={styles.dropdownItem}>
                          <Link href={group.href || "#"} className={styles.dropdownLink}>
                            <span>{group.title}</span>
                            {group.subItems && <span>▸</span>}
                          </Link>

                          {group.subItems && (
                            <div className={styles.flyoutMenu}>
                              {group.subItems.map((sub) => (
                                <Link key={sub.href} href={sub.href} className={styles.flyoutLink}>
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {!item.groups && item.subItems && (
                    <div className={styles.dropdownMenu}>
                      {item.subItems.map((sub) => (
                        <div key={sub.href} className={styles.dropdownItem}>
                          <Link href={sub.href} className={styles.dropdownLink}>
                            {sub.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={styles.headerActions}>
            <Link
              href="/contact-us"
              className={styles.bookDemoBtn}
              aria-label="Book A Demo - Contact Us"
            >
              Book A Demo
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={styles.mobileToggleBtn}
              aria-label="Open mobile navigation menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenuDrawer} ${mobileMenuOpen ? styles.open : ""}`} onClick={() => setMobileMenuOpen(false)}>
        <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.mobileMenuHeader}>
            <Image
              src="/images/common/mbawizards-logo.svg"
              alt="MBA Wizards"
              width={185}
              height={48}
              className={styles.logoImg}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.closeBtn}
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <div className={styles.mobileNavList}>
            {navigationItems.map((item) => (
              <div key={item.title} className={styles.mobileNavItem}>
                {item.href && !item.groups && !item.subItems ? (
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      type="button"
                      className={styles.mobileNavLink}
                      onClick={() => toggleMobileGroup(item.title)}
                    >
                      <span>{item.title}</span>
                      <span>{expandedMobileGroup === item.title ? "▴" : "▾"}</span>
                    </button>

                    {expandedMobileGroup === item.title && (
                      <div className={styles.mobileSubmenu}>
                        {item.groups?.map((group) => (
                          <div key={group.title} style={{ marginBottom: "8px" }}>
                            <Link
                              href={group.href || "#"}
                              className={styles.mobileNavLink}
                              style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-primary)" }}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {group.title}
                            </Link>
                            {group.subItems?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={styles.mobileSublink}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        ))}

                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={styles.mobileSublink}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.bookDemoBtn}
              style={{ width: "100%", textAlign: "center", display: "block" }}
            >
              Book A Demo
            </Link>
          </div>

          <div className={styles.mobileSocialRow}>
            {siteConfig.socialLinks.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialBtn}
                aria-label={`Visit our ${item.label} page`}
              >
                <SocialIcon platform={item.platform} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
