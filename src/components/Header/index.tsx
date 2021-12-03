import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { actions } from '../../redux/authSlice';
import { Container } from './styles';

type HeaderProps = {
  showHomeLink?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(actions.logout());
  }

  return (
    <Container>
      <div>
        <div>
          <h1>TGL</h1>
        </div>
        <div className="menu-box">
          <nav>
            <ul>
              {props.showHomeLink && (
                <li style={{ marginRight: 'auto' }}>
                  <Link to="/">Home</Link>
                </li>
              )}
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <button onClick={handleLogout}>
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
