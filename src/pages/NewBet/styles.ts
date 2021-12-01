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
  }
`;

export const Cart = styled.div`
  & > div {
    min-width: 316px;

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    & > h1 {
      color: #707070;
      font-size: 1.6em;
      font-style: italic;
      text-transform: uppercase;
      padding: 32px 19px;
    }

    .cart-total {
      color: #707070;
      text-transform: uppercase;
      font-size: 1.6em;
      font-weight: 400;
      padding: 40px 19px;

      span:first-child {
        font-weight: 600;
        font-style: italic;
      }
    }

    & > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 28px 0px;
      background-color: #f4f4f4;
      border-top: 1px solid #e2e2e2;

      button {
        cursor: pointer;
        color: #27c383;
        border: none;
        background-color: transparent;
        font-size: 2.2em;
        font-weight: 600;
        font-style: italic;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
      }
    }
  }
`;
