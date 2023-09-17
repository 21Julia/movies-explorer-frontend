import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item link">
          <a className="portfolio__link" href="https://github.com/21Julia/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__project-name">Статичный сайт</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <div className="portfolio__line"></div>
        <li className="portfolio__item link">
          <a className="portfolio__link" href="https://github.com/21Julia/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__project-name portfolio__project-name_margin_l">Адаптивный сайт</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <div className="portfolio__line"></div>
        <li className="portfolio__item link">
          <a className="portfolio__link" href="https://github.com/21Julia/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            <p className="portfolio__project-name portfolio__project-name_margin_l">Одностраничное приложение</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
