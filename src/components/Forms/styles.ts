import styled from 'styled-components';

const BaseForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
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

    &.error {
      border-bottom: 2px solid #d84e4e;
    }
  }

  button {
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

  .loading-box {
    margin-bottom: 26px;
  }
`;

export default BaseForm;
