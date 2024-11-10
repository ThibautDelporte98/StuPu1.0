import React, { createContext, useState,startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    startTransition(() => {
      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('expiresAt', expiresAt);
  
      setAuthState({
        token,
        userInfo,
        expiresAt
      });
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({});
    navigate('/aanmelden');
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return (
      new Date().getTime() / 1000 < authState.expiresAt
    );
  };

  const isAdmin = () => {
    return authState.userInfo.role === 'admin';
  };
  

  const isStudent = () => {
    return authState.userInfo.role === 'student';
  }

  const isTeacher = () => {
    return authState.userInfo.role === 'teacher'
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
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

