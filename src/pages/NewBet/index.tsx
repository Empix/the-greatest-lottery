import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';

import GameSelector from '../../components/GameSelector';
import Header from '../../components/Header';
import NumberSelector from '../../components/NumberSelector';
import NewBetActions from '../../components/NewBetActions';
import { Loading } from '../../components/Loading/styles';
import Cart from '../../components/Cart';

import { Container } from './styles';

import GenerateRandom from '../../utils/randomUniqueGenerator';
import api from '../../services/api';
import { actions } from '../../redux/cartSlice';

export type Game = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

const NewBet: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [currentGame, setCurrentGame] = useState<Game>();
  const [games, setGames] = useState<Game[]>([]);
  const [minCartValue, setMinCartValue] = useState<number>(0);
  const [isGamesLoading, setIsGamesLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsGamesLoading(true);

    api
      .get('/cart_games')
      .then(({ data }) => {
        setGames(data.types);
        setCurrentGame(data.types[0] || {});
        setMinCartValue(data.min_cart_value);
      })
      .then(() => setIsGamesLoading(false))
      .catch((err) => {
        setIsGamesLoading(false);
        if (!err.response || err.response.status >= 500) {
          alert('Um erro desconhecido ocorreu ao tentar buscar os jogos!');
          return;
        }

        alert(err.response.data.message);
      });
  }, []);

  function handleNumberClick(num: number) {
    setSelectedNumbers((prevSelectedNumbers) => {
      let numbers = [...prevSelectedNumbers];

      if (numbers.includes(num)) {
        numbers.splice(numbers.indexOf(num), 1);
      } else {
        if (selectedNumbers.length < (currentGame?.max_number || 0)) {
          numbers.push(num);
        } else {
          alert(
            `Você não pode selecionar mais que ${currentGame?.max_number} números nesse jogo.`
          );
        }
      }

      return numbers.sort((a, b) => a - b);
    });
  }

  function handleSelectGame(id: number) {
    setCurrentGame(games.find((game) => game.id === id));
    setSelectedNumbers([]);
  }

  function handleCompleteGame() {
    if (!currentGame) return;

    const numbersLeft = currentGame.max_number - selectedNumbers.length;
    let numbers: number[] = [];
    const numberGenerator = new GenerateRandom(
      currentGame.range,
      selectedNumbers
    );

    for (let i = 0; i < numbersLeft; i++) {
      numbers.push(numberGenerator.next());
    }

    setSelectedNumbers((prevSelectedNumbers) => [
      ...prevSelectedNumbers,
      ...numbers.sort((a, b) => a - b),
    ]);
  }

  function clearBet() {
    setSelectedNumbers([]);
  }

  function handleClearGame() {
    clearBet();
  }

  function handleAddToCart() {
    dispatch(
      actions.addItem({
        tempId: Math.random().toString().split('.')[1],
        game: currentGame,
        numbers: selectedNumbers,
      })
    );

    clearBet();
  }

  const canAddBetToCart = selectedNumbers.length === currentGame?.max_number;

  return (
    <Container>
      <Header showHomeLink />
      <section>
        <div className="new-bet">
          <h1>
            New bet <span>for {currentGame?.type || '...'}</span>
          </h1>

          <div className="game-selector">
            <h2>Choose a game</h2>
            <GameSelector
              games={games}
              onSelectGame={handleSelectGame}
              currentGame={currentGame}
            />
            {isGamesLoading && <Loading color="#27c383" bgColor="#fff" />}
          </div>

          <div className="game-info">
            <h2>Fill your bet</h2>
            <p>{currentGame?.description || ''}</p>
            {isGamesLoading && <Loading color="#27c383" bgColor="#fff" />}
          </div>

          {isGamesLoading && <Loading color="#27c383" bgColor="#fff" />}
          <NumberSelector
            selectedNumbers={selectedNumbers}
            onSelectNumber={handleNumberClick}
            game={currentGame}
          />

          <NewBetActions
            handleCompleteGame={handleCompleteGame}
            handleClearGame={handleClearGame}
            handleAddToCart={handleAddToCart}
            canAddBetToCart={canAddBetToCart}
          />
        </div>

        <Cart minCartValue={minCartValue} />
      </section>
    </Container>
  );
};

export default NewBet;
