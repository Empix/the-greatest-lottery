import styled from 'styled-components';

export const Numbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 45px;
  justify-content: center;
`;

type BetNumberProps = {
  color?: string;
  selected?: boolean;
};

export const BetNumber = styled.div<BetNumberProps>`
  background-color: ${(p) => (p.selected ? p.color : '#adc0c4')};
  color: #ffffff;
  font-size: 1.3em;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
