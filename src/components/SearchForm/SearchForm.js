import React from 'react';
import './SearchForm.css';

function SearchForm({ isActiveSwitch }) {
  const shortFilmSwitchClass = (`search-form__switch-button ${isActiveSwitch && 'search-form__switch-button_on'} button`);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-field">
          <div className="search-form__icon"></div>
          <form name="search" className="search-form__form" noValidate>
            <input id="movie-input" type="text" className="search-form__input search-form__input_type_movie" name="movie" placeholder="Фильм" required ></input>
            <button className="search-form__search-button button">Найти</button>
          </form>
        <div className="search-form__vertical-line"></div>
        </div>
        <div className="search-form__switch-section">
          <button className={shortFilmSwitchClass}></button>
          <p className="search-form__switch-title">Короткометражки</p>
        </div>
      </div>
      <div className="search-form__line"></div>
    </div>
  );
};

export default SearchForm;