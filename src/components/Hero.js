import styles from "./Hero.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.heroIntro}>Hi there, </p>

          <h1 className={styles.heroTitle}>I'm Blessing</h1>

          <p className={styles.heroDescription}>
            A Frontend Developer, I create digital solutions that are beautiful
            & functional.
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
            <span className={styles.roleLine}> </span>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrapper}>
            <img
              src="/image/missBliss.jpeg"
              alt="Blessing"
              width={500}
              height={600}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
