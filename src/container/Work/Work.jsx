import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const works = [
  {
    title: "EVENTORY.",
    description: "Plataforma de controle de bens patrimoniais",
    projectLink: "https://eventory-teste.onrender.com",
    codeLink: "https://github.com/eduardojanegitz/eventory",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Node JS", "UI/UX"],
  },
  {
    title: "coopmarket",
    description: "Plataforma de escolha dos melhores itens de supermercado",
    codeLink: "https://github.com/eduardojanegitz/eventory",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Mobile App"],
  },
  {
    title: "zorse",
    description: "Plataforma para cavalos",
    codeLink: "https://github.com/eduardojanegitz/eventory",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Node JS", "Web App"],
  },
  {
    title: "vet",
    description: "Plataforma de mostrar o que precisa para adotar um bichinho",
    codeLink: "https://github.com/eduardojanegitz/eventory",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Node JS", "Web App", "UI/UX"],
  },
  {
    title: "clone do twitter",
    description: "Clone do twitter",
    codeLink: "https://github.com/eduardojanegitz/eventory",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Node JS", "Web App", "UI/UX"],
  },
  {
    title: "clone do airbnb",
    description: "Clone do airbnb",
    codeLink: "https://github.com/eduardojanegitz/eventory",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Node JS", "Web App", "UI/UX"],
  },
  {
    title: "aerodev",
    description: "Portfolio dinâmica com um avião",
    projectLink: "https://aerodev.com.br",
    codeLink: "https://github.com/eduardojanegitz/aerodev",
    imgUrl: images.about01,
    tags: ["Todos", "React JS", "Web App", "UI/UX", "ThreeJS"],
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterWork(works);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Todos") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Minha seção <span>Criativa</span> de portfolio
      </h2>

      <div className="app__work-filter">
        {[
          "Todos",
          "UI/UX",
          "Web App",
          "Mobile App",
          "React JS",
          "Node JS",
          "ThreeJS",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "trabalhos",
  "app__primarybg"
);
