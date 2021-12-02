import React from 'react';
import { Game } from '../../pages/NewBet';
import { GameButton } from '../UI/styles';
import { Container } from './styles';

type GameSelectorProps = {
  games: Game[];
  currentGame: Game | undefined;
  onSelectGame: (type: string) => void;
};

const GameSelector: React.FC<GameSelectorProps> = (props) => {
  return (
    <Container>
      {props.games.map(({ type, color }) => {
        const isActived = props.currentGame?.type === type;

        return (
          <GameButton
            key={type}
            actived={isActived}
            color={color}
            onClick={() => props.onSelectGame(type)}
          >
            {type}
          </GameButton>
        );
      })}
    </Container>
  );
};

export default GameSelector;
