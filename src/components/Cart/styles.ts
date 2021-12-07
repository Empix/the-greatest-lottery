import styled from 'styled-components';

export const Container = styled.div`
  .empty-cart {
    text-align: center;
    color: #707070;
  }

  & > div {
    position: sticky;
    top: 70px;
    min-width: 316px;

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 32px;
      height: 100%;
      max-height: 250px;
      overflow-y: auto;
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

    @media only screen and (max-width: 410px) {
      min-width: 100px;
    }
  }
`;
