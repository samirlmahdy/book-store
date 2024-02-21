import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;

// Get all books from db

export const getBooks = async (req, res) => {
  try {
    const books = await bookClient.findMany({ include: { serial: true } });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
};

// create a new Book

export const createBook = async (req, res) => {
  const book = req.body;
  try {
    await bookClient.create({ data: book });
    res.sendStatus(201).json(book);
  } catch (error) {
    console.log(error);
  }
};

// get book by Id

export const getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
      include: {
        Author: true,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

// Edit book by id

export const updateBook = async (req, res) => {
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

export const deleteBook = async (req, res) => {
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
