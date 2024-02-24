import React, { useEffect, useState } from "react";
import { Book } from "../types";

const Home = () => {
  const [books, setBooks] = useState<Book[] | any>([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await fetch("http://localhost:3030/books");
      const data = await response.json();
      setBooks(data);
    };
    getAllBooks();
  }, [books]);

  return (
    <div>
      <h3>Books</h3>
      {books.map((book: Book) => {
        return <h4 key={book.id}>{book.book_name}</h4>;
      })}
    </div>
  );
};

export default Home;
