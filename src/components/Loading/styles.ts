import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid #f7f7f7;
  border-top: 8px solid #b5c401;
  border-radius: 50%;
  animation: 0.8s ease-in-out infinite ${spin};
`;
