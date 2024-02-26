import { Book } from "../types";
import { Link } from "react-router-dom";

const BookComponent = ({ book }: { book: Book }) => {
  return (
    <div
      className="book"
      key={book.id}
    >
      <h3>
        <Link to={`/books/id`}>{book.book_name}</Link>
      </h3>
    </div>
  );
};
export default BookComponent;
