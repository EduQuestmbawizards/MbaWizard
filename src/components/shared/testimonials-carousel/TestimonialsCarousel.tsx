"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./TestimonialsCarousel.module.css";

export interface Testimonial {
  name: string;
  detail: string;
  score: string;
  college: string;
  quote: string;
  image?: string;
  initial?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  titleHighlight?: string;
}

export default function TestimonialsCarousel({
  testimonials,
  title = "What Our Students Say",
  titleHighlight = "About MBA Wizards",
}: TestimonialsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const getScrollAmount = () => {
    if (!trackRef.current) return 384;
    const card = trackRef.current.querySelector<HTMLElement>("[data-card]");
    if (!card) return 384;
    const style = window.getComputedStyle(trackRef.current);
    const gap = parseFloat(style.gap) || 24;
    return card.offsetWidth + gap;
  };

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = getScrollAmount();
    const maxScroll = track.scrollWidth - track.clientWidth;
    const targetLeft = Math.min(idx * scrollAmount, maxScroll);

    track.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
    setActiveIdx(idx);
  };

  const prev = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = getScrollAmount();
    if (track.scrollLeft <= 10) {
      // Loop to end
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      const newLeft = Math.max(0, track.scrollLeft - scrollAmount);
      track.scrollTo({ left: newLeft, behavior: "smooth" });
    }
  };

  const next = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = getScrollAmount();
    const maxScroll = track.scrollWidth - track.clientWidth;

    // If at end or beyond, loop back to start
    if (track.scrollLeft >= maxScroll - 15) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      const newLeft = Math.min(maxScroll, track.scrollLeft + scrollAmount);
      track.scrollTo({ left: newLeft, behavior: "smooth" });
    }
  };

  // Sync active dot with actual scroll position
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = getScrollAmount();
    if (scrollAmount <= 0) return;
    const currentIdx = Math.round(track.scrollLeft / scrollAmount);
    setActiveIdx(Math.min(testimonials.length - 1, Math.max(0, currentIdx)));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [testimonials.length]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Success Stories</span>
          <h2 className={styles.title}>
            {title} <span className={styles.titleHighlight}>{titleHighlight}</span>
          </h2>
        </div>

        <div className={styles.carouselWrap}>
          <div className={styles.track} ref={trackRef}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.card} data-card>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.person}>
                  <img
                    src={t.image || "/images/toppers/karan-780.jpeg"}
                    alt={t.name}
                    className={styles.avatarImg}
                    loading="lazy"
                  />
                  <div className={styles.personInfo}>
                    <div className={styles.personName}>{t.name}</div>
                    <div className={styles.personDetail}>{t.score} → {t.college}</div>
                    <div className={styles.personDetail}>{t.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navRow}>
            <button
              type="button"
              onClick={prev}
              className={styles.navBtn}
              aria-label="Previous testimonials"
            >
              ‹
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  className={`${styles.dot} ${i === activeIdx ? styles.active : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className={styles.navBtn}
              aria-label="Next testimonials"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
