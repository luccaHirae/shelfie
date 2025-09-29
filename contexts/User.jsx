import { createContext, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from '../lib/appwrite';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async function logout() {
    throw new Error("Not implemented");
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}

