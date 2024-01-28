import { createContext, useState, useEffect } from 'react';
import { getUser } from './../api/api';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const login = async () => {
    const user = await getUser();
    setCurrentUser(user);
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
