import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #F7F7F7;
    font-family: 'Work Sans', sans-serif;
  }

  ul {
    list-style: none;
  }
`;
