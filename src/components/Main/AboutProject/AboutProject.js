import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
  return (
    <section className="about-project">
      <Title text="О проекте" />
      <ul className="about-project__details">
        <li className="about-project__detail">
          <h3 className="about-project__detail-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__detail">
          <h3 className="about-project__detail-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__timescale">
        <div className="about-project__backend-part">
          <p className="about-project__timescale-title about-project__timescale-title_type_backend">1 неделя</p>
          <p className="about-project__timescale-caption">Back-end</p>
        </div>
        <div className="about-project__fronted-part">
          <p className="about-project__timescale-title about-project__timescale-title_type_frontend">4 недели</p>
          <p className="about-project__timescale-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
