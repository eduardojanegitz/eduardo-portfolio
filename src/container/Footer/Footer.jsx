import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
  };

  return (
    <>
      <h2 className="head-text">Vamos tomar um café e conversar?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:edu0alves00@gmail.com" className="p-text">
            edu0alves00@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +55 (15)1599649-8315" className="p-text">
            +55 (15) 99649-8315
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder="Seu nome"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder="Seu e-mail"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Sua mensagem"
            value={message}
            name={message}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Enviando" : "Enviar mensagem"}
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contato",
  "app__whitebg"
);
