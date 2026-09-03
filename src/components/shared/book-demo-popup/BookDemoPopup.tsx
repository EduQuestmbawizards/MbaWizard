"use client";

import { useState, useEffect } from "react";
import styles from "./BookDemoPopup.module.css";

interface BookDemoPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function BookDemoPopup({ isOpen: controlledIsOpen, onClose: controlledOnClose }: BookDemoPopupProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isVisible = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener("open-book-demo", handleOpenEvent);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-book-demo", handleOpenEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="demo-title">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button type="button" onClick={handleClose} className={styles.closeButton} aria-label="Close modal">
            ✕
          </button>
          <h2 id="demo-title" className={styles.title}>Book A FREE DEMO</h2>
          <p className={styles.subtitle}>Personalized Test Prep for Global & Indian MBA Admissions</p>
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
    </div>
  );
}
