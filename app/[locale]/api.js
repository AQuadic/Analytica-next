import axios from 'axios';

const api = axios.create({
    baseURL: 'https://education.aquadic.com/',
    // Additional configurations, headers, etc.
});

export default api;


export const BASE_URL = 'https://education.aquadic.com';