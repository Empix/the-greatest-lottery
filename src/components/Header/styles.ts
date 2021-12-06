import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  justify-content: center;
  position: relative;

  & > div {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    gap: 70px;

    @media only screen and (max-width: 605px) {
      gap: 20px;
    }
  }

  .menu-box {
    width: 100%;
  }

  h1 {
    color: #707070;
    font-size: 2.8em;
    font-style: italic;
    position: relative;

    &::after {
      content: '';
      width: 107%;
      height: 7px;
      background-color: #b5c401;
      border-radius: 6px;
      position: absolute;
      z-index: 10;
      bottom: -14px;
      left: -3px;
    }
  }

  nav ul {
    display: flex;
    gap: 58px;
    justify-content: flex-end;

    .home-link {
      margin-right: auto;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      a,
      button span {
        font-size: 1.2rem;
        font-style: italic;
        font-weight: 600;
        text-decoration: none;
        color: #707070;
      }

      button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        svg {
          color: #707070;
        }
      }
    }

    @media only screen and (max-width: 605px) {
      position: absolute;
      top: 75px;
      left: 0;
      flex-direction: column;
      z-index: 9;
      background-color: white;
      width: 100%;
      gap: 16px;
      padding: 25px 0;
      border-bottom: 2px solid #ebebeb;

      .home-link {
        margin-right: 0;
      }
    }
  }

  .hamburguer-menu {
    display: none;
    cursor: pointer;

    @media only screen and (max-width: 605px) {
      display: block;
    }
  }
`;
