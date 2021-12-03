import React, { useRef, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import BaseForm from '../styles';

const ResetPasswordForm: React.FC = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>();

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
    }
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

      <button>
        <span>Send link</span>
        <IoArrowForward />
      </button>
    </BaseForm>
  );
};

export default ResetPasswordForm;
