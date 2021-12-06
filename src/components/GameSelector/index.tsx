import React from 'react';
import { Game } from '../../pages/NewBet';
import { GameButton } from '../UI/styles';
import { Container } from './styles';

type GameSelectorProps = {
  games: Game[];
  currentGame: Game | undefined;
  onSelectGame: (id: number) => void;
};

const GameSelector: React.FC<GameSelectorProps> = (props) => {
  return (
    <Container>
      {props.games.map(({ id, type, color }) => {
        const isActived = props.currentGame?.id === id;

        return (
          <GameButton
            key={id}
            actived={isActived}
            color={color}
            onClick={() => props.onSelectGame(id)}
          >
            {type}
          </GameButton>
        );
      })}
    </Container>
  );
};

export default GameSelector;
