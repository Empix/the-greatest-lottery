import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';

import { Container, Box } from './styles';
import { Card } from '../../components/UI/styles';

import AppTitle from '../../components/AppTitle';
import SignUpForm from '../../components/Forms/SignUpForm';

const SignUp: React.FC = () => {
  return (
    <Container>
      <AppTitle />
      <hr />
      <Box>
        <h1>Registration</h1>

        <Card>
          <SignUpForm />
        </Card>

        <Link to="/authentication">
          <IoArrowBack />
          <span>Back</span>
        </Link>
      </Box>
    </Container>
  );
};

export default SignUp;
