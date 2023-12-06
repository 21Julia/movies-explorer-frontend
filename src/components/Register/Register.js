import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import { inputActive, inputErrorClass, inputMessageErrorClass } from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Register({ onRegisterButton, isLoading, changePreloaderStatus, requestError, requestErrorMessage, clearError }) {
  const {values, errors, isValid, handleChange, resetForm } = useFormAndValidation();

  React.useEffect(() => {
    clearError();
    resetForm({}, {}, false);
    //eslint-disable-next-line
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();

    changePreloaderStatus();
    onRegisterButton(values);
  };

  return (
    <main>
      <AuthForm
        onSubmitButton={handleSubmit}
        title="Добро пожаловать!"
        errors={errors}
        onChange={handleChange}
        values={values}
        isValid={isValid}
        requestError={requestError}
        requestErrorMessage={requestErrorMessage}
        isLoading={isLoading}
        textOfLoading="Сохранение..."
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        endpoint="/signin"
        textLink="Войти">
          <div className="auth-form__input-field">
            <label htmlFor="name-input" className="auth-form__input-label">Имя</label>
            <input id="name-input" type="text" className={`auth-form__input ${inputActive} ${errors.name ? inputErrorClass : ''}`} name="name" placeholder="Имя" minLength="2" maxLength="30" required pattern="([\-a-zA-Zа-яёА-ЯЁ0-9\s]{2,30})" onChange={handleChange} value={values.name || ''}   />
            <span className={`name-input-error auth-form__input-error ${isValid ? '' : inputMessageErrorClass}`}>{errors.name || ''}</span>
          </div>
      </AuthForm>
    </main>
  );
};

export default Register;
