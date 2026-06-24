"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.sectionWrapper} id="contact">
      <div className={`${styles.card} animateCard`}>
        <div className={styles.watermark}>06</div>
        
        <div className={styles.cardContent}>
          {/* Left Side: Title and Message */}
          <div className={`${styles.leftColumn} animateElement`}>
            <span className={styles.sectionTag}>About · Contact</span>
            <h2 className={styles.handwritingTitle}>Let's Connect</h2>
            <p className={styles.description}>
              I would be happy to connect with you! Whether you have a project in mind, 
              a question about my work, or just want to say hi, feel free to drop a message.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className={`${styles.rightColumn} animateElement`}>
            <form 
              className={styles.contactForm}
              action="https://api.web3forms.com/submit" 
              method="POST" 
            >
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="New Portfolio Contact Message!" />
              <input type="hidden" name="from_name" value="Banidhar Portfolio" />

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="name">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.input} 
                  placeholder="John Doe" 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">GMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input} 
                  placeholder="johndoe@gmail.com" 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="message">MESSAGE</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={styles.textarea} 
                  placeholder="Hello, I'd like to discuss..." 
                  required 
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
