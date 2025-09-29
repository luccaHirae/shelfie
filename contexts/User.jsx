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
      throw Error(e.message || e);
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (e) {
      throw Error(e.message || e);
    }
  }

  async function logout() {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (e) {
      throw Error(e.message || e);
    }
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}

