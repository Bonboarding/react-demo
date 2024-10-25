import { createContext, useContext, useState, useEffect } from 'react';

type UserContextType = {
  username: string;
  login: (username: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};
const UserContext = createContext<UserContextType>({
  username: '',
  login: () => {},
  logout: () => {},
  isLoggedIn: () => false
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  const login = (username: string) => {
    setUsername(username);
  };

  const logout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  const isLoggedIn = () => {
    return !!username;
  };

  return (
    <UserContext.Provider value={{ username, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
