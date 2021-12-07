import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    max-width: 1100px;
    padding: 70px 40px;
    display: flex;
    gap: 35px;

    @media only screen and (max-width: 805px) {
      flex-direction: column;
    }
  }

  .new-bet {
    h1 {
      color: #707070;
      font-style: italic;
      text-transform: uppercase;
      margin-bottom: 33px;

      span {
        font-weight: 400;
      }
    }
  }

  .game-selector {
    h2 {
      color: #707070;
      font-style: italic;
      font-size: 1rem;
      margin-bottom: 20px;
    }

    margin-bottom: 28px;

    & > div {
      flex-wrap: wrap;
    }
  }

  .game-info {
    color: #707070;
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 28px;

    h2 {
      font-size: 1rem;
    }

    p {
      font-weight: 500;
    }
  }

  .actions {
    display: flex;
    gap: 25px;

    button:last-child {
      margin-left: auto;
    }

    @media only screen and (max-width: 1025px) {
      flex-direction: column;
      gap: 18px;

      button:last-child {
        margin-left: 0;
      }
    }
  }
`;
