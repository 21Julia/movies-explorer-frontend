import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import { inputActive } from '../../utils/constants';

function Register({ inputErrorClass }) {
  return (
    <AuthForm
      title="Добро пожаловать!"
      inputClassActive={inputActive}
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      endpoint="/signin"
      textLink="Войти">
        <div className="auth-form__input-field">
          <label htmlFor="name-input" className="auth-form__input-label">Имя</label>
          <input id="name-input" type="text" className={`auth-form__input auth-form__input_color_b ${inputErrorClass} auth-form__input_type_name`} name="name" placeholder="Имя" minLength="2" maxLength="30" required />
          <span className="name-input-error auth-form__input-error"></span>
        </div>
    </AuthForm>
  );
};

export default Register;
