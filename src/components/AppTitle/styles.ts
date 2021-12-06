import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  color: #707070;
  font-style: italic;
  font-weight: bold;

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 5em;
    text-transform: uppercase;
  }

  span {
    display: block;
  }

  & > span {
    font-size: 1.5em;
    margin: 20px;
    padding: 6px 60px;
    background-color: #b5c401;
    display: inline-block;
    color: #ffffff;
    border-radius: 100px;
    font-weight: 600;
  }

  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 280px) {
    font-size: 8px;
  }
`;
