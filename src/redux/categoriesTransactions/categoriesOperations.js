import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/transaction-categories');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
