import { useState, useRef } from "react";
import { Card, TextField, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddBook = () => {
  const [book, setBook] = useState("");
  const fileInputRef = useRef<any>(null);

  const booknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook(e.target.value);
  };

  const handleFileSubmit = async (e: any) => {
    e.preventDefault();
    const baseUrl = `http://localhost:3030`;
    const files = fileInputRef.current.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
        try {
          const response = await fetch(`${baseUrl}/upload`, {
            method: "POST",
            body: formData,
          });
          const bookResponse = await fetch(`${baseUrl}/books`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ book_name: book }),
          });

          const data = await response.json();
          const bookData = await bookResponse.json();
          console.log(data, bookData);

          console.log(`uploaded files: ${data.data}`);
          console.log(`uploaded files: ${bookData.data}`);
        } catch (error: any) {
          console.log(error.message);
        }
      }
    }
  };

  return (
    <main className="add-book-container">
      <div className="add-book-container-div">
        <h1>Add Book Page</h1>
        <Card
          variant="outlined"
          sx={{ p: 2, mt: 7 }}
          className="add-book"
        >
          <form>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
            >
              Upload a book
            </Typography>
            <div className="add-book">
              <input
                type="file"
                id="file"
                required
                multiple
                name="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <label htmlFor="file">
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </label>
            </div>
            <TextField
              id="filled-search"
              label="Book Name"
              type="text"
              variant="filled"
              name="book_name"
              fullWidth
              InputProps={{
                sx: { fontSize: "18px" }, // Adjust placeholder font size
              }}
              InputLabelProps={{ sx: { fontSize: "18px" } }}
              onChange={booknameChangeHandler}
              sx={{ mt: 2 }}
            />
            <div className="action-btns">
              <Button
                type="submit"
                className="form-btn"
                variant="outlined"
                onClick={handleFileSubmit}
                sx={{ mt: 2, fontSize: 16 }}
              >
                Upload
              </Button>
              <Button
                type="submit"
                className="form-btn"
                variant="text"
                onClick={() => {
                  fileInputRef.current = null;
                }}
                sx={{ mt: 2, fontSize: 16 }}
              >
                Delete
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default AddBook;
