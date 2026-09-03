"use client";

import Link from "next/link";
import { BlogSummary, Blog } from "@/lib/blog";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  blog: BlogSummary | Blog;
  index?: number;
  priority?: boolean;
}

function Meta({ blog }: { blog: BlogSummary | Blog }) {
  const dateStr = new Date(blog.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.meta}>
      <span className={styles.author}>{blog.author.name}</span>
      <span className={styles.dot}>·</span>
      <span>{dateStr}</span>
      <span className={styles.dot}>·</span>
      <span className={styles.readTime}>{blog.readTime} min read</span>
    </div>
  );
}

function WPBadge() {
  return (
    <span className={styles.wpBadge} aria-label="MBA Wizards Official Post">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
      LIVE
    </span>
  );
}

export default function BlogCard({ blog, index = 0, priority = false }: BlogCardProps) {
  const href = `/blogs/${blog.slug}`;
  const initialSrc = blog.coverImage || "/images/toppers/karan-780.jpeg";

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.overlayImage}>
        <img
          src={initialSrc}
          alt={blog.title}
          className={styles.bgImage}
          loading={priority ? undefined : "lazy"}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/toppers/karan-780.jpeg";
          }}
        />
      </div>
      <div className={styles.overlayGradient} />
      <div className={styles.shimmer} />
      {blog.isWordPress && <WPBadge />}
      <div className={styles.overlayContent}>
        <span className={styles.category}>{blog.category}</span>
        <h3 className={styles.title}>{blog.title}</h3>
        <p className={styles.excerpt}>{blog.excerpt}</p>
        <Meta blog={blog} />
      </div>
    </Link>
  );
}
