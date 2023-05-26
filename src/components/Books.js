/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const loadingState = () => <div>loading...</div>;

  const errorState = () => <div>connection problem...</div>;

  const renderBooks = () => books.map((book) => {
    const {
      item_id,
      title,
      author,
    } = book;
    return (
      <section className="books" key={item_id}>
        <div className="book-con">
          <div className="book-info">
            <div className="top">
              <h3>{title}</h3>
              <p>{author}</p>
            </div>
            <div className="bottom">
              <button className="book-btn" type="button">Comment</button>
              <button className="book-btn" type="button" onClick={() => dispatch(deleteBook(item_id))}>Remove</button>
              <button className="book-btn" type="button">Edit</button>
            </div>
          </div>
        </div>
      </section>
    );
  });

  const renderContent = () => {
    if (loading) {
      return loadingState();
    }
    if (error) {
      return errorState();
    }
    return renderBooks();
  };
  return <div>{renderContent()}</div>;
}

export default Books;
