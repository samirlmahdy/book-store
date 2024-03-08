import { Box, Typography } from "@mui/material";
import { book } from "../_data";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import { Book } from "../types";
// import BooksSkeleton from "../components/BooksSkeleton";

const BookPage = () => {
  //   const { id } = useParams();
  //   const booksEndPoint = `${process.env.API_ENDPOINT}/books/${id}`;
  //   const { data: book, loading, error } = useFetch<Book | null>(booksEndPoint);
  // const usedSerialNumbers = book[0].serial.filter(
  //   (s) => s.isUsed === true
  // ).length;
  // const unUsedSerialNumbers = book[0].serial.filter(
  //   (s) => s.isUsed === false
  // ).length;

  // const series = [
  //   {
  //     data: [
  //       { id: 0, label: "Used Serials", value: usedSerialNumbers },
  //       ,
  //       { id: 1, label: "Unused Serials", value: unUsedSerialNumbers },
  //     ],
  //   },
  // ];

  //   if (loading)
  //     return (
  //       <Box className="books-list">
  //         <BooksSkeleton />
  //       </Box>
  //     );

  //   if (error) {
  //     return (
  //       <Box className="books-list">
  //         <p className="error">error</p>;
  //       </Box>
  //     );
  //   }

  return (
    <Box className="books-page">
      <Box className="book-container">
        <Typography
          variant="h1"
          className="book-heading"
        >
          {book[0].book_name}
        </Typography>
        <Box>
          <Typography
            variant="h4"
            className="book-subheading"
          >
            Book Serial Numbers
          </Typography>
        </Box>
        {/* <BooksPieChart series={series} /> */}
        <div className="serial-container">
          {book[0].serial.map((s) => (
            <span
              key={s.id}
              className="serial-number"
            >
              <div className="serial-serial">{s.book_serial}</div>
              <Box className="serial-usage">
                <p className={s.isUsed ? "used" : "un-used"}>
                  Status: {s.isUsed ? "Used" : "Un-Used"}
                </p>
              </Box>
            </span>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default BookPage;
