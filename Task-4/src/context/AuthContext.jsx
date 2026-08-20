import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const TOKEN_DURATION = 2 * 60 * 1000; 

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      return null;
    }

    const userData = JSON.parse(savedUser);

    if (Date.now() >= userData.expiresAt) {
      localStorage.removeItem("user");
      return null;
    }

    return userData;
  });

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "123456") {
      const userData = {
        email,
        token: "mock-token-123",
        expiresAt: Date.now() + TOKEN_DURATION,
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

  useEffect(() => {
    if (!user) {
      return;
    }

    const interval = setInterval(() => {
      if (Date.now() >= user.expiresAt) {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/login";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}