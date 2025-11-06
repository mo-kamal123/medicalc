import axios from 'axios';

// create an axios instance with base URL
const axiosInstance = axios.create({
  baseURL: 'https://khusm-api.mediconsulteg.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
