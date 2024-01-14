import axios from 'axios';

const api = axios.create({
    baseURL: 'cp.analytica-edu.basseterp.com/',
    // Additional configurations, headers, etc.
});

export default api;


export const BASE_URL = 'cp.analytica-edu.basseterp.com';