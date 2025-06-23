// src/api/AxiosClient.js
import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Create an Axios instance
const AxiosClient = axios.create({
  baseURL: 'https://localhost:7059/api', // replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
AxiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// Response interceptor to handle 401
AxiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 error and not retrying already
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Call refresh token API
        const refreshToken = localStorage.getItem('refreshToken');
        const res = await axios.post('https://localhost:7059/api/refresh-token', {
          refreshToken,
        });

        const newAccessToken = res.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        // Update the Authorization header and retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return AxiosClient(originalRequest);
      } catch (refreshError) {
        // Token refresh failed, navigate to login
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        history.push('/login');
        window.location.reload(); // to trigger navigation
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default AxiosClient