import React from 'react';
import './MoviesAddButton.css';

function MoviesAddButton({ onAddButton }) {

  return (
    <button type="button" onClick={onAddButton} className="movies__add-button button" aria-label="Открыть ещё больше фильмов">
      Ещё
    </button>
  );
};

export default MoviesAddButton;
