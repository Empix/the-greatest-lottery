import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Button } from '../UI/styles';

type NewBetActionsProps = {
  handleCompleteGame: () => void;
  handleClearGame: () => void;
  handleAddToCart: () => void;
  canAddBetToCart: boolean;
};

const NewBetActions: React.FC<NewBetActionsProps> = (props) => {
  const {
    handleCompleteGame,
    handleClearGame,
    handleAddToCart,
    canAddBetToCart,
  } = props;

  return (
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
  );
};

export default NewBetActions;
