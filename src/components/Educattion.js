"use client";

import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eduspan}>Education & Credentials</span>

          <h2>My very foundation.</h2>

          <p>
            My journey combines formal education with practical technical
            training and continuous learning.
          </p>
        </div>

        <div className={styles.educationSection}>
          <div className={styles.educationHeading}>
            <FiBookOpen />
            <span>Education</span>
          </div>

          <div className={styles.educationCard}>
            <h4>B.Sc. Business Administration</h4>

            <h5>National Open University of Nigeria</h5>

            <p>
              Currently Studying Business Administration while building my
              career in software development.
            </p>
            <span>2022 - 2026</span>
          </div>
        </div>

        <div className={styles.trainingSection}>
          <div className={styles.trainingHeading}>
            <FiAward />
            <span>Technical Training</span>
          </div>
          <div className={styles.trainingContainer}>
            <div className={styles.trainingCard}>
              <div className={styles.certificatePreview}>
                <img
                  src="/image/full-stack-development.png"
                  alt="Frontend Development certificate"
                />

                <div className={styles.previewOverlay}>
                  <span>Full-stack Development</span>
                </div>
              </div>

              <div className={styles.trainingInfo}>
                <h4>Full-Stack Development</h4>

                <h5>Udemy</h5>

                <div className={styles.certificateMeta}>
                  <span>
                    <FiCalendar />
                    2026
                  </span>

                  <span>
                    <FiAward />
                    Completed
                  </span>
                </div>

                <a
                  href="/files/Full-Stack-Development-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificateLink}
                >
                  View Certificate
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            <div className={styles.trainingCard}>
              <div className={styles.certificatePreview}>
                <img
                  src="/image/frontend-certificate.jpeg"
                  alt="Frontend Development certificate"
                />

                <div className={styles.previewOverlay}>
                  <span>Frontend Development</span>
                </div>
              </div>

              <div className={styles.trainingInfo}>
                <h4>Frontend Development</h4>

                <h5>Tech Sphere Academy</h5>

                <div className={styles.certificateMeta}>
                  <span>
                    <FiCalendar />
                    2026
                  </span>

                  <span>
                    <FiAward />
                    Completed
                  </span>
                </div>

                <a
                  href="/files/frontend-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificateLink}
                >
                  View Certificate
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.resume}>
          <a
            href="/files/Blessing-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            <FiArrowUpRight />
            View Resume
          </a>
          <a
            href="/files/Blessing-LDC-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.leadershipButton}
          >
            <FiArrowUpRight />
            View Leadership Certificate
          </a>
        </div>
      </div>
    </section>
  );
}
