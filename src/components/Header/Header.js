import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation/Navigation';

function Header({ loggedIn, onBurgerButton, headerColorClass, iconColorClass }) {
  return (
    <header className={`header ${headerColorClass}`}>
      <nav className="header__navigation">
        <NavLink to="/" className="header__logo button" aria-label="На главную"></NavLink>
        {loggedIn ?
          <div className="header__navigation-authorized">
            <Navigation iconColorClass={iconColorClass} />
            <button type="button" className="header__burger-menu button" onClick={onBurgerButton} aria-label="Открыть меню"></button>
          </div> :
          <div className="header__navigation-unauthorized">
            <NavLink to="/signup" className="header__navigation-registration link">Регистрация</NavLink>
            <NavLink to="/signin" className="header__navigation-login button">Войти</NavLink>
          </div>
        }
      </nav>
    </header>
  );
};

export default Header;
