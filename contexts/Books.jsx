import { createContext, useState } from "react";
import { ID, Permission, Role } from "react-native-appwrite";
import { COLLECTION_ID, DATABASE_ID, databases } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const { user } = useUser();

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
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...bookData, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
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