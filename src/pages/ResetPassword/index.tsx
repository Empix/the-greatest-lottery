import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';

import { Container, Box } from './styles';
import { Card } from '../../components/UI/styles';

import AppTitle from '../../components/AppTitle';
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm';

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <AppTitle />
      <hr />
      <Box>
        <h1>Reset password</h1>

        <Card>
          <ResetPasswordForm />
        </Card>

        <Link to="/authentication">
          <IoArrowBack />
          <span>Back</span>
        </Link>
      </Box>
    </Container>
  );
};

export default ResetPassword;
