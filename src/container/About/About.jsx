import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Front-end",
    description:
      "Sou familiarizado com a tecnologia javascript e MaterialUI.",
    imgUrl: images.frontend,
  },
  {
    title: "Back-end",
    description: "Trabalho com NodeJS, PHP, Laravel, SQL e NoSQL.",
    imgUrl: images.backend,
  },
  {
    title: "UI/UX",
    description: "Adoro estudar e criar designs que representem a identidade visual.",
    imgUrl: images.uiux,
  },
  {
    title: "Metodologias Ágeis",
    description: "Sou familiarizado com o Scrum, kanban e muitas vezes utilizo a junção dos dois: o Scrumban.",
    imgUrl: images.metodologias,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Eu sei que
        <span> bom desenvolvimento</span>
        <br />
        significa
        <span> bons negócios</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "sobre mim",
  "app__whitebg"
);
