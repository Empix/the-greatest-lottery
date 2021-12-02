import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BetItem from '../../components/BetItem';
import Header from '../../components/Header';
import { Container, Filter } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <section>
        <header>
          <h1>Recent games</h1>
          <Filter>
            <span>Filters</span>
            {/* <GameSelector /> */}
          </Filter>
          <Link to="/new-bet">
            <span>New Bet</span>
            <IoArrowForward size={35} />
          </Link>
        </header>
        <ul>
          <BetItem
            bet={{
              name: 'Lotofácil',
              color: '#7F3992',
              price: 2.5,
              date: new Date('2020-11-30'),
              numbers:
                '01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25',
            }}
          />
          <BetItem
            bet={{
              name: 'Megasena',
              color: '#01AC66',
              price: 2.5,
              date: new Date('2020-11-30'),
              numbers:
                '01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25',
            }}
          />
          <BetItem
            bet={{
              name: 'Lotomania',
              color: '#F79C31',
              price: 2.5,
              date: new Date('2020-11-30'),
              numbers:
                '01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25',
            }}
          />
        </ul>
      </section>
    </Container>
  );
};

export default Home;
