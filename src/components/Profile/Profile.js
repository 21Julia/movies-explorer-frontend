import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ loggedIn }) {
  // Заглушки
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [error, setError] = React.useState(true);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form name="profile" className="profile__form" noValidate>
          <fieldset className="profile__input-container">
            <div className="profile__input-field">
              <label htmlFor="name-input" className="profile__input-label">Имя</label>
              <input id="name-input" type="text" className="profile__input profile__input_type_name" name="name" placeholder="Имя" value="Виталий" onChange={setIsDisabled} disabled={isDisabled} minLength="2" maxLength="30" required />
            </div>
            <div className="profile__line"></div>
            <div className="profile__input-field">
              <label htmlFor="email-input" className="profile__input-label">E-mail</label>
              <input id="email-input" type="email" className={`profile__input profile__input_type_email`} disabled={isDisabled} name="email" placeholder="E-mail" value="pochta@yandex.ru" required />
            </div>
            {isDisabled ?
              <button type="submit" className="profile__edit-button button">Редактировать</button> :
              <div className="profile__save-container">
                <span className={`profile__error-message ${error && 'profile__error-message_active'}`}>При обновлении профиля произошла ошибка.</span>
                <button type="submit" className={`profile__save-button ${error ? 'profile__save-button_inactive' : 'button'}`} onChange={setError} disabled={error}>Сохранить</button>
              </div>
            }
          </fieldset>
        </form>
        <button type="button" className={`profile__exit-button ${isDisabled && 'profile__exit-button_disabled'} button`}>Выйти из аккаунта</button>
      </div>
    </>
  );
};

export default Profile;
