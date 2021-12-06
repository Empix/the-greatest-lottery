import styled from 'styled-components';

type ItemProps = {
  color: string;
};

export const Item = styled.li<ItemProps>`
  width: 100%;
  display: flex;
  gap: 15px;
  color: #868686;

  .bet-numbers {
    font-size: 1.3rem;
    font-weight: 600;
    font-style: italic;
  }

  .bet-name {
    font-size: 1.3rem;
    font-weight: 600;
    font-style: italic;
    color: ${(p) => p.color};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

type ColorBarProps = {
  color: string;
};

export const ColorBar = styled.div<ColorBarProps>`
  min-width: 6px;
  background-color: ${(p) => p.color};
  border-radius: 50px;
`;
