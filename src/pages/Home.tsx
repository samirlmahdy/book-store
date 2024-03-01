import { useState } from "react";
import Search from "../components/Search";
import BooksList from "../components/BooksList";
import { Typography } from "@mui/material";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="books">
      <Typography
        component={"h1"}
        className="books-heading"
      >
        Welcome to Books Library
      </Typography>
      <Search
        query={query}
        setQuery={setQuery}
      />
      <BooksList query={query} />
    </div>
  );
};

export default Home;
