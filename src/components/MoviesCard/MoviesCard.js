import React from 'react';
import './MoviesCard.css';
import { savedMovieCardButtonClass, durationOfHourLongMovie } from '../../utils/constants';

function MoviesCard({ movie, savedMovies, buttonAriaLabel, onCardButton }) {
  const [ duration, setDuration ] = React.useState('');
  const [ cardButtonClass, setCardButtonClass ] = React.useState('');

  React.useEffect(() => {
    calculateDuration();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setCardButtonStatus();
    //eslint-disable-next-line
  }, [handleClick]);

  function setCardButtonStatus() {
    if (movie.owner) {
      setCardButtonClass(savedMovieCardButtonClass);
    } else {
      const isLiked = savedMovies.some(savedMovie => savedMovie.movieId === movie.id);

      setCardButtonClass(`card__like-button ${isLiked && 'card__like-button_active'} button`);
    };
  }

  function calculateDuration() {
    const movieDuration = movie.duration;
    const hours = Math.floor(movieDuration / durationOfHourLongMovie);

    if (movieDuration % durationOfHourLongMovie === 0) {
      return setDuration(`${hours}ч`);
    } else if (movieDuration > durationOfHourLongMovie) {
      const min = movieDuration - (hours * durationOfHourLongMovie);
      return setDuration(`${hours}ч ${min}м`);
    } else {
      return setDuration(`${movie.duration}м`);
    };
  };

  function handleClick() {
    onCardButton(movie);
  };

  return (
    <li className="card">
      <a className="card__trailer-link link" href={`${movie.trailerLink}`} target="_blank" rel="noreferrer"><img className="card__image" alt={movie.nameRU} src={`${movie.owner ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}`} /></a>
      <div className="card__items">
        <h2 className="card__title">{movie.nameRU}</h2>
        <button type="button" onClick={handleClick} className={cardButtonClass} aria-label={buttonAriaLabel}></button>
      </div>
      <div className="card__line"></div>
      <p className="card__duration">{duration}</p>
    </li>
  );
};

export default MoviesCard;
