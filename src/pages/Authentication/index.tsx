import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowForward } from 'react-icons/io5';

import { Container, Box } from './styles';
import { Card } from '../../components/UI/styles';

import AppTitle from '../../components/AppTitle';

const Authentication: React.FC = () => {
  return (
    <Container>
      <AppTitle />
      <Box>
        <h1>Authentication</h1>

        <Card>
          <form>
            <input type="text" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <Link to="/reset-password">I forgot my password</Link>
            <button>
              <span>Log In</span>
              <IoArrowForward />
            </button>
          </form>
        </Card>

        <Link to="#">
          <span>Sign Up</span>
          <IoArrowForward />
        </Link>
      </Box>
    </Container>
  );
};

export default Authentication;
