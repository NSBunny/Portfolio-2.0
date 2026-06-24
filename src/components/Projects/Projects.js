"use client";

import { useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Quick News Web App",
    date: "Oct 2024 - Nov 2025",
    desc: "Responsive and modern news aggregator web application built with Django. Fetches the latest headlines from various news sources, organizing them into categories for quick browsing.",
    tools: ["Python", "Django", "JavaScript", "HTML/CSS"],
    link: "https://github.com/NSBunny/Quick-News"
  },
  {
    title: "Face Recognition Attendance System",
    date: "Mar 2024 - Apr 2024",
    desc: "Developed a face recognition attendance system that allows IT industries and education fields to monitor one's attendance in real time.",
    tools: ["Python", "Computer Vision"],
    link: "https://github.com/NSBunny/Facial-Recognition-Attendees-System-"
  },
  {
    title: "Zerowaste AI",
    date: "Recent",
    desc: "An AI-driven solution aimed at optimizing waste management and promoting zero-waste practices through intelligent tracking and analytics.",
    tools: ["TypeScript", "AI"],
    link: "https://github.com/NSBunny/Zerowaste-AI"
  },
  {
    title: "AI Powered Fitness Webapp",
    date: "Recent",
    desc: "A web application leveraging artificial intelligence to provide personalized fitness tracking, routine generation, and health insights.",
    tools: ["JavaScript", "AI"],
    link: "https://github.com/NSBunny/AI-powered-fitness-webapp"
  },
  {
    title: "Smart Crowd Management System",
    date: "Recent",
    desc: "A smart monitoring system designed to manage and analyze crowd density in real-time, ensuring safety and optimal spatial organization.",
    tools: ["Python", "Computer Vision"],
    link: "https://github.com/NSBunny/Smart-Crowd-Management-System"
  },
  {
    title: "Gesture Volume Control",
    date: "Mar 2023 - Apr 2023",
    desc: "Built a Gesture volume control using Python and computer vision libraries to monitor real-time hand gestures and control system volume.",
    tools: ["Python", "OpenCV"],
    link: "https://github.com/NSBunny"
  }
];

export default function Projects() {
  return (
    <section className={styles.sectionWrapper} id="projects">
      <div className={`${styles.card} animateCard`}>
        <div className={styles.watermark}>05</div>
        
        <div className={styles.cardContent}>
          <span className={styles.sectionTag}>Portfolio · Output</span>
          <h2 className={styles.sectionTitle}>Projects</h2>

          <div className={styles.timeline}>
            {projects.map((proj, index) => (
              <a 
                key={index} 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projCard} animateElement`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className={styles.projHeader}>
                  <div className={styles.projTitleWrapper}>
                    <h3 className={styles.projTitle}>{proj.title}</h3>
                  </div>
                  <span className={styles.projDate}>{proj.date}</span>
                </div>
                <p className={styles.projDesc}>{proj.desc}</p>
                
                <div className={styles.toolsContainer}>
                  {proj.tools.map((tool, i) => (
                    <span key={i} className={styles.toolPill}>{tool}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
