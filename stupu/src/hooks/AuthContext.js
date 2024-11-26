import React, { createContext, useState, useEffect, useCallback, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, setAuthState] = useState({
    token: Cookies.get('token') || null,
    expiresAt: Cookies.get('expiresAt') ? parseInt(Cookies.get('expiresAt')) : null,
    userInfo: Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : {},
  });

  useEffect(() => {
    
    if (authState.token && authState.expiresAt) {
      Cookies.set('userInfo', JSON.stringify(authState.userInfo), { path: '/', secure: true, sameSite: 'Strict' });
      Cookies.set('expiresAt', authState.expiresAt, { path: '/', secure: true, sameSite: 'Strict' });
    }
  }, [authState]);


  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) return false;
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const setAuthInfo = useCallback(({ token, userInfo, expiresAt }) => {
    startTransition(() => {
      setAuthState({
        token,
        userInfo,
        expiresAt,
      });
      Cookies.set('token', token, { path: '/', secure: true, sameSite: 'Strict' });
      Cookies.set('userInfo', JSON.stringify(userInfo), { path: '/', secure: true, sameSite: 'Strict' });
      Cookies.set('expiresAt', expiresAt, { path: '/', secure: true, sameSite: 'Strict' });
    });
  }, []);

  const logout = useCallback(() => {
    Cookies.remove('token', { path: '/' });
    Cookies.remove('userInfo', { path: '/' });
    Cookies.remove('expiresAt', { path: '/' });
    setAuthState({
      token: null,
      userInfo: {},
      expiresAt: null,
    });
    navigate('/aanmelden');
  }, [navigate]);

  const isAdmin = () => authState.userInfo.role === 'admin';
  const isStudent = () => authState.userInfo.role === 'student';
  const isTeacher = () => authState.userInfo.role === 'teacher';

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
