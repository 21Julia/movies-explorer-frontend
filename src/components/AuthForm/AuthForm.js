import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import TransitionButton from '../TransitionButton/TransitionButton';

function AuthForm({ title, children, inputClassMargin, inputClassActive, inputErrorClass, buttonText, text, endpoint, textLink }) {
  const [error, setError] = React.useState(false);

  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <Link to="/" className="auth-form__main-button button" aria-label="На главную"></Link>
        <form name="register" className="auth-form__form" noValidate>
          <fieldset className="auth-form__input-container">
            <h1 className="auth-form__title">{title}</h1>
            {children}
            <div className="auth-form__input-field">
              <label htmlFor="email-input" className="auth-form__input-label">E-mail</label>
              <input id="email-input" type="email" className={`auth-form__input ${inputClassActive} ${inputErrorClass} auth-form__input_type_email`} name="email" placeholder="Email" required />
              <span className="email-input-error auth-form__input-error"></span>
            </div>
            <div className="auth-form__input-field">
              <label htmlFor="password-input" className="auth-form__input-label">Пароль</label>
              <input id="password-input" type="password" className={`auth-form__input ${inputClassMargin} ${inputClassActive} auth-form__input_type_error auth-form__input_type_password`} name="password" placeholder="Пароль" minLength="8" autoComplete="off" required />
              <span className="password-input-error auth-form__input-error auth-form__input-error_active">Что-то пошло не так...</span>
            </div>
            <div className="auth-form__save-container">
              <span className={`auth-form__error-message ${error && 'auth-form__error-message_active'}`}>При обновлении профиля произошла ошибка.</span>
              <button type="submit" className={`auth-form__save-button ${error ? 'auth-form__save-button_inactive' : 'button'}`} onChange={setError} disabled={error}>{buttonText}</button>
            </div>
          </fieldset>
        </form>
      </div>
      <TransitionButton
        text={text}
        endpoint={endpoint}
        textLink={textLink}
      />
    </div>
  );
};

export default AuthForm;
