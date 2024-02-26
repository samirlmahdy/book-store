import { useState } from "react";
import { Book } from "../types";
import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import BooksList from "../components/BooksList";

const Home = () => {
  const [query, setQuery] = useState("");
  const booksEndPoint = `http://localhost:3030/books`;

  const { data, loading, error } = useFetch<Book[]>(booksEndPoint);

  const books = data?.filter((book) =>
    book.book_name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  if (error) return <div className="error">{error}</div>;

  if (loading) return <div className="loading">Loading...</div>;

  if (!books) return <div>Kindly Add a book...</div>;
  return (
    <div className="books">
      <h2>Welcome to Books Library</h2>
      <Search
        query={query}
        setQuery={setQuery}
      />
      <BooksList books={books} />
    </div>
  );
};

export default Home;
