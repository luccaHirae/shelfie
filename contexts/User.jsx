import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    throw new Error("Not implemented");
  }

  async function register(email, password) {
    throw new Error("Not implemented");
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

