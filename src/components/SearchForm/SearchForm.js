import React from 'react';
import './SearchForm.css';
import { searchFormInputErrorMessageClass } from '../../utils/constants';

function SearchForm({ inputValue, onChange, isValid, isActiveSwitch, onSearchButton, onSwitchButton }) {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-field">
          <div className="search-form__icon"></div>
          <form name="search" onSubmit={onSearchButton} className="search-form__form" noValidate>
            <div className="search-form__input-section">
              <input id="movie-input" type="text" name="movie" className="search-form__input" onChange={onChange} minLength="1" placeholder="Фильм" value={inputValue || ''} required />
              <button type="submit" className={`search-form__search-button ${isValid && 'button'}`} disabled={!isValid}>Найти</button>
              <span className={`search-form__input-error ${isValid ? '' : searchFormInputErrorMessageClass}`}>Нужно ввести ключевое слово.</span>
            </div>
            <div className="search-form__switch-section">
              <button type="button" className={`search-form__switch-button ${isActiveSwitch ? 'search-form__switch-button_on' : ''} button`} aria-label={`${isActiveSwitch ? 'Исключить короткометражки' : 'Выбрать короткометражки'}`} onClick={onSwitchButton} ></button>
              <p className="search-form__switch-title">Короткометражки</p>
            </div>
          </form>
        </div>
      </div>
      <div className="search-form__line"></div>
    </section>
  );
};

export default SearchForm;
