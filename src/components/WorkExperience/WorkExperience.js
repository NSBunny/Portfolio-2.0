"use client";

import styles from "./WorkExperience.module.css";

const experiences = [
  {
    title: "Technical Lead",
    org: "GDSC – Karnataka, Bidar",
    date: "Aug 2023 - Feb 2024",
    desc: "As a core team member of the Google Developer Student Clubs (GDSC), I coordinated and organized activities, working with other GDSC members and interested students within the institution to successfully hold the Google Cloud Study Jam 2023. Facilitated the Google Cloud Study Jam 2023, gained knowledge in Google cloud and Gen-AI, and also conducted hands-on sections for juniors.",
  },
  {
    title: "Python Developer Intern",
    org: "OctaNet Services Pvt Ltd. - Remote",
    date: "Nov 2024 - Jan 2025",
    desc: "Designed an ATM simulation model gained some basic and advanced knowledge on Python. Gained hands-on experience on building a project and GUI skills in Python.",
  },
  {
    title: "AI & Prompt Engineering Intern",
    org: "VaultofCodes - Remote",
    date: "Apr 2025 - May 2025",
    desc: "Developed a personal AI assistant that would offer features like voice control, task management, information retrieval, and personalized interactions. Gained hands-on experience working on real-world applications of AI and prompt engineering techniques.",
  }
];

export default function WorkExperience() {
  return (
    <section className={styles.sectionWrapper} id="experience">
      <div className={`${styles.card} animateCard`}>
        <div className={styles.watermark}>03</div>
        
        <div className={styles.cardContent}>
          <span className={styles.sectionTag}>About · Career</span>
          <h2 className={styles.sectionTitle}>Work Experience</h2>

          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={`${styles.expCard} animateElement`}>
                <div className={styles.expHeader}>
                  <div className={styles.expTitleWrapper}>
                    <h3 className={styles.expTitle}>{exp.title}</h3>
                    <span className={styles.expOrg}>{exp.org}</span>
                  </div>
                  <span className={styles.expDate}>{exp.date}</span>
                </div>
                <p className={styles.expDesc}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
