import styled from 'styled-components';

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 14px;
`;

type GameButtonProps = {
  actived?: boolean;
  color: string;
};

export const GameButton = styled.button<GameButtonProps>`
  border: 2px solid ${(p) => p.color};
  background-color: ${(p) => (p.actived ? p.color : 'transparent')};
  color: ${(p) => (p.actived ? '#fff' : p.color)};

  font-size: 0.9em;
  font-style: italic;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 100px;
  cursor: pointer;
`;
