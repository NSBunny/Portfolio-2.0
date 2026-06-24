"use client";

import styles from "./WhoAmI.module.css";

const pills = [
  "AI & ML",
  "PYTHON DEVELOPER",
  "DATA ANALYTICS",
  "COMPUTER VISION",
  "PROBLEM SOLVER"
];

export default function WhoAmI() {
  return (
    <section className={styles.sectionWrapper} id="about">
      <div className={`${styles.card} animateCard`}>
        <div className={styles.watermark}>01</div>
        
        <div className={styles.cardContent}>
          <span className={styles.sectionTag}>About · Profile</span>
          <h2 className={styles.sectionTitle}>Who I Am</h2>

          <p className={`${styles.description} animateElement`}>
            AI & ML engineering student skilled in Python, Java, Data Analytics, and Computer Vision. 
            Experienced in leading teams and building projects like Face Recognition Attendance System 
            and Quick News Web App. Proficient in Power BI, MySQL, MongoDB, and cloud technologies, 
            with strong problem-solving and adaptability skills.
          </p>

          <div className={styles.pillsContainer}>
            {pills.map((pill, index) => (
              <span key={index} className={`${styles.pill} animateElement`}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
