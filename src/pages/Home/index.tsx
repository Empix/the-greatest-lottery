import React, { useCallback, useEffect, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BetItem from '../../components/BetItem';
import GameSelector from '../../components/GameSelector';
import Header from '../../components/Header';
import { useAppSelector } from '../../hooks/redux';
import api from '../../services/api';
import { Game } from '../NewBet';
import { Container, Filter } from './styles';

type Bet = {
  id: number;
  choosen_numbers: string;
  price: number;
  created_at: string;
  type: {
    id: number;
    type: string;
  };
};

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [bets, setBets] = useState<Bet[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | undefined>(undefined);
  const auth = useAppSelector((state) => state.auth);

  const getBets = useCallback(() => {
    const filter = {
      params: {
        'type[]': selectedGame?.type,
      },
    };

    api
      .get('/bet/all-bets', {
        ...(selectedGame && filter),
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        setBets(response.data);
      });
  }, [auth.token, selectedGame]);

  useEffect(() => {
    getBets();

    api.get('/cart_games').then((response) => {
      setGames(response.data.types);
    });
  }, [getBets]);

  useEffect(() => {
    getBets();
  }, [getBets]);

  function handleSelectGame(id: number) {
    let game = games.find((game) => game.id === id);
    if (selectedGame?.id === game?.id) {
      game = undefined;
    }

    setSelectedGame(game);
  }

  return (
    <Container>
      <Header />
      <section>
        <header>
          <h1>Recent games</h1>
          <Filter>
            <span>Filters</span>
            <GameSelector
              games={games}
              currentGame={selectedGame}
              onSelectGame={handleSelectGame}
            />
          </Filter>
          <Link to="/new-bet">
            <span>New Bet</span>
            <IoArrowForward size={35} />
          </Link>
        </header>
        <ul>
          {bets &&
            bets.map((bet) => {
              return (
                <BetItem
                  key={bet.id}
                  bet={{
                    name: bet.type.type,
                    color:
                      games.find((game) => game.id === bet.type.id)?.color ||
                      '#707070',
                    price: bet.price,
                    date: new Date(bet.created_at),
                    numbers: bet.choosen_numbers.replaceAll(',', ', '),
                  }}
                />
              );
            })}
        </ul>
      </section>
    </Container>
  );
};

export default Home;
