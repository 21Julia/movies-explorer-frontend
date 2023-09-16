import React from 'react';
import './SavedMovies.css';
import { savedMovies } from '../../utils/constants';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';

function SavedMovies({ loggedIn }) {
  // Заглушки для тестирования
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      {/* <Preloader /> */}
      <div className="saved-movies">
        <SearchForm
          isActiveSwitch={isActiveSwitch}
          onSwitchButton={setIsActiveSwitch}
        />
        <MoviesCardList
          containerClass="cards_type_saved"
          moviesList={savedMovies}
          cardButtonClass="card__delete-button"
          buttonAriaLabel="Удалить"
        />
      </div>
      <Footer />
    </>
  );
};

export default SavedMovies;
