import { Box } from "@mui/material";
import useFetch from "../hooks/useFetch";
import { Book } from "../types";
import BookComponent from "./BookComponent";
import BooksSkeleton from "./BooksSkeleton";
import { book } from "../_data";

const BooksList = ({ query }: { query: string }) => {
  // const booksEndPoint = `${process.env.API_ENDPOINT}/books`;

  // const { data, loading, error } = useFetch<Book[]>(booksEndPoint);

  // const books = data?.filter((book) =>
  //   book.book_name.toLowerCase().includes(query.toLocaleLowerCase())
  // );

  // if (loading)
  //   return (
  //     <Box className="books-list">
  //       <BooksSkeleton />
  //     </Box>
  //   );

  // if (error) {
  //   return (
  //     <Box className="books-list">
  //       <p className="error">{error}</p>;
  //     </Box>
  //   );
  // }

  const books = book;

  if (books?.length === 0) {
    return (
      <Box className="books-list">
        <p className="error">Add a book to start seeing it in your Library</p>
      </Box>
    );
  }

  return (
    <Box className="books-list">
      {books?.map((book: Book) => {
        return (
          <BookComponent
            book={book}
            key={book.id}
          />
        );
      })}
    </Box>
  );
};

export default BooksList;
