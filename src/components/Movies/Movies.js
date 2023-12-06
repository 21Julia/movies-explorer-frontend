import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesAddButton from './MoviesAddButton/MoviesAddButton';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { footerClass, notFoundMoviesMessage, WINDOW_WIDTH_XL, WINDOW_WIDTH_L, WINDOW_WIDTH_M, QUANTITY_MOVIES_INITIAL, QUANTITY_MOVIES_LARGE, QUANTITY_MOVIES_AVERAGE, QUANTITY_MOVIES_SMALL, QUANTITY_ADDED_MOVIES_INITIAL, QUANTITY_ADDED_MOVIES_LARGE, QUANTITY_ADDED_MOVIES_AVERAGE } from '../../utils/constants';

function Movies({ loggedIn, foundMovies, visibleMovies, filter, savedMovies, setFoundMovies, openInitialMovies, onAddButton, isVisible, moviesRequestMessage, setMoviesRequestMessage, onBurgerButton, preloader, changePreloaderStatus, onCardLike, setIsVisible }) {
  const [ movieInput, setMovieInput ] = React.useState('');
  const [ isValid, setIsValid ] = React.useState(true);
  const [ isActiveSwitch, setIsActiveSwitch ] = React.useState(false);

  const [ quantity, setQuantity ] = React.useState(1);
  const [ quantityAddedMovies, setQuantityAddedMovies ] = React.useState(1);

  React.useEffect(() => {
    setMoviesRequestMessage('');
    const savedValues = localStorage.getItem('inputText');
    setMovieInput(savedValues);

    if (localStorage.getItem('foundMovies')) {
      const latestFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));

      if (latestFoundMovies.length === 0) {
        setMoviesRequestMessage(notFoundMoviesMessage);
      };

      setFoundMovies(latestFoundMovies);
      openInitialMovies(quantity);
    } else {
      setFoundMovies([]);
    };

    if (localStorage.getItem('switchButtonState')) {
      const latestSwitchButtonState = JSON.parse(localStorage.getItem('switchButtonState'));
      setIsActiveSwitch(latestSwitchButtonState);
    };

    checkWidth();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        checkWidth();
      }, 1000);
    });

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [filter, foundMovies]);

  React.useEffect(() => {
    setIsVisible(false);
    openInitialMovies(quantity);
    //eslint-disable-next-line
  }, [quantity, foundMovies]);

  function checkWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth > WINDOW_WIDTH_XL) {
      setQuantity(QUANTITY_MOVIES_INITIAL);
      setQuantityAddedMovies(QUANTITY_ADDED_MOVIES_INITIAL);
    } else if (windowWidth > WINDOW_WIDTH_L) {
      setQuantity(QUANTITY_MOVIES_LARGE);
      setQuantityAddedMovies(QUANTITY_ADDED_MOVIES_LARGE);
    } else if (windowWidth > WINDOW_WIDTH_M) {
      setQuantity(QUANTITY_MOVIES_AVERAGE);
      setQuantityAddedMovies(QUANTITY_ADDED_MOVIES_AVERAGE);
    } else {
      setQuantity(QUANTITY_MOVIES_SMALL);
      setQuantityAddedMovies(QUANTITY_ADDED_MOVIES_AVERAGE);
    };
  };

  function handleChange(evt) {
    setMovieInput(evt.target.value);
    setIsValid(true);
  };

  function search(evt, switchState) {
    evt.preventDefault();

    if ((movieInput === '') || (movieInput === null)) {
      return setIsValid(false);
    };

    changePreloaderStatus();

    filter(movieInput, switchState, quantity);
  }

  function handleSearchForm(evt) {
    search(evt, isActiveSwitch);
  };

  function handleSwitchButtonClick(evt) {
    setIsActiveSwitch(!isActiveSwitch);

    if (!localStorage.getItem('foundMovies')) return;

    search(evt, !isActiveSwitch);
  };

  function handleAddButtonClick() {
    onAddButton(quantityAddedMovies);
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        onBurgerButton={onBurgerButton}
      />
      <main className="movies">
        <SearchForm
          inputValue={movieInput}
          onChange={handleChange}
          isValid={isValid}
          isActiveSwitch={isActiveSwitch}
          onSearchButton={handleSearchForm}
          onSwitchButton={handleSwitchButtonClick}
        />
        {moviesRequestMessage && <p className="movies__message">{moviesRequestMessage}</p>}
        {preloader && <Preloader />}
        {visibleMovies && !moviesRequestMessage &&
          <MoviesCardList
            moviesList={visibleMovies}
            savedMovies={savedMovies}
            buttonAriaLabel="Понравилось"
            onCardButton={onCardLike}
          />
        }
        {isVisible && !moviesRequestMessage && savedMovies &&
          <MoviesAddButton
            onAddButton={handleAddButtonClick}
          />}
      </main>
      <Footer footerClass={footerClass} />
    </>
  );
};

export default Movies;
