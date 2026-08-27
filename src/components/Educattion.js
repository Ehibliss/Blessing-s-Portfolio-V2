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
            <div className={styles.educationYear}>
              <span>2022</span>

              <div className={styles.yearLine}></div>

              <span>2026</span>
            </div>

            <div className={styles.educationInfo}>
              <h4>B.Sc. Business Administration</h4>

              <h5>National Open University of Nigeria</h5>

              <p>
                I am currently Studying Business Administration while building
                my career in software development. My academic background has
                strengthened my understanding of business, problem-solving,
                communication, and how to working with people.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.trainingSection}>
          <div className={styles.trainingHeading}>
            <FiAward />
            <span>Technical Training</span>
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
              <span className={styles.certificateLabel}>
                Technical Certificate
              </span>

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

              <p>
                A Practical frontend training that focused on building
                responsive, interactive web applications using modern
                technologies.
              </p>

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

        <div className={styles.learningSection}>
          <div className={styles.learningContent}>
            <span className={styles.learningLabel}>Currently Learning</span>

            <h4>Expanding beyond the frontend.</h4>

            <p>
              I'm currently developing my backend skills and learning how to
              build complete applications from the user interface to the
              database and API layer.
            </p>
          </div>

          <div className={styles.learningStack}>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className={styles.resume}>
          <div>
            <span className={styles.resumeLabel}>
              A bit more about my journey
            </span>

            <h5>See my full experience and skills.</h5>
          </div>

          <a
            href="/files/Blessing-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            <FiDownload />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
