import styles from "./Hero.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.heroIntro}>Hi there, I'm Blessing </p>

          <h1 className={styles.heroTitle}>
            I create digital solutions that are beautiful & functional.
          </h1>

          <p className={styles.heroDescription}>
            I'm a Frontend Developer growing into Full-Stack Development, I'm
            passionate about turning ideas into responsive, beautiful and
            meaningful web applications.
          </p>

          <div className={styles.heroButtons}>
            <a
              href="#projects"
              className={`${styles.heroBtn} ${styles.primaryBtn}`}
            >
              View My Works
              <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className={`${styles.heroBtn} ${styles.secondaryBtn}`}
            >
              Let's Connect
            </a>
          </div>

          <div className={styles.heroRole}>
            <span>Frontend Developer</span>
            <span className={styles.roleLine}></span>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrapper}>
            <img
              src="/Image/missBliss.jpeg"
              alt="Blessing"
              width={500}
              height={600}
              className={styles.heroImage}
            />
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            Available for opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
