import React, { createContext, useState, useEffect, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    startTransition(() => {
      setAuthState({
        token,
        userInfo,
        expiresAt
      });
      document.cookie = `token=${token}; path=/;`;
    });
  };

  const logout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'userInfo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'expiresAt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    setAuthState({
      token: null,
      userInfo: {},
      expiresAt: null,
    });
    navigate('/aanmelden');
  };

  const isAdmin = () => {
    return authState.userInfo.role === 'admin';
  };

  const isStudent = () => {
    return authState.userInfo.role === 'student';
  };

  const isTeacher = () => {
    return authState.userInfo.role === 'teacher';
  };

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
