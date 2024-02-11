import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Front-end",
    description:
      "Sou familiarizado com a tecnologia javascript, MaterialUI, SASS",
    imgUrl: images.about01,
  },
  {
    title: "Back-end",
    description: "Trabalho com NodeJS, PHP",
    imgUrl: images.about02,
  },
  {
    title: "Metodologias Ágeis",
    description: "Trabalho com NodeJS, PHP",
    imgUrl: images.about03,
  },
  {
    title: "Metodologias Ágeis",
    description: "Trabalho com NodeJS, PHP",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Eu sei que
        <span> Bom desenvolvimento</span>
        <br />
        significa
        <span> Bons negócios</span>
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
