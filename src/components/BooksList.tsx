import { Book } from "../types";
import BookComponent from "./Book";

const BooksList = ({ books }: { books: Book[] }) => {
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
