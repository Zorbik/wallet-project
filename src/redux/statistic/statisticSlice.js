import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statisticOperations';

const initialState = {
  statistic: {},
  isLoading: false,
  error: null,
};

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState: initialState,

  extraReducers: builder => {
    builder.addCase(getStatistic.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getStatistic.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.statistic = { ...payload };
    });
    builder.addCase(getStatistic.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const statisticReducer = statisticSlice.reducer;
