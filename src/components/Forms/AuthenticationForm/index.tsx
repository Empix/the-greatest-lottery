import React, { useRef, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { actions } from '../../../redux/authSlice';
import api from '../../../services/api';
import { Loading } from '../../Loading/styles';
import BaseForm from './styles';
import { useNavigate } from 'react-router';

const AuthenticationForm: React.FC = () => {
  const passwordInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>(false);
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

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    if (!isEmailValid()) {
      setEmailError(!isEmailValid());
      alert('Email inválido.');
      return;
    }

    const email = emailInput.current!.value;
    const password = passwordInput.current!.value;

    setIsLoading(true);

    await api('/login', {
      method: 'POST',
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data;

          dispatch(
            actions.login({
              token: token.token,
              expiresIn: token.expires_at,
            })
          );

          setIsLoading(false);
          navigate('/');
        }
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
    <BaseForm onSubmit={handleLogin}>
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
        ref={passwordInput}
        required
      />
      <Link to="/reset-password">I forgot my password</Link>

      {!isLoading && (
        <button>
          <span>Log In</span>
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

export default AuthenticationForm;
