import styled from 'styled-components';

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 14px;
  overflow: hidden;
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

type ButtonProps = {
  outlined?: boolean;
  padding?: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(p) => (p.outlined ? 'transparent' : '#27c383')};
  color: ${(p) => (p.outlined ? '#27c383' : '#fff')};
  border: 1px solid #27c383;
  font-size: 1em;
  font-weight: 600;
  padding: ${(p) => p.padding || '14px 30px'};
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
