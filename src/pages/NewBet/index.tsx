import React, { useEffect, useState } from 'react';
import { IoArrowForward, IoCartOutline } from 'react-icons/io5';
import BetItemCart from '../../components/BetItemCart';
import GameSelector from '../../components/GameSelector';
import Header from '../../components/Header';
import { Button, Card } from '../../components/UI/styles';
import { Cart, Container } from './styles';
import NumberSelector from '../../components/NumberSelector';
import api from '../../services/api';
import GenerateRandom from '../../utils/randomUniqueGenerator';

export type Game = {
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

  useEffect(() => {
    api.get('/cart_games').then(({ data }) => {
      setGames(data.types);
      setCurrentGame(data.types[0] || {});
    });
  }, []);

  function handleNumberClick(num: number) {
    setSelectedNumbers((prevSelectedNumbers) => {
      let numbers = [...prevSelectedNumbers];

      if (numbers.includes(num)) {
        numbers.splice(numbers.indexOf(num), 1);
      } else {
        numbers.push(num);
      }

      return numbers;
    });
  }

  function handleSelectGame(type: string) {
    setCurrentGame(games.find((game) => game.type === type));
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
      ...numbers,
    ]);
  }

  function handleClearGame() {
    setSelectedNumbers([]);
  }

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
          </div>

          <div className="game-info">
            <h2>Fill your bet</h2>
            <p>{currentGame?.description || '...'}</p>
          </div>

          <NumberSelector
            selectedNumbers={selectedNumbers}
            onSelectNumber={handleNumberClick}
            game={currentGame}
          />

          <div className="actions">
            <Button outlined onClick={handleCompleteGame}>
              Complete game
            </Button>
            <Button outlined onClick={handleClearGame}>
              Clear game
            </Button>
            <Button padding="8px 30px">
              <IoCartOutline size={30} />
              <span>Add to cart</span>
            </Button>
          </div>
        </div>

        <Cart>
          <Card>
            <h1>cart</h1>

            <ul>
              <BetItemCart
                bet={{
                  name: 'Lotofácil',
                  color: '#7F3992',
                  price: 2.5,
                  numbers:
                    '01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25',
                }}
              />
              <BetItemCart
                bet={{
                  name: 'Mega-Sena',
                  color: '#01AC66',
                  price: 4.5,
                  numbers: '01, 02, 04, 05, 06',
                }}
              />
            </ul>

            <div className="cart-total">
              <span>cart</span> TOTAL: <span>R$ 7,00</span>
            </div>

            <div>
              <button>
                <span>Save</span>
                <IoArrowForward />
              </button>
            </div>
          </Card>
        </Cart>
      </section>
    </Container>
  );
};

export default NewBet;
