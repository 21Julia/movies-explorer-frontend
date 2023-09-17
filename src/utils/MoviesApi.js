import { MOVIES_API_ADDRESS } from './constants';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

};

const moviesApi = new MoviesApi(MOVIES_API_ADDRESS);

export default moviesApi;
