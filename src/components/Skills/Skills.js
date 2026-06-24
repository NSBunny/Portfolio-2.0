"use client";

import styles from "./Skills.module.css";

const technicalSkills = [
  "Python", "Java", "C", "MongoDB", "Power BI", 
  "MySQL", "HTML", "CSS", "JavaScript", 
  "AI Tools", "Prompt Engineering"
];

const softSkills = [
  "Communication", "Teamwork", "Problem Solving", 
  "Continuous Learning", "Time Management", 
  "Adaptability", "Leadership", "Project Management"
];

export default function Skills() {
  return (
    <section className={styles.sectionWrapper} id="skills">
      <div className={`${styles.card} animateCard`}>
        <div className={styles.watermark}>02</div>
        
        <div className={styles.cardContent}>
          <span className={styles.sectionTag}>About · Skills</span>
          <h2 className={styles.sectionTitle}>Skills</h2>

          <div className={styles.skillsGrid}>
            <div className={`${styles.skillGroup} animateElement`}>
              <h3 className={styles.groupTitle}>Technical</h3>
              <div className={styles.pillContainer}>
                {technicalSkills.map((skill, i) => (
                  <span key={i} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${styles.skillGroup} animateElement`}>
              <h3 className={styles.groupTitle}>Soft Skills</h3>
              <div className={styles.pillContainer}>
                {softSkills.map((skill, i) => (
                  <span key={i} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
