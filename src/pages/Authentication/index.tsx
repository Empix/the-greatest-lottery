import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowForward } from 'react-icons/io5';

import { Container, Box } from './styles';
import { Card } from '../../components/UI/styles';

import AppTitle from '../../components/AppTitle';
import AuthenticationForm from '../../components/Forms/AuthenticationForm';

const Authentication: React.FC = () => {
  return (
    <Container>
      <AppTitle />
      <Box>
        <h1>Authentication</h1>

        <Card>
          <AuthenticationForm />
        </Card>

        <Link to="/register">
          <span>Sign Up</span>
          <IoArrowForward />
        </Link>
      </Box>
    </Container>
  );
};

export default Authentication;
