import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupWithNavigation from '../PopupWithNavigation/PopupWithNavigation';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { errorMessage, notFoundMoviesMessage, successRegistrationMessage, successUpdateMessage, updateProfileErrorMessage, badRequestLoginErrorMessage, unauthorizedErrorMessage, userAlreadyExistsMessage, serverErrorMessage, durationOfShortMovie } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [ loggedIn, setLoggedIn ] = React.useState(null);
  const [ currentUser, setCurrentUser ] = React.useState({});

  const [ preloader, setPreloader ] = React.useState(false);
  const [ isDisabled, setIsDisabled ] = React.useState(true);

  const [ requestError, setRequestError ] = React.useState(false);
  const [ requestErrorMessage, setRequestErrorMessage ] = React.useState('');

  const [ foundMovies, setFoundMovies] = React.useState([]);
  const [ savedMovies, setSavedMovies ] = React.useState([]);
  const [ moviesRequestMessage, setMoviesRequestMessage ] = React.useState('');

  // Попапы
  const [ isNavigationPopupOpen, setIsNavigationPopupOpen ] = React.useState(false);
  const [ isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen ] = React.useState(false);
  const [ infoTooltipMessage, setInfoTooltipMessage ] = React.useState('');
  const [ isSuccess, setIsSuccess ] = React.useState(false);

  // Массив отображаемых фильмов
  const [ visibleMovies, setVisibleMovies ] = React.useState([]);
  // Массив скрытых фильмов кнопкой <<Ещё>>
  const [ hiddenMovies, setHiddenMovies ] = React.useState([]);
  // Состояние кнопки <<Ещё>>
  const [ isVisible, setIsVisible ] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    verifyTokens();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    loggedIn && setFoundMovies([]);
    loggedIn && getSavedMovies();
  }, [loggedIn]);

  function verifyTokens() {
    mainApi.checkToken()
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
        };
      })
      .catch((err) => {
        console.log(`Ошибка при проверке токена: ${err}`);
        setLoggedIn(false);
      });
  };

  function handleRegister(formValues) {
    mainApi.register(formValues)
      .then((user) => {
        if (user) {
          handleLogin(formValues);
          setInfoTooltipMessage (successRegistrationMessage);
          openInfoTooltip();
          setIsSuccess(true);
        };
      })
      .catch((err) => {
        setRequestError(true);

        if (err === 409) {
          return setRequestErrorMessage(userAlreadyExistsMessage);
        } else if (err === 500) {
          return setRequestErrorMessage(serverErrorMessage);
        } else {
          return setRequestErrorMessage(`При регистрации пользователя произошла ошибка: ${err}.`);
        };
      })
      .finally(() => setPreloader(false));
  };

  function handleLogin(formValues) {
    mainApi.authorize(formValues)
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          setLoggedIn(true);
          navigate('/movies', {replace: true});
        };
      })
      .catch((err) => {
        setRequestError(true);

        if (err === 400) {
          return setRequestErrorMessage(badRequestLoginErrorMessage);
        } else if (err === 401) {
          return setRequestErrorMessage(unauthorizedErrorMessage);
        } else if (err === 500) {
          return setRequestErrorMessage(serverErrorMessage);
        } else {
          return setRequestErrorMessage(`При авторизации произошла ошибка: ${err}.`);
        };
      })
      .finally(() => setPreloader(false));
  };

  function handleProfile(newUserInfo) {
    mainApi.updateUserInformation(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsDisabled(true);
        setRequestError(false);
        setInfoTooltipMessage (successUpdateMessage);
        openInfoTooltip();
        setIsSuccess(true);
      })
      .catch((err) => {
        setRequestError(true);

        if (err === 409) {
          return setRequestErrorMessage(userAlreadyExistsMessage);
        } else if (err === 500) {
          return setRequestErrorMessage(serverErrorMessage);
        } else {
          return setRequestErrorMessage(updateProfileErrorMessage);
        };
      })
      .finally(() => setPreloader(false));
  };

  function signOut() {
    mainApi.signOut()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        setIsVisible(false);
        localStorage.clear();
        navigate('/', {replace: true});
      })
      .catch((err) => {
        console.log(`Ошибка при выходе: ${err}.`)
      });
  };

  function getInitialMovies(value, switchState) {
    moviesApi.getInitialMovies()
      .then((initialMovies) => {
        localStorage.setItem('allMovies', JSON.stringify(initialMovies));
        setFoundMovies(filterAllMovies(initialMovies, value, switchState));
        showErrorMessage();
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке первоначальных фильмов: ${err}`);
        setMoviesRequestMessage(errorMessage);
      });
  };

  function getSavedMovies() {
    mainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
      })
      .catch(err => console.log(`Ошибка при загрузке сохранённых фильмов: ${err}`));
  };

  function filter(movies, value, switchState) {
    return movies.filter((movie) => {
      const ruName = movie.nameRU.toLowerCase();
      const engName = movie.nameEN.toLowerCase();
      const inputValue = value.toLowerCase();
      const duration = movie.duration;

      if (switchState) {
        return ((duration <= durationOfShortMovie) && (((ruName.includes(inputValue)) || (engName.includes(inputValue)))));
      } else {
        return ((ruName.includes(inputValue)) || (engName.includes(inputValue)));
      }
    });
  };

  function filterAllMovies(movies, value, switchState) {
    const filteredMovies = filter(movies, value, switchState);

    localStorage.setItem('inputText', value);
    localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('switchButtonState', JSON.stringify(switchState));

    return filteredMovies;
  };

  function filterForSavedMovies(value, switchState) {
    try {
      const filteredMovies = filter(savedMovies, value, switchState);

      if (filteredMovies.length === 0) {
        setMoviesRequestMessage(notFoundMoviesMessage);
      } else {
        setMoviesRequestMessage('');
        return filteredMovies;
      };
    } catch (err) {
      setMoviesRequestMessage(errorMessage);
    } finally {
      setPreloader(false);
    };
  };

  function showErrorMessage() {
    if (localStorage.getItem('foundMovies')) {
      const latestFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));

      if (latestFoundMovies.length === 0) {
        setMoviesRequestMessage(notFoundMoviesMessage);
      } else {
        setMoviesRequestMessage('');
      };
    };
  };

  function checkAvailabilityOfAllMovies(value, switchState, quantity) {
    try {
      if (!localStorage.getItem('allMovies')) {
        getInitialMovies(value, switchState);
      } else {
        const movies = JSON.parse(localStorage.getItem('allMovies'));
        setFoundMovies(filterAllMovies(movies, value, switchState));
        showErrorMessage();
      };
      openInitialMovies(quantity);
    } catch (err) {
      setMoviesRequestMessage(errorMessage);
    } finally {
      setPreloader(false);
    };
  };

  function openInitialMovies(quantity) {
    if (foundMovies.length <= quantity) {
      return setVisibleMovies(foundMovies);
    };

    if (foundMovies.length > quantity) {
      setIsVisible(true);

      const initialMovies = foundMovies.slice(0, quantity);
      const initialHiddenMovies = foundMovies.slice(quantity);

      setVisibleMovies(initialMovies);
      setHiddenMovies(initialHiddenMovies);
    };
  };

  function handleAddButtonClick(quantity) {
    const addedMovies = hiddenMovies.slice(0, quantity);
    const nextHiddenMovies = hiddenMovies.slice(quantity);

    setVisibleMovies([...visibleMovies, ...addedMovies]);
    setHiddenMovies(nextHiddenMovies);

    if (hiddenMovies.length <= quantity) {
      setIsVisible(false);
    };
  };

  function handleCardDelete(cardForDelete) {
    mainApi.deleteMovie(cardForDelete._id)
      .then(() => getSavedMovies())
      .catch(err => console.log(`Ошибка при удалении фильма: ${err}`));
  };

  function handleLikeOrDeleteButton(movie) {
    const movieForDelete = savedMovies.find((savedMovie) => {
      return savedMovie.movieId === movie.id;
    });

    if (movieForDelete) {
      handleCardDelete(movieForDelete);
    } else {
      mainApi.saveMovie(movie)
        .then((movie) => setSavedMovies([...savedMovies, movie]))
        .catch(err => console.log(`Ошибка при сохранении фильма: ${err}`));
    };
  };

  function makeEditButtonActive() {
    setIsDisabled(false);
  };

  function showError() {
    setRequestError(true);
    setRequestErrorMessage('Внесите изменения.');
  };

  function clearError() {
    setRequestError(false);
  };

  function openMenu() {
    setIsNavigationPopupOpen(true);
  };

  function openInfoTooltip() {
    setIsInfoTooltipPopupOpen(true);
  };

  function closeAllPopups() {
    setIsNavigationPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  };

  function closeByMouse(evt) {
    if (evt.target.classList.contains('infoTooltip-popup_opened')) {
      closeAllPopups();
    };
  };

  function changePreloaderStatus() {
    setPreloader(true);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={<Main
              loggedIn={loggedIn}
              onBurgerButton={openMenu}
            />}
          />
          <Route path="/movies"
            element={loggedIn === null ?
              <Preloader preloaderClass="preloader_margin_l" /> :
              <ProtectedRoute
                loggedIn={loggedIn}
                element={Movies}
                foundMovies={foundMovies}
                visibleMovies={visibleMovies}
                filter={checkAvailabilityOfAllMovies}
                savedMovies={savedMovies}
                setFoundMovies={setFoundMovies}
                openInitialMovies={openInitialMovies}
                onAddButton={handleAddButtonClick}
                isVisible={isVisible}
                moviesRequestMessage={moviesRequestMessage}
                setMoviesRequestMessage={setMoviesRequestMessage}
                onBurgerButton={openMenu}
                preloader={preloader}
                changePreloaderStatus={changePreloaderStatus}
                onCardLike={handleLikeOrDeleteButton}
                setIsVisible={setIsVisible}
            />}
          />
          <Route path="/saved-movies"
            element={loggedIn === null ?
              <Preloader preloaderClass="preloader_margin_l" /> :
              <ProtectedRoute
                loggedIn={loggedIn}
                element={SavedMovies}
                filter={filterForSavedMovies}
                onBurgerButton={openMenu}
                getSavedMovies={getSavedMovies}
                savedMovies={savedMovies}
                onCardDelete={handleCardDelete}
                changePreloaderStatus={changePreloaderStatus}
                preloader={preloader}
                moviesRequestMessage={moviesRequestMessage}
                setMoviesRequestMessage={setMoviesRequestMessage}
            />}
          />
          <Route path="/profile"
            element={loggedIn === null ?
              <Preloader preloaderClass="preloader_margin_l" /> :
              <ProtectedRoute
                element={Profile}
                clearError={clearError}
                makeEditButtonActive={makeEditButtonActive}
                onSignOut={signOut}
                showError={showError}
                changePreloaderStatus={changePreloaderStatus}
                onEditButton={handleProfile}
                loggedIn={loggedIn}
                onBurgerButton={openMenu}
                isDisabled={isDisabled}
                requestError={requestError}
                requestErrorMessage={requestErrorMessage}
                isLoading={preloader}
            />}
          />
          <Route
            path="/signup"
            element={loggedIn ?
              <Navigate to="/movies" replace/> :
              <Register
                onRegisterButton={handleRegister}
                isLoading={preloader}
                changePreloaderStatus={changePreloaderStatus}
                requestError={requestError}
                requestErrorMessage={requestErrorMessage}
                clearError={clearError}
            />}
          />
          <Route
            path="/signin"
            element={loggedIn ?
              <Navigate to="/movies" replace/> :
              <Login
                onLoginButton={handleLogin}
                isLoading={preloader}
                changePreloaderStatus={changePreloaderStatus}
                requestError={requestError}
                requestErrorMessage={requestErrorMessage}
                clearError={clearError}
            />}
          />
          <Route path="*" element={<PageNotFound verifyTokens={verifyTokens} />} />
        </Routes>
        <PopupWithNavigation
          isOpen={isNavigationPopupOpen}
          onClose={closeAllPopups}
          loggedIn={loggedIn}
        />
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          isSuccess={isSuccess}
          onClose={closeAllPopups}
          onMouseDown={closeByMouse}
          infoTooltipMessage={infoTooltipMessage}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
