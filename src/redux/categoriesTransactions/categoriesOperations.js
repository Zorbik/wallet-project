import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionCategories } from './categoriesApi';

export const fetchCategories = createAsyncThunk(
  'transactions/getCategories',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await getTransactionCategories();
      // При успішному запиті повертаємо проміс із даними
      return response;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e);
    }
  }
);
