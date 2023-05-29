import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
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
      <MdClose />
      <form className="form-content">
        <input className="input-type title" type="text" name="title" placeholder="Book title" onChange={handleChange} value={input.title} />
        <input className="input-type author" type="text" name="author" placeholder="Author" onChange={handleChange} value={input.author} />
        <button className="submit-btn" type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
