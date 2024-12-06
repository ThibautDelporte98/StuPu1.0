import React, { createContext } from 'react';
import axios from 'axios';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


  authAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");

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
