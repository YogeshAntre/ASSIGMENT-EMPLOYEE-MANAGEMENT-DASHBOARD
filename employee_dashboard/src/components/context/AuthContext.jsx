import { createContext, useContext, useState } from "react";
import { isLoggedIn, loginUser, logoutUser } from "../utils/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(isLoggedIn());

  const login = () => {
    loginUser();
    setIsAuth(true);
  };

  const logout = () => {
    logoutUser();
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
