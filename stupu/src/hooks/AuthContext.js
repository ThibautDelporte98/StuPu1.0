import React, { createContext, useState, useEffect, useCallback, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Helper function to parse cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const token = getCookie('token');
  const storedUserInfo = getCookie('userInfo');
  const storedExpiresAt = getCookie('expiresAt');


  const [authState, setAuthState] = useState({
    token: token || null,
    expiresAt: storedExpiresAt ? parseInt(storedExpiresAt) : null,
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : {},
  });


  useEffect(() => {
    if (authState.token && authState.expiresAt) {
      document.cookie = `userInfo=${JSON.stringify(authState.userInfo)}; path=/;`;
      document.cookie = `expiresAt=${authState.expiresAt}; path=/;`;
    }
  }, [authState]);

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) return false;
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  
  // Memoize setAuthInfo to prevent unnecessary re-renders
  const setAuthInfo = useCallback(({ token, userInfo, expiresAt }) => {
    startTransition(() => {
      setAuthState({
        token,
        userInfo,
        expiresAt
      });
      document.cookie = `token=${token}; path=/;`;
    });
  }, []);

  // Memoize logout function to prevent unnecessary re-renders
  const logout = useCallback(() => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'userInfo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'expiresAt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    setAuthState({
      token: null,
      userInfo: {},
      expiresAt: null,
    });
    navigate('/aanmelden');
  }, [navigate]);

  const isAdmin = () => {
    return authState.userInfo.role === 'admin';
  };

  const isStudent = () => {
    return authState.userInfo.role === 'student';
  };

  const isTeacher = () => {
    return authState.userInfo.role === 'teacher';
  };

  // Memoize the refreshToken function to prevent it from being redefined on every render
  const refreshToken = useCallback(async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/refresh-token`, {}, {
        withCredentials: true, // Make sure cookies are sent with the request
      });
      const { token, expiresAt } = response.data;
      setAuthInfo({
        token,
        expiresAt,
        userInfo: authState.userInfo,
      });
    } catch (err) {
      console.error('Error refreshing token:', err);
      logout(); // Log out user if refresh fails
    }
  }, [authState.userInfo, setAuthInfo, logout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (authState.token && authState.expiresAt) {
        const timeRemaining = authState.expiresAt - (new Date().getTime() / 1000);
        if (timeRemaining < 60) { // Refresh token when it's about to expire (1 minute)
          refreshToken();
        }
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [authState, refreshToken]); // Add refreshToken to the dependency array

  return (
    <Provider
      value={{
        authState,
        setAuthState: setAuthInfo,
        logout,
        isAuthenticated,
        isAdmin,
        isStudent,
        isTeacher,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
