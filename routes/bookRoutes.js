import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBookById,
  updateBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/books", getBook);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", createBook);
bookRouter.put("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

export { bookRouter };
