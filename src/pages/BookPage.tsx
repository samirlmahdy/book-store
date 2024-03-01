import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Book } from "../types";
import BooksPieChart from "../components/BooksPieChart";
import BooksSkeleton from "../components/BooksSkeleton";

const BookPage = () => {
  const { id } = useParams();
  const booksEndPoint = `http://localhost:3030/books/${id}`;
  const { data: book, loading, error } = useFetch<Book | null>(booksEndPoint);

  if (loading)
    return (
      <Box className="books-list">
        <BooksSkeleton />
      </Box>
    );

  if (error || !book) {
    return (
      <Box className="books-list">
        <p className="error">{error}</p>;
      </Box>
    );
  }

  return (
    <Box className="books-page">
      <Box className="books-container">
        <Typography className="book-heading">{book.book_name}</Typography>
        <Box>
          <Typography>User Serial Numbers</Typography>
          {book.serial
            .filter((s) => s.isUsed === true)
            .map((s) => {
              return <Typography key={s.id}>{s.book_serial}</Typography>;
            })}
        </Box>
      </Box>
      <Box className="books-graph">{/* <BooksPieChart /> */}</Box>
    </Box>
  );
};

export default BookPage;
