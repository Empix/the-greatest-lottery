import React, { useRef, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BaseForm from './styles';

const AuthenticationForm: React.FC = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>(false);

  function handleOnEmailChange() {
    setEmailError(!isEmailValid());
  }

  function isEmailValid() {
    const email = emailInput.current!.value;
    return email.match(/^.+@.+(\.\w{2,3})$/);
  }

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    if (!isEmailValid()) {
      setEmailError(!isEmailValid());
      alert('Email inválido.');
    }
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
      <input type="password" id="password" placeholder="Password" required />
      <Link to="/reset-password">I forgot my password</Link>

      <button>
        <span>Log In</span>
        <IoArrowForward />
      </button>
    </BaseForm>
  );
};

export default AuthenticationForm;
