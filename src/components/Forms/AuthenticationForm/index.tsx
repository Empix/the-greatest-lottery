import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BaseForm from './styles';

const AuthenticationForm: React.FC = () => {
  return (
    <BaseForm>
      <input type="text" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <Link to="/reset-password">I forgot my password</Link>

      <button>
        <span>Log In</span>
        <IoArrowForward />
      </button>
    </BaseForm>
  );
};

export default AuthenticationForm;
