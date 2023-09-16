import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupWithNavigation from '../PopupWithNavigation/PopupWithNavigation';

function App() {
  // Заглушки для тестирования
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(true);
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = React.useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main
            loggedIn={loggedIn}
            onBurgerButton={setIsNavigationPopupOpen}
          />}
        />
        <Route
          path="/movies"
          element={<Movies
            loggedIn={loggedIn}
            onBurgerButton={setIsNavigationPopupOpen}
            isLiked={isLiked}
            onLikeButton={setIsLiked}
          />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies
            loggedIn={loggedIn}
            onBurgerButton={setIsNavigationPopupOpen}
          />}
        />
        <Route
          path="/profile"
          element={<Profile
            loggedIn={loggedIn}
          />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login onLiginButton={setLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <PopupWithNavigation
        isOpen={isNavigationPopupOpen}
        loggedIn={loggedIn}
      />
    </>
  );
}

export default App;
