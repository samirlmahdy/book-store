import { useState, useRef } from "react";
import { TextField } from "@mui/material";

const AddBook = () => {
  const [book, setBook] = useState("");
  const fileInputRef = useRef<any>(null);

  const booknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook(e.target.value);
  };

  const handleFileSubmit = async (e: any) => {
    e.preventDefault();
    const files = fileInputRef.current.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
        try {
          const response = await fetch(`${process.env.API_ENDPOINT}/upload`, {
            method: "POST",
            body: formData,
          });
          const bookResponse = await fetch(
            `${process.env.API_ENDPOINT}/books`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ book_name: book }),
            }
          );

          const data = await response.json();
          const bookData = await bookResponse.json();

          console.log(`uploaded files: ${data.data}`);
          console.log(`uploaded files: ${bookData.data}`);
        } catch (error: any) {
          console.log(error.message);
        }
      }
    }
  };

  return (
    <main>
      <form>
        <h3>Upload a book</h3>
        <input
          type="file"
          id="file"
          required
          multiple
          name="file"
          ref={fileInputRef}
        />
        <label htmlFor="book_name">Book Name</label>
        {/* <input
          onChange={booknameChangeHandler}
          type="text"
          name="book_name"
        /> */}
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          name="book_name"
          onChange={booknameChangeHandler}
        />

        <input
          type="submit"
          onClick={handleFileSubmit}
        />
      </form>
    </main>
  );
};

export default AddBook;
