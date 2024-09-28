import axios from 'axios';

// This is a simple axios instance that is configured to work with the backend API
export const penguinApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});
