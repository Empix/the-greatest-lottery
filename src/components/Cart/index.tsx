import React, { useEffect, useRef, useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions } from '../../redux/cartSlice';
import api from '../../services/api';
import BetItemCart from '../BetItemCart';
import { Loading } from '../Loading/styles';
import Price from '../Price';
import { Card } from '../UI/styles';
import { Container } from './styles';

type CartProps = {
  minCartValue: number;
};

const Cart: React.FC<CartProps> = (props) => {
  const { minCartValue } = props;
  const betListElement = useRef<HTMLUListElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const scrollHeight = betListElement.current?.scrollHeight;
    if (!scrollHeight) return;
    betListElement.current?.scrollBy(0, scrollHeight);
  }, [cart.items]);

  function handleBetDelete(tempId: string) {
    dispatch(actions.removeItem(tempId));
  }

  async function handleSaveBets() {
    if (totalCart < minCartValue) {
      alert(
        `Você precisa atingir o valor mínimo (${Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(minCartValue)}) no seu carrinho.`
      );

      return;
    }

    setIsLoading(true);

    const games = cart.items.map((item) => {
      return {
        id: item.game?.id,
        numbers: item.numbers,
      };
    });

    await api
      .post(
        '/bet/new-bet',
        {
          games,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .catch((err) => {
        setIsLoading(false);
        if (!err.response || err.response.status >= 500) {
          alert('Um erro desconhecido ocorreu ao tentar salvar as apostas!');
          return;
        }

        alert(err.response.data.message);
      });

    dispatch(actions.clear(null));
    navigate('/');
  }

  const totalCart = cart.items.reduce((acc, value) => {
    return acc + (value.game?.price || 0);
  }, 0);

  return (
    <Container>
      <Card>
        <h1>cart</h1>

        <ul ref={betListElement}>
          {cart.items.length === 0 && (
            <div className="empty-cart">Carrinho vazio.</div>
          )}
          {cart.items &&
            cart.items.map((item) => {
              return (
                <BetItemCart
                  key={item.tempId}
                  bet={item}
                  onDelete={handleBetDelete}
                />
              );
            })}
        </ul>

        <div className="cart-total">
          <span>cart</span> TOTAL: <Price value={totalCart} />
        </div>

        <div>
          {!isLoading && (
            <button onClick={handleSaveBets}>
              <span>Save</span>
              <IoArrowForward />
            </button>
          )}
          {isLoading && <Loading color="#27c383" bgColor="#fff" />}
        </div>
      </Card>
    </Container>
  );
};

export default Cart;
