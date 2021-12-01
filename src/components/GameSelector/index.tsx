import React, { SyntheticEvent, useEffect, useState } from 'react';
import { GameButton } from '../UI/styles';
import { Container } from './styles';

const dummy_games = [
  {
    id: '0',
    name: 'Lotofácil',
    color: '#7F3992',
  },
  {
    id: '1',
    name: 'Mega-Sena',
    color: '#01ac66',
  },
  {
    id: '2',
    name: 'Lotomania',
    color: '#F79C31',
  },
];

type Game = {
  id: string;
  name: string;
  color: string;
  actived: boolean;
};

const GameSelector: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(
      dummy_games.map((game, index) => {
        const actived = index === 0;

        return {
          actived,
          ...game,
        };
      })
    );
  }, []);

  function handleButtonClick(
    event: SyntheticEvent<HTMLButtonElement>,
    buttonName: string
  ) {
    const currentGame = games.find((game) => game.actived);
    const clickedGame = games.find((game) => game.name === buttonName);

    setGames((prevGames) => {
      return prevGames.map((game) => {
        if (game === currentGame) {
          game.actived = false;
        }

        if (game === clickedGame) {
          game.actived = true;
        }

        return game;
      });
    });
  }

  return (
    <Container>
      {games.map(({ id, name, color, actived }) => {
        return (
          <GameButton
            key={id}
            actived={actived}
            color={color}
            onClick={(e) => handleButtonClick(e, name)}
          >
            {name}
          </GameButton>
        );
      })}
    </Container>
  );
};

export default GameSelector;
