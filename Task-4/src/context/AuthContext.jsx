import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "123456") {
      const userData = {
        email,
        token: "mock-token-123",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}