import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionRequest,
  getTransactionRequest,
  deleteTransactionRequest,
} from './transactionsApi';

// const transactionForm = {
//   transactionDate: '2022-12-19T12:46:54.268Z',
//   type: 'INCOME',
//   categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
//   comment: 'salary',
//   amount: 40,
// };
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (transactionForm, thunkAPI) => {
    try {
      const response = await addTransactionRequest(transactionForm);
      // При успішному запиті повертаємо проміс із даними
      console.log(response);
      return response;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await getTransactionRequest();
      // При успішному запиті повертаємо проміс із даними
      console.log(response);
      return response;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (transactionId, thunkAPI) => {
    try {
      await deleteTransactionRequest(transactionId);
      // При успішному запиті повертаємо проміс із даними
      return transactionId;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e);
    }
  }
);
