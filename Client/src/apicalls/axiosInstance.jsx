import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000"
});

// Add an interceptor to update headers before each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
 */