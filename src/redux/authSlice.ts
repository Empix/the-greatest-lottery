import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
  expiresIn: string | null;
};

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  expiresIn: localStorage.getItem('token_expires_in') || null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }: { payload: AuthState }) {
      localStorage.setItem('token', payload.token || '');
      localStorage.setItem('token_expires_in', payload.expiresIn || '');
      return { token: payload.token, expiresIn: payload.expiresIn };
    },
    logout(state, { payload }: { payload: undefined }) {
      localStorage.removeItem('token');
      localStorage.removeItem('token_expires_in');
      return { token: null, expiresIn: null };
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
