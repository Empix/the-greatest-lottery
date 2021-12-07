import React from 'react';
import { Bet } from '../../pages/Home';
import { Game } from '../../pages/NewBet';
import BetItem from '../BetItem';
import { Loading } from '../Loading/styles';

type BetListProps = {
  isBetsLoading: boolean;
  bets: Bet[];
  games: Game[];
};

const BetList: React.FC<BetListProps> = (props) => {
  const { isBetsLoading, bets, games } = props;

  return (
    <ul>
      {isBetsLoading && <Loading />}
      {!isBetsLoading && bets.length === 0 && (
        <p className="empty-bets">Nenhuma aposta encontrada.</p>
      )}
      {bets &&
        !isBetsLoading &&
        bets.map((bet) => {
          return (
            <BetItem
              key={bet.id}
              bet={{
                name: bet.type.type,
                color:
                  games.find((game) => game.id === bet.type.id)?.color ||
                  '#707070',
                price: bet.price,
                date: new Date(bet.created_at),
                numbers: bet.choosen_numbers.replaceAll(',', ', '),
              }}
            />
          );
        })}
    </ul>
  );
};

export default BetList;
