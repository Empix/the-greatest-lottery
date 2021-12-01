import React from 'react';
import { BetNumber, Numbers } from './styles';

type NumberSelectorProps = {
  bet: {
    color: string;
    maxNumbers: number;
  };
  selectedNumbers: number[];
  onSelectNumber: (num: number) => void;
};

const NumberSelector: React.FC<NumberSelectorProps> = (props) => {
  const { bet, selectedNumbers, onSelectNumber } = props;

  return (
    <Numbers>
      {new Array(bet.maxNumbers).fill(null).map((_, index) => {
        const isSelected = selectedNumbers.includes(index + 1);

        return (
          <BetNumber
            key={index}
            color={bet.color}
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
