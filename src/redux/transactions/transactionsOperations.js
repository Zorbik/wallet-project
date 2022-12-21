import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const transactionForm = {
//   transactionDate: '2022-12-19T12:46:54.268Z',
//   type: 'INCOME',
//   categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
//   comment: 'salary',
//   amount: 40,
// };

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',

  async (transactionForm, thunkAPI) => {
    try {
      const response = await axios.post('/transactions', transactionForm);

      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transactions');

      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await axios.delete(`/transactions/${transactionId}`);

      return transactionId;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
