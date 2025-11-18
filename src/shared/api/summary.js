import axiosInstance from '../../app/api/axiosInstance';

/**
 * summary  API
 *
 * API functions for get final summary
 *
 * Note: Authentication token is automatically added by axios interceptors,
 * so manual token handling is not required in these functions.
 */

/**
 * Calculate Benefits
 *
 * Performs calculation for benefits based on provided credentials.
 * The authentication token is automatically included via axios interceptors.
 *
 * @param {Object} credentials - Calculation id
 * @returns {Promise<Object>} Response data containing final results
 *
 */
export const fetchSummary = async (id) => {
  // Make POST request to get summary endpoint
  // Token is automatically added by axios interceptor from localStorage
  const response = await axiosInstance.post(
    `en/CalculateTob/generateFinalResult/${id}`
  );
  return response.data;
};
