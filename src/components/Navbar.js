"use client";

import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { TbBrightnessHalf } from "react-icons/tb";

import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          B<span>.</span>
        </a>

        {/* Big screen Navigation */}
        <div
          className={`${styles.navLinks} ${
            menuOpen ? styles.navLinksOpen : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className={styles.navActions}>
          {/* Theme Toggle */}
          <button
            className={styles.toggleButton}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <TbBrightnessHalf />
          </button>

          {/*My  Resume */}
          <a
            href="/files/Blessing-CV.pdf"
            download
            className={styles.resumeButton}
          >
            <FiDownload />
            <span>Download Resume</span>
          </a>

          {/* Mobile Menu */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
