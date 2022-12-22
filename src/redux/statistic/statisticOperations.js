import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',

  async (parameters, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions-summary', parameters);

      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
