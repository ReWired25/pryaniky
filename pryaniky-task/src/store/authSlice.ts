import { createSlice } from '@reduxjs/toolkit';

import { IauthPayload } from './types';

const initialState = {
  username: localStorage.getItem('pryanikyUser') || '',
  userToken: localStorage.getItem('pryanikyToken') || '',
};

export const authSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {
    setUsername: (state, action: IauthPayload) => {
      if (action.payload.username) state.username = action.payload.username;
      if (action.payload.token) state.userToken = action.payload.token;
    },
  },
});

export const authLogin = authSlice.reducer;
export const { setUsername } = authSlice.actions;
