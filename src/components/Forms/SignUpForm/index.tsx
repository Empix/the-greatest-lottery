import React, { useRef, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../hooks/redux';
import { actions } from '../../../redux/authSlice';
import api from '../../../services/api';
import { Loading } from '../../Loading/styles';
import BaseForm from './styles';

const SignUpForm: React.FC = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleOnEmailChange() {
    setEmailError(!isEmailValid());
  }

  function isEmailValid() {
    const email = emailInput.current!.value;
    return email.match(/^.+@.+(\.\w{2,3})$/);
  }

  function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    if (!isEmailValid()) {
      setEmailError(!isEmailValid());
      alert('Email inválido.');
      return;
    }

    setIsLoading(true);

    const user = {
      email: emailInput.current!.value,
      password: passwordInput.current!.value,
      name: nameInput.current!.value,
    };

    api
      .post('/user/create', user)
      .then((response) => {
        dispatch(
          actions.login({
            token: response.data.token.token,
            expiresIn: response.data.token.expires_at,
          })
        );

        navigate('/');
      })
      .catch((err) => {
        setIsLoading(false);
        if (!err.response || err.response.status >= 500) {
          alert('Um erro desconhecido ocorreu!');
          return;
        }

        alert(err.response.data.error.message);
      });
  }

  return (
    <BaseForm onSubmit={handleRegister}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        required
        ref={nameInput}
      />
      <input
        type="text"
        id="email"
        placeholder="Email"
        ref={emailInput}
        onChange={handleOnEmailChange}
        className={emailError ? 'error' : ''}
        required
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        required
        ref={passwordInput}
      />

      {!isLoading && (
        <button>
          <span>Register</span>
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

export default SignUpForm;
