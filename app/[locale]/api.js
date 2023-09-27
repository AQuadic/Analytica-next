import axios from 'axios';

const api = axios.create({
  baseURL: 'https://education.jabal-p.com/',
  // Additional configurations, headers, etc.
});

export default api;



export const BASE_URL = 'https://education.jabal-p.com';