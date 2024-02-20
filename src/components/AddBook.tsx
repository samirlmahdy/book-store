import { useState } from "react";

const AddBook = () => {
  const [book, setBook] = useState({ book_id: "", book_name: "" });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  return (
    <div className=".add-book-form">
      <h3>Add a new book</h3>
      <form
        action=""
        className="add-form"
      >
        <label htmlFor="book_name">Book Name</label>
        <input
          type="text"
          name="book_name"
          placeholder="Add a new book..."
          onChange={handleChange}
        />
        <label htmlFor="book_id">Book Id</label>
        <input
          type="text"
          name="book_id"
          placeholder="Add the book id"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
