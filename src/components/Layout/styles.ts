import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
`;
