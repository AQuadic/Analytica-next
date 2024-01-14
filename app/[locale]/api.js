import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cp.analytica-edu.basseterp.com/',
    // Additional configurations, headers, etc.
});

export default api;


export const BASE_URL = 'https://cp.analytica-edu.basseterp.com';