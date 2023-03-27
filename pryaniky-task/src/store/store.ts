import { configureStore } from '@reduxjs/toolkit';

import { commonApi } from './api';
import { authLogin } from './authSlice';

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    auth: authLogin,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
});
