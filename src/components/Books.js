/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

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
              <h3 className="book-title">{title}</h3>
              <p className="book-author">{author}</p>
            </div>
            <div className="bottom">
              <button className="book-btn comment" type="button">Comment</button>
              <button className="book-btn remove" type="button" onClick={() => dispatch(deleteBook(item_id))}>Remove</button>
              <button className="book-btn" type="button">Edit</button>
            </div>
          </div>
          <div className="status-con">
            <div className="progress">
              <CircularProgressbar className="circular" value={85} />
              <div className="progress-info">
                <span className="percentage">
                  {Math.floor(Math.random() * 100)}
                  %
                </span>
                <span className="completed">Completed</span>
              </div>
            </div>
          </div>
          <div className="chapter-con">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <h4 className="show-chapter">Chapter 17</h4>
            <button type="button" className="update-btn">UPDATE PROGRESS</button>
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
