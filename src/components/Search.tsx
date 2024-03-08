import { TextField } from "@mui/material";

type SearchProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <div className="search-box">
      <TextField
        autoFocus
        className="book-search"
        id="filled-search"
        label="Search for a Book"
        type="search"
        variant="filled"
        name="query"
        InputProps={{
          sx: { fontSize: "18px" }, // Adjust placeholder font size
        }}
        InputLabelProps={{ sx: { fontSize: "18px" } }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
