const { PrismaClient } = require("@prisma/client");
const { json } = require("express");

const bookClient = new PrismaClient().book;

// Get all books from db

const getBooks = async (req, res) => {
  try {
    const books = await bookClient.findMany({ include: { serial: true } });
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
};

// get books by name

const getBooksByName = async (req, res) => {
  const { bookName } = req.params;
  try {
    const books = await bookClient.findMany({
      where: {
        book_name: {
          contains: bookName || bookName.toLowerCase(),
        },
      },
    });
    if (!books)
      return res.status(404).json({
        message: "The requested book hasn't been added yet to the library.",
      });
    return res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
};

// create a new Book

const createBook = async (req, res) => {
  const book = req.body;
  try {
    await bookClient.create({ data: book });
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
  }
};

// get book by Id

const getBookById = async (req, res) => {
  const book_id = JSON.parse(req.params.id);

  try {
    const book = await bookClient.findUnique({
      where: {
        id: book_id,
      },
      include: {
        serial: true,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

// Edit book by id

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;
  try {
    const book = await bookClient.update({
      where: {
        id: bookId,
      },
      data: bookData,
    });

    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

// Delete book

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await bookClient.delete({
      where: {
        id: bookId,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
  getBooksByName,
};
