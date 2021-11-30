import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>TGL</h1>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <button>
                  <span>Logout</span>
                  <IoArrowForward size={30} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
