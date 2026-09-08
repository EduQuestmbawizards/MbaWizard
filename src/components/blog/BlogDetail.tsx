"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Blog, BlogSummary } from "@/lib/blog";
import BlogCard from "./BlogCard";
import styles from "./BlogDetail.module.css";

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs?: BlogSummary[];
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogDetail({ blog, relatedBlogs = [] }: BlogDetailProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // Quick form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    exam: "GMAT Focus Edition",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Extract headings for Table of Contents from both local & WordPress content
  useEffect(() => {
    if (!contentRef.current) return;
    const headings = contentRef.current.querySelectorAll<HTMLHeadingElement>("h2, h3");
    if (headings.length > 0) {
      const extracted: TocItem[] = [];
      headings.forEach((h, idx) => {
        const text = h.textContent?.trim() || "";
        if (text) {
          const id =
            h.id ||
            `heading-${idx}-${text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")
              .slice(0, 35)}`;
          h.id = id;
          extracted.push({
            id,
            text,
            level: h.tagName.toLowerCase() === "h3" ? 3 : 2,
          });
        }
      });
      setToc(extracted);
    }
  }, [blog]);

  // Track active heading on scroll
  useEffect(() => {
    if (toc.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = toc.length - 1; i >= 0; i--) {
        const el = document.getElementById(toc[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(toc[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  const handleOpenBooking = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const canonicalUrl = `https://www.mbawizards.co.in/blogs/${blog.slug}`;
  const currentUrl = canonicalUrl;

  const dateStr = new Date(blog.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const shareText = encodeURIComponent(blog.title);

  return (
    <article className={styles.article}>
      {/* Header / Hero */}
      <header className={styles.header}>
        <div className={styles.containerFluid}>
          <div className={styles.headerContent}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blogs">Articles &amp; Guides</Link>
              <span>/</span>
              <span className={styles.currentCrumb}>{blog.category}</span>
            </div>

            <span className={styles.categoryBadge}>{blog.category}</span>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.excerpt}>{blog.excerpt}</p>

            <div className={styles.metaRow}>
              <div className={styles.authorBadge}>
                <div className={styles.authorAvatar}>🎓</div>
                <div>
                  <div className={styles.authorName}>{blog.author.name}</div>
                  <div className={styles.authorRole}>
                    {blog.author.role || "Senior MBA Admissions Mentor"}
                  </div>
                </div>
              </div>

              <div className={styles.dateMeta} suppressHydrationWarning>
                <span suppressHydrationWarning>📅 {dateStr}</span>
                <span>⏱️ {blog.readTime} min read</span>
                {blog._wpLink && (
                  <a
                    href={blog._wpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.wpOriginalLink}
                  >
                    View on Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      {blog.coverImage && (
        <div className={styles.containerFluid}>
          <div className={styles.coverWrapper}>
            <img
              src={blog.coverImage}
              alt={blog.title}
              className={styles.coverImage}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/toppers/karan-780.jpeg";
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content Area: 2.5 / 4 (Left) + 1.5 / 4 (Right) Layout */}
      <div className={styles.containerFluid}>
        <div className={styles.bodyLayout}>
          {/* Left Column (2.5 / 4 space): Takes Complete Available Space */}
          <div className={styles.mainContent} ref={contentRef}>
            {/* Share Bar matching screenshot */}
            <div className={styles.shareBar} suppressHydrationWarning>
              <span className={styles.shareLabel}>Share This Guide:</span>
              <div className={styles.shareIcons}>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialIcon} ${styles.twitterIcon}`}
                  aria-label="Share on Twitter"
                >
                  𝕏
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialIcon} ${styles.linkedinIcon}`}
                  aria-label="Share on LinkedIn"
                >
                  in
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialIcon} ${styles.whatsappIcon}`}
                  aria-label="Share on WhatsApp"
                >
                  💬
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={`${styles.socialIcon} ${styles.copyIcon}`}
                  aria-label="Copy article link"
                  title="Copy Link"
                >
                  {copied ? "✓" : "🔗"}
                </button>
              </div>
            </div>

            {/* If Raw HTML from WordPress */}
            {blog.rawContentHtml ? (
              <div
                className={styles.wpContent}
                dangerouslySetInnerHTML={{ __html: blog.rawContentHtml }}
                suppressHydrationWarning
              />
            ) : blog.body && blog.body.length > 0 ? (
              <div className={styles.blocks}>
                {blog.body.map((block, idx) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={idx} className={styles.paragraph}>
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "heading") {
                    const Tag = block.level === 3 ? "h3" : "h2";
                    return (
                      <Tag key={idx} className={styles.heading}>
                        {block.text}
                      </Tag>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote key={idx} className={styles.quote}>
                        <p>&ldquo;{block.text}&rdquo;</p>
                        {block.author && <cite>— {block.author}</cite>}
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>
            ) : (
              <p className={styles.paragraph}>{blog.excerpt}</p>
            )}

            {/* In-Article Call to Action */}
            <div className={styles.ctaBox}>
              <div className={styles.ctaIcon}>🎯</div>
              <div>
                <h3 className={styles.ctaTitle}>Aiming for 705+ on GMAT or 99th %ile in CAT?</h3>
                <p className={styles.ctaDesc}>
                  Schedule a personalized 1-on-1 strategy call with Surinder Gupta (IIT Roorkee Alum) and get a diagnostic roadmap tailored to your target intake.
                </p>
                <div className={styles.ctaActions}>
                  <button
                    type="button"
                    onClick={handleOpenBooking}
                    className={styles.ctaPrimaryBtn}
                  >
                    Book Free 1-on-1 Strategy Call
                  </button>
                  <a
                    href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20discuss%20MBA%20test%20prep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaSecondaryBtn}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (1.5 / 4 space): All cards stacked on the right */}
          <aside className={styles.sidebar}>
            {/* 1. TABLE OF CONTENTS Card (Red Left Border Accent + Hamburger Icon) */}
            {toc.length > 0 && (
              <div className={styles.tocCard}>
                <div className={styles.tocHeader}>
                  <span className={styles.hamburgerIcon}>☰</span>
                  <span className={styles.tocTitleText}>TABLE OF CONTENTS</span>
                </div>
                <nav className={styles.tocNav}>
                  <ul className={styles.tocList}>
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className={`${styles.tocItem} ${
                          item.level === 3 ? styles.tocItemH3 : ""
                        } ${activeId === item.id ? styles.tocActive : ""}`}
                      >
                        <button
                          type="button"
                          onClick={() => scrollToHeading(item.id)}
                          className={styles.tocButton}
                        >
                          <span className={styles.tocIndicator}>›</span>
                          <span className={styles.tocText}>{item.text}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* 2. Free Strategy Session Card (Deep Crimson Gradient + Red Button) */}
            <div className={styles.strategySessionCard}>
              <h3 className={styles.strategyTitle}>Free Strategy Session</h3>
              <p className={styles.strategySubtitle}>
                Book a 1-on-1 strategy call with IIM Ahmedabad alumni.
              </p>
              <button
                type="button"
                onClick={handleOpenBooking}
                className={styles.bookSessionBtn}
              >
                <span className={styles.phoneIcon}>📞</span>
                <span>Book Session</span>
              </button>
            </div>

            {/* 3. Quick Consultation / Contact Us Form Card */}
            <div className={styles.contactFormCard}>
              <h4 className={styles.quickLinksTitle}>Quick Consultation</h4>
              <p className={styles.formSubtitle}>
                Request a callback from our senior admissions counselor.
              </p>

              {isSubmitted ? (
                <div className={styles.formSuccess}>
                  <div className={styles.successIcon}>✓</div>
                  <div className={styles.successHeading}>Request Received!</div>
                  <p className={styles.successMsg}>
                    Our team will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.quickForm}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <select
                      value={formData.exam}
                      onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="GMAT Focus Edition">Target Exam: GMAT Focus Edition</option>
                      <option value="GRE">Target Exam: GRE General Test</option>
                      <option value="CAT 2026">Target Exam: CAT 2026</option>
                      <option value="Dual GMAT+CAT">Target: GMAT + CAT Dual Prep</option>
                      <option value="Admissions Consulting">M7 / IIM Admissions Consulting</option>
                    </select>
                  </div>
                  <button type="submit" className={styles.formSubmitBtn}>
                    Book Free 1-on-1 Call
                  </button>
                  <div className={styles.formPrivacy}>
                    🔒 100% Confidential. No Spam Ever.
                  </div>
                </form>
              )}
            </div>

            {/* 4. Admissions Quick Links Card (Matching Image) */}
            <div className={styles.quickLinksCard}>
              <h4 className={styles.quickLinksTitle}>Admissions Quick Links</h4>
              <ul className={styles.sidebarLinks}>
                <li>
                  <Link href="/gmat-coaching">
                    <span>GMAT Focus Coaching</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gre-coaching-classes">
                    <span>GRE Masterclass</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cat">
                    <span>CAT Coaching Batch</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gmat-toppers">
                    <span>760+ Achievers Hall of Fame</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span>Gurgaon Center Visit</span>
                    <span className={styles.arrowIcon}>↗</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5. About The Author Card */}
            <div className={styles.authorCard}>
              <h4 className={styles.quickLinksTitle}>About The Author</h4>
              <div className={styles.authorBox}>
                <div className={styles.authorImgWrapper}>
                  <img
                    src="/images/common/mbawizards-logo.svg"
                    alt="MBA Wizards Mentorship Team"
                    className={styles.founderThumbnail}
                  />
                </div>
                <div className={styles.authorHeading}>{blog.author.name}</div>
                <div className={styles.authorSub}>IIT Roorkee Alum | Founder</div>
                <p className={styles.authorBio}>
                  30+ years mentoring ambitious minds for GMAT, GRE, CAT, and top M7 / IIM admissions.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Blogs Grid */}
      {relatedBlogs.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.containerFluid}>
            <h2 className={styles.relatedTitle}>
              Recommended <span className={styles.relatedHighlight}>Articles</span>
            </h2>
            <div className={styles.relatedGrid}>
              {relatedBlogs.map((b, idx) => (
                <BlogCard key={b.slug} blog={b} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
