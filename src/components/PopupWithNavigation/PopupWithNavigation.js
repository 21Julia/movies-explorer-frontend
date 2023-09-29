import React from 'react';
import './PopupWithNavigation.css';
import Navigation from '../Header/Navigation/Navigation';

function PopupWithNavigation({ isOpen, onClose, loggedIn }) {

  React.useEffect(() => {
    if (!isOpen) return;

    function checkWidth() {
      if (window.innerWidth > 768) {
        onClose();
      };
    };

    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [isOpen, onClose])

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button type="button" className="popup__close-button button" onClick={onClose} aria-label="Закрыть"></button>
        <Navigation loggedIn={loggedIn} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default PopupWithNavigation;
