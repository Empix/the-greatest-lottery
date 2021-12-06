import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type LoadingProps = {
  color?: string;
  bgColor?: string;
};

export const Loading = styled.div<LoadingProps>`
  width: 50px;
  height: 50px;
  border: 8px solid ${(p) => p.bgColor || '#f7f7f7'};
  border-top: 8px solid ${(p) => p.color || '#b5c401'};
  border-radius: 50%;
  animation: 0.8s ease-in-out infinite ${spin};
`;
