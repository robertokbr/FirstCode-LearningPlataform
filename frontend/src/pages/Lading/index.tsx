import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiLogIn, FiInbox } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>
            Sua Plataforma de estudos online
            <br />
            Para aprender programação
            <br />
            desde o primeiro código 🥇
          </h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="/study" className="study">
            <FiLogIn size={30} />
            Começar
          </a>
          <Link to="/give-classes" className="give-classes">
            <FiInbox size={30} />
            Entrar em contato
          </Link>
        </div>

        <span className="total-connections">
          <a href="https://www.linkedin.com/in/robertojrcdc/">
            A Roberto Junior's plataform.
            <FiLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
}
