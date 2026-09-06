"use client";

import { useState } from "react";
import { FiMenu, FiX, FiDownload, FiMoon, FiSun } from "react-icons/fi";

import styles from "./Navbar.module.css";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          Blessing<span>.</span>
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
            type="button"
          >
            {theme === "light" ? <FiSun /> : <FiMoon />}
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
          <button className={styles.menuButton} onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
