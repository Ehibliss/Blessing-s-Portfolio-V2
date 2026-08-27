import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
} from "react-icons/si";

import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building APIs and working with databases and server-side logic.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    title: "Tools & Design",
    description: "Tools I use to design, build, test and manage projects.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
      { name: "VS Code", icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.skillHeader}>
          <span className={styles.toolkit}>My Toolkit</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>Technologies and tools I use in building products</p>
        </div>

        <div className={styles.skillcategories}>
          {skillCategories.map((category) => (
            <div className={styles.category} key={category.title}>
              <div className={styles.categoryHeader}>
                <h4>{category.title}</h4>
                <p>{category.description}</p>
              </div>

              <div className={styles.skillGrid}>
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div className={styles.skillCard} key={skill.name}>
                      <div className={styles.icon}>
                        {Icon ? <Icon /> : <span>*</span>}
                      </div>

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
