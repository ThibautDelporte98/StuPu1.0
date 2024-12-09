import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const token = Cookies.get('token') || null;
  const username = Cookies.get('username') || null;

  const navigate = useNavigate();
  const [authState, setAuthState] = useState({ token, username });

  const setAuthInfo = (token, username) => {
    Cookies.set('token', token, { secure: true, sameSite: 'strict' });
    Cookies.set('username', username, { secure: true, sameSite: 'strict' });
    setAuthState({ token, username });
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('username');
    setAuthState({ token: null, username: null });
    navigate('/aanmelden');
  };

  const isAuthenticated = () => {
    if (!authState.token) return false;

    try {
      const payload = JSON.parse(atob(authState.token.split('.')[1]));
      return payload.exp > Date.now() / 1000; // Token should not be expired
    } catch (e) {
      console.error('Invalid token format', e);
      return false;
    }
  };

  const makeAuthenticatedRequest = async (url, options = {}) => {
    if (!authState.token) {
      throw new Error('No authentication token available');
    }

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${authState.token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: setAuthInfo,
        logout,
        isAuthenticated,
        makeAuthenticatedRequest,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
