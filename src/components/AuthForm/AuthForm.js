import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import { inputActive, inputErrorClass, inputMessageErrorClass } from '../../utils/constants';
import TransitionButton from '../TransitionButton/TransitionButton';

function AuthForm({ onSubmitButton, title, children, errors, onChange, values, isValid, inputClassMargin, requestError, requestErrorMessage, isLoading, textOfLoading, buttonText, text, endpoint, textLink }) {
  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <Link to="/" className="auth-form__main-button button" aria-label="На главную"></Link>
        <form name="register" className="auth-form__form" onSubmit={onSubmitButton} noValidate>
          <fieldset className="auth-form__input-container">
            <h1 className="auth-form__title">{title}</h1>
            {children}
            <div className="auth-form__input-field">
              <label htmlFor="email-input" className="auth-form__input-label">E-mail</label>
              <input id="email-input" type="email" className={`auth-form__input ${inputActive} ${errors.email ? inputErrorClass : ''}`} name="email" placeholder="Email" onChange={onChange} required pattern="(([\-_.a-zA-Z0-9]+)@([\-a-zA-Z0-9]+)\.[a-z]{2,})" value={values.email || ''} />
              <span className={`email-input-error auth-form__input-error ${isValid ? '' : inputMessageErrorClass}`}>{errors.email || ''}</span>
            </div>
            <div className="auth-form__input-field">
              <label htmlFor="password-input" className="auth-form__input-label">Пароль</label>
              <input id="password-input" type="password" className={`auth-form__input ${inputClassMargin} ${inputActive} ${errors.password ? inputErrorClass : ''}`} name="password" placeholder="Пароль" minLength="8" maxLength="40" autoComplete="off" onChange={onChange} value={values.password || ''} required />
              <span className={`password-input-error auth-form__input-error ${isValid ? '' : inputMessageErrorClass}`}>{errors.password || ''}</span>
            </div>
            <div className="auth-form__save-container">
              <span className={`auth-form__error-message ${requestError && 'auth-form__error-message_active'}`}>{requestErrorMessage}</span>
              <button type="submit" className={`auth-form__save-button ${isValid ? 'button' : 'auth-form__save-button_inactive'}`} disabled={!isValid}>{isLoading ? textOfLoading : buttonText}</button>
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
