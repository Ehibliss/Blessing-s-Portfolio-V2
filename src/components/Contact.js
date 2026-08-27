"use client";

import { FiArrowUpRight, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaTiktok, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.headerspan}>Get In Touch</span>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            Do you have a project in mind, an opportunity you'd like to discuss,
            or simply want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left side */}

          <div className={styles.contactInfo}>
            <div className={styles.infoIntro}>
              <h4>Let's start a conversation.</h4>

              <p>
                I'm open to frontend development opportunities, full-stack
                projects, collaborations, and interesting ideas.
              </p>
            </div>

            <a
              href="mailto:ochemeblessingehi@gmail.com"
              className={styles.contactItem}
            >
              <span className={styles.icon}>
                <FiMail />
              </span>

              <span>
                <small>Email</small>
                <strong>ochemeblessingehi@gmail.com</strong>
              </span>

              <FiArrowUpRight className={styles.arrow} />
            </a>

            <div className={styles.contactItem}>
              <span className={styles.icon}>
                <FiMapPin />
              </span>

              <span>
                <small>Location</small>
                <strong>Lagos, Nigeria</strong>
              </span>
            </div>

            {/* Social links */}

            <div className={styles.socials}>
              <a
                href="https://github.com/Ehibliss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ocheme-blessing-ehi-320b76321/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/@codewithbliss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@codewithbliss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Right side form */}

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@gmail.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me a little about your project..."
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
