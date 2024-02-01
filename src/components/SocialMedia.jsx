import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.instagram.com/eduualvs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/eduardo-alves-091aa1219/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="http://github.com/eduardojanegitz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
