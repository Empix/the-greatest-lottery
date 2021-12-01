import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { ColorBar, Container } from './styles';

type BetItemCartProps = {
  bet: {
    name: string;
    color: string;
    price: number;
    numbers: string;
  };
};

const BetItemCart: React.FC<BetItemCartProps> = ({ bet }) => {
  const price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(bet.price);

  return (
    <Container>
      <div>
        <IoTrashOutline size={25} />
      </div>

      <ColorBar color={bet.color} />

      <div>
        <div className="numbers">{bet.numbers}</div>
        <div className="price">
          <span style={{ color: bet.color }}>{bet.name}</span>{' '}
          <span>{price}</span>
        </div>
      </div>
    </Container>
  );
};

export default BetItemCart;
