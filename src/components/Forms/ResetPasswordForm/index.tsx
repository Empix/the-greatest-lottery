import React, { useRef, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import api from '../../../services/api';
import { Loading } from '../../Loading/styles';
import BaseForm from './styles';

const ResetPasswordForm: React.FC = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleOnEmailChange() {
    setEmailError(!isEmailValid());
  }

  function isEmailValid() {
    const email = emailInput.current!.value;
    return email.match(/^.+@.+(\.\w{2,3})$/);
  }

  function handleResetPassword(event: React.FormEvent) {
    event.preventDefault();

    if (!isEmailValid()) {
      setEmailError(!isEmailValid());
      alert('Email inválido.');
      return;
    }

    setIsLoading(true);
    api
      .post('/reset', {
        email: emailInput.current?.value,
      })
      .then((response) => {
        alert('Um token para recuperação da senha foi enviado para você.');
        navigate('/authentication');
      })
      .catch((err) => {
        setIsLoading(false);
        if (!err.response || err.response.status >= 500) {
          alert('Um erro desconhecido ocorreu!');
          return;
        }

        alert(err.response.data.message);
      });
  }

  return (
    <BaseForm onSubmit={handleResetPassword}>
      <input
        type="text"
        id="email"
        placeholder="Email"
        ref={emailInput}
        onChange={handleOnEmailChange}
        className={emailError ? 'error' : ''}
        required
      />

      {!isLoading && (
        <button>
          <span>Send link</span>
          <IoArrowForward />
        </button>
      )}

      {isLoading && (
        <div className="loading-box">
          <Loading />
        </div>
      )}
    </BaseForm>
  );
};

export default ResetPasswordForm;
