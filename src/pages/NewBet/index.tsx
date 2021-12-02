import React, { useEffect, useRef, useState } from 'react';
import { IoArrowForward, IoCartOutline } from 'react-icons/io5';
import BetItemCart from '../../components/BetItemCart';
import GameSelector from '../../components/GameSelector';
import Header from '../../components/Header';
import { Button, Card } from '../../components/UI/styles';
import { Cart, Container } from './styles';
import NumberSelector from '../../components/NumberSelector';
import api from '../../services/api';
import GenerateRandom from '../../utils/randomUniqueGenerator';
import Price from '../../components/Price';

export type Game = {
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

export type Bet = {
  tempId: string;
  game: Game | undefined;
  numbers: number[];
};

const NewBet: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [currentGame, setCurrentGame] = useState<Game>();
  const [games, setGames] = useState<Game[]>([]);
  const [cartItems, setCartItems] = useState<Bet[]>([]);
  const [minCartValue, setMinCartValue] = useState<number>(0);
  const betListElement = useRef<HTMLUListElement>(null);

  useEffect(() => {
    api.get('/cart_games').then(({ data }) => {
      setGames(data.types);
      setCurrentGame(data.types[0] || {});
      setMinCartValue(data.min_cart_value);
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
      ...numbers.sort((a, b) => a - b),
    ]);
  }

  function clearBet() {
    setSelectedNumbers([]);
  }

  function handleClearGame() {
    clearBet();
  }

  useEffect(() => {
    const scrollHeight = betListElement.current?.scrollHeight;
    if (!scrollHeight) return;
    betListElement.current?.scrollBy(0, scrollHeight);
  }, [cartItems]);

  function handleAddToCart() {
    setCartItems((prevCartItems) => {
      return [
        ...prevCartItems,
        {
          tempId: Math.random().toString().split('.')[1],
          game: currentGame,
          numbers: selectedNumbers,
        },
      ];
    });

    clearBet();
  }

  function handleSaveBets() {
    if (totalCart < minCartValue) {
      alert(
        `Você precisa atingir o valor mínimo (${Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(minCartValue)}) no seu carrinho.`
      );
    }
  }

  const canAddBetToCart = selectedNumbers.length === currentGame?.max_number;
  const totalCart = cartItems.reduce((acc, value) => {
    return acc + (value.game?.price || 0);
  }, 0);

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
            <Button
              padding="8px 30px"
              onClick={handleAddToCart}
              disabled={!canAddBetToCart}
            >
              <IoCartOutline size={30} />
              <span>Add to cart</span>
            </Button>
          </div>
        </div>

        <Cart>
          <Card>
            <h1>cart</h1>

            <ul ref={betListElement}>
              {cartItems &&
                cartItems.map((item) => {
                  return <BetItemCart key={item.tempId} bet={item} />;
                })}
            </ul>

            <div className="cart-total">
              <span>cart</span> TOTAL: <Price value={totalCart} />
            </div>

            <div>
              <button onClick={handleSaveBets}>
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
