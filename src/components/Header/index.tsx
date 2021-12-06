import React, { useEffect, useState } from 'react';
import { IoArrowForward, IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { actions } from '../../redux/authSlice';
import { Container } from './styles';

type HeaderProps = {
  showHomeLink?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(actions.logout());
  }

  function handleOpenMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  let handleWindowResize = () => {
    if (window.innerWidth <= 605) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Container>
      <div>
        <div>
          <h1>TGL</h1>
        </div>
        {isMenuOpen && (
          <div className="menu-box">
            <nav>
              <ul>
                {props.showHomeLink && (
                  <li className="home-link">
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
        )}
        <div className="hamburguer-menu" onClick={handleOpenMenu}>
          {isMenuOpen ? (
            <IoClose size={35} color="#707070" />
          ) : (
            <IoMenu size={35} color="#707070" />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
