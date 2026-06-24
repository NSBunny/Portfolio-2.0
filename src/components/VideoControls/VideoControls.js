"use client";

import { useState, useEffect } from "react";
import styles from "./VideoControls.module.css";

export default function VideoControls({
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
}) {
  return (
    <>


      {/* Control buttons */}
      <div className={styles.controlsWrapper}>
        {/* Play/Pause */}
        <button
          className={styles.controlBtn}
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          id="video-play-btn"
        >
          {isPlaying ? (
            <svg
              className={styles.controlBtnIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              className={styles.controlBtnIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          )}
        </button>

        {/* Mute/Unmute */}
        <button
          className={styles.controlBtn}
          onClick={onToggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          id="video-mute-btn"
        >
          {isMuted ? (
            <svg
              className={styles.controlBtnIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              className={styles.controlBtnIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
