import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ containerClass, moviesList, isSaved, savedMovies, cardButtonClass, buttonAriaLabel, onCardButton }) {

  return (
    <section className={`cards ${containerClass}`}>
        <ul className="cards__list">
        {moviesList.map((movie, i) => (
          <MoviesCard
            key={isSaved ? movie.movieId : movie.id}
            movie={movie}
            savedMovies={savedMovies}
            cardButtonClass={cardButtonClass}
            buttonAriaLabel={buttonAriaLabel}
            onCardButton={onCardButton}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
