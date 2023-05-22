import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state) => {
      state.count += 1;
    },
    removeBook: (state) => {
      state.count -= 1;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
