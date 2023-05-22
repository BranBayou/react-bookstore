import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Under construction');
      }
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
