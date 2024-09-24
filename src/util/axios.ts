import axios from "axios";

export const penguinApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});
