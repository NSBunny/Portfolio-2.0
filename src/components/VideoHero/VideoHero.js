"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import styles from "./VideoHero.module.css";
import HeroContent from "../HeroContent/HeroContent";
import VideoControls from "../VideoControls/VideoControls";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const CinematicLayer = dynamic(
  () => import("../CinematicLayer/CinematicLayer"),
  { ssr: false }
);

export default function VideoHero() {
  const mainVideoRef = useRef(null);
  const ambientVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Sync ambient video with main video
  useEffect(() => {
    const mainVideo = mainVideoRef.current;
    const ambientVideo = ambientVideoRef.current;
    if (!mainVideo || !ambientVideo) return;

    const syncVideos = () => {
      if (Math.abs(mainVideo.currentTime - ambientVideo.currentTime) > 0.3) {
        ambientVideo.currentTime = mainVideo.currentTime;
      }
    };

    mainVideo.addEventListener("timeupdate", syncVideos);
    return () => mainVideo.removeEventListener("timeupdate", syncVideos);
  }, []);

  const togglePlay = useCallback(() => {
    const mainVideo = mainVideoRef.current;
    const ambientVideo = ambientVideoRef.current;
    if (!mainVideo) return;

    if (isPlaying) {
      mainVideo.pause();
      ambientVideo?.pause();
    } else {
      mainVideo.play().catch(console.error);
      ambientVideo?.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const mainVideo = mainVideoRef.current;
    if (!mainVideo) return;
    mainVideo.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleVideoEnded = useCallback(() => {
    setIsPlaying(false);
    const ambientVideo = ambientVideoRef.current;
    if (ambientVideo) {
      ambientVideo.pause();
    }
  }, []);

  return (
    <section className={styles.heroSection} id="hero">
      <div
        className={`${styles.heroInner} ${isLoaded ? styles.heroInnerVisible : ""}`}
      >
        {/* Ambient blurred background */}
        <div className={styles.ambientLayer}>
          <video
            ref={ambientVideoRef}
            className={styles.ambientVideo}
            src="https://res.cloudinary.com/dsjcwxwza/video/upload/q_auto,f_auto/v1782318834/Video_Project_7_prjhui.mp4"
            poster="https://res.cloudinary.com/dsjcwxwza/video/upload/so_0/v1782318834/Video_Project_7_prjhui.jpg"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>

        {/* Main foreground video */}
        <div className={styles.videoLayer}>
          <video
            ref={mainVideoRef}
            className={styles.mainVideo}
            src="https://res.cloudinary.com/dsjcwxwza/video/upload/q_auto,f_auto/v1782318834/Video_Project_7_prjhui.mp4"
            poster="https://res.cloudinary.com/dsjcwxwza/video/upload/so_0/v1782318834/Video_Project_7_prjhui.jpg"
            muted={isMuted}
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
          />
        </div>

        {/* Cinematic gradient overlays */}
        <div className={styles.overlayGradients}>
          <div className={styles.gradientBottom} />
          <div className={styles.gradientTop} />
          <div className={styles.gradientLeft} />
          <div className={styles.gradientRight} />
          <div className={styles.vignette} />
        </div>

        {/* Three.js particle layer */}
        <div className={styles.canvasLayer}>
          <CinematicLayer />
        </div>

        {/* Content layer */}
        <div className={`${styles.contentLayer} ${styles.contentLayerInteractive}`}>
          <HeroContent />
          <VideoControls
            isPlaying={isPlaying}
            isMuted={isMuted}
            onTogglePlay={togglePlay}
            onToggleMute={toggleMute}
          />
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
