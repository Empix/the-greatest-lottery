import styled from 'styled-components';
import BaseForm from '../styles';

export default styled(BaseForm)`
  display: flex;
  align-items: center;

  button,
  input {
    width: 100%;
  }

  .loading-box {
    margin-top: 20px;
  }
`;
