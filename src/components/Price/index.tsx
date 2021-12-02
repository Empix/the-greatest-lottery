import React from 'react';

type PriceProps = {
  value: number;
};

const Price: React.FC<PriceProps> = (props) => {
  return (
    <span>
      {Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(props.value)}
    </span>
  );
};

export default Price;
