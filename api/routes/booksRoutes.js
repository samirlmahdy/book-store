import express from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/booksController.js";

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/", createBook);
bookRouter.get("/:id", getBookById);
bookRouter.post("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
