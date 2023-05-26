import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';

function AddBook() {
  const initialState = {
    title: '',
    author: '',
    category: '',
  };
  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...input,
      item_id: Math.floor(Math.random() * 100),
    };
    dispatch(addNewBook(newBook));
    setInput(initialState);
  };

  return (
    <div className="add-book-con">
      <form className="form-content">
        <input className="input-type" type="text" name="title" placeholder="Book title" onChange={handleChange} value={input.title} />
        <input className="input-type" type="text" name="author" placeholder="Author" onChange={handleChange} value={input.author} />
        <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
