const inputActive = "auth-form__input_color_b";
const inputMargin = "auth-form__input_margin_l";
const inputErrorClass = "auth-form__input_type_error";
const inputMessageErrorClass = "auth-form__input-error_active";
const profileInputErrorClass = "profile__input_type_error";
const profileInputMessageErrorClass = "profile__input-error_active";
const searchFormInputErrorMessageClass = "search-form__input-error_active";
const savedMovieCardButtonClass = "card__delete-button";
const footerClass = "footer_margin_l";
const footerClassXl = "footer_margin_xl"

const errorMessage = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."

const notFoundMoviesMessage = 'Ничего не найдено.';
const successRegistrationMessage = 'Вы успешно зарегистрировались!';
const successUpdateMessage = 'Данные профиля обновлены!';
const updateProfileErrorMessage = 'При обновлении профиля произошла ошибка.';
const badRequestLoginErrorMessage = 'При авторизации произошла ошибка. Переданные данные некорректны.';
const unauthorizedErrorMessage = 'Вы ввели неправильный логин или пароль.';
const userAlreadyExistsMessage = 'Пользователь с таким email уже существует.';
const serverErrorMessage = 'На сервере произошла ошибка.';

const MAIN_API_ADDRESS = 'https://api.jkmovies-explorer.nomoredomainsicu.ru';
const MOVIES_API_ADDRESS = 'https://api.nomoreparties.co/beatfilm-movies';
const MOVIES_API_ADDRESS_SHORT = 'https://api.nomoreparties.co';

const technologies = [
  "HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"
];

export { inputActive, inputMargin, inputErrorClass, inputMessageErrorClass, profileInputErrorClass, profileInputMessageErrorClass, searchFormInputErrorMessageClass, savedMovieCardButtonClass, footerClass, footerClassXl, errorMessage, notFoundMoviesMessage, successRegistrationMessage, successUpdateMessage, updateProfileErrorMessage, badRequestLoginErrorMessage, unauthorizedErrorMessage, userAlreadyExistsMessage, serverErrorMessage, technologies, MAIN_API_ADDRESS, MOVIES_API_ADDRESS, MOVIES_API_ADDRESS_SHORT };
