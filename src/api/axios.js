import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_API_BASE_URL || 'http://localhost:8000/api',
  // Removed withCredentials: true since we’re not using cookies for now
});

export default axiosInstance;
