import React from 'react';
import './PopupWithNavigation.css';
import Navigation from '../Header/Navigation/Navigation';

function PopupWithNavigation({ isOpen, loggedIn }) {

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button type="button" className="popup__close-button button" aria-label="Закрыть"></button>
        <Navigation loggedIn={loggedIn} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default PopupWithNavigation;
