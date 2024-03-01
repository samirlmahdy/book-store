import { Box, Card } from "@mui/material";
import { Book } from "../types";
import { Link } from "react-router-dom";

const BookComponent = ({ book }: { book: Book }) => {
  const usedSerialNumbers = book.serial.filter((s) => s.isUsed === true).length;

  const unUsedSerialNumbers = book.serial.filter(
    (s) => s.isUsed === false
  ).length;

  return (
    <Card
      className="book-card"
      component="span"
    >
      <Link
        className="card-link"
        to={`/books/id`}
      >
        <Box
          className="book"
          key={book.id}
        >
          <h3 className="card-heading">{book.book_name}</h3>
          <Box className="serial-usage">
            <p>Used: {usedSerialNumbers}</p>
            <p>Unused: {unUsedSerialNumbers}</p>
          </Box>
        </Box>
      </Link>
    </Card>
  );
};
export default BookComponent;
