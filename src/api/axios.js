import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_API_BASE_URL || 'http://localhost:8000/api',
  withCredentials: true, // useful later for cookies/auth
});

export default axiosInstance;
