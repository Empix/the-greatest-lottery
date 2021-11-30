import React from 'react';
import Footer from '../Footer';
import { Container } from './styles';

const Layout: React.FC = (props) => {
  return (
    <Container>
      <div>{props.children}</div>
      <Footer />
    </Container>
  );
};

export default Layout;
