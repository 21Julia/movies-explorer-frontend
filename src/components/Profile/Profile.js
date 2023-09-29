import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { profileInputErrorClass, profileInputMessageErrorClass } from '../../utils/constants';

function Profile({ clearError, makeEditButtonActive, onSignOut, showError, changePreloaderStatus, onEditButton, loggedIn, onBurgerButton, isDisabled, requestError, requestErrorMessage, isLoading }) {
  const {values, errors, isValid, handleChange, resetForm, setIsValid } = useFormAndValidation();

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    clearError();
    resetForm({name: currentUser.name, email: currentUser.email }, {}, true);
    //eslint-disable-next-line
  }, [resetForm]);

  function handleEditButtonClick() {
    makeEditButtonActive();
  }

  function signOut() {
    onSignOut();
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    if ((values.name === currentUser.name) && (values.email === currentUser.email)) {
      setIsValid(false);
      showError();
      return;
    }

    changePreloaderStatus();
    onEditButton(values);
  };

  return (
    <>
      <Header
        loggedIn={loggedIn}
        onBurgerButton={onBurgerButton}
      />
      <main className="profile">
        <section className="profile__section">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form name="profile" className="profile__form" onSubmit={handleSubmit} noValidate>
            <fieldset className="profile__input-container">
              <div className="profile__input-field">
                <label htmlFor="name-input" className="profile__input-label">Имя</label>
                <input id="name-input" type="text" className={`profile__input ${errors.name ? profileInputErrorClass : ''}`} name="name" placeholder="Имя" minLength="2" maxLength="30" required pattern="([\-a-zA-Zа-яёА-ЯЁ0-9\s]{2,30})" value={values.name || ''} onChange={handleChange} disabled={isDisabled} />
                <span className={`name-input-error profile__input-error ${isValid ? '' : profileInputMessageErrorClass}`}>{errors.name || ''}</span>
              </div>
              <div className="profile__line"></div>
              <div className="profile__input-field">
                <label htmlFor="email-input" className="profile__input-label">E-mail</label>
                <input id="email-input" type="email" className={`profile__input ${errors.email ? profileInputErrorClass : ''}`} name="email" placeholder="E-mail" required pattern="(([\-_.a-zA-Z0-9]+)@([\-a-zA-Z0-9]+)\.[a-z]{2,})" value={values.email || ''} onChange={handleChange} disabled={isDisabled} />
                <span className={`name-input-error profile__input-error ${isValid ? '' : profileInputMessageErrorClass}`}>{errors.email || ''}</span>
              </div>
              {isDisabled ?
                <button type="submit" className="profile__edit-button button" onClick={handleEditButtonClick}>Редактировать</button> :
                <div className="profile__save-container">
                  <span className={`profile__error-message ${requestError && 'profile__error-message_active'}`}>{requestErrorMessage}</span>
                  <button type="submit" className={`profile__save-button ${isValid ? 'button' : 'profile__save-button_inactive'}`} disabled={!isValid}>{isLoading ? "Сохранение..." : "Сохранить"}</button>
                </div>
              }
            </fieldset>
          </form>
          <button type="button" onClick={signOut} className={`profile__exit-button ${isDisabled && 'profile__exit-button_disabled'} button`}>Выйти из аккаунта</button>
        </section>
      </main>
    </>
  );
};

export default Profile;
