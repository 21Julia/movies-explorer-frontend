import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ containerClass, moviesList, cardButtonClass, buttonAriaLabel }) {

  return (
    <div className={`cards ${containerClass}`}>
      <ul className="cards__list">
        {moviesList.map((movie, index) => (
          <MoviesCard
            key={index}
            movie={movie}
            cardButtonClass={cardButtonClass}
            buttonAriaLabel={buttonAriaLabel}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesCardList;
