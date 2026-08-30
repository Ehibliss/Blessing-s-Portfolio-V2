"use client";

import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiChevronRight } from "react-icons/fi";

import styles from "./Projects.module.css";

const projects = [
  {
    title: "HubSpot Clone",

    description:
      "A responsive SaaS-inspired website recreated with React to practice responsive design and layouts",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Responsive Design"],
    image: "/image/hubspot.png",
    liveUrl: "https://blisshubspotclone.netlify.app/",
    githubUrl: "https://github.com/Ehibliss/Hubspot-Clone.git",
  },

  {
    title: "Bliss Magicfingers",
    description:
      "A modern salon booking platform designed to help make salon bookings easier.",
    technologies: [
      "Next.js",
      "JavaScript",
      "CSS",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
    image: "/image/blissmagicfingers.png",
    liveUrl: "  https://bliss-magicfingers.vercel.app/",
    githubUrl: "https://github.com/Ehibliss/Bliss-Magicfingers.git ",
  },

  {
    title: "Planet Project",
    description:
      "An interactive planetary information app built as final project from TS Academy.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/image/planet.png",
    liveUrl: "https://group3-capstone-project.vercel.app",
    githubUrl: "https://github.com/Ehibliss/frontend-capstone-group3.git",
  },

  {
    title: "Calculator App",
    description:
      "A simple calculator application built to practice JavaScript logic, component and structure.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/image/calculator.png",
    liveUrl: "https://blisscalculator.netlify.app/",
    githubUrl: "https://github.com/Ehibliss/React-calculator.git",
  },
  {
    title: "Animal Gallery",
    description:
      "  An interactive animal gallery built to explore responsive layout",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/image/animal-gallery.png",
    liveUrl: "https://blissimagegallery.netlify.app/",
    githubUrl: "https://github.com/Ehibliss/codealpha-image-gallery.git",
  },
  {
    title: "Blessing's Portfolio v1.0",
    description:
      " An earlier version of my personal portfolio, built during my transition into frontend development",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/image/blessing-portfolio-v1.png",
    liveUrl: "https://blessingehi.netlify.app/",
    githubUrl: "https://github.com/Ehibliss/Blessing-s-Portfolio-.git",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeader}>
          <h2>Projects that I have built.</h2>

          <p>
            A collection of projects where I combine design, development,
            problem-solving and my curiosity.
          </p>
        </div>

        <div className={styles.projectShowcase}>
          <div className={styles.projectNav}>
            {projects.map((item, index) => (
              <button
                key={item.title}
                className={`${styles.projectNavItem} ${
                  activeProject === index ? styles.projectNavActive : ""
                }`}
                onClick={() => setActiveProject(index)}
              >
                <span>{item.title}</span>

                <FiChevronRight className={styles.navArrow} />
              </button>
            ))}
          </div>

          {/* Project Content */}

          <div className={styles.projectContent}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                width={600}
                height={600}
              />
            </div>

            {/* Details */}
            <div className={styles.projectDetails}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* Technologies I used */}
              <div className={styles.technologies}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryLink}
                >
                  Live Project
                  <FiArrowUpRight />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectCounter}>
          <span>{String(activeProject + 1).padStart(2, "0")}</span>

          <div className={styles.counterLine}>
            <span
              style={{
                width: `${((activeProject + 1) / projects.length) * 100}%`,
              }}
            />
          </div>

          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
