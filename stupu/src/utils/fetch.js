import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const publicFetch = axios.create({
  baseURL: apiURL
});

export { publicFetch };
