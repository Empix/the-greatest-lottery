import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
};

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }: { payload: AuthState }) {
      localStorage.setItem('token', payload.token || '');
      return { token: payload.token };
    },
    logout(state, { payload }) {
      localStorage.removeItem('token');
      return { user: null, token: null };
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
