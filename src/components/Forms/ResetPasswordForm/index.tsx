import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import BaseForm from '../styles';

const ResetPasswordForm: React.FC = () => {
  return (
    <BaseForm>
      <input type="text" id="email" placeholder="Email" />

      <button>
        <span>Send link</span>
        <IoArrowForward />
      </button>
    </BaseForm>
  );
};

export default ResetPasswordForm;
