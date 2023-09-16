import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen, iconColorClass }) {

  return (
    <div className="navigation">
      <div className={`navigation__links ${isOpen && 'navigation__links_visible'}`}>
        <NavLink to="/" className={({isActive}) => `navigation__link navigation__link_type_main ${isActive ? "navigation__link_active" : ""} link`}>Главная</NavLink>
        <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""} link`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""} link`}>Сохранённые фильмы</NavLink>
      </div>
      <NavLink to="/profile" className={`navigation__profile ${isOpen && 'navigation__profile_visible'} link`}>
        <p className="navigation__profile-text">Аккаунт</p>
        <button type="button" className={`navigation__profile-icon ${iconColorClass} button`} aria-label="Перейти в аккаунт"></button>
      </NavLink>
    </div>
  );
};

export default Navigation;
