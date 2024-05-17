import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slices/apiSlice.js';
import authSliceReducer from '../slices/authSlice.js'
import navigationSliceReducer from '../slices/navigationSlice.js';
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    navigation: navigationSliceReducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;