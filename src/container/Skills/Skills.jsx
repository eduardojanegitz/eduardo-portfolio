import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from 'react-tooltip';

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const skills = [
  {
    name: "React",
    bgColor: "",
    icon: images.react,
  },
  {
    name: "NodeJS",
    bgColor: "",
    icon: images.node,
  },
  {
    name: "MaterialUI",
    bgColor: "",
    icon: images.mu5,
  },
  {
    name: "Git",
    bgColor: "",
    icon: images.git,
  },
  {
    name: "CSS",
    bgColor: "",
    icon: images.css,
  },
  {
    name: "SCSS",
    bgColor: "",
    icon: images.sass,
  },
  {
    name: "API",
    bgColor: "",
    icon: images.api,
  },
  {
    name: "Typescript",
    bgColor: "",
    icon: images.typescript,
  },
  {
    name: "Javascript",
    bgColor: "",
    icon: images.javascript,
  },
  {
    name: "Redux",
    bgColor: "",
    icon: images.redux,
  },
];

const experiences = [
  {
    year: "2022",
    works: [
      {
        name: "Analista de Suporte de TI",
        company: "Vitafor",
        desc: "Manutenção de sistemas, desenvolvimento de aplicações",
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        name: "Desenvolvedor web pleno I",
        company: "Vitafor",
        desc: "Manutenção de sistemas, desenvolvimento de aplicações",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Habilidades & Experiências</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "habilidades",
  "app__whitebg"
);
