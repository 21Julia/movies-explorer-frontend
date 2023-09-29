import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ isOpen, isSuccess, onClose, onMouseDown, infoTooltipMessage }) {
  React.useEffect(() => {
    if (!isOpen) return;

    function closeByEsc(evt) {
      if (evt.key === 'Escape') {
        onClose();
      };
    };

    document.addEventListener('keydown', closeByEsc);

    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`infoTooltip-popup ${isOpen ? 'infoTooltip-popup_opened' : ''}`} onMouseDown={onMouseDown}>
      <div className="infoTooltip-popup__container">
        <button type="button" className={`infoTooltip-popup__close-button button`} aria-label="Закрыть" onClick={onClose}></button>
        <div className={`infoTooltip-popup__registration-image ${isSuccess ? 'infoTooltip-popup__registration-image_type_success' : 'infoTooltip-popup__registration-image_type_fail'}`}></div>
        <p className="infoTooltip-popup__message">{isSuccess ? infoTooltipMessage : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;
