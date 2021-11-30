import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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

  div {
    min-width: 352px;
    box-shadow: 0px 3px 25px #00000014;
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
`;
