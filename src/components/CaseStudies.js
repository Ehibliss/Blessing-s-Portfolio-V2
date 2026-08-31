"use client";

import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiCheckCircle,
} from "react-icons/fi";

import styles from "./CaseStudies.module.css";

const caseStudies = [
  {
    title: "Bliss Magicfingers",
    subtitle: "Full-Stack Booking Platform",

    description:
      "A modern salon booking platform created to transform a salonbusiness idea into an apsolute solution for both customers and the business owner.",

    problem:
      "Customers needed a simpler way to discover salon services, understand pricing and duration, and make appointments without relying entirely on manual communication.",

    approach:
      " Designed and developed a responsive web app that created the booking workflow and connected the it to a MongoDB database through REST APIs.",

    technologies: ["Next.js", "React", "MongoDB", "Mongoose", "REST API"],

    image: "/image/blissmagicfingers.png",

    liveUrl: "#",
    caseStudyurl: "#",

    icon: FiDatabase,
  },

  {
    title: "HubSpot Clone",
    subtitle: "SaaS Interface Recreation",

    description:
      "A frontend recreation inspired by HubSpot's marketing experience, built to strengthen my ability to translate complex interfaces into reusable and responsive React components.",

    problem:
      "The challenge was to recreate a professional SaaS interface while maintaining responsive layouts, reusable components, visual hierarchy, and a consistent user experience.",

    approach:
      "Broke the interface into reusable sections, recreated the layouts with React and CSS, implemented responsive behavior, and focused on matching the visual structure across different screen sizes.",

    image: "/image/hubspot.png",

    liveUrl: "#",
    caseStudyurl: "#",

    icon: FiCode,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className={styles.caseStudies}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.caseStudiesspan}>The Case Studies</span>

            <h2>Behind the build.</h2>
          </div>

          <p>
            More than the final interface. Here's a look at the problems, the
            decisions I made, and the approached I used.
          </p>
        </div>

        <div className={styles.caseStudycontents}>
          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <article key={study.title} className={styles.caseStudy}>
                <div className={styles.imageWrapper}>
                  <img
                    src={study.image}
                    alt={`${study.title} project preview`}
                    className={styles.projectImage}
                    height={600}
                    width={600}
                  />

                  <div className={styles.imageLabel}>
                    <Icon />
                    <span>{study.subtitle}</span>
                  </div>
                </div>

                <div className={styles.content}>
                  <h4>{study.title}</h4>
                  <p className={styles.description}>{study.description}</p>

                  <div className={styles.details}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>The Problem</span>

                      <p>{study.problem}</p>
                    </div>

                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>My Approach</span>
                      <p>{study.approach}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className={styles.links}>
                    <a href={study.caseStudyUrl} className={styles.primaryLink}>
                      Read Case Study
                      <FiArrowUpRight />
                    </a>

                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryLink}
                    >
                      View Project
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.bottomStatement}>
          <FiCheckCircle />

          <p>
            Every project is an opportunity to learn, identify the problem, and
            become the solution
          </p>
        </div>
      </div>
    </section>
  );
}
