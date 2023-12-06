import React from 'react';
import './AboutMe.css';
import studentImage from '../../../images/about-me-image.jpg';
import Title from '../Title/Title';

function AboutMe() {
  return (
    <section className="about-me">
      <Title text="Студент" />
      <div className="about-me__info">
        <div className="about-me__description">
          <h3 className="about-me__name">Юлия</h3>
          <p className="about-me__specialty">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__text">Я родилась и живу в Москве. Закончила Финансовый университет при Правительстве РФ, кредитно-экономический факультет. Люблю читать книги, слушать музыку, увлекаюсь хоккеем и Формулой 1. В 2022 году открыла для себя IT сферу и поняла, что она мне близка. Поэтому последний год прохожу обучение по профессии веб-разработчик и в дальнейшем планирую работать в ней.</p>
          <a className="about-me__profile-link link" href="https://github.com/21Julia" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about-me__image" src={studentImage} alt="Фотография студента."></img>
      </div>
    </section>
  );
};

export default AboutMe;

