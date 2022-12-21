import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transaction-categories');

      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
