"use client";
import { useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./About.module.css";

const floatingCards = [
  {
    number: "01",
    title: "Blessed Hands",
    description: "Creating with purpose",
  },
  {
    number: "02",
    title: "Creative Thinker",
    description: "Designing with the user in mind",
  },
  {
    number: "03",
    title: "Curious Mind",
    description: "Always exploring new ideas",
  },
  {
    number: "04",
    title: "Problem Solver",
    description: "Turning challenges into solutions",
  },
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      number: "01",
      title: "My Mission",
      label: "What I want to create",
      text: (
        <>
          My mission is to build digital products that make people's lives a
          little easier. I want to combine creativity, technology, and an
          understanding of people to create products that solve real problems.
          <br />
          <br /> I want to build applications that are thoughtful, accessible,
          responsive, and meaningful.
        </>
      ),
    },
    {
      number: "02",
      title: "My Vision",
      label: "Where I'm heading",
      text: (
        <>
          I envision becoming a well-rounded Full-Stack Developer who can take
          an idea from concept to a complete product. I want to keep learning,
          work alongside talented people, and contribute to products that create
          real value.
          <br />
          <br />
          Ultimately, I want my work to go beyond code. I want to build things
          that matter, create opportunities, and use technology to make
          meaningful impacts.
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <h6>About Me</h6>
        <div className={styles.aboutIntro}>
          <h2>
            The <span> Blessing </span>behind the code.
          </h2>

          <p>
            I’m Blessing, a developer with a background in Business
            Administration and a passion for building meaningful digital
            experiences.
            <br />
            My journey into tech began with UI/UX basics and naturally grew into
            Frontend Development, where I discovered my love for turning ideas
            into functional and engaging products. I’m currently expanding into
            Backend Development as I work toward becoming a Full-Stack
            Developer. I enjoy solving problems, learning continuously, and
            creating solutions.
          </p>
        </div>

        <div className={styles.aboutSlider}>
          <div className={styles.Topslider}>
            <h6>What drives me</h6>

            <div className={styles.slideCounter}>
              <span>0{activeSlide + 1}</span>
              <span>/</span>
              <span>02</span>
            </div>
          </div>

          <div className={styles.aboutSlide}>
            <span>{currentSlide.number}</span>

            <div className={styles.slideContent}>
              <p className={styles.slideLabel}>{currentSlide.label}</p>

              <h3>{currentSlide.title}</h3>

              <p className={styles.slidePara}>{currentSlide.text}</p>
            </div>

            <div className={styles.slideDecoration}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={styles.sliderControls}>
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className={styles.sliderButton}
            >
              <FiArrowLeft />
            </button>

            <div className={styles.progress}>
              <span
                className={styles.progressActive}
                style={{
                  width: `${((activeSlide + 1) / slides.length) * 100}%`,
                }}
              ></span>
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className={styles.sliderButton}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.floatingSection}>
          {floatingCards.map((card, index) => (
            <div
              key={card.number}
              className={`${styles.floatingCard} ${
                styles[`floating${index + 1}`]
              }`}
            >
              <span className={styles.cardNumber}>{card.number}</span>

              <div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
