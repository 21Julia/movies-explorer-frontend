import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, cardButtonClass, buttonAriaLabel }) {

  return (
    <li className="card">
      <img className="card__image" alt={movie.name} src={movie.img} />
      <div className="card__items">
        <h2 className="card__title">{movie.name}</h2>
        <button type="button" className={cardButtonClass} aria-label={buttonAriaLabel}></button>
      </div>
      <div className="card__line"></div>
      <p className="card__duration">{movie.duration}</p>
    </li>
  );
};

export default MoviesCard;
