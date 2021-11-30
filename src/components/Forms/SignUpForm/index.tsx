import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import BaseForm from '../styles';

const SignUpForm: React.FC = () => {
  return (
    <BaseForm>
      <input type="text" id="name" placeholder="Name" />
      <input type="text" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />

      <button>
        <span>Register</span>
        <IoArrowForward />
      </button>
    </BaseForm>
  );
};

export default SignUpForm;
