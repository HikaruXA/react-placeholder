import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/"; // Change this to your API URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (e.g., attach token)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Example: Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (for handling errors globally)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
