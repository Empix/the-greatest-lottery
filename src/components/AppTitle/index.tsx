import React from 'react';
import { Container } from './styles';

const AppTitle: React.FC = () => {
  return (
    <Container>
      <h1>
        <span>The</span>
        <span>Greatest</span>
        <span>App</span>
      </h1>
      <span>for</span>
      <h2>Lottery</h2>
    </Container>
  );
};

export default AppTitle;
