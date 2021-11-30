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

  form {
    display: flex;
    flex-direction: column;
  }

  form input {
    padding: 28px 24px;
    font-size: 1em;
    font-weight: bold;
    font-style: italic;
    background-color: transparent;
    border: 2px solid transparent;
    border-bottom: 2px solid #ebebeb;
    color: #707070;

    &::placeholder {
      color: #9d9d9d;
    }
  }

  form a {
    color: #c1c1c1;
    font-size: 1em;
    font-style: italic;
    font-weight: 300;
    text-decoration: none;
    margin: 26px;
    align-self: flex-end;
  }

  form button {
    color: #b5c401;
    font-size: 2em;
    border: none;
    background-color: transparent;
    padding: 20px;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 10px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16 px;
  }
`;
