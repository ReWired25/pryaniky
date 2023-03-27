import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: localStorage.getItem('pryanikiToken') || '',
};

export const authSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const authLogin = authSlice.reducer;
export const { setLogin } = authSlice.actions;
