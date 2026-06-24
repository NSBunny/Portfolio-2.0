"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsapConfig";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(wrapperRef.current, {
        opacity: 1,
        y: 0,
        delay: 2.5,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: wrapperRef }
  );

  const handleClick = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={styles.scrollWrapper}
      ref={wrapperRef}
      onClick={handleClick}
      role="button"
      aria-label="Scroll to next section"
      id="scroll-indicator"
    >
      <span className={styles.scrollText}>Scroll</span>
      <div className={styles.scrollLine} />
    </div>
  );
}
