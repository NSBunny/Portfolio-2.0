"use client";

import styles from "./Certificates.module.css";

const certificates = [
  {
    title: "Data Science & Analytics",
    org: "HP Life",
    date: "Jul, 2025",
    desc: "Gained key data science methodologies, tools, and real-world applications that empower businesses to make data-driven decisions. From understanding analytics frameworks to gaining insights into career-defining skills.",
  },
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte",
    date: "Apr, 2025",
    desc: "Completed the Deloitte Data Analytics Virtual Job Simulation on Forage, gaining hands-on experience in data analysis and forensic technology. Enhanced analytical, problem-solving, and technical skills through real-world business case tasks.",
  },
  {
    title: "Power BI",
    org: "Simplilearn",
    date: "Oct, 2024",
    desc: "Developed proficiency in Power BI through this training program, covering data preparation, data modelling, and data visualization, as well as advanced topics like DAX and Power Query.",
  },
  {
    title: "Development of Gen AI models",
    org: "NxtWave",
    date: "Sep, 2024",
    desc: "Acquired skills in developing Gen AI models for Text-to-Image synthesis, Language Translation, and Chatbots, using Deep Learning architectures and techniques.",
  },
  {
    title: "Basic Programming using Python",
    org: "FOSSEE, IIT Bombay",
    date: "Jul, 2024",
    desc: "Completed a 3-day workshop and gained basic programming using python organized by GNDEC University in collaboration with the FOSSEE Project, IIT Bombay.",
  },
  {
    title: "Java Boot Camp",
    org: "LetsUpgrade",
    date: "Jun, 2024",
    desc: "Completed 3-day Java bootcamp conducted by Lets Upgrade, where I gained hands-on experience with core Java Concepts, object-oriented programming, and building basic applications.",
  },
];

export default function Certificates() {
  return (
    <section className={styles.sectionWrapper} id="certificates">
      <div className={`${styles.card} animateCard`}>
        <div className={styles.watermark}>04</div>
        
        <div className={styles.cardContent}>
          <span className={styles.sectionTag}>About · Training</span>
          <h2 className={styles.sectionTitle}>Certificates</h2>

          <div className={styles.timeline}>
            {certificates.map((cert, index) => (
              <a 
                key={index} 
                href="https://www.linkedin.com/in/g-banidhar-0a5046247/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.certCard} animateElement`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className={styles.certHeader}>
                  <div className={styles.certTitleWrapper}>
                    <h3 className={styles.certTitle}>{cert.title}</h3>
                    <span className={styles.certOrg}>{cert.org}</span>
                  </div>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
                <p className={styles.certDesc}>{cert.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
