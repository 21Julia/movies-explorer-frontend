import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ loggedIn, onBurgerButton, getSavedMovies, savedMovies, onCardDelete, filter, changePreloaderStatus, moviesRequestMessage, preloader, foundSavedMovies }) {
  const [ movieInput, setMovieInput ] = React.useState('');
  const [ isValid, setIsValid ] = React.useState(true);
  const [ isActiveSwitch, setIsActiveSwitch ] = React.useState(false);

  const [ visibleMovies, setVisibleMovies ] = React.useState(savedMovies);

  React.useEffect(() => {
    getSavedMovies();
    const latesSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setVisibleMovies(latesSavedMovies);
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {

    visibleMovies.filter((movie) => {

    })
    const latesSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setVisibleMovies(latesSavedMovies);
    //eslint-disable-next-line
  }, [onCardDelete]);

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

    setVisibleMovies(filter(movieInput, switchState));
  }

  function handleSearchForm(evt) {
    search(evt, isActiveSwitch);
  };

  function handleSwitchButtonClick(evt) {
    setIsActiveSwitch(!isActiveSwitch);

    search(evt, !isActiveSwitch);
  };

  // function handleDeleteButton() {
  //   onCardDelete();

  //   const latesSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
  //   setVisibleMovies(latesSavedMovies);
  // }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        onBurgerButton={onBurgerButton}
      />
      <main className="saved-movies">
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
            containerClass="cards_type_saved"
            moviesList={visibleMovies}
            isSaved={true}
            buttonAriaLabel="Удалить"
            onCardButton={onCardDelete}
          />
        }
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
