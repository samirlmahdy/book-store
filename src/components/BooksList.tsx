import useFetch from "../hooks/useFetch";
import { Book } from "../types";
import BookComponent from "./Book";

const BooksList = ({ query }: { query: string }) => {
  const booksEndPoint = `http://localhost:3030/books`;

  const { data, loading, error } = useFetch<Book[]>(booksEndPoint);

  const books = data?.filter((book) =>
    book.book_name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {books?.map((book: Book) => {
        return (
          <BookComponent
            book={book}
            key={book.id}
          />
        );
      })}
    </div>
  );
};

export default BooksList;
