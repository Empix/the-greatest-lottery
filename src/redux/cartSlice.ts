import { createSlice } from '@reduxjs/toolkit';
import { Game } from '../pages/NewBet';

export type Bet = {
  tempId: string;
  game: Game | undefined;
  numbers: number[];
};

type CartState = {
  items: Bet[];
};

const initialState: CartState = {
  items: [],
};

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }: { payload: Bet }) => {
      state.items.push(payload);

      return state;
    },
    removeItem: (state, { payload }: { payload: string }) => {
      return { items: state.items.filter((item) => item.tempId !== payload) };
    },
    clear: (state, { payload }) => {
      return { items: [] };
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
