// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data (null by default)
  const [loading, setLoading] = useState(true); // Manage loading state while checking auth

  useEffect(() => {
    // Simulating fetching user data, this should be replaced with an actual API call or localStorage retrieval.
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  // Provide auth values to the rest of the app
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
