const express = require("express");
const {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} = require("../controllers/booksController.js");

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/", createBook);
bookRouter.get("/:id", getBookById);
bookRouter.post("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter;
