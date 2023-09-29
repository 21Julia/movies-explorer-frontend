import { MAIN_API_ADDRESS, MOVIES_API_ADDRESS_SHORT } from './constants';

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  register(newUser) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  authorize(user) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  updateUserInformation(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_ADDRESS_SHORT}` + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API_ADDRESS_SHORT}` + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  };
};

const mainApi = new MainApi(MAIN_API_ADDRESS);

export default mainApi;
