import { useMutation } from '@tanstack/react-query';
import { installments } from './installments-api';
// import { toast } from 'sonner';

/**
 * Custom Hook: useCalculateInstallments
 *
 * React Query mutation hook for calculating installments.
 * Manages installments calculation API call and provides success/error handling.
 *
 * Features:
 * - Makes installments calculation API request
 * - Supports optional success callback
 * - Handles errors appropriately
 *
 * @param {Function} onSuccessCallBack - Optional callback function executed on successful calculation
 * @returns {Object} Mutation object from React Query with:
 *   - mutate: Function to trigger installments calculation
 *   - isLoading: Boolean indicating loading state
 *   - isError: Boolean indicating error state
 *   - error: Error object if request failed
 *   - data: Response data on success
 *
 * @example
 * const { mutate: calculateInstallments, isLoading } = useCalculateInstallments((data) => {
 *   console.log('Installments calculation complete:', data);
 * });
 *
 * // Trigger calculation
 * calculateInstallments(installmentsParams);
 */
export const useCalculateInstallments = (onSuccessCallBack) => {
  return useMutation({
    // Mutation function - Installments calculation API call
    mutationFn: installments,

    // Success handler - called when calculation is successful
    onSuccess: (data) => {
      // Log calculation result for debugging
      console.log('Installments Calculation result:', data);

      // Execute optional success callback if provided
      // Useful for navigation or additional logic after successful calculation
      if (onSuccessCallBack) {
        onSuccessCallBack(data);
      }

      // ✅ Optional: Show success toast notification
      // toast.success('Installments calculation completed successfully!');
    },

    // Error handler - called when calculation fails
    onError: (error) => {
      // Log error for debugging
      console.error('Installments Calculation error:', error);

      // ❌ Optional: Show error toast notification
      // toast.error(error.response?.data?.message || 'Installments calculation failed');
    },

    // Disable automatic retries for calculations
    // Failed calculations should not be automatically retried
    retry: false,
  });
};
