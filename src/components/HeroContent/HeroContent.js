"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsapConfig";
import styles from "./HeroContent.module.css";

export default function HeroContent() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.8,
        defaults: {
          ease: "power4.out",
          duration: 1.4,
        },
      });

      tl.to(`.${styles.decorLine}`, {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          `.${styles.tagline}`,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4"
        )
        .fromTo(
          `.${styles.openToWork}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          `.${styles.fullName}`,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
          },
          "-=0.7"
        )
        .to(
          `.${styles.subtitle}`,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .fromTo(
          `.${styles.btnPrimary}, .${styles.btnSecondary}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.contentWrapper} ref={containerRef}>
      <div className={styles.decorLine} />
      <div className={styles.openToWork}>
        <div className={styles.greenDot} />
        <span className={styles.openText}>Open to Work</span>
      </div>

      <div className={styles.nameWrapper}>
        <span className={styles.fullName}>G BANIDHAR</span>
      </div>
      
      <p className={styles.subtitle}>
        <span className={styles.subtitleAccent}>Data analytics and AI Full Stack Developer</span> —
        specializing in Generative AI, Data Analytics, and OpenCV.
      </p>

      <div className={styles.actionBtns}>
        <a href="https://www.linkedin.com/in/g-banidhar-0a5046247/" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>LinkedIn</a>
        <a href="https://github.com/NSBunny" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>GitHub</a>
      </div>
    </div>
  );
}
