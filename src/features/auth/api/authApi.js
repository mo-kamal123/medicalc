import axiosInstance from '../../../app/api/axiosInstance';

/**
 * Authentication API
 *
 * API functions for user authentication.
 *
 * Note: The login endpoint doesn't require a token initially,
 * but subsequent authenticated requests will automatically include
 * the token via axios interceptors after login.
 */

/**
 * Login API Call
 *
 * Authenticates a user with their mobile number and password.
 * Returns authentication token and user information on success.
 *
 * @param {Object} credentials - Login credentials
 * @param {string} credentials.mobile - User's mobile number
 * @param {string} credentials.password - User's password
 * @returns {Promise<Object>} Axios response containing token and user data
 *
 * @example
 * const response = await login({
 *   mobile: '01234567890',
 *   password: 'password123'
 * });
 * const token = response.data.token;
 */
export const login = (credentials) => {
  // Make POST request to login endpoint
  // Note: Login doesn't require token - it's the authentication endpoint
  return axiosInstance.post('Auth/login', credentials);
};
