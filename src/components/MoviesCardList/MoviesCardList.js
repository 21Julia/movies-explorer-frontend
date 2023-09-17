import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ containerClass, moviesList, cardButtonClass, buttonAriaLabel }) {

  return (
    <section className={`cards ${containerClass}`}>
      <ul className="cards__list">
        {moviesList.map((movie, i) => (
          <MoviesCard
            key={i}
            movie={movie}
            cardButtonClass={cardButtonClass}
            buttonAriaLabel={buttonAriaLabel}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
