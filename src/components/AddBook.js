function AddBook() {
  return (
    <div className="add-book-con">
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
