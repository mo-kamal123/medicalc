import axiosInstance from '../../app/api/axiosInstance';

/**
 * Plans API
 *
 * API functions for calculating plans and TOB (Terms of Business).
 *
 * Note: Authentication token is automatically added by axios interceptors,
 * so manual token handling is not required in these functions.
 */

/**
 * Calculate TOB (Terms of Business)
 *
 * Performs calculation for TOB based on provided credentials.
 * The authentication token is automatically included via axios interceptors.
 *
 * @param {Object} credentials - Calculation parameters and data
 * @returns {Promise<Object>} Response data containing calculation results
 *
 * @example
 * const result = await CalculationTob({
 *   planId: 123,
 *   // ... other calculation parameters
 * });
 */
export const CalculationTob = async (credentials) => {
  // Make POST request to calculate TOB endpoint
  // Token is automatically added by axios interceptor from localStorage
  const response = await axiosInstance.post('en/CalculateTob', credentials);
  return response.data;
};
