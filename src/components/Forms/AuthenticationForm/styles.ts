import styled from 'styled-components';
import BaseForm from '../styles';

export default styled(BaseForm)`
  display: flex;
  align-items: center;

  button,
  input {
    width: 100%;
  }

  a {
    color: #c1c1c1;
    font-size: 1em;
    font-style: italic;
    font-weight: 300;
    text-decoration: none;
    margin: 26px;
    align-self: flex-end;
  }

  .loadding-box {
    margin-bottom: 26px;
  }
`;
