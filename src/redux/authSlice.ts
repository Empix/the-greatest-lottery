import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  user: {
    email: string;
    name: string;
  } | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }) {
      return { user: payload.user, token: payload.token };
    },
    logout(state, { payload }) {
      return { user: null, token: null };
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
