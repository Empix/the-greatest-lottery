import React from 'react';
import { ColorBar, Item } from './styles';

type BetItemProps = {
  bet: {
    name: string;
    color: string;
    numbers: string;
    date: Date;
    price: number;
  };
};

const BetItem: React.FC<BetItemProps> = ({ bet }) => {
  const price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(bet.price);

  return (
    <Item color={bet.color}>
      <ColorBar color={bet.color} />
      <div>
        <p className="bet-numbers">{bet.numbers}</p>
        <div>
          <span>{bet.date.toLocaleDateString()}</span> - <span>({price})</span>
        </div>
        <p className="bet-name">{bet.name}</p>
      </div>
    </Item>
  );
};

export default BetItem;
