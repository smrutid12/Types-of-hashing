import axios from 'axios';

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Change this to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for handling request and response (optional)
api.interceptors.request.use(
  (config) => {
    // You can add authorization tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error('API error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

// API Methods for Hashing
export const getMD5Hash = (data) => {
  return api.post('/md5', { data });
};

export const getSHAHash = (data) => {
  return api.post('/sha256_algo', { data });
};

export const getCryptHash = (data) => {
  return api.post('/crypt', { data });
};

export const getBcryptHash = (data) => {
  return api.post('/bcrypt', { data });
};

export default api;