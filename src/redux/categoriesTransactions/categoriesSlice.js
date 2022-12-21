import { createSlice } from '@reduxjs/toolkit';
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
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
