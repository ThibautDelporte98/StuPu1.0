import axios from 'axios';


const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3002/api';

const publicFetch = axios.create({
  baseURL: apiURL
});

export { publicFetch };
