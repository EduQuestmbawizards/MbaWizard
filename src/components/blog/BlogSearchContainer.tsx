"use client";

import { useState, useMemo } from "react";
import { BlogSummary } from "@/lib/blog";
import BlogCard from "./BlogCard";
import styles from "./BlogSearchContainer.module.css";

interface BlogSearchContainerProps {
  initialBlogs: BlogSummary[];
}

const CATEGORIES = [
  "All",
  "GMAT",
  "GRE",
  "CAT",
  "MBA Admissions",
  "Interview Prep",
  "Study Plan",
  "Success Stories",
];

export default function BlogSearchContainer({ initialBlogs }: BlogSearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredBlogs = useMemo(() => {
    let result = initialBlogs;

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((b) => {
        const cat = b.category?.toLowerCase() || "";
        const tags = (b.tags || []).map((t) => t.toLowerCase());
        const selected = selectedCategory.toLowerCase();

        if (selected === "gmat") return cat.includes("gmat") || tags.some((t) => t.includes("gmat"));
        if (selected === "gre") return cat.includes("gre") || tags.some((t) => t.includes("gre"));
        if (selected === "cat") return cat.includes("cat") || tags.some((t) => t.includes("cat"));
        if (selected === "mba admissions")
          return cat.includes("mba") || cat.includes("admission") || tags.some((t) => t.includes("admission"));
        if (selected === "interview prep")
          return cat.includes("interview") || tags.some((t) => t.includes("interview"));
        if (selected === "study plan")
          return cat.includes("plan") || cat.includes("timeline") || tags.some((t) => t.includes("plan"));
        if (selected === "success stories")
          return cat.includes("stori") || cat.includes("topper") || tags.some((t) => t.includes("stori"));
        return cat.includes(selected);
      });
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          (b.tags && b.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [initialBlogs, selectedCategory, searchQuery]);

  const displayedBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.searchWrapper}>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search 100+ GMAT, GRE, CAT strategies, mock tests, and interview guides..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(12);
            }}
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className={styles.categoryRow}>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              className={`${styles.categoryPill} ${isActive ? styles.activePill : ""}`}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(12);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className={styles.resultsMeta}>
        Showing <strong>{displayedBlogs.length}</strong> of <strong>{filteredBlogs.length}</strong> articles
        {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
      </div>

      {/* Blog Cards Grid */}
      {displayedBlogs.length > 0 ? (
        <div className={styles.grid}>
          {displayedBlogs.map((blog, idx) => (
            <BlogCard key={`${blog.slug}-${idx}`} blog={blog} index={idx} priority={idx < 4} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📚</div>
          <h3 className={styles.emptyTitle}>No Articles Found</h3>
          <p className={styles.emptyText}>
            We couldn&apos;t find any articles matching your search criteria. Try a different query or select another category.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < filteredBlogs.length && (
        <div className={styles.loadMoreWrapper}>
          <button
            type="button"
            className={styles.loadMoreBtn}
            onClick={() => setVisibleCount((prev) => prev + 12)}
          >
            Load More Articles ({filteredBlogs.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
