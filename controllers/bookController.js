import { Book } from "./../models/Book.js";
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching books",
      error: error.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching books",
      error: error.message,
    });
  }
};

export const createBook = async (req, res) => {
  try {
    const { title } = req.body;

    const existTitle = await Book.findOne({ title });
    if (existTitle) {
      return res.status(400).json({
        message: "Book already exist",
      });
    }
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    return res
      .status(201)
      .json({ savedBook, message: "Book created successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating book",
      error: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    if (!bookId) {
      return res.status(404).json({ message: "Book not Found for update" });
    }
    const updated = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
      runValidators: true,
    });
    return res
      .status(200)
      .json({ updated, message: "Book updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating book", error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    if (!bookId) {
      return res.status(404).json({ message: "Book not Found for update" });
    }
    await Book.findByIdAndDelete(bookId);
    return res.json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting book", error: error.message });
  }
};
