"use client";

import { FaLinkedinIn, FaGithub, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <a href="#home" className={styles.footerLogo}>
              Blessing<span>.</span>
            </a>

            <p>Frontend developer.</p>
          </div>

          <div className={styles.navigation}>
            <span>Navigation</span>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Connect */}

          <div className={styles.connect}>
            <span>Connect</span>

            <a href="mailto:ochemeblessingehi@gmail.com">
              <FiMail />
              Email
            </a>

            <a
              href="https://github.com/Ehibliss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/ocheme-blessing-ehi-320b76321/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/@codewithbliss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
              Youtube
            </a>

            <a
              href="https://www.tiktok.com/@codewithbliss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
            >
              <FaTiktok />
              Tiktok
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} Blessing Ehi. All rights reserved.</p>
          <p>Designed & built with React & Next.js.</p>

          <a href="#home" className={styles.backToTop} aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
