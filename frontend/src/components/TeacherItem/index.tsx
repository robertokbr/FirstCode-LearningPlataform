import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHpWNC3325tsQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=BCUEHoUzoIGmcSEu7dPRI3E9iVn3yODkoI6DtgJiHGo"
          alt="Roberto Junior"
        />
        <div>
          <strong>Roberto Junior</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta de desenvolvimento full stack
        <br />
        <br />
        com mais de 30 repositorios no github mostrando todo o meu potencial de
        crescimento
      </p>

      <footer>
        <p>
          Preço por hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
