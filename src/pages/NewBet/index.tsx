import React from 'react';
import { IoArrowForward, IoCartOutline } from 'react-icons/io5';
import BetItemCart from '../../components/BetItemCart';
import GameSelector from '../../components/GameSelector';
import Header from '../../components/Header';
import { Button, Card } from '../../components/UI/styles';
import { BetNumber, Cart, Container, Numbers } from './styles';

const NewBet: React.FC = () => {
  return (
    <Container>
      <Header showHomeLink />
      <section>
        <div className="new-bet">
          <h1>
            New bet <span>for mega-sena</span>
          </h1>

          <div className="game-selector">
            <h2>Choose a game</h2>
            <GameSelector />
          </div>

          <div className="game-info">
            <h2>Fill your bet</h2>
            <p>
              Mark as many numbers as you want up to a maximum of 50. Win by
              hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
            </p>
          </div>

          <Numbers>
            {new Array(30).fill(null).map((_, index) => {
              return <BetNumber key={index}>{index + 1}</BetNumber>;
            })}
          </Numbers>

          <div className="actions">
            <Button outlined>Complete game</Button>
            <Button outlined>Clear game</Button>
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
