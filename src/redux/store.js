import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './categoriesTransactions/categoriesSlice';
import { transactionsReducer } from './transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    categoriesData: categoriesReducer,
    transactionsData: transactionsReducer,
  },
});

export default store;
