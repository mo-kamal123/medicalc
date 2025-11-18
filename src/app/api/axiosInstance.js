import axios from 'axios';
import { getFromLocalStorage } from '../../shared/utils/localStorage-actions';

/**
 * Axios Instance Configuration
 *
 * Centralized axios instance for all API requests in the application.
 * Includes request/response interceptors for:
 * - Automatic token injection from localStorage
 * - Error handling
 * - Request/Response logging (optional)
 *
 * Base URL: https://khusm-api.mediconsulteg.com/api/
 */

/**
 * Create an axios instance with base configuration
 *
 * This instance is used for all API calls throughout the application.
 * The base URL points to the MediConsult API endpoint.
 */
const axiosInstance = axios.create({
  baseURL: 'https://khusm-api.mediconsulteg.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  // Set default timeout for requests (30 seconds)
  timeout: 30000,
});

/**
 * Request Interceptor
 *
 * Automatically adds the authentication token to all requests.
 * The token is retrieved from localStorage if available.
 *
 * This ensures that authenticated requests include the Bearer token
 * without having to manually add it to each request.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Get authentication token from localStorage
    const token = getFromLocalStorage('token');

    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 *
 * Handles responses and errors globally.
 * - Success responses are passed through unchanged
 * - Error responses are logged and can be handled centrally
 *
 * Common error scenarios:
 * - 401 Unauthorized: Token expired or invalid
 * - 403 Forbidden: Insufficient permissions
 * - 404 Not Found: Resource not found
 * - 500 Server Error: Server-side error
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Success response - return data directly
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const message = error.response.data?.message || error.message;

      // Log error for debugging
      console.error(`API Error [${status}]:`, message);

      // Handle specific error cases
      if (status === 401) {
        // Unauthorized - token might be expired
        console.warn('Unauthorized access - token may be expired');
        // Optionally redirect to login or refresh token
      } else if (status === 403) {
        // Forbidden - insufficient permissions
        console.warn('Access forbidden - insufficient permissions');
      } else if (status >= 500) {
        // Server error
        console.error('Server error occurred');
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Error setting up the request
      console.error('Request Setup Error:', error.message);
    }

    // Return rejected promise with error
    return Promise.reject(error);
  }
);

export default axiosInstance;
