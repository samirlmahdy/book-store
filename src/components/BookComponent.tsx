import { Box } from "@mui/material";
import { Book } from "../types";
import { Link } from "react-router-dom";

const BookComponent = ({ book }: { book: Book }) => {
  const usedSerialNumbers = book.serial.filter((s) => s.isUsed === true).length;

  const unUsedSerialNumbers = book.serial.filter(
    (s) => s.isUsed === false
  ).length;

  return (
    <div className="book-card">
      <Link
        className="card-link"
        to={`/books/id`}
      >
        <div
          className="book"
          key={book.id}
        >
          <h3 className="card-heading">{book.book_name}</h3>
          <Box className="serial-usage">
            <p className="used">Used: {usedSerialNumbers}</p>
            <p className="un-used">Unused: {unUsedSerialNumbers}</p>
          </Box>
        </div>
      </Link>
    </div>
  );
};
export default BookComponent;
