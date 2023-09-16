import React from 'react';
import './Movies.css';
import { initialMovies } from '../../utils/constants';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesAddButton from './MoviesAddButton/MoviesAddButton';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';

function Movies({ loggedIn, isLiked }) {
  // Заглушки для тестирования
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(true);

  const cardLikeButtonClassName = (`card__like-button ${isLiked && 'card__like-button_active'} button`);

  return (
    <>
      <Header loggedIn={loggedIn} />
      {/* <Preloader /> */}
      <div className="movies">
        <SearchForm
          isActiveSwitch={isActiveSwitch}
          onSwitchButton={setIsActiveSwitch}
        />
        <MoviesCardList
          moviesList={initialMovies}
          cardButtonClass={cardLikeButtonClassName}
          buttonAriaLabel="Понравилось"
        />
        <MoviesAddButton />
      </div>
      <Footer />
    </>
  );
};

export default Movies;
