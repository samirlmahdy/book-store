import express from "express";
import booksRoutes from "./routes/booksRoutes.js";
import serialRouter from "./routes/serialsRouter.js";

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3030;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/books", booksRoutes);
app.use("/serials", serialRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
