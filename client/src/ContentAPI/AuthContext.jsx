import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (<AuthContext.Provider value={ }>{children}</AuthContext.Provider>)
}
