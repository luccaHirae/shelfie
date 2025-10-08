import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      
    } catch (e) {
      throw Error(e.message || e);
    }
  }

  async function fetchBookById(bookId) {
    try {

    } catch (e) {
      throw Error(e.message || e);
    }
  }

  async function createBook(bookData) {
    try {

    } catch (e) {
      throw Error(e.message || e);
    }
  }

  async function deleteBook(bookId) {
    try {
      
    } catch (e) {
      throw Error(e.message || e);
    }
  }

  const value = { books, setBooks, fetchBooks, fetchBookById, createBook, deleteBook };

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
};