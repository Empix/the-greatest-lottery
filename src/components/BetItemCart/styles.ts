import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & > div:first-child {
    color: #888888;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }

  & > div:last-child {
    color: #868686;
    display: flex;
    flex-direction: column;
    padding: 8px 14px 8px 0;
    font-size: 1rem;
    font-style: italic;
    gap: 6px;

    .numbers {
      font-weight: 600;
    }

    .price {
      font-weight: 600;

      span:last-child {
        color: #868686;
        font-weight: 400;
      }
    }
  }
`;

type ColorBarProps = {
  color: string;
};

export const ColorBar = styled.div<ColorBarProps>`
  min-width: 4px;
  border-radius: 100px 0 0 100px;
  background-color: ${(p) => p.color};
  margin-right: 14px;
`;
