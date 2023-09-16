import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import { inputMargin } from '../../utils/constants';

function Login() {
  return (
    <main>
      <AuthForm
        title="Рады видеть!"
        inputClassMargin={inputMargin}
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        endpoint="/signup"
        textLink="Регистрация"
      />
    </main>
  );
};

export default Login;
