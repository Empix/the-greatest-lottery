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

    header {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 45px;
      margin-bottom: 40px;

      h1 {
        color: #707070;
        text-transform: uppercase;
        font-style: italic;
      }

      & > a {
        font-size: 1.5rem;
        color: #b5c401;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        gap: 10px;

        span {
          font-weight: 600;
          font-style: italic;
        }
      }

      @media only screen and (max-width: 918px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;

        & > a {
          margin-left: 0;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .empty-bets {
        color: #707070;
      }
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span {
    color: #868686;
    font-weight: 400;
    font-style: italic;
  }

  & > div {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 918px) {
    flex-direction: column;
    align-items: flex-start;

    & > div {
      flex-wrap: wrap;
    }
  }
`;
