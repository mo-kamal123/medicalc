import axiosInstance from '../../app/api/axiosInstance';

/**
 * Installments API
 *
 * API functions for calculating installments.
 *
 * Note: Authentication token is automatically added by axios interceptors,
 * so manual token handling is not required in these functions.
 */

/**
 * Calculate Installments
 *
 * Performs calculation for installments based on provided credentials.
 * The authentication token is automatically included via axios interceptors.
 *
 * @param {Object} credentials - Calculation parameters and data
 * @returns {Promise<Object>} Response data containing installments calculation results
 *
 * @example
 * const result = await installments({
 *   planId: 123,
 *   // ... other calculation parameters
 * });
 */
export const installments = async (credentials) => {
  // Make POST request to calculate installments endpoint
  // Token is automatically added by axios interceptor from localStorage
  const response = await axiosInstance.post(
    'en/CalculateTob/calculateInstallments',
    credentials
  );
  return response.data;
};
