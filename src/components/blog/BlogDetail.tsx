"use client";

import Link from "next/link";
import { Blog, BlogSummary } from "@/lib/blog";
import BlogCard from "./BlogCard";
import styles from "./BlogDetail.module.css";

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs?: BlogSummary[];
}

export default function BlogDetail({ blog, relatedBlogs = [] }: BlogDetailProps) {
  const dateStr = new Date(blog.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className={styles.article}>
      {/* Header / Hero */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blogs">Articles & Guides</Link>
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
                  <div className={styles.authorRole}>{blog.author.role || "Senior MBA Admissions Mentor"}</div>
                </div>
              </div>

              <div className={styles.dateMeta}>
                <span>📅 {dateStr}</span>
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
        <div className="container">
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

      {/* Main Content Area */}
      <div className="container">
        <div className={styles.bodyLayout}>
          <div className={styles.mainContent}>
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
                    return <p key={idx} className={styles.paragraph}>{block.text}</p>;
                  }
                  if (block.type === "heading") {
                    const Tag = block.level === 3 ? "h3" : "h2";
                    return <Tag key={idx} className={styles.heading}>{block.text}</Tag>;
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
                    onClick={() => window.dispatchEvent(new CustomEvent("open-book-demo"))}
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

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4 className={styles.sidebarTitle}>About The Author</h4>
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

            <div className={styles.sidebarCard}>
              <h4 className={styles.sidebarTitle}>Admissions Quick Links</h4>
              <ul className={styles.sidebarLinks}>
                <li><Link href="/gmat-coaching">GMAT Focus Coaching ↗</Link></li>
                <li><Link href="/gre-coaching-classes">GRE Masterclass ↗</Link></li>
                <li><Link href="/cat-2025">CAT 2026 Batch ↗</Link></li>
                <li><Link href="/gmat-toppers">760+ Achievers Hall of Fame ↗</Link></li>
                <li><Link href="/contact-us">Gurgaon Center Visit ↗</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Blogs Carousel/Grid */}
      {relatedBlogs.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
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
