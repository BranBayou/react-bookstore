import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  return (
    <section className="books">
      {books.map((book) => (
        <div className="book-con" key={book.item_id}>
          <div className="book-info">
            <div className="top">
              <p>{book.category}</p>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <div className="bottom">
              <button className="book-btn" type="button">Comment</button>
              <button className="book-btn" type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
              <button className="book-btn" type="button">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

Books.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
