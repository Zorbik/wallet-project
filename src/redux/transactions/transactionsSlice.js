import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
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
    builder
      .addCase(addTransaction.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = [...state.transactions, payload];
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getTransactions.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = action.payload;
      })
      .addCase(getTransactions.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTransaction.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== payload
        );
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
