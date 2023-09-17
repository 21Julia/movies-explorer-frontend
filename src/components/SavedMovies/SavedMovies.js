import React from 'react';
import './SavedMovies.css';
import { savedMovies } from '../../utils/constants';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';

function SavedMovies({ loggedIn, onBurgerButton }) {
  // Заглушки для тестирования
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(false);

  return (
    <>
      <Header
        loggedIn={loggedIn}
        onBurgerButton={onBurgerButton}
      />
      <main className="saved-movies">
        <SearchForm
          isActiveSwitch={isActiveSwitch}
          onSwitchButton={setIsActiveSwitch}
        />
        {/* <Preloader /> */}
        <MoviesCardList
          containerClass="cards_type_saved"
          moviesList={savedMovies}
          cardButtonClass="card__delete-button"
          buttonAriaLabel="Удалить"
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
