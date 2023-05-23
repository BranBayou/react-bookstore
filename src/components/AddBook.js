import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    if (title && author) dispatch(addBook({ item_id: Math.floor(Math.random() * 100), title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book-con">
      <form className="form-content" onSubmit={handleSubmit}>
        <input className="input-type" type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <input className="input-type" type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
