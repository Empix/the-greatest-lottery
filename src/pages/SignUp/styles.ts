import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  hr {
    display: none;
    border: none;
    border-top: 2px solid rgba(112, 112, 112, 0.5);
    width: 80%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 890px) {
    gap: 25px;
    grid-template-columns: 1fr;
    padding: 40px 0;

    hr {
      max-width: 800px;
      display: block;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  h1 {
    color: #707070;
    font-style: italic;
    font-weight: 600;
  }

  & > div {
    min-width: 352px;
    box-shadow: 0px 3px 25px #00000014;

    @media only screen and (max-width: 375px) {
      min-width: 300px;
    }

    @media only screen and (max-width: 320px) {
      min-width: 260px;
    }

    @media only screen and (max-width: 296px) {
      min-width: 230px;
    }
  }

  & > a {
    color: #707070;
    font-size: 2em;
    font-style: italic;
    font-weight: bold;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  @media only screen and (max-width: 285px) {
    font-size: 12px;
  }
`;
