import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStatistic = createAsyncThunk(
  'statistic/getStatistic',

  async (params, thunkAPI) => {
    try {
      console.log('parameters', params);

      const { data } = await axios.get('/transactions-summary', {
        params,
      });

      console.log('data', data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
