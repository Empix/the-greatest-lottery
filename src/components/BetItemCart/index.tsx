import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { Bet } from '../../pages/NewBet';
import { ColorBar, Container } from './styles';

type BetItemCartProps = {
  bet: Bet;
  onDelete: (tempId: string) => void;
};

const BetItemCart: React.FC<BetItemCartProps> = ({ bet, onDelete }) => {
  const price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(bet.game?.price || 0);

  return (
    <Container>
      <div>
        <IoTrashOutline size={25} onClick={() => onDelete(bet.tempId)} />
      </div>

      <ColorBar color={bet.game?.color || '#000'} />

      <div>
        <div className="numbers">{bet.numbers.join(', ')}</div>
        <div className="price">
          <span style={{ color: bet.game?.color }}>{bet.game?.type}</span>{' '}
          <span>{price}</span>
        </div>
      </div>
    </Container>
  );
};

export default BetItemCart;
