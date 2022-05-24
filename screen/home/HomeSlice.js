import {createSlice} from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from './HomeThunks';
const initialState = {
  isLoading: false,
  dataProducts: [],
  dataCategories: [],
  categorySelected: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.dataProducts = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.dataCategories = action.payload;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.dataProducts = action.payload;
      });
  },
});
export default homeSlice.reducer;
