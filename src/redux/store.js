import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    counter: bookReducer,
  },
});

export default store;
