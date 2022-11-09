import { useState, useEffect, createContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const AuthContext = createContext({
  // context's default values - optional
  netlifyInit: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [netlifyInit, setNetlifyInit] = useState(false);

  useEffect(() => {
    // initialize netlify identity
    netlifyIdentity.init();
  }, []);

  useEffect(() => {
    // update user state on init event
    netlifyIdentity.on('init', (user) => {
      setUser(user);
    });
    // update user state after login
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
      console.log('logout event');
    });
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const contextValues = { user, login, logout };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
