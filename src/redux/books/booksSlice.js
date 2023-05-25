import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uMfxud1McryQAfRNygOp/books';

export const addNewBook = createAsyncThunk('books/addNewBook', async (book) => {
  try {
    await axios.post(`${baseUrl}/books`, book);
  } catch (error) {
    throw new Error(error);
  }
  return book;
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/DELETE_BOOK', async (id) => {
  try {
    await axios.delete(`${baseUrl}/books/${id}`);
  } catch (error) {
    throw new Error(error);
  }
  return id;
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const newBooksState = { ...state };
      newBooksState.books = state.books.filter((book) => book.item_id !== action.payload);
      return newBooksState;
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map(
        (key) => (
          {
            item_id: key,
            title: action.payload[key][0].title,
            author: action.payload[key][0].author,
          }),
      );
      return ({
        ...state,
        loading: false,
        books,
      });
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
