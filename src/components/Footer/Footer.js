import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__year">&copy; {year}</p>
        <ul className="footer__links">
          <li className="footer__list"><a className="footer__link link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li className="footer__list"><a className="footer__link link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
