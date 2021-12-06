import React from 'react';
import { Game } from '../../pages/NewBet';
import { Loading } from '../Loading/styles';
import { BetNumber, Numbers } from './styles';

type NumberSelectorProps = {
  game: Game | undefined;
  selectedNumbers: number[];
  onSelectNumber: (num: number) => void;
};

const NumberSelector: React.FC<NumberSelectorProps> = (props) => {
  const { game, selectedNumbers, onSelectNumber } = props;

  return (
    <Numbers>
      {new Array(game?.range || 0).fill(null).map((_, index, arr) => {
        const isSelected = selectedNumbers.includes(index + 1);

        return (
          <BetNumber
            key={index}
            color={game?.color}
            selected={isSelected}
            onClick={() => onSelectNumber(index + 1)}
          >
            {index + 1}
          </BetNumber>
        );
      })}
    </Numbers>
  );
};

export default NumberSelector;
