import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

import BetList from '../../components/BetList';
import GameSelector from '../../components/GameSelector';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading/styles';

import { Container, Filter } from './styles';

import { Game } from '../NewBet';

import { IoArrowForward } from 'react-icons/io5';
import api from '../../services/api';

export type Bet = {
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
  const [isGamesLoading, setIsGamesLoading] = useState<boolean>(false);
  const [isBetsLoading, setIsBetsLoading] = useState<boolean>(false);
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    setIsGamesLoading(true);
    api
      .get('/cart_games')
      .then((response) => {
        setIsGamesLoading(false);
        setGames(response.data.types);
      })
      .catch((err) => {
        setIsGamesLoading(false);
        if (!err.response || err.response.status >= 500) {
          alert('Um erro desconhecido ocorreu ao tentar buscar os jogos!');
          return;
        }

        alert(err.response.data.message);
      });
  }, []);

  useEffect(() => {
    const filter = {
      params: {
        'type[]': selectedGame?.type,
      },
    };

    setIsBetsLoading(true);
    api
      .get('/bet/all-bets', {
        ...(selectedGame && filter),
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        setIsBetsLoading(false);
        setBets(response.data);
      })
      .catch((err) => {
        setIsBetsLoading(false);
        if (!err.response || err.response.status >= 500) {
          alert('Um erro desconhecido ocorreu ao tentar buscar as apostas!');
          return;
        }

        alert(err.response.data.message);
      });
  }, [auth.token, selectedGame]);

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
            {!isGamesLoading && (
              <GameSelector
                games={games}
                currentGame={selectedGame}
                onSelectGame={handleSelectGame}
              />
            )}

            {isGamesLoading && <Loading />}
          </Filter>
          <Link to="/new-bet">
            <span>New Bet</span>
            <IoArrowForward size={35} />
          </Link>
        </header>
        <BetList isBetsLoading={isBetsLoading} bets={bets} games={games} />
      </section>
    </Container>
  );
};

export default Home;
