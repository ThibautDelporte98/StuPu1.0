import React, { createContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


  // Interceptor to add token to headers and withCredentials flag
  authAxios.interceptors.request.use(
    (config) => {
      const token = Cookies.get('token'); 
      if (token) { 
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.withCredentials = true;

      return config;
    },
    (error) => Promise.reject(error)
  );
  
  return (
    <Provider
      value={{
        authAxios,
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
