function Books() {
  const books = [
    { id: 1, title: 'The Hanger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'Dune', author: 'Suzanne Collins' },
    { id: 3, title: 'Maru', author: 'Bassie Head' },
  ];

  return (
    <section className="books">
      {books.map((book) => (
        <div className="book-con" key={book.id}>
          <div className="book-info">
            <div className="top">
              <p>Action</p>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <div className="bottom">
              <li><a href="/">Comment</a></li>
              <li><a href="/">Remove</a></li>
              <li><a href="/">Edit</a></li>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Books;
