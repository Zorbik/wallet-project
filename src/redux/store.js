import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    categoriesData: categoriesReducer,
  },
});

export default store;
