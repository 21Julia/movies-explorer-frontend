import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import { inputMargin } from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Login({ onLoginButton, isLoading, changePreloaderStatus, requestError, requestErrorMessage, clearError }) {
  const {values, errors, isValid, handleChange, resetForm } = useFormAndValidation();

  React.useEffect(() => {
    clearError();
    resetForm({}, {}, true);
    //eslint-disable-next-line
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();

    changePreloaderStatus();

    onLoginButton(values);
  };

  return (
    <main>
      <AuthForm
        onSubmitButton={handleSubmit}
        title="Рады видеть!"
        errors={errors}
        onChange={handleChange}
        values={values}
        isValid={isValid}
        inputClassMargin={inputMargin}
        requestError={requestError}
        requestErrorMessage={requestErrorMessage}
        isLoading={isLoading}
        textOfLoading="Вход..."
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        endpoint="/signup"
        textLink="Регистрация"
      />
    </main>
  );
};

export default Login;
