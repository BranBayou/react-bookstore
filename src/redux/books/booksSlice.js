import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, {
        id: Math.floor(Math.random() * 100),
        title: action.payload.title,
        author: action.payload.author,
      }];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
