import words from '../images/movies-33-words.png';
import years from '../images/movies-100-years.png';
import banksy from '../images/movies-banksy.png';
import basquiat from '../images/movies-basquiat.png';
import running from '../images/movies-running.png';
import booksellers from '../images/movies-booksellers.png';
import thinkingAboutGermany from '../images/movies-thinking-about-germany.png';
import gimmeDanger from '../images/movies-gimme-danger.png';
import janice from '../images/movies-janice.png';
import jump from '../images/movies-before-jump.png';
import harvey from '../images/movies-pj-harvey.png';
import waves from '../images/movies-waves.png';
import rudboy from '../images/movies-rudboy.png';
import skateKitchen from '../images/movies-skate-kitchen.png';
import warOfArt from '../images/movies-war-of-art.png';
import zone from '../images/movies-zone.png';
const errorClass = "auth-form__input_type_error";
const inputActive = "auth-form__input_color_b";
const inputMargin = "auth-form__input_margin_l";

const MAIN_API_ADDRESS = 'https://api.jkmovies-explorer.nomoredomainsicu.ru';
const MOVIES_API_ADDRESS = 'https://api.nomoreparties.co/beatfilm-movies';

const technologies = [
  "HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"
];

const initialMovies = [
  {
    img: words,
    name: '33 слова о дизайне',
    duration: '1ч 42м'
  },
  {
    img: years,
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м'
  },
  {
    img: banksy,
    name: 'В погоне за Бенкси',
    duration: '1ч 42м'
  },
  {
    img: basquiat,
    name: 'Баския: Взрыв реальности',
    duration: '1ч 42м'
  },
  {
    img: running,
    name: 'Бег это свобода',
    duration: '1ч 42м'
  },
  {
    img: booksellers,
    name: 'Книготорговцы',
    duration: '1ч 42м'
  },
  {
    img: thinkingAboutGermany,
    name: 'Когда я думаю о Германии ночью',
    duration: '1ч 42м'
  },
  {
    img: gimmeDanger,
    name: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 42м'
  },
  {
    img: janice,
    name: 'Дженис: Маленькая девочка грустит',
    duration: '1ч 42м'
  },
  {
    img: jump,
    name: 'Соберись перед прыжком',
    duration: '1ч 42м'
  },
  {
    img: harvey,
    name: 'Пи Джей Харви: A dog called money',
    duration: '1ч 42м'
  },
  {
    img: waves,
    name: 'По волнам: Искусство звука в кино',
    duration: '1ч 42м'
  },
  {
    img: rudboy,
    name: 'Рудбой',
    duration: '1ч 42м'
  },
  {
    img: skateKitchen,
    name: 'Скейт — кухня',
    duration: '1ч 42м'
  },
  {
    img: warOfArt,
    name: 'Война искусств',
    duration: '1ч 42м'
  },
  {
    img: zone,
    name: 'Зона',
    duration: '1ч 42м'
  }
];

const savedMovies = [
  {
    img: words,
    name: '33 слова о дизайне',
    duration: '1ч 42м'
  },
  {
    img: years,
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м'
  },
  {
    img: banksy,
    name: 'В погоне за Бенкси',
    duration: '1ч 42м'
  }
];

export {errorClass, inputActive, inputMargin, technologies, initialMovies, savedMovies, MAIN_API_ADDRESS, MOVIES_API_ADDRESS };
