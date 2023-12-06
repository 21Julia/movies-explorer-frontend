import { MOVIES_API_ADDRESS } from './constants';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
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

const moviesApi = new MoviesApi(MOVIES_API_ADDRESS);

export default moviesApi;
