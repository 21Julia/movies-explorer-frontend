import { MAIN_API_ADDRESS } from './constants';

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

};

const mainApi = new MainApi(MAIN_API_ADDRESS);

export default mainApi;
