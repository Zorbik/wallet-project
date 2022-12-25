import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { fetchCategories } from './categoriesOperations';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.categories = payload;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
