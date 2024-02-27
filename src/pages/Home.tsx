import { useState } from "react";
import Search from "../components/Search";
import BooksList from "../components/BooksList";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="books">
      <h2>Welcome to Books Library</h2>
      <Search
        query={query}
        setQuery={setQuery}
      />
      <BooksList query={query} />
    </div>
  );
};

export default Home;
