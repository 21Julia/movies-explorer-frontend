import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { footerClassXl } from '../../utils/constants';

function SavedMovies({ loggedIn, onBurgerButton, getSavedMovies, savedMovies, onCardDelete, filter, changePreloaderStatus, moviesRequestMessage, setMoviesRequestMessage, preloader }) {
  const [ movieInput, setMovieInput ] = React.useState('');
  const [ isValid, setIsValid ] = React.useState(true);
  const [ isActiveSwitch, setIsActiveSwitch ] = React.useState(false);
  const [ alreadySearched, setAlreadySearched ] = React.useState(false);

  const [ foundMovies, setFoundMovies ] = React.useState([]);

  React.useEffect(() => {
    getSavedMovies();
    setMoviesRequestMessage('');
    setAlreadySearched(false);
    //eslint-disable-next-line
  }, []);

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
    setAlreadySearched(true);
    setFoundMovies(filter(movieInput, switchState));
  };

  function handleSearchForm(evt) {
    search(evt, isActiveSwitch);
  };

  function handleSwitchButtonClick(evt) {
    setIsActiveSwitch(!isActiveSwitch);

    search(evt, !isActiveSwitch);
  };

  function handleMovieDeleteButton(movieForDelete) {
    onCardDelete(movieForDelete);

    setFoundMovies(foundMovies.filter((movie) => movie._id !== movieForDelete._id));
  };

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
        {!moviesRequestMessage &&
          <MoviesCardList
            moviesList={alreadySearched ? foundMovies : savedMovies}
            isSaved={true}
            buttonAriaLabel="Удалить"
            onCardButton={handleMovieDeleteButton}
          />
        }
      </main>
      <Footer footerClass={footerClassXl} />
    </>
  );
};

export default SavedMovies;
