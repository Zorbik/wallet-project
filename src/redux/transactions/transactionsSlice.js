import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactions,
  deleteTransaction,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,

  extraReducers: builder => {
    builder.addCase(addTransaction.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(addTransaction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.transactions = [...state.transactions, payload];
    });
    builder.addCase(addTransaction.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(getTransactions.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.transactions = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTransaction.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(deleteTransaction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== payload
      );
    });
    builder.addCase(deleteTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
